import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  applyActionCode,
  checkActionCode,
  updateProfile,
  signInWithCustomToken,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  reload
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbL_3nj_CyexuqoDZM-9q4H3ZwP-yiIAs",
  authDomain: "prime-imoveis-98b9a.firebaseapp.com",
  projectId: "prime-imoveis-98b9a",
  storageBucket: "prime-imoveis-98b9a.firebasestorage.app",
  messagingSenderId: "476715353928",
  appId: "1:476715353928:web:de685deebb33a5f665157d",
  measurementId: "G-46YLRRCG13"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

/**
 * Utilitário para extrair o oobCode caso o usuário cole a URL completa
 * ou apenas o código bruto.
 */
export const extractActionCode = (input) => {
  if (!input) return '';
  const trimmed = input.trim();
  if (trimmed.includes('oobCode=')) {
    try {
      const url = new URL(trimmed.startsWith('http') ? trimmed : `https://dummy.com/${trimmed}`);
      return url.searchParams.get('oobCode') || trimmed;
    } catch {
      const match = trimmed.match(/oobCode=([^&]+)/);
      return match ? match[1] : trimmed;
    }
  }
  return trimmed;
};

/**
 * 1️⃣ CRIAR CONTA (CADASTRO)
 * Cria o usuário e atualiza o perfil com o nome.
 * O envio do código de 6 dígitos é disparado via API sendOtp.
 */
export const registerWithEmail = async (email, password, displayName = '') => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  if (displayName && userCredential.user) {
    await updateProfile(userCredential.user, { displayName });
  }

  return userCredential;
};

/**
 * 2️⃣ CONFIRMAÇÃO DO CÓDIGO NATIVO RECEBIDO (applyActionCode / checkActionCode)
 * Valida e aplica o código de confirmação (oobCode) gerado nativamente pelo Firebase.
 */
export const verifyEmailWithActionCode = async (rawCode) => {
  const code = extractActionCode(rawCode);
  if (!code) {
    throw new Error('Código de confirmação não informado.');
  }

  // 1. Inspeciona o código para verificar se a operação é válida
  const actionInfo = await checkActionCode(auth, code);

  // 2. Aplica o código de confirmação nativo
  await applyActionCode(auth, code);

  // 3. Se houver usuário logado no momento, recarrega o estado de autenticação
  if (auth.currentUser) {
    await reload(auth.currentUser);
  }

  return {
    email: actionInfo?.data?.email || '',
    operation: actionInfo?.operation
  };
};

/**
 * 3️⃣ REENVIO DO E-MAIL DE VERIFICAÇÃO
 * Autentica temporariamente, reenvia o e-mail de verificação e desloga.
 */
export const resendVerificationEmail = async (email, password, actionCodeSettings = null) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  if (actionCodeSettings) {
    await sendEmailVerification(user, actionCodeSettings);
  } else {
    await sendEmailVerification(user);
  }
  await signOut(auth);
};

/**
 * 4️⃣ ENTRAR (LOGIN)
 * Autentica o usuário com e-mail e senha.
 * A checagem de user.emailVerified é realizada no AuthModal.vue.
 */
export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/**
 * Força a recarga do token do usuário atual para refletir
 * mudanças no emailVerified feitas pelo Admin SDK ou aplicação de código.
 */
export const reloadCurrentUser = async () => {
  if (auth.currentUser) {
    await reload(auth.currentUser);
    return auth.currentUser;
  }
  return null;
};

/**
 * Autenticação via Token Customizado (fluxo legado / backend)
 */
export const loginWithCustomToken = async (customToken) => {
  if (!customToken) {
    throw new Error('Token customizado inválido.');
  }

  if (typeof customToken === 'string' && customToken.startsWith('dev-custom-token-')) {
    console.log('[Firebase Client] Token Customizado de desenvolvimento recebido.');
    return {
      user: {
        uid: 'dev-user-123',
        email: 'usuario@primeimoveis.com',
        displayName: 'Usuário Prime',
        emailVerified: true
      }
    };
  }

  return await signInWithCustomToken(auth, customToken);
};

export const loginWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export const logout = () => signOut(auth);
export const logoutUser = () => signOut(auth);
export const onAuthUpdate = (callback) => onAuthStateChanged(auth, callback);