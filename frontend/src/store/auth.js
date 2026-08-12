import { ref } from 'vue';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  updateProfile,
  onAuthStateChanged
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase.js';

// Estado global reativo
const user = ref(null);
const token = ref(null);
const loading = ref(true);
const error = ref(null);

// Listener do Firebase para manter o estado sincronizado
onAuthStateChanged(auth, async (firebaseUser) => {
  loading.value = true;
  if (firebaseUser) {
    user.value = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: firebaseUser.displayName || 'Usuário',
      photoURL: firebaseUser.photoURL
    };
    try {
      token.value = await firebaseUser.getIdToken();
    } catch (err) {
      console.error('[Auth Store] Falha ao capturar JWT token:', err.message);
      token.value = null;
    }
  } else {
    user.value = null;
    token.value = null;
  }
  loading.value = false;
});

// Tradução amigável de erros do Firebase Auth
const getErrorMessage = (code) => {
  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'E-mail ou senha incorretos.';
    case 'auth/email-already-in-use':
      return 'Este e-mail já está em uso por outra conta.';
    case 'auth/weak-password':
      return 'A senha deve conter no mínimo 6 caracteres.';
    case 'auth/invalid-email':
      return 'Formato de e-mail inválido.';
    case 'auth/popup-closed-by-user':
      return 'O login do Google foi fechado antes de completar.';
    default:
      return 'Ocorreu um erro no processo de autenticação.';
  }
};

/**
 * Hook reutilizável da store de autenticação
 */
export function useAuth() {
  const login = async (email, password) => {
    error.value = null;
    loading.value = true;
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      token.value = await res.user.getIdToken();
      return res.user;
    } catch (err) {
      error.value = getErrorMessage(err.code);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const register = async (email, password, name) => {
    error.value = null;
    loading.value = true;
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, { displayName: name });
      
      // Atualiza o estado local explicitamente
      user.value = {
        uid: res.user.uid,
        email: res.user.email,
        displayName: name,
        photoURL: null
      };
      token.value = await res.user.getIdToken();
      return res.user;
    } catch (err) {
      error.value = getErrorMessage(err.code);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const loginWithGoogle = async () => {
    error.value = null;
    loading.value = true;
    try {
      const res = await signInWithPopup(auth, googleProvider);
      token.value = await res.user.getIdToken();
      return res.user;
    } catch (err) {
      error.value = getErrorMessage(err.code);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    error.value = null;
    loading.value = true;
    try {
      await signOut(auth);
      user.value = null;
      token.value = null;
    } catch (err) {
      error.value = 'Erro ao sair da conta.';
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return {
    user,
    token,
    loading,
    error,
    login,
    register,
    loginWithGoogle,
    logout
  };
}
