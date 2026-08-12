import { reactive } from 'vue';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const authState = reactive({
  user: null,
  loading: true
});

// Listener em tempo real do estado de login
onAuthStateChanged(auth, (currentUser) => {
  authState.user = currentUser;
  authState.loading = false;
});

// Adicione esta função customizada para compatibilidade com a Navbar
export const useAuth = () => {
  return {
    authState,
    user: authState.user
  };
};