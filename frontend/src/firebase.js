import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
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
 * 1️⃣ CRIAR CONTA (CADASTRO)
 * Cria o usuário e atualiza o perfil com o nome.
 * NÃO desloga imediatamente — o fluxo OTP assume a verificação.
 * Retorna { user } com uid para envio ao backend.
 */
export const registerWithEmail = async (email, password, displayName = '') => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  if (displayName && userCredential.user) {
    await updateProfile(userCredential.user, { displayName });
  }

  return userCredential;
};

/**
 * 2️⃣ ENTRAR (LOGIN)
 * Autentica o usuário com e-mail e senha.
 * A checagem de user.emailVerified é realizada no AuthModal.vue.
 */
export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/**
 * Força a recarga do token do usuário atual para refletir
 * mudanças no emailVerified feitas pelo Admin SDK no backend.
 */
export const reloadCurrentUser = async () => {
  if (auth.currentUser) {
    await reload(auth.currentUser);
    return auth.currentUser;
  }
  return null;
};

/**
 * Autenticação via Token Customizado (fluxo OTP legado)
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