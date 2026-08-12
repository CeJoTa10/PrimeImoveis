import { reactive } from 'vue';
import { auth, logoutUser } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const authState = reactive({
  user: null,
  loading: true
});

onAuthStateChanged(auth, (currentUser) => {
  authState.user = currentUser;
  authState.loading = false;
});

// Hook de auxílio para os componentes
export const useAuth = () => {
  return {
    authState,
    logout: logoutUser
  };
};