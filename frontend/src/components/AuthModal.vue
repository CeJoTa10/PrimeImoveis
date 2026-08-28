<script setup>
import { ref, reactive, watch, nextTick } from 'vue';
import {
  registerWithEmail,
  loginWithEmail,
  loginWithGoogle,
  logout,
  reloadCurrentUser
} from '../firebase.js';
import { sendOtp, verifyOtp } from '../services/api.js';
import {
  X, User, Mail, Lock, LogIn, UserPlus, RefreshCw,
  CheckCircle2, AlertCircle, Loader2, ShieldCheck, KeyRound, Check,
  Eye, EyeOff, ShieldAlert
} from 'lucide-vue-next';

// ─────────────────────────────────────────────────────────────────────────────
// Props & Emits
// ─────────────────────────────────────────────────────────────────────────────
const props = defineProps({
  isOpen: { type: Boolean, required: true }
});
const emit = defineEmits(['close']);

// ─────────────────────────────────────────────────────────────────────────────
// Estados do Modal
// mode: 'login' | 'register' | 'verify'
// ─────────────────────────────────────────────────────────────────────────────
const mode = ref('login');
const isLoading = ref(false);
const isVerifyingCode = ref(false);
const errorMessage = ref('');
const successMessage = ref('');
const resendInProgress = ref(false);
const resendCooldown = ref(0);
let cooldownTimer = null;

// Visibilidade das Senhas
const showLoginPassword = ref(false);
const showRegisterPassword = ref(false);
const showRegisterConfirmPassword = ref(false);

// Dados do Formulário
const formData = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
});

// Guardar UID do usuário em processo de verificação
const pendingUid = ref('');

// 6 Dígitos OTP
const otpDigits = ref(['', '', '', '', '', '']);
const digitInputs = ref([]);

