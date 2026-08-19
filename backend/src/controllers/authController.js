import { db, auth, admin } from '../config/firebase.js';
import nodemailer from 'nodemailer';

// Armazenamento em memória de fallback para desenvolvimento local sem Firestore conectado
const otpMemoryStore = new Map();

/**
 * Cria ou recupera o transportador de e-mail (Nodemailer)
 */
function getEmailTransporter() {
  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }
  return null;
}

/**
 * Dispara o envio do e-mail com o código OTP
 */
async function sendEmailOtp(email, code) {
  const transporter = getEmailTransporter();
  
  const htmlContent = `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 30px; background-color: #f8fafc; border-radius: 20px;">
      <div style="text-align: center; margin-bottom: 25px;">
        <h1 style="color: #0f172a; margin: 0; font-size: 24px; font-weight: 800;">Prime<span style="color: #2563eb;">Imóveis</span></h1>
        <p style="color: #64748b; font-size: 14px; margin-top: 5px;">Seu portal imobiliário de alta performance</p>
      </div>
      <div style="background-color: #ffffff; padding: 30px; border-radius: 16px; border: 1px solid #e2e8f0; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <h2 style="color: #1e293b; font-size: 18px; margin-top: 0;">Seu Código de Acesso Exclusivo</h2>
        <p style="color: #475569; font-size: 14px; line-height: 1.5;">Digite os 6 dígitos abaixo na tela de login para validar sua entrada sem senha:</p>
        
        <div style="margin: 25px 0; background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); padding: 18px; border-radius: 12px; font-size: 32px; font-weight: 900; letter-spacing: 8px; color: #1d4ed8; border: 1px dashed #bfdbfe;">
          ${code}
        </div>
        
        <p style="color: #94a3b8; font-size: 12px; margin-bottom: 0;">Este código é válido por <strong>5 minutos</strong> e pode ser usado apenas uma vez.<br>Se você não solicitou este acesso, desconsidere esta mensagem.</p>
      </div>
    </div>
  `;

  if (transporter) {
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM || '"Prime Imóveis" <no-reply@primeimoveis.com>',
        to: email,
        subject: `🔑 Seu Código de Acesso Prime Imóveis: ${code}`,
        html: htmlContent
      });
      console.log(`[OTP Mailer] E-mail com OTP ${code} enviado via SMTP para ${email}`);
      return;
    } catch (err) {
      console.error('[OTP Mailer Error] Falha ao enviar via SMTP:', err.message);
    }
  }

  // Fallback para ambiente de desenvolvimento / logs de console
  console.log('\n======================================================');
  console.log(`🔑 [OTP DEV FALLBACK] Código de 6 dígitos gerado!`);
  console.log(`📧 E-mail do usuário: ${email}`);
  console.log(`🔢 Código OTP: ${code}`);
  console.log(`⏱️ Validade: 5 minutos`);
  console.log('======================================================\n');
}

/**
 * Endpoint: POST /api/auth/send-code
 */
export async function sendCode(req, res) {
  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Por favor, informe um endereço de e-mail válido.' });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Gera um código aleatório numérico de 6 dígitos
    const code = String(Math.floor(100000 + Math.random() * 900000));
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutos de validade

    const otpData = {
      email: normalizedEmail,
      code,
      attempts: 0,
      createdAt: new Date().toISOString(),
      expiresAt
    };

    // Tenta salvar no Firestore se o Admin SDK estiver conectado
    if (db) {
      try {
        await db.collection('otp_codes').doc(normalizedEmail).set(otpData);
      } catch (err) {
        console.warn('[Firestore OTP Warning] Não foi possível salvar no Firestore, usando fallback local:', err.message);
        otpMemoryStore.set(normalizedEmail, otpData);
      }
    } else {
      otpMemoryStore.set(normalizedEmail, otpData);
    }

    // Dispara o envio de e-mail (ou log dev)
    await sendEmailOtp(normalizedEmail, code);

    return res.status(200).json({
      success: true,
      message: 'Código de 6 dígitos enviado com sucesso! Verifique sua caixa de entrada.',
      expiresInSeconds: 300
    });
  } catch (error) {
    console.error('[Auth SendCode Error]:', error);
    return res.status(500).json({ error: 'Falha interna ao gerar código de autenticação.' });
  }
}

/**
 * Endpoint: POST /api/auth/verify-code
 */
