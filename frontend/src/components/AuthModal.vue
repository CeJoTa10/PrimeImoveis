<script setup>
import { ref, reactive, watch, nextTick, onUnmounted } from 'vue';
import { sendAuthCode, verifyAuthCode } from '../services/api.js';
import { loginWithCustomToken, loginWithGoogle } from '../firebase.js';
import { 
  X, Mail, KeyRound, ArrowRight, ArrowLeft, RefreshCw, 
  CheckCircle2, AlertCircle, Loader2, Sparkles, ShieldCheck 
} from 'lucide-vue-next';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);

// Passos do Fluxo: 1 = Email, 2 = Código OTP de 6 dígitos
const step = ref(1);

const email = ref('');
const otpDigits = reactive(['', '', '', '', '', '']);
const digitInputRefs = ref([]);

const isLoading = ref(false);
const errorMessage = ref('');
const successMessage = ref('');

// Timer de Reenvio (60 segundos)
const resendCountdown = ref(0);
let resendTimer = null;

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

onUnmounted(() => {
  if (resendTimer) clearInterval(resendTimer);
});

// Reseta formulário ao abrir/fechar modal
watch(() => props.isOpen, (isOpen) => {
  if (!isOpen) {
    step.value = 1;
    email.value = '';
    otpDigits.forEach((_, i) => (otpDigits[i] = ''));
    errorMessage.value = '';
    successMessage.value = '';
    isLoading.value = false;
    if (resendTimer) clearInterval(resendTimer);
    resendCountdown.value = 0;
  }
});

/**
 * Passo 1: Solicita o envio do código OTP de 6 dígitos para o e-mail
 */
const handleSendCode = async () => {
  if (!email.value || !email.value.includes('@')) {
    errorMessage.value = 'Por favor, digite um e-mail válido.';
    return;
  }

  isLoading.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    const result = await sendAuthCode(email.value);
    step.value = 2;
    successMessage.value = result.message || 'Código enviado para seu e-mail!';
    startResendTimer();
    
    // Foca automaticamente na primeira caixa de dígito
    nextTick(() => {
      if (digitInputRefs.value[0]) {
        digitInputRefs.value[0].focus();
      }
    });
  } catch (err) {
    console.error('[AuthModal] Erro ao enviar código:', err);
    errorMessage.value = err.message || 'Falha ao solicitar código de acesso.';
  } finally {
    isLoading.value = false;
  }
};

/**
 * Lógica do Input Numérico Sequencial dos 6 Dígitos
 */
const handleDigitInput = (index, event) => {
  const value = event.target.value;
  
  // Limpa caracteres não numéricos
  const numericValue = value.replace(/\D/g, '');
  
  if (numericValue) {
    otpDigits[index] = numericValue[numericValue.length - 1]; // Pega o último dígito
    
    // Avança para o próximo caixa de entrada
    if (index < 5) {
      nextTick(() => {
        if (digitInputRefs.value[index + 1]) {
          digitInputRefs.value[index + 1].focus();
        }
      });
    }
  } else {
    otpDigits[index] = '';
  }

  // Se os 6 dígitos estiverem preenchidos, dispara a validação automaticamente
  const fullCode = otpDigits.join('');
  if (fullCode.length === 6) {
    handleVerifyCode();
  }
};

const handleKeyDown = (index, event) => {
  // Backspace em caixa vazia recua o foco para a caixa anterior
  if (event.key === 'Backspace' && !otpDigits[index] && index > 0) {
    nextTick(() => {
      if (digitInputRefs.value[index - 1]) {
        digitInputRefs.value[index - 1].focus();
      }
    });
  }
};

/**
 * Suporte a Colar (Paste) dos 6 dígitos numéricos
 */
const handlePaste = (event) => {
  event.preventDefault();
  const pastedData = (event.clipboardData || window.clipboardData).getData('text');
  const numericCode = pastedData.replace(/\D/g, '').slice(0, 6);

  if (numericCode) {
    numericCode.split('').forEach((char, i) => {
      if (i < 6) otpDigits[i] = char;
    });
    
    // Foca no último campo ou dispara envio se completo
    if (numericCode.length === 6) {
      handleVerifyCode();
    } else if (digitInputRefs.value[numericCode.length]) {
      digitInputRefs.value[numericCode.length].focus();
    }
  }
};

/**
 * Passo 2: Valida o código OTP e realiza o Login no Firebase Auth
 */
const handleVerifyCode = async () => {
  const code = otpDigits.join('');
  if (code.length < 6) {
    errorMessage.value = 'Por favor, informe o código completo de 6 dígitos.';
    return;
  }

  isLoading.value = true;
  errorMessage.value = '';

  try {
    // 1. Valida o código no backend
    const result = await verifyAuthCode(email.value, code);
    
    // 2. Realiza a autenticação no Firebase utilizando o Custom Token retornado
    await loginWithCustomToken(result.customToken);

    successMessage.value = 'Autenticado com sucesso!';
    setTimeout(() => {
      emit('close');
    }, 600);
  } catch (err) {
    console.error('[AuthModal] Erro de validação:', err);
    errorMessage.value = err.message || 'Código de verificação incorreto ou expirado.';
  } finally {
    isLoading.value = false;
  }
};

/**
 * Reenvia o código OTP
 */
const handleResendCode = async () => {
  if (resendCountdown.value > 0 || isLoading.value) return;
  otpDigits.forEach((_, i) => (otpDigits[i] = ''));
  await handleSendCode();
};

/**
 * Autenticação via Google
 */
const handleGoogleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  try {
    await loginWithGoogle();
    emit('close');
  } catch (err) {
    console.error('Erro Google Auth:', err);
    errorMessage.value = 'Falha ao autenticar com o Google.';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
    <!-- Backdrop com Desfoque de Vidro (Liquid Glass Overlay) -->
    <div 
      @click="emit('close')" 
      class="fixed inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-300"
    ></div>

    <!-- Modal Card Liquid Glass -->
    <div class="relative liquid-glass w-full max-w-md rounded-3xl p-6 sm:p-8 z-10 shadow-2xl overflow-hidden border border-white/60">
      
      <!-- Orbe Iluminado de Fundo -->
      <div class="absolute -top-20 -right-20 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl pointer-events-none animate-float-orb"></div>
      <div class="absolute -bottom-20 -left-20 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-float-orb-reverse"></div>

      <!-- Botão Fechar -->
      <button 
        @click="emit('close')" 
        class="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-white/60 transition"
      >
        <X class="w-5 h-5" />
      </button>

      <!-- Cabeçalho -->
      <div class="text-center mb-6 relative">
        <div class="w-14 h-14 bg-brand-50/80 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-brand-200/50 shadow-inner">
          <KeyRound v-if="step === 2" class="w-7 h-7" />
          <Mail v-else class="w-7 h-7" />
        </div>
        <h2 class="text-2xl font-black text-slate-800 tracking-tight">
          {{ step === 1 ? 'Acesso sem Senha' : 'Digite o Código de 6 Dígitos' }}
        </h2>
        <p class="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
          {{ step === 1 
              ? 'Receba um código numérico de segurança direto no seu e-mail.' 
              : `Enviamos o código para ${email}` 
          }}
        </p>
      </div>

      <!-- Alerta de Erro -->
      <div v-if="errorMessage" class="mb-4 p-3.5 bg-red-50/90 backdrop-blur-sm border border-red-200 rounded-2xl text-red-700 text-xs font-semibold flex items-center gap-2">
        <AlertCircle class="w-4 h-4 text-red-500 shrink-0" />
        <span>{{ errorMessage }}</span>
      </div>

      <!-- Alerta de Sucesso -->
      <div v-if="successMessage" class="mb-4 p-3.5 bg-emerald-50/90 backdrop-blur-sm border border-emerald-200 rounded-2xl text-emerald-700 text-xs font-semibold flex items-center gap-2">
        <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
        <span>{{ successMessage }}</span>
      </div>

      <!-- PASSO 1: Digitação do E-mail -->
      <div v-if="step === 1" class="space-y-4">
        <form @submit.prevent="handleSendCode" class="space-y-4">
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 pl-1 block">
              Seu Endereço de E-mail
            </label>
            <div class="relative">
              <Mail class="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input 
                v-model="email"
                type="email" 
                required 
                placeholder="exemplo@dominio.com"
                class="w-full pl-10 pr-4 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none"
              />
            </div>
          </div>

          <button 
            type="submit"
            :disabled="isLoading"
            class="w-full py-3 px-4 liquid-glass-button text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50"
          >
            <Loader2 v-if="isLoading" class="w-4 h-4 animate-spin" />
            <span v-else>Enviar Código de Acesso</span>
            <ArrowRight v-if="!isLoading" class="w-4 h-4" />
          </button>
        </form>

        <div class="my-6 flex items-center justify-center gap-3">
          <span class="h-px bg-slate-200/60 flex-1"></span>
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Ou continue com</span>
          <span class="h-px bg-slate-200/60 flex-1"></span>
        </div>

        <button 
          type="button"
          @click="handleGoogleLogin"
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

      <!-- PASSO 2: Digitação das 6 caixas numéricas do Código OTP -->
      <div v-else class="space-y-5">
        
        <!-- Grid dos 6 dígitos de OTP com Auto-focus sequencial -->
        <div class="flex justify-between gap-2 sm:gap-2.5 my-2" @paste="handlePaste">
          <input 
            v-for="(digit, idx) in otpDigits" 
            :key="idx"
            :ref="el => (digitInputRefs[idx] = el)"
            type="text"
            inputmode="numeric"
            maxlength="1"
            :value="digit"
            @input="e => handleDigitInput(idx, e)"
            @keydown="e => handleKeyDown(idx, e)"
            class="w-12 h-14 text-center text-xl font-extrabold text-brand-700 bg-white/90 border border-slate-200/90 rounded-2xl focus:outline-none focus:border-brand-600 focus:ring-4 focus:ring-brand-500/20 shadow-inner transition duration-150"
          />
        </div>

        <button 
          @click="handleVerifyCode"
          :disabled="isLoading || otpDigits.join('').length < 6"
          class="w-full py-3 px-4 liquid-glass-button text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50"
        >
          <Loader2 v-if="isLoading" class="w-4 h-4 animate-spin" />
          <span v-else>Verificar e Entrar</span>
        </button>

        <!-- Ações Inferiores: Voltar e Reenviar Código com Timer de 60s -->
        <div class="pt-3 border-t border-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <button 
            @click="step = 1"
            class="text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-1 transition"
          >
            <ArrowLeft class="w-3.5 h-3.5" />
            <span>Alterar e-mail</span>
          </button>

          <button 
            @click="handleResendCode"
            :disabled="resendCountdown > 0 || isLoading"
            class="text-brand-600 hover:text-brand-700 font-bold flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            <RefreshCw class="w-3.5 h-3.5" :class="{ 'animate-spin': isLoading }" />
            <span v-if="resendCountdown > 0">Reenviar em {{ resendCountdown }}s</span>
            <span v-else>Reenviar Código</span>
          </button>
        </div>

      </div>

      <div class="mt-6 pt-4 border-t border-slate-200/40 text-center">
        <span class="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-400">
          <ShieldCheck class="w-3.5 h-3.5 text-emerald-500" />
          Autenticação 100% segura e protegida
        </span>
      </div>

    </div>
  </div>
</template>