// Reset ao abrir/fechar
watch(() => props.isOpen, (open) => {
  if (!open) {
    mode.value = 'login';
    isLoading.value = false;
    isVerifyingCode.value = false;
    errorMessage.value = '';
    successMessage.value = '';
    resendInProgress.value = false;
    pendingUid.value = '';
    showLoginPassword.value = false;
    showRegisterPassword.value = false;
    showRegisterConfirmPassword.value = false;
    formData.name = '';
    formData.email = '';
    formData.password = '';
    formData.confirmPassword = '';
    otpDigits.value = ['', '', '', '', '', ''];
    if (cooldownTimer) clearInterval(cooldownTimer);
    resendCooldown.value = 0;
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// Helpers e Transições
// ─────────────────────────────────────────────────────────────────────────────
const switchMode = (newMode) => {
  mode.value = newMode;
  errorMessage.value = '';
  successMessage.value = '';
  if (newMode === 'verify') {
    nextTick(() => {
      digitInputs.value[0]?.focus();
    });
  }
};

const startCooldown = (seconds = 60) => {
  resendCooldown.value = seconds;
  if (cooldownTimer) clearInterval(cooldownTimer);
  cooldownTimer = setInterval(() => {
    if (resendCooldown.value > 0) {
      resendCooldown.value--;
    } else {
      clearInterval(cooldownTimer);
    }
  }, 1000);
};

const getFirebaseError = (error) => {
  if (error?.code) {
    switch (error.code) {
      case 'auth/email-already-in-use': return 'Este e-mail já está cadastrado. Tente entrar na sua conta.';
      case 'auth/invalid-credential':
      case 'auth/wrong-password':
      case 'auth/user-not-found': return 'E-mail ou senha incorretos.';
      case 'auth/weak-password': return 'A senha deve conter no mínimo 6 caracteres.';
      case 'auth/too-many-requests': return 'Muitas tentativas. Aguarde alguns instantes e tente novamente.';
      case 'auth/invalid-email': return 'Endereço de e-mail inválido.';
    }
  }
  if (error?.message && (error.message.includes('Unexpected token') || error.message.includes('JSON') || error.message.includes('is not valid JSON'))) {
    return 'Servidor temporariamente indisponível. Verifique as credenciais de e-mail ou tente novamente em instantes.';
  }
  return error?.message || 'Ocorreu um erro. Tente novamente em instantes.';
};


// ─────────────────────────────────────────────────────────────────────────────
// Manipulação dos 6 Dígitos OTP
// ─────────────────────────────────────────────────────────────────────────────
const handleDigitInput = (index, event) => {
  const value = event.target.value.replace(/\D/g, '');
  otpDigits.value[index] = value ? value.slice(-1) : '';

  if (value && index < 5) {
    nextTick(() => {
      digitInputs.value[index + 1]?.focus();
    });
  }

  // Auto-submete quando os 6 dígitos estiverem preenchidos
  if (otpDigits.value.every(d => d !== '') && otpDigits.value.join('').length === 6) {
    handleVerifyOtp();
  }
};

const handleDigitKeyDown = (index, event) => {
  if (event.key === 'Backspace' && !otpDigits.value[index] && index > 0) {
    digitInputs.value[index - 1]?.focus();
  }
};

const handleDigitPaste = (event) => {
  event.preventDefault();
  const pasted = (event.clipboardData || window.clipboardData).getData('text');
  const numbers = pasted.replace(/\D/g, '').slice(0, 6);

  if (numbers) {
    numbers.split('').forEach((char, idx) => {
      if (idx < 6) otpDigits.value[idx] = char;
    });
    const nextIdx = Math.min(numbers.length, 5);
    digitInputs.value[nextIdx]?.focus();

    if (numbers.length === 6) {
      handleVerifyOtp();
    }
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// Lógica de Cadastro (Registro)
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
  if (formData.password !== formData.confirmPassword) {
    errorMessage.value = 'As senhas digitadas não coincidem. Verifique e tente novamente.';
    return;
  }

  isLoading.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    // 1. Cria a conta no Firebase Client SDK
    const userCredential = await registerWithEmail(formData.email, formData.password, formData.name);
    pendingUid.value = userCredential.user.uid;

    // 2. Dispara o envio do código OTP de 6 dígitos via Backend
    await sendOtp(formData.email);
    startCooldown(60);

    // 3. Redireciona para a tela de 6 dígitos
    mode.value = 'verify';
    otpDigits.value = ['', '', '', '', '', ''];
    nextTick(() => {
      digitInputs.value[0]?.focus();
    });
  } catch (err) {
    console.error('[AuthModal Register]:', err);
    errorMessage.value = getFirebaseError(err);
  } finally {
    isLoading.value = false;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// Validação do Código de 6 Dígitos (OTP)
// ─────────────────────────────────────────────────────────────────────────────
const handleVerifyOtp = async () => {
  const code = otpDigits.value.join('').trim();
  if (code.length !== 6) {
    errorMessage.value = 'Digite todos os 6 dígitos do código de verificação.';
    return;
  }

  isVerifyingCode.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    // 1. Valida o código no backend e marca emailVerified: true via Admin SDK
    await verifyOtp(formData.email, code, pendingUid.value);

    // 2. Recarrega o usuário atual para atualizar a sessão
    await reloadCurrentUser();

    successMessage.value = '🎉 E-mail confirmado com sucesso! Acesso liberado.';

    setTimeout(() => {
      emit('close');
    }, 1500);
  } catch (err) {
    console.error('[AuthModal VerifyOtp]:', err);
    errorMessage.value = err.message || 'Código incorreto ou expirado. Tente novamente.';
    nextTick(() => {
      digitInputs.value[0]?.focus();
    });
  } finally {
    isVerifyingCode.value = false;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// Reenvio do Código de 6 Dígitos
// ─────────────────────────────────────────────────────────────────────────────
const handleResendOtp = async () => {
  if (!formData.email) {
    errorMessage.value = 'E-mail não identificado para reenvio.';
    return;
  }
  if (resendCooldown.value > 0) return;

  resendInProgress.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    await sendOtp(formData.email);
    startCooldown(60);
    otpDigits.value = ['', '', '', '', '', ''];
    successMessage.value = 'Novo código de 6 dígitos enviado! Verifique sua caixa de entrada.';
    nextTick(() => {
      digitInputs.value[0]?.focus();
    });
  } catch (err) {
    console.error('[AuthModal ResendOtp]:', err);
    errorMessage.value = err.message || 'Não foi possível reenviar o código. Aguarde alguns instantes.';
  } finally {
    resendInProgress.value = false;
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
      // 🛑 E-mail pendente de verificação: dispara OTP de 6 dígitos e abre tela de verificação
      pendingUid.value = user.uid;
      await sendOtp(formData.email);
      startCooldown(60);
      mode.value = 'verify';
      otpDigits.value = ['', '', '', '', '', ''];
      errorMessage.value = 'Sua conta ainda não foi ativada. Enviamos um código de 6 dígitos para o seu e-mail.';
      nextTick(() => {
        digitInputs.value[0]?.focus();
      });
    }
  } catch (err) {
    console.error('[AuthModal Login]:', err);
    errorMessage.value = getFirebaseError(err);
  } finally {
    isLoading.value = false;
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
      <!-- MODO: VERIFY — Validação com Código de 6 Dígitos (OTP)            -->
      <!-- ══════════════════════════════════════════════════════════════════ -->
      <div v-if="mode === 'verify'" class="text-center space-y-5 py-2">
        
        <div class="w-16 h-16 bg-brand-50/90 text-brand-600 rounded-2xl flex items-center justify-center mx-auto border border-brand-200/60 shadow-inner">
          <KeyRound class="w-8 h-8" />
        </div>
        
        <div>
          <h2 class="text-2xl font-black text-slate-800 tracking-tight">Digite o Código</h2>
          <p class="text-xs text-slate-500 mt-2 leading-relaxed max-w-xs mx-auto">
            Enviamos um código de <strong>6 dígitos</strong> para
            <strong class="text-slate-800 block text-sm font-bold mt-1 break-all">{{ formData.email }}</strong>
          </p>
        </div>

        <!-- Alerta de Sucesso -->
        <div v-if="successMessage" class="p-3.5 bg-emerald-50/90 border border-emerald-200 rounded-2xl text-emerald-700 text-xs font-semibold flex items-center gap-2 text-left">
          <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
          <span>{{ successMessage }}</span>
        </div>

        <!-- Alerta de Erro -->
        <div v-if="errorMessage" class="p-3.5 bg-red-50/90 border border-red-200 rounded-2xl text-red-700 text-xs font-semibold flex items-center gap-2 text-left">
          <AlertCircle class="w-4 h-4 text-red-500 shrink-0" />
          <span>{{ errorMessage }}</span>
        </div>

        <!-- 6 Inputs Numéricos para Código OTP -->
        <div class="space-y-3">
          <div class="flex justify-center gap-2 sm:gap-2.5" @paste="handleDigitPaste">
            <input
              v-for="(digit, idx) in otpDigits"
              :key="idx"
              ref="digitInputs"
              v-model="otpDigits[idx]"
              type="text"
              inputmode="numeric"
              maxlength="1"
              autocomplete="one-time-code"
              class="w-11 h-14 sm:w-12 sm:h-14 text-center text-xl font-black text-slate-800 bg-white/90 border border-slate-200/90 rounded-2xl shadow-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none transition"
              @input="handleDigitInput(idx, $event)"
              @keydown="handleDigitKeyDown(idx, $event)"
            />
          </div>
          <p class="text-[11px] text-slate-400">O código expira em 5 minutos.</p>
        </div>

        <!-- Botão de Confirmação -->
        <div class="space-y-3 pt-2">
          <button 
            @click="handleVerifyOtp"
            :disabled="isVerifyingCode || otpDigits.some(d => d === '')"
            class="w-full py-3.5 px-4 liquid-glass-button text-white font-bold text-sm rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Loader2 v-if="isVerifyingCode" class="w-4 h-4 animate-spin" />
            <Check v-else class="w-4 h-4" />
            <span>{{ isVerifyingCode ? 'Validando Código...' : 'Confirmar e Ativar Conta' }}</span>
          </button>

          <!-- Reenvio de Código com Contador -->
          <button
            @click="handleResendOtp"
            :disabled="resendInProgress || resendCooldown > 0"
            class="w-full py-2.5 px-4 bg-white/70 hover:bg-white text-slate-600 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 border border-slate-200/80 shadow-sm transition disabled:opacity-50"
          >
            <RefreshCw class="w-3.5 h-3.5" :class="{ 'animate-spin': resendInProgress }" />
            <span v-if="resendCooldown > 0">Reenviar código em {{ resendCooldown }}s</span>
            <span v-else>{{ resendInProgress ? 'Enviando...' : 'Reenviar Código de 6 Dígitos' }}</span>
          </button>

          <button
            @click="switchMode('login')"
            class="text-xs text-slate-400 hover:text-slate-600 transition block mx-auto pt-1"
          >
            Voltar para tela de login
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
        <form @submit.prevent="mode === 'login' ? handleLogin() : handleRegister()" class="space-y-3.5">

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

          <!-- Senha (com botão de visualizar) -->
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">
              {{ mode === 'register' ? 'Criar Senha *' : 'Senha *' }}
            </label>
            <div class="relative">
              <Lock class="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                v-model="formData.password"
                :type="mode === 'login' ? (showLoginPassword ? 'text' : 'password') : (showRegisterPassword ? 'text' : 'password')"
                required
                autocomplete="current-password"
                placeholder="No mínimo 6 caracteres"
                class="w-full pl-10 pr-10 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none"
              />
              <!-- Botão Visualizar Senha -->
              <button
                type="button"
                @click="mode === 'login' ? (showLoginPassword = !showLoginPassword) : (showRegisterPassword = !showRegisterPassword)"
                class="absolute right-3 top-2.5 p-1 text-slate-400 hover:text-slate-600 transition"
                tabindex="-1"
                title="Mostrar/Ocultar senha"
              >
                <EyeOff v-if="mode === 'login' ? showLoginPassword : showRegisterPassword" class="w-4 h-4" />
                <Eye v-else class="w-4 h-4" />
              </button>
            </div>
          </div>

          <!-- Repetir Senha (somente Cadastro com botão de visualizar) -->
          <div v-if="mode === 'register'">
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Confirmar Senha *</label>
            <div class="relative">
              <Lock class="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                v-model="formData.confirmPassword"
                :type="showRegisterConfirmPassword ? 'text' : 'password'"
                required
                autocomplete="new-password"
                placeholder="Repita sua senha"
                class="w-full pl-10 pr-10 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none"
              />
              <!-- Botão Visualizar Confirmação de Senha -->
              <button
                type="button"
                @click="showRegisterConfirmPassword = !showRegisterConfirmPassword"
                class="absolute right-3 top-2.5 p-1 text-slate-400 hover:text-slate-600 transition"
                tabindex="-1"
                title="Mostrar/Ocultar senha"
              >
                <EyeOff v-if="showRegisterConfirmPassword" class="w-4 h-4" />
                <Eye v-else class="w-4 h-4" />
              </button>
            </div>
            <!-- Feedback de correspondência de senha -->
            <p v-if="formData.confirmPassword && formData.password !== formData.confirmPassword" class="text-[10px] text-red-500 font-semibold mt-1 pl-1 flex items-center gap-1">
              <ShieldAlert class="w-3 h-3" />
              As senhas não coincidem.
            </p>
          </div>

          <!-- Botão Submit -->
          <button
            type="submit"
            :disabled="isLoading || (mode === 'register' && formData.confirmPassword && formData.password !== formData.confirmPassword)"
            class="w-full py-3 px-4 liquid-glass-button text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50 mt-2"
          >
            <Loader2 v-if="isLoading" class="w-4 h-4 animate-spin" />
            <LogIn v-else-if="mode === 'login'" class="w-4 h-4" />
            <UserPlus v-else class="w-4 h-4" />
            <span>{{ isLoading ? 'Aguarde...' : mode === 'login' ? 'Entrar na Conta' : 'Criar Conta & Receber Código' }}</span>
          </button>
        </form>

        <!-- Divisor -->
        <div class="flex items-center gap-3 pt-1">
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