import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';

// Cria e monta a aplicação Vue incluindo o suporte ao Vue Router
createApp(App)
  .use(router)
  .mount('#app');
