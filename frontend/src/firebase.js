import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  onAuthStateChanged 
} from "firebase/auth";

// Sua configuração do Firebase obtida no console
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

// 2. Inicializa e exporta o módulo de Autenticação
export const auth = getAuth(app);

// 3. Funções Utilitárias Prontas para Uso no Seu Frontend

/**
 * Realiza o login com e-mail e senha
 */
export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/**
 * Cria um novo usuário com e-mail e senha
 */
export const registerWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Faz o logout do usuário atual
 */
export const logoutUser = () => {
  return signOut(auth);
};

/**
 * Observador de estado (detecta se o usuário está logado ou não em tempo real)
 */
export const onAuthUpdate = (callback) => {
  return onAuthStateChanged(auth, callback);
};