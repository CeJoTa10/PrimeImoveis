<script setup>
import { ref, reactive, watch, nextTick, onUnmounted } from 'vue';
import { registerWithEmail, loginWithEmail, loginWithGoogle, logout, reloadCurrentUser } from '../firebase.js';
import { sendOtp, verifyOtp } from '../services/api.js';
import {
  X, User, Mail, Lock, LogIn, UserPlus, KeyRound, RefreshCw,
  CheckCircle2, AlertCircle, Loader2, ShieldCheck, ArrowLeft
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
// mode: 'login' | 'register' | 'otp'
// ─────────────────────────────────────────────────────────────────────────────
const mode = ref('login');
const isLoading = ref(false);
const errorMessage = ref('');
const successMessage = ref('');

// Dados dos formulários
const formData = reactive({ name: '', email: '', password: '' });

// Contexto do fluxo OTP — guardamos uid e email após criação/login
const otpContext = reactive({ email: '', uid: '' });

// Dígitos OTP — 6 caixas individuais
const otpDigits = reactive(['', '', '', '', '', '']);
const digitRefs = ref([]);

// Timer de reenvio (60 segundos)
const resendCountdown = ref(0);
let resendTimer = null;

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
const startResendTimer = () => {
  resendCountdown.value = 60;
  if (resendTimer) clearInterval(resendTimer);
  resendTimer = setInterval(() => {
    if (resendCountdown.value > 0) {
      resendCountdown.value--;
    } else {
      clearInterval(resendTimer);
    }
  }, 1000);
};

onUnmounted(() => { if (resendTimer) clearInterval(resendTimer); });

// Reset completo ao fechar modal
watch(() => props.isOpen, (open) => {
  if (!open) {
    mode.value = 'login';
    isLoading.value = false;
    errorMessage.value = '';
    successMessage.value = '';
    formData.name = '';
    formData.email = '';
    formData.password = '';
    otpContext.email = '';
    otpContext.uid = '';
    otpDigits.forEach((_, i) => (otpDigits[i] = ''));
    if (resendTimer) clearInterval(resendTimer);
    resendCountdown.value = 0;
  }
});

// Mapeamento de erros Firebase para Português
const getFirebaseError = (error) => {
  switch (error.code) {
    case 'auth/email-already-in-use': return 'Este e-mail já está cadastrado.';
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found': return 'E-mail ou senha incorretos.';
    case 'auth/weak-password': return 'A senha deve conter no mínimo 6 caracteres.';
    case 'auth/too-many-requests': return 'Muitas tentativas malsucedidas. Tente novamente mais tarde.';
    case 'auth/invalid-email': return 'Endereço de e-mail inválido.';
    default: return error.message || 'Ocorreu um erro. Tente novamente.';
  }
};

// Transiciona para o modo OTP e foca o primeiro campo
const goToOtpMode = async (email, uid) => {
  otpContext.email = email;
  otpContext.uid = uid;
  otpDigits.forEach((_, i) => (otpDigits[i] = ''));
  mode.value = 'otp';
  startResendTimer();
  await nextTick();
  digitRefs.value[0]?.focus();
};

// ─────────────────────────────────────────────────────────────────────────────
// Lógica de Login
// ─────────────────────────────────────────────────────────────────────────────
const handleLogin = async () => {
  if (!formData.email || !formData.password) {
    errorMessage.value = 'Por favor, preencha e-mail e senha.';
    return;
  }

  isLoading.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    const { user } = await loginWithEmail(formData.email, formData.password);

    if (user.emailVerified) {
      // ✅ E-mail já verificado: acesso liberado
      emit('close');
    } else {
      // 🛑 E-mail não verificado: logout + inicia fluxo OTP
      await logout();
      // Recria a sessão temporária para obter uid (loginWithEmail retorna antes do signOut)
      // uid já está disponível no objeto user antes do logout
      await sendOtp(user.email);
      await goToOtpMode(user.email, user.uid);
      successMessage.value = 'Código de verificação enviado! Confira sua caixa de entrada.';
    }
  } catch (err) {
    console.error('[AuthModal Login Error]:', err);
    errorMessage.value = getFirebaseError(err);
  } finally {
    isLoading.value = false;
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
  if (!formData.email || !formData.email.includes('@')) {
    errorMessage.value = 'Por favor, informe um e-mail válido.';
    return;
  }
  if (formData.password.length < 6) {
    errorMessage.value = 'A senha deve conter no mínimo 6 caracteres.';
    return;
  }

  isLoading.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    // 1. Cria a conta Firebase (mantém sessão ativa para obter uid)
    const { user } = await registerWithEmail(formData.email, formData.password, formData.name);

    // 2. Dispara OTP para o e-mail cadastrado
    await sendOtp(user.email);

    // 3. Vai para tela de OTP com o uid para uso posterior no verify-otp
    await goToOtpMode(user.email, user.uid);
    successMessage.value = 'Conta criada! Código de verificação enviado para o seu e-mail.';
  } catch (err) {
    console.error('[AuthModal Register Error]:', err);
    errorMessage.value = getFirebaseError(err);
  } finally {
    isLoading.value = false;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// Lógica de Verificação OTP
// ─────────────────────────────────────────────────────────────────────────────
const handleVerifyOtp = async () => {
  const code = otpDigits.join('');
  if (code.length < 6) {
    errorMessage.value = 'Por favor, informe o código completo de 6 dígitos.';
    return;
  }

  isLoading.value = true;
  errorMessage.value = '';

  try {
    // Valida o código no backend → Admin SDK marca emailVerified: true
    await verifyOtp(otpContext.email, code, otpContext.uid);

    // Força reload do token para refletir a mudança de emailVerified
    await reloadCurrentUser();

    successMessage.value = 'E-mail verificado com sucesso! Bem-vindo à Prime Imóveis.';
    setTimeout(() => emit('close'), 800);
  } catch (err) {
    console.error('[AuthModal OTP Verify Error]:', err);
    errorMessage.value = err.message || 'Código incorreto ou expirado.';
    // Limpa dígitos em erro para nova tentativa
    otpDigits.forEach((_, i) => (otpDigits[i] = ''));
    await nextTick();
    digitRefs.value[0]?.focus();
  } finally {
    isLoading.value = false;
  }
};

// Reenvio do Código OTP
const handleResendOtp = async () => {
  if (resendCountdown.value > 0 || isLoading.value) return;

  isLoading.value = true;
  errorMessage.value = '';
  successMessage.value = '';
  otpDigits.forEach((_, i) => (otpDigits[i] = ''));

  try {
    await sendOtp(otpContext.email);
    startResendTimer();
    successMessage.value = 'Novo código enviado! Confira sua caixa de entrada.';
    await nextTick();
    digitRefs.value[0]?.focus();
  } catch (err) {
    errorMessage.value = 'Não foi possível reenviar o código. Tente novamente.';
  } finally {
    isLoading.value = false;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// Inputs OTP — auto-focus sequencial, Backspace e Paste
// ─────────────────────────────────────────────────────────────────────────────
const handleDigitInput = (index, event) => {
  const numVal = event.target.value.replace(/\D/g, '');
  if (numVal) {
    otpDigits[index] = numVal[numVal.length - 1];
    if (index < 5) nextTick(() => digitRefs.value[index + 1]?.focus());
  } else {
    otpDigits[index] = '';
  }
  // Auto-submit quando todos os 6 dígitos estiverem preenchidos
  if (otpDigits.join('').length === 6) handleVerifyOtp();
};

const handleDigitKeyDown = (index, event) => {
  if (event.key === 'Backspace' && !otpDigits[index] && index > 0) {
    nextTick(() => digitRefs.value[index - 1]?.focus());
  }
};

const handleOtpPaste = (event) => {
  event.preventDefault();
  const pasted = (event.clipboardData || window.clipboardData)
    .getData('text')
    .replace(/\D/g, '')
    .slice(0, 6);

  pasted.split('').forEach((char, i) => { if (i < 6) otpDigits[i] = char; });

  if (pasted.length === 6) {
    handleVerifyOtp();
  } else if (digitRefs.value[pasted.length]) {
    digitRefs.value[pasted.length]?.focus();
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

// Helper para trocar de aba e limpar estados
const switchMode = (newMode) => {
  mode.value = newMode;
  errorMessage.value = '';
  successMessage.value = '';
};
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
    
    <!-- Backdrop Liquid Glass -->
    <div 
      @click="emit('close')" 
      class="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
    ></div>

    <!-- Card Principal do Modal -->
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

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- MODO: OTP — Digitação dos 6 Dígitos                               -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <div v-if="mode === 'otp'" class="space-y-5">
        
        <!-- Cabeçalho OTP -->
        <div class="text-center space-y-2">
          <div class="w-14 h-14 bg-brand-50/80 text-brand-600 rounded-2xl flex items-center justify-center mx-auto border border-brand-200/50 shadow-inner">
            <KeyRound class="w-7 h-7" />
          </div>
          <h2 class="text-2xl font-black text-slate-800 tracking-tight">Verificação de E-mail</h2>
          <p class="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
            Enviamos um código de <strong class="text-slate-700">6 dígitos</strong> para<br>
            <strong class="text-brand-700 text-sm break-all">{{ otpContext.email }}</strong>
          </p>
        </div>

        <!-- Alerta de Erro -->
        <div v-if="errorMessage" class="p-3.5 bg-red-50/90 backdrop-blur-sm border border-red-200 rounded-2xl text-red-700 text-xs font-semibold flex items-center gap-2">
          <AlertCircle class="w-4 h-4 text-red-500 shrink-0" />
          <span>{{ errorMessage }}</span>
        </div>

        <!-- Alerta de Sucesso -->
        <div v-if="successMessage" class="p-3.5 bg-emerald-50/90 backdrop-blur-sm border border-emerald-200 rounded-2xl text-emerald-700 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
          <span>{{ successMessage }}</span>
        </div>

        <!-- 6 Caixas Numéricas com Auto-Focus -->
        <div class="flex justify-between gap-2 sm:gap-3" @paste="handleOtpPaste">
          <input
            v-for="(digit, idx) in otpDigits"
            :key="idx"
            :ref="el => (digitRefs[idx] = el)"
            type="text"
            inputmode="numeric"
            maxlength="1"
            :value="digit"
            @input="e => handleDigitInput(idx, e)"
            @keydown="e => handleDigitKeyDown(idx, e)"
            class="w-12 h-14 sm:w-14 sm:h-16 text-center text-xl sm:text-2xl font-extrabold text-brand-700 bg-white/90 border-2 border-slate-200/90 rounded-2xl focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 shadow-inner transition duration-150 select-none"
            :class="{ 'border-brand-400 bg-brand-50/80': digit }"
          />
        </div>

        <!-- Botão Verificar -->
        <button 
          @click="handleVerifyOtp"
          :disabled="isLoading || otpDigits.join('').length < 6"
          class="w-full py-3.5 px-4 liquid-glass-button text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50"
        >
          <Loader2 v-if="isLoading" class="w-4 h-4 animate-spin" />
          <ShieldCheck v-else class="w-4 h-4" />
          <span>{{ isLoading ? 'Verificando...' : 'Verificar e Ativar Conta' }}</span>
        </button>

        <!-- Rodapé: Voltar e Reenviar -->
        <div class="pt-3 border-t border-slate-200/50 flex items-center justify-between gap-2 text-xs">
          <button
            @click="switchMode('login')"
            class="text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-1 transition"
          >
            <ArrowLeft class="w-3.5 h-3.5" />
            <span>Voltar ao Login</span>
          </button>

          <button
            @click="handleResendOtp"
            :disabled="resendCountdown > 0 || isLoading"
            class="text-brand-600 hover:text-brand-700 font-bold flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            <RefreshCw class="w-3.5 h-3.5" :class="{ 'animate-spin': isLoading && mode === 'otp' }" />
            <span v-if="resendCountdown > 0">Reenviar em {{ resendCountdown }}s</span>
            <span v-else>Reenviar Código</span>
          </button>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════════════ -->
      <!-- MODO: LOGIN / REGISTER                                             -->
      <!-- ═══════════════════════════════════════════════════════════════════ -->
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
        <div v-if="errorMessage" class="p-3.5 bg-red-50/90 backdrop-blur-sm border border-red-200 rounded-2xl text-red-700 text-xs font-semibold flex items-center gap-2">
          <AlertCircle class="w-4 h-4 text-red-500 shrink-0" />
          <span>{{ errorMessage }}</span>
        </div>

        <!-- Alerta de Sucesso -->
        <div v-if="successMessage" class="p-3.5 bg-emerald-50/90 backdrop-blur-sm border border-emerald-200 rounded-2xl text-emerald-700 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
          <span>{{ successMessage }}</span>
        </div>

        <!-- Formulário -->
        <form @submit.prevent="mode === 'login' ? handleLogin() : handleRegister()" class="space-y-4">
          
          <!-- Campo Nome (somente Cadastro) -->
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

          <!-- Campo E-mail -->
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

          <!-- Campo Senha -->
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
            <span>{{ isLoading ? 'Aguarde...' : mode === 'login' ? 'Entrar na Conta' : 'Criar Conta e Verificar' }}</span>
          </button>
        </form>

        <!-- Divisor -->
        <div class="flex items-center gap-3">
          <span class="h-px bg-slate-200/60 flex-1"></span>
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">Ou continue com</span>
          <span class="h-px bg-slate-200/60 flex-1"></span>
        </div>

        <!-- Botão Google -->
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