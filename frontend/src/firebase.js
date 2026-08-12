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

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCbL_3nj_CyexuqoDZM-9q4H3ZwP-yiIAs",
  authDomain: "prime-imoveis-98b9a.firebaseapp.com",
  projectId: "prime-imoveis-98b9a",
  storageBucket: "prime-imoveis-98b9a.firebasestorage.app",
  messagingSenderId: "476715353928",
  appId: "1:476715353928:web:de685deebb33a5f665157d",
  measurementId: "G-46YLRRCG13"
};

// 1. Inicializa o Firebase App
const app = initializeApp(firebaseConfig);

// 2. Exporta o módulo de Autenticação
export const auth = getAuth(app);

// 3. Provedor de Login do Google
export const googleProvider = new GoogleAuthProvider();

// 4. Funções de Login / Cadastro
export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

// 5. Funções de Logout (Exportadas nos dois formatos para evitar erro de build)
export const logoutUser = () => {
  return signOut(auth);
};

export const logout = () => {
  return signOut(auth);
};

// 6. Observador de Estado da Sessão
export const onAuthUpdate = (callback) => {
  return onAuthStateChanged(auth, callback);
};