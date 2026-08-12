import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification, // 👈 1. Importe a função
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

// 👈 2. Função para disparar o e-mail de confirmação
export const sendVerificationEmail = async () => {
  if (auth.currentUser) {
    return await sendEmailVerification(auth.currentUser);
  }
};

export const registerWithEmail = async (email, password) => {
  // Cria o usuário no Firebase
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  // Envia o e-mail de verificação logo em seguida
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