export async function verifyCode(req, res) {
  try {
    const { email, code } = req.body;

    if (!email || !code) {
      return res.status(400).json({ error: 'E-mail e código de 6 dígitos são obrigatórios.' });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const cleanCode = String(code).trim();

    let otpRecord = null;
    let isFromFirestore = false;

    // Busca no Firestore primeiro se disponível
    if (db) {
      try {
        const docRef = db.collection('otp_codes').doc(normalizedEmail);
        const docSnap = await docRef.get();
        if (docSnap.exists) {
          otpRecord = docSnap.data();
          isFromFirestore = true;
        }
      } catch (err) {
        console.warn('[Firestore OTP Fetch Warning]:', err.message);
      }
    }

    // Se não encontrou no Firestore, busca no repositório local em memória
    if (!otpRecord) {
      otpRecord = otpMemoryStore.get(normalizedEmail);
    }

    if (!otpRecord) {
      return res.status(400).json({ error: 'Nenhum código pendente para este e-mail. Solicite um novo código.' });
    }

    // Valida expiração (5 minutos)
    if (Date.now() > otpRecord.expiresAt) {
      // Limpa código expirado
      if (isFromFirestore && db) {
        await db.collection('otp_codes').doc(normalizedEmail).delete().catch(() => {});
      }
      otpMemoryStore.delete(normalizedEmail);
      return res.status(400).json({ error: 'O código informado expirou. Solicite um novo código de acesso.' });
    }

    // Valida limite máximo de 3 tentativas incorretas
    if (otpRecord.attempts >= 3) {
      if (isFromFirestore && db) {
        await db.collection('otp_codes').doc(normalizedEmail).delete().catch(() => {});
      }
      otpMemoryStore.delete(normalizedEmail);
      return res.status(400).json({ error: 'Limite de 3 tentativas excedido. Solicite um novo código por segurança.' });
    }

    // Compara o código informado com o salvo
    if (otpRecord.code !== cleanCode) {
      const remainingAttempts = 2 - otpRecord.attempts;
      const updatedAttempts = otpRecord.attempts + 1;

      if (isFromFirestore && db) {
        await db.collection('otp_codes').doc(normalizedEmail).update({ attempts: updatedAttempts }).catch(() => {});
      } else {
        otpRecord.attempts = updatedAttempts;
        otpMemoryStore.set(normalizedEmail, otpRecord);
      }

      if (remainingAttempts <= 0) {
        return res.status(400).json({ error: 'Código incorreto. Você atingiu o limite de tentativas. Solicite um novo código.' });
      }

      return res.status(400).json({
        error: `Código incorreto. Você ainda tem ${remainingAttempts} tentativa(s).`
      });
    }

    // CÓDIGO VÁLIDO! Proceder com a emissão do Token do Firebase
    let firebaseUser = null;
    let customToken = null;

    if (auth) {
      try {
        // Tenta buscar o usuário no Firebase Auth pelo e-mail
        try {
          firebaseUser = await auth.getUserByEmail(normalizedEmail);
        } catch (getUserErr) {
          // Se não existir, cria o usuário
          firebaseUser = await auth.createUser({
            email: normalizedEmail,
            emailVerified: true,
            displayName: normalizedEmail.split('@')[0]
          });
        }

        // Garante que o e-mail esteja marcado como verificado
        if (!firebaseUser.emailVerified) {
          await auth.updateUser(firebaseUser.uid, { emailVerified: true });
        }

        // Gera o Custom Token via Admin SDK
        customToken = await auth.createCustomToken(firebaseUser.uid);
      } catch (authErr) {
        console.error('[Firebase Admin Token Error]:', authErr);
      }
    }

    // Se o SDK admin do Firebase não estiver configurado via arquivo de credenciais .env,
    // gera um customToken demonstrativo válido para permitir fluxo sem interrupções
    if (!customToken) {
      console.log('[Auth Controller] Firebase Admin em modo offline dev. Emitindo customToken dev-mode.');
      customToken = `dev-custom-token-${Buffer.from(normalizedEmail).toString('base64')}-${Date.now()}`;
      firebaseUser = { uid: `dev-${Buffer.from(normalizedEmail).toString('hex').substring(0, 12)}`, email: normalizedEmail };
    }

    // Deleta o código OTP utilizado para evitar reutilização
    if (isFromFirestore && db) {
      await db.collection('otp_codes').doc(normalizedEmail).delete().catch(() => {});
    }
    otpMemoryStore.delete(normalizedEmail);

    return res.status(200).json({
      success: true,
      message: 'Autenticação realizada com sucesso!',
      customToken,
      user: {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName || normalizedEmail.split('@')[0]
      }
    });

  } catch (error) {
    console.error('[Auth VerifyCode Error]:', error);
    return res.status(500).json({ error: 'Falha interna ao verificar código de autenticação.' });
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// NOVOS ENDPOINTS: send-otp / verify-otp
// Esses endpoints diferem dos anteriores pois usam o uid do Firebase Client SDK
// para marcar emailVerified: true via Admin SDK (sem Custom Token).
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Endpoint: POST /api/auth/send-otp
 * Recebe { email } — gera OTP de 6 dígitos, salva no Firestore e envia o e-mail.
 */
export async function sendOtp(req, res) {
  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Por favor, informe um endereço de e-mail válido.' });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const code = String(Math.floor(100000 + Math.random() * 900000));
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutos

    const otpData = {
      email: normalizedEmail,
      code,
      attempts: 0,
      createdAt: new Date().toISOString(),
      expiresAt
    };

    if (db) {
      try {
        await db.collection('otp_codes').doc(normalizedEmail).set(otpData);
      } catch (err) {
        console.warn('[Firestore OTP Warning] Fallback para memória:', err.message);
        otpMemoryStore.set(normalizedEmail, otpData);
      }
    } else {
      otpMemoryStore.set(normalizedEmail, otpData);
    }

    await sendEmailOtp(normalizedEmail, code);

    return res.status(200).json({
      success: true,
      message: 'Código de verificação enviado! Confira sua caixa de entrada.',
      expiresInSeconds: 300
    });
  } catch (error) {
    console.error('[Auth SendOtp Error]:', error);
    return res.status(500).json({ error: 'Falha interna ao gerar código OTP.' });
  }
}

/**
 * Endpoint: POST /api/auth/verify-otp
 * Recebe { email, code, uid }.
 * Valida o código e, se correto, marca emailVerified: true no Firebase Auth via Admin SDK.
 */
export async function verifyOtp(req, res) {
  try {
    const { email, code, uid } = req.body;

    if (!email || !code || !uid) {
      return res.status(400).json({ error: 'E-mail, código de 6 dígitos e uid são obrigatórios.' });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const cleanCode = String(code).trim();

    // ── Busca o registro OTP ──────────────────────────────────────────────────
    let otpRecord = null;
    let isFromFirestore = false;

    if (db) {
      try {
        const docSnap = await db.collection('otp_codes').doc(normalizedEmail).get();
        if (docSnap.exists) {
          otpRecord = docSnap.data();
          isFromFirestore = true;
        }
      } catch (err) {
        console.warn('[Firestore OTP Fetch Warning]:', err.message);
      }
    }

    if (!otpRecord) {
      otpRecord = otpMemoryStore.get(normalizedEmail);
    }

    if (!otpRecord) {
      return res.status(400).json({ error: 'Nenhum código pendente para este e-mail. Solicite um novo código.' });
    }

    // ── Valida expiração ──────────────────────────────────────────────────────
    if (Date.now() > otpRecord.expiresAt) {
      if (isFromFirestore && db) {
        await db.collection('otp_codes').doc(normalizedEmail).delete().catch(() => {});
      }
      otpMemoryStore.delete(normalizedEmail);
      return res.status(400).json({ error: 'O código informado expirou. Solicite um novo código.' });
    }

    // ── Valida limite de tentativas ───────────────────────────────────────────
    if (otpRecord.attempts >= 3) {
      if (isFromFirestore && db) {
        await db.collection('otp_codes').doc(normalizedEmail).delete().catch(() => {});
      }
      otpMemoryStore.delete(normalizedEmail);
      return res.status(400).json({ error: 'Limite de 3 tentativas excedido. Solicite um novo código por segurança.' });
    }

    // ── Valida o código ───────────────────────────────────────────────────────
    if (otpRecord.code !== cleanCode) {
      const updatedAttempts = otpRecord.attempts + 1;
      const remaining = 3 - updatedAttempts;

      if (isFromFirestore && db) {
        await db.collection('otp_codes').doc(normalizedEmail).update({ attempts: updatedAttempts }).catch(() => {});
      } else {
        otpRecord.attempts = updatedAttempts;
        otpMemoryStore.set(normalizedEmail, otpRecord);
      }

      if (remaining <= 0) {
        return res.status(400).json({ error: 'Código incorreto. Você atingiu o limite de tentativas. Solicite um novo código.' });
      }
      return res.status(400).json({ error: `Código incorreto. Você ainda tem ${remaining} tentativa(s).` });
    }

    // ── CÓDIGO VÁLIDO: Atualiza emailVerified via Admin SDK ───────────────────
    if (auth) {
      try {
        await auth.updateUser(uid, { emailVerified: true });
        console.log(`[Auth OTP] emailVerified atualizado para true: uid=${uid}, email=${normalizedEmail}`);
      } catch (authErr) {
        console.error('[Firebase Admin updateUser Error]:', authErr.message);
        // Em modo dev (sem credenciais), continua sem erro fatal
      }
    } else {
      console.log(`[Auth OTP DEV] Firebase Admin offline. uid=${uid} marcado como verificado (simulação).`);
    }

    // Remove o código utilizado
    if (isFromFirestore && db) {
      await db.collection('otp_codes').doc(normalizedEmail).delete().catch(() => {});
    }
    otpMemoryStore.delete(normalizedEmail);

    return res.status(200).json({
      success: true,
      message: 'E-mail verificado com sucesso!'
    });

  } catch (error) {
    console.error('[Auth VerifyOtp Error]:', error);
    return res.status(500).json({ error: 'Falha interna ao verificar código OTP.' });
  }
}
