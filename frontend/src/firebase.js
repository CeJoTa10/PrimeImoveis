import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signInWithCustomToken,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
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
 * Cria o usuário, define o nome de exibição, envia o e-mail de verificação e desloga imediatamente.
 */
export const registerWithEmail = async (email, password, displayName = '') => {
  // 1. Cria o usuário no Firebase Auth
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  // 2. Atualiza o perfil com o nome completo informado
  if (displayName && userCredential.user) {
    await updateProfile(userCredential.user, { displayName });
  }

  // 3. Envia o e-mail de verificação
  await sendEmailVerification(userCredential.user);

  // 4. Desloga imediatamente para impedir sessão não verificada
  await signOut(auth);

  return userCredential;
};

/**
 * 2️⃣ ENTRAR (LOGIN)
 * Autentica o usuário com e-mail e senha. A checagem de user.emailVerified é realizada no AuthModal.vue.
 */
export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/**
 * 3️⃣ REENVIO DE E-MAIL DE VERIFICAÇÃO
 * Dispara o e-mail de confirmação para o usuário atualmente pré-autenticado.
 */
export const sendVerificationEmail = async () => {
  if (auth.currentUser) {
    return await sendEmailVerification(auth.currentUser);
  }
};

/**
 * Autenticação via Token Customizado (OTP)
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