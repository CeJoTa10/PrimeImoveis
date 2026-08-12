<script setup>
import { ref, reactive, watch } from 'vue';
import { useAuth } from '../store/auth.js';
import { Mail, Lock, User, X, Loader2, AlertCircle } from 'lucide-vue-next';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);
const { login, register, loginWithGoogle, error } = useAuth();

// Abas: 'login' ou 'register'
const activeTab = ref('login');
const isSubmitting = ref(false);

const formData = reactive({
  name: '',
  email: '',
  password: ''
});

// Limpa o formulário quando o modal abre ou fecha
watch(() => props.isOpen, (newVal) => {
  if (!newVal) {
    formData.name = '';
    formData.email = '';
    formData.password = '';
    activeTab.value = 'login';
  }
});

const handleAuth = async () => {
  isSubmitting.value = true;
  try {
    if (activeTab.value === 'login') {
      await login(formData.email, formData.password);
    } else {
      await register(formData.email, formData.password, formData.name);
    }
    emit('close'); // Fecha o modal após sucesso
  } catch (err) {
    console.error('Erro de autenticação:', err);
  } finally {
    isSubmitting.value = false;
  }
};

const handleGoogleLogin = async () => {
  isSubmitting.value = true;
  try {
    await loginWithGoogle();
    emit('close');
  } catch (err) {
    console.error('Erro de login Google:', err);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div 
    v-if="isOpen" 
    class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4"
  >
    <!-- Backdrop com desfoque -->
    <div 
      @click="emit('close')"
      class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
    ></div>

    <!-- Modal Box -->
    <div class="relative bg-white w-full max-w-md rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 z-10 transition-all transform scale-100">
      
      <!-- Botão Fechar -->
      <button 
        @click="emit('close')"
        class="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-50 transition"
      >
        <X class="w-5 h-5" />
      </button>

      <!-- Alternador de Abas -->
      <div class="flex border-b border-slate-100 mb-6">
        <button 
          @click="activeTab = 'login'"
          class="flex-1 pb-3 text-sm font-bold border-b-2 transition"
          :class="activeTab === 'login' ? 'border-brand-600 text-brand-600' : 'border-transparent text-slate-400 hover:text-slate-600'"
        >
          Entrar
        </button>
        <button 
          @click="activeTab = 'register'"
          class="flex-1 pb-3 text-sm font-bold border-b-2 transition"
          :class="activeTab === 'register' ? 'border-brand-600 text-brand-600' : 'border-transparent text-slate-400 hover:text-slate-600'"
        >
          Criar Conta
        </button>
      </div>

      <!-- Erros de autenticação -->
      <div 
        v-if="error" 
        class="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold flex items-center gap-2"
      >
        <AlertCircle class="w-4 h-4 text-red-500 shrink-0" />
        <span>{{ error }}</span>
      </div>

      <form @submit.prevent="handleAuth" class="space-y-4">
        
        <!-- Campo Nome (Cadastro Apenas) -->
        <div v-if="activeTab === 'register'" class="relative">
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Nome Completo</label>
          <div class="relative">
            <User class="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <input 
              v-model="formData.name"
              type="text" 
              required
              placeholder="Como prefere ser chamado?"
              class="w-full pl-9 pr-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
            />
          </div>
        </div>

        <!-- Campo E-mail -->
        <div class="relative">
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Endereço de E-mail</label>
          <div class="relative">
            <Mail class="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <input 
              v-model="formData.email"
              type="email" 
              required
              placeholder="exemplo@dominio.com"
              class="w-full pl-9 pr-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
            />
          </div>
        </div>

        <!-- Campo Senha -->
        <div class="relative">
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Senha de Acesso</label>
          <div class="relative">
            <Lock class="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <input 
              v-model="formData.password"
              type="password" 
              required
              placeholder="No mínimo 6 dígitos"
              class="w-full pl-9 pr-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
            />
          </div>
        </div>

        <!-- Botão Entrar / Registrar -->
        <button 
          type="submit" 
          :disabled="isSubmitting"
          class="w-full bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-150 shadow-md shadow-brand-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Loader2 v-if="isSubmitting" class="w-4 h-4 animate-spin" />
          <span>{{ activeTab === 'login' ? 'Entrar na Conta' : 'Finalizar Cadastro' }}</span>
        </button>
      </form>

      <!-- Divisor -->
      <div class="my-6 flex items-center justify-center gap-3">
        <span class="h-px bg-slate-100 flex-1"></span>
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Ou continue com</span>
        <span class="h-px bg-slate-100 flex-1"></span>
      </div>

      <!-- Login Social Google -->
      <button 
        type="button"
        @click="handleGoogleLogin"
        :disabled="isSubmitting"
        class="w-full border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition active:scale-[0.98] disabled:opacity-50"
      >
        <svg class="w-4 h-4" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
        </svg>
        <span>Acessar com o Google</span>
      </button>
    </div>
  </div>
</template>
