<script setup>
import { ref, reactive, watch } from 'vue';
import { registerWithEmail, loginWithEmail, loginWithGoogle, logout, resendVerificationEmail } from '../firebase.js';
import {
  X, User, Mail, Lock, LogIn, UserPlus, Send, RefreshCw,
  CheckCircle2, AlertCircle, Loader2, ShieldCheck
} from 'lucide-vue-next';

// ─────────────────────────────────────────────────────────────────────────────
// Props & Emits
// ─────────────────────────────────────────────────────────────────────────────
const props = defineProps({
  isOpen: { type: Boolean, required: true }
});
const emit = defineEmits(['close']);

// ─────────────────────────────────────────────────────────────────────────────
// Estado do Modal
// mode: 'login' | 'register' | 'verify'
//   verify = tela de aviso pós-cadastro (link de verificação enviado)
// ─────────────────────────────────────────────────────────────────────────────
const mode = ref('login');
const isLoading = ref(false);
const errorMessage = ref('');
const successMessage = ref('');
const resendInProgress = ref(false);

const formData = reactive({ name: '', email: '', password: '' });

// Reset ao fechar
watch(() => props.isOpen, (open) => {
  if (!open) {
    mode.value = 'login';
    isLoading.value = false;
    errorMessage.value = '';
    successMessage.value = '';
    resendInProgress.value = false;
    formData.name = '';
    formData.email = '';
    formData.password = '';
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
const switchMode = (newMode) => {
  mode.value = newMode;
  errorMessage.value = '';
  successMessage.value = '';
};

const getFirebaseError = (error) => {
  switch (error.code) {
    case 'auth/email-already-in-use': return 'Este e-mail já está cadastrado.';
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found': return 'E-mail ou senha incorretos.';
    case 'auth/weak-password': return 'A senha deve conter no mínimo 6 caracteres.';
    case 'auth/too-many-requests': return 'Muitas tentativas. Aguarde um momento e tente novamente.';
    case 'auth/invalid-email': return 'Endereço de e-mail inválido.';
    default: return error.message || 'Ocorreu um erro. Tente novamente.';
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// Lógica de Cadastro
// ─────────────────────────────────────────────────────────────────────────────
const handleRegister = async () => {
  if (!formData.name.trim()) {
    errorMessage.value = 'Por favor, informe seu nome completo.';
    return;
  }
  if (formData.password.length < 6) {
    errorMessage.value = 'A senha deve conter no mínimo 6 caracteres.';
    return;
  }

  isLoading.value = true;
  errorMessage.value = '';

  try {
    // Cria a conta, dispara sendEmailVerification e faz signOut — tudo em firebase.js
    await registerWithEmail(formData.email, formData.password, formData.name);
    // Vai para a tela de aviso de verificação
    mode.value = 'verify';
  } catch (err) {
    console.error('[AuthModal Register]:', err);
    errorMessage.value = getFirebaseError(err);
  } finally {
    isLoading.value = false;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// Lógica de Login
// ─────────────────────────────────────────────────────────────────────────────
const handleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    const { user } = await loginWithEmail(formData.email, formData.password);

    if (user.emailVerified) {
      // ✅ E-mail verificado: acesso liberado
      emit('close');
    } else {
      // 🛑 E-mail não verificado: bloqueia acesso
      await logout();
      errorMessage.value = 'Seu e-mail ainda não foi verificado. Acesse sua caixa de entrada (ou pasta de Spam) para ativar sua conta antes de entrar.';
    }
  } catch (err) {
    console.error('[AuthModal Login]:', err);
    errorMessage.value = getFirebaseError(err);
  } finally {
    isLoading.value = false;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// Reenvio do Link de Verificação
// ─────────────────────────────────────────────────────────────────────────────
const handleResendVerification = async () => {
  if (!formData.email || !formData.password) {
    errorMessage.value = 'Para reenviar o link, confirme seu e-mail e senha no formulário.';
    return;
  }

  resendInProgress.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    await resendVerificationEmail(formData.email, formData.password);
    successMessage.value = 'Novo link de verificação enviado! Confira sua caixa de entrada e pasta de Spam.';
  } catch (err) {
    console.error('[AuthModal Resend]:', err);
    if (err.code === 'auth/too-many-requests') {
      errorMessage.value = 'Aguarde alguns minutos antes de solicitar um novo e-mail de verificação.';
    } else {
      errorMessage.value = 'Não foi possível reenviar. Verifique suas credenciais e tente novamente.';
    }
  } finally {
    resendInProgress.value = false;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// Login com Google
// ─────────────────────────────────────────────────────────────────────────────
const handleGoogleAuth = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  try {
    await loginWithGoogle();
    emit('close');
  } catch (err) {
    console.error('Erro Google Login:', err);
    errorMessage.value = 'Falha ao autenticar com o Google.';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
    
    <!-- Backdrop Liquid Glass -->
    <div @click="emit('close')" class="fixed inset-0 bg-slate-950/60 backdrop-blur-md"></div>

    <!-- Card do Modal -->
    <div class="relative liquid-glass w-full max-w-md rounded-3xl p-6 sm:p-8 z-10 shadow-2xl overflow-hidden border border-white/60">
      
      <!-- Orbe de Iluminação Ambiente -->
      <div class="absolute -top-20 -right-20 w-56 h-56 bg-brand-500/20 rounded-full blur-3xl pointer-events-none animate-float-orb"></div>
      <div class="absolute -bottom-20 -left-20 w-56 h-56 bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-float-orb-reverse"></div>

      <!-- Botão Fechar -->
      <button 
        @click="emit('close')" 
        class="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-white/60 transition"
      >
        <X class="w-5 h-5" />
      </button>

      <!-- ══════════════════════════════════════════════════════════════════ -->
      <!-- MODO: VERIFY — Aviso de confirmação de e-mail                     -->
      <!-- ══════════════════════════════════════════════════════════════════ -->
      <div v-if="mode === 'verify'" class="text-center space-y-5 py-2">
        
        <div class="w-16 h-16 bg-brand-50/90 text-brand-600 rounded-2xl flex items-center justify-center mx-auto border border-brand-200/60 shadow-inner">
          <Send class="w-8 h-8" />
        </div>
        
        <div>
          <h2 class="text-2xl font-black text-slate-800 tracking-tight">Confirme seu E-mail</h2>
          <p class="text-xs text-slate-500 mt-2 leading-relaxed max-w-xs mx-auto">
            Enviamos um link de confirmação para
            <strong class="text-slate-800 block text-sm font-bold mt-1 break-all">{{ formData.email }}</strong>
          </p>
          <p class="text-xs text-slate-400 mt-3 leading-relaxed max-w-xs mx-auto">
            Clique no link do e-mail para ativar sua conta. Você só poderá fazer login após a confirmação.
          </p>
        </div>

        <!-- Alerta de Sucesso (reenvio) -->
        <div v-if="successMessage" class="p-3.5 bg-emerald-50/90 border border-emerald-200 rounded-2xl text-emerald-700 text-xs font-semibold flex items-center gap-2 text-left">
          <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
          <span>{{ successMessage }}</span>
        </div>

        <!-- Alerta de Erro (reenvio) -->
        <div v-if="errorMessage" class="p-3.5 bg-red-50/90 border border-red-200 rounded-2xl text-red-700 text-xs font-semibold flex items-center gap-2 text-left">
          <AlertCircle class="w-4 h-4 text-red-500 shrink-0" />
          <span>{{ errorMessage }}</span>
        </div>

        <div class="space-y-3 pt-1">
          <button 
            @click="switchMode('login')"
            class="w-full py-3 px-4 liquid-glass-button text-white font-bold text-sm rounded-xl transition flex items-center justify-center gap-2"
          >
            <LogIn class="w-4 h-4" />
            <span>Já confirmei — Fazer Login</span>
          </button>

          <button
            @click="handleResendVerification"
            :disabled="resendInProgress"
            class="w-full py-2.5 px-4 bg-white/70 hover:bg-white text-slate-600 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 border border-slate-200/80 shadow-sm transition disabled:opacity-50"
          >
            <RefreshCw class="w-3.5 h-3.5" :class="{ 'animate-spin': resendInProgress }" />
            <span>{{ resendInProgress ? 'Reenviando...' : 'Reenviar Link de Verificação' }}</span>
          </button>
        </div>
      </div>

      <!-- ══════════════════════════════════════════════════════════════════ -->
      <!-- MODO: LOGIN / REGISTER                                            -->
      <!-- ══════════════════════════════════════════════════════════════════ -->
      <div v-else class="space-y-5">

        <!-- Abas de Navegação -->
        <div class="flex border-b border-slate-200/60 pb-1">
          <button
            @click="switchMode('login')"
            class="flex-1 pb-3 text-sm font-bold border-b-2 transition"
            :class="mode === 'login' ? 'border-brand-600 text-brand-700' : 'border-transparent text-slate-400 hover:text-slate-600'"
          >
            Entrar
          </button>
          <button
            @click="switchMode('register')"
            class="flex-1 pb-3 text-sm font-bold border-b-2 transition"
            :class="mode === 'register' ? 'border-brand-600 text-brand-700' : 'border-transparent text-slate-400 hover:text-slate-600'"
          >
            Criar Conta
          </button>
        </div>

        <!-- Alerta de Erro -->
        <div v-if="errorMessage" class="p-3.5 bg-red-50/90 backdrop-blur-sm border border-red-200 rounded-2xl text-red-700 text-xs font-semibold space-y-2.5">
          <div class="flex items-center gap-2">
            <AlertCircle class="w-4 h-4 text-red-500 shrink-0" />
            <span>{{ errorMessage }}</span>
          </div>

          <!-- Reenviar link diretamente da tela de login -->
          <button
            v-if="mode === 'login' && errorMessage.includes('verificado')"
            @click="handleResendVerification"
            :disabled="resendInProgress"
            class="text-xs font-extrabold text-brand-700 flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-brand-200/80 shadow-sm transition hover:bg-brand-50 disabled:opacity-50"
          >
            <RefreshCw class="w-3.5 h-3.5" :class="{ 'animate-spin': resendInProgress }" />
            <span>Reenviar Link de Verificação</span>
          </button>
        </div>

        <!-- Alerta de Sucesso -->
        <div v-if="successMessage" class="p-3.5 bg-emerald-50/90 backdrop-blur-sm border border-emerald-200 rounded-2xl text-emerald-700 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
          <span>{{ successMessage }}</span>
        </div>

        <!-- Formulário -->
        <form @submit.prevent="mode === 'login' ? handleLogin() : handleRegister()" class="space-y-4">

          <!-- Nome (somente Cadastro) -->
          <div v-if="mode === 'register'">
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Nome Completo *</label>
            <div class="relative">
              <User class="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                v-model="formData.name"
                type="text"
                required
                autocomplete="name"
                placeholder="Como prefere ser chamado?"
                class="w-full pl-10 pr-3 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none"
              />
            </div>
          </div>

          <!-- E-mail -->
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Endereço de E-mail *</label>
            <div class="relative">
              <Mail class="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                v-model="formData.email"
                type="email"
                required
                autocomplete="email"
                placeholder="exemplo@dominio.com"
                class="w-full pl-10 pr-3 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none"
              />
            </div>
          </div>

          <!-- Senha -->
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Senha *</label>
            <div class="relative">
              <Lock class="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                v-model="formData.password"
                type="password"
                required
                autocomplete="current-password"
                placeholder="No mínimo 6 caracteres"
                class="w-full pl-10 pr-3 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none"
              />
            </div>
          </div>

          <!-- Botão Submit -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full py-3 px-4 liquid-glass-button text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50"
          >
            <Loader2 v-if="isLoading" class="w-4 h-4 animate-spin" />
            <LogIn v-else-if="mode === 'login'" class="w-4 h-4" />
            <UserPlus v-else class="w-4 h-4" />
            <span>{{ isLoading ? 'Aguarde...' : mode === 'login' ? 'Entrar na Conta' : 'Criar Conta' }}</span>
          </button>
        </form>

        <!-- Divisor -->
        <div class="flex items-center gap-3">
          <span class="h-px bg-slate-200/60 flex-1"></span>
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">Ou continue com</span>
          <span class="h-px bg-slate-200/60 flex-1"></span>
        </div>

        <!-- Google -->
        <button
          type="button"
          @click="handleGoogleAuth"
          :disabled="isLoading"
          class="w-full bg-white/80 hover:bg-white text-slate-700 font-semibold text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2.5 border border-slate-200/80 shadow-sm transition active:scale-[0.98] disabled:opacity-50"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"></path>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"></path>
          </svg>
          <span>Acessar com o Google</span>
        </button>
      </div>

      <!-- Rodapé de Segurança -->
      <div class="mt-6 pt-4 border-t border-slate-200/40 text-center">
        <span class="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-400">
          <ShieldCheck class="w-3.5 h-3.5 text-emerald-500" />
          Autenticação 100% segura e encriptada
        </span>
      </div>
    </div>
  </div>
</template>