import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
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
 * Autentica o usuário no Firebase Auth utilizando o Custom Token emitido pelo backend
 */
export const loginWithCustomToken = async (customToken) => {
  if (!customToken) {
    throw new Error('Token customizado inválido.');
  }

  // Tratamento para dev mode fallback
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

export const sendVerificationEmail = async () => {
  if (auth.currentUser) {
    return await sendEmailVerification(auth.currentUser);
  }
};

export const registerWithEmail = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(userCredential.user);
  return userCredential;
};

export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export const logout = () => signOut(auth);
export const logoutUser = () => signOut(auth);
export const onAuthUpdate = (callback) => onAuthStateChanged(auth, callback);