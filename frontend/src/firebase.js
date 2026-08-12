import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
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

// Inicializa o Firebase e a Autenticação
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Provedor do Google
const googleProvider = new GoogleAuthProvider();

// Exportação das Funções
export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export const logoutUser = () => {
  return signOut(auth);
};

export const onAuthUpdate = (callback) => {
  return onAuthStateChanged(auth, callback);
};