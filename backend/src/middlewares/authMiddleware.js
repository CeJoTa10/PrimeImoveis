import { auth } from '../config/firebase.js';

/**
 * Middleware para validar o token JWT do Firebase Auth
 */
export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ 
      error: 'Acesso negado. Cabeçalho de autorização inválido ou ausente.' 
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    if (!auth) {
      console.warn('[Auth Middleware] Tentativa de validação de token, mas o SDK do Firebase Admin não está configurado.');
      return res.status(503).json({ 
        error: 'Serviço de autenticação temporariamente indisponível. Firebase Admin SDK não configurado.' 
      });
    }

    // Valida o ID Token do Firebase
    const decodedToken = await auth.verifyIdToken(token);
    
    // Anexa as informações do usuário decodificadas à requisição
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('[Auth Middleware] Erro na validação do token JWT:', error.message);
    return res.status(401).json({ 
      error: 'Token de autenticação inválido ou expirado.' 
    });
  }
};
