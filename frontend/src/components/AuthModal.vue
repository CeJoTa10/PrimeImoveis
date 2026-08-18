<script setup>
import { ref, reactive, watch } from 'vue';
import { 
  registerWithEmail, 
  loginWithEmail, 
  sendVerificationEmail, 
  logout, 
  loginWithGoogle 
} from '../firebase.js';
import { 
  X, User, Mail, Lock, LogIn, UserPlus, Send, RefreshCw, 
  CheckCircle2, AlertCircle, Loader2, Sparkles, ShieldCheck 
} from 'lucide-vue-next';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);

// Modos: 'login' | 'register' | 'verify' (Tela de aviso de e-mail enviado)
const mode = ref('login');

const isLoading = ref(false);
const errorMessage = ref('');
const successMessage = ref('');
const showResendButton = ref(false);

const formData = reactive({
  name: '',
  email: '',
  password: ''
});

// Limpa campos e estados ao abrir/fechar o modal
watch(() => props.isOpen, (isOpen) => {
  if (!isOpen) {
    formData.name = '';
    formData.email = '';
    formData.password = '';
    mode.value = 'login';
    errorMessage.value = '';
    successMessage.value = '';
    showResendButton.value = false;
    isLoading.value = false;
  }
});

/**
 * Mapeia erros do Firebase Auth para mensagens amigáveis em Português
 */
const getErrorMessage = (error) => {
  if (error.code === 'auth/email-not-verified') {
    return 'Seu e-mail ainda não foi verificado. Acesse sua caixa de entrada para ativar sua conta antes de entrar.';
  }
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'Este e-mail já está cadastrado.';
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'E-mail ou senha incorretos.';
    case 'auth/weak-password':
      return 'A senha deve conter no mínimo 6 caracteres.';
    case 'auth/too-many-requests':
      return 'Muitas tentativas malsucedidas. Tente novamente mais tarde.';
    default:
      return error.message || 'Ocorreu um erro ao processar sua solicitação.';
  }
};

/**
 * Submissão do Formulário (Login ou Cadastro)
 */
const handleSubmit = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  successMessage.value = '';
  showResendButton.value = false;

  try {
    if (mode.value === 'login') {
      // 1. Tenta realizar o Login com E-mail e Senha
      const userCredential = await loginWithEmail(formData.email, formData.password);
      const user = userCredential.user;

      // 2. CHECAGEM DE SEGURANÇA OBRIGATÓRIA: user.emailVerified
      if (!user.emailVerified) {
        // 🛑 Bloqueia o acesso e encerra a sessão imediatamente com logout()
        await logout();
        showResendButton.value = true;
        throw { code: 'auth/email-not-verified' };
      }

      // ✅ E-mail verificado: permite acesso e fecha o modal
      emit('close');

    } else if (mode.value === 'register') {
      // Validação básica de senha
      if (formData.password.length < 6) {
        throw new Error('A senha deve conter no mínimo 6 caracteres.');
      }

      // 1. Cria o usuário, atualiza o nome, envia o e-mail de verificação e desloga imediatamente
      await registerWithEmail(formData.email, formData.password, formData.name);

      // 2. Exibe a tela de aviso de verificação necessária
      mode.value = 'verify';
    }
  } catch (err) {
    console.error('[AuthModal] Erro de autenticação:', err);
    errorMessage.value = getErrorMessage(err);
  } finally {
    isLoading.value = false;
  }
};

/**
 * 3️⃣ REENVIO DE E-MAIL DE VERIFICAÇÃO
 */
const handleResendVerification = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    // Autentica temporariamente, envia a verificação e desloga
    await loginWithEmail(formData.email, formData.password);
    await sendVerificationEmail();
    await logout();

    successMessage.value = 'Novo e-mail de verificação enviado com sucesso! Confira sua caixa de entrada e Spam.';
  } catch (err) {
    console.error('[AuthModal] Erro ao reenviar e-mail:', err);
    errorMessage.value = 'Não foi possível reenviar o e-mail. Verifique se suas credenciais estão corretas.';
  } finally {
    isLoading.value = false;
  }
};

/**
 * Autenticação via Google
 */
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
    <!-- Backdrop Blur (Liquid Glass Overlay) -->
    <div 
      @click="emit('close')" 
      class="fixed inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-300"
    ></div>

    <!-- Modal Card Liquid Glass -->
    <div class="relative liquid-glass w-full max-w-md rounded-3xl p-6 sm:p-8 z-10 shadow-2xl overflow-hidden border border-white/60">
      
      <!-- Orbe Flutuante de Iluminação -->
      <div class="absolute -top-20 -right-20 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl pointer-events-none animate-float-orb"></div>
      <div class="absolute -bottom-20 -left-20 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-float-orb-reverse"></div>

      <!-- Botão Fechar -->
      <button 
        @click="emit('close')" 
        class="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-white/60 transition"
      >
        <X class="w-5 h-5" />
      </button>

      <!-- TELA DE AVISO: Registro concluído - Verificação pendente -->
      <div v-if="mode === 'verify'" class="text-center py-4 space-y-4">
        <div class="w-16 h-16 bg-emerald-50/80 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto border border-emerald-200/60 shadow-inner">
          <Mail class="w-8 h-8" />
        </div>
        
        <h3 class="text-xl font-black text-slate-800 tracking-tight">Confirme seu E-mail</h3>
        
        <p class="text-xs text-slate-600 leading-relaxed px-2">
          Conta criada! Enviamos um link de confirmação para o e-mail 
          <strong class="text-slate-800 block text-sm font-bold mt-1">{{ formData.email }}</strong>
          <br>
          Acesse sua caixa de entrada (ou pasta de Spam) para ativar sua conta antes de fazer o login.
        </p>

        <button 
          @click="mode = 'login'; errorMessage = ''; successMessage = '';" 
          class="w-full py-3 px-4 liquid-glass-button text-white font-bold text-sm rounded-xl transition"
        >
          Ir para Tela de Login
        </button>
      </div>

      <!-- TELA PRINCIPAL: Login ou Cadastro -->
      <div v-else class="space-y-5">
        
        <!-- Abas Superiores (Entrar / Criar Conta) -->
        <div class="flex border-b border-slate-200/60 pb-1">
          <button 
            @click="mode = 'login'; errorMessage = ''; successMessage = ''; showResendButton = false;"
            class="flex-1 pb-3 text-sm font-bold border-b-2 transition"
            :class="mode === 'login' ? 'border-brand-600 text-brand-700 font-black' : 'border-transparent text-slate-400 hover:text-slate-600'"
          >
            Entrar
          </button>
          <button 
            @click="mode = 'register'; errorMessage = ''; successMessage = ''; showResendButton = false;"
            class="flex-1 pb-3 text-sm font-bold border-b-2 transition"
            :class="mode === 'register' ? 'border-brand-600 text-brand-700 font-black' : 'border-transparent text-slate-400 hover:text-slate-600'"
          >
            Criar Conta
          </button>
        </div>

        <!-- Alerta de Erro com opção de Reenviar E-mail -->
        <div v-if="errorMessage" class="p-3.5 bg-red-50/90 backdrop-blur-sm border border-red-200 rounded-2xl text-red-700 text-xs font-semibold flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <AlertCircle class="w-4 h-4 text-red-500 shrink-0" />
            <span>{{ errorMessage }}</span>
          </div>

          <!-- Botão para Reenviar E-mail de Confirmação caso esteja bloqueado por falta de verificação -->
          <button 
            v-if="showResendButton"
            @click="handleResendVerification" 
            type="button"
            :disabled="isLoading"
            class="mt-1 text-xs font-extrabold text-brand-700 hover:underline flex items-center gap-1.5 self-start bg-white/80 px-3 py-1.5 rounded-lg border border-brand-200/80 shadow-sm transition"
          >
            <RefreshCw class="w-3.5 h-3.5" :class="{ 'animate-spin': isLoading }" />
            <span>Reenviar E-mail de Confirmação</span>
          </button>
        </div>

        <!-- Alerta de Sucesso -->
        <div v-if="successMessage" class="p-3.5 bg-emerald-50/90 backdrop-blur-sm border border-emerald-200 rounded-2xl text-emerald-700 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
          <span>{{ successMessage }}</span>
        </div>

        <!-- Formulário de Autenticação -->
        <form @submit.prevent="handleSubmit" class="space-y-4">
          
          <!-- Campo Nome (Somente Cadastro) -->
          <div v-if="mode === 'register'">
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Nome Completo *</label>
            <div class="relative">
              <User class="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input 
                v-model="formData.name"
                type="text" 
                required 
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
                placeholder="exemplo@dominio.com"
                class="w-full pl-10 pr-3 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none"
              />
            </div>
          </div>

          <!-- Campo Senha -->
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Senha de Acesso *</label>
            <div class="relative">
              <Lock class="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input 
                v-model="formData.password"
                type="password" 
                required 
                placeholder="No mínimo 6 dígitos"
                class="w-full pl-10 pr-3 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none"
              />
            </div>
          </div>

          <!-- Botão Submeter -->
          <button 
            type="submit"
            :disabled="isLoading"
            class="w-full py-3 px-4 liquid-glass-button text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50"
          >
            <Loader2 v-if="isLoading" class="w-4 h-4 animate-spin" />
            <LogIn v-else-if="mode === 'login'" class="w-4 h-4" />
            <UserPlus v-else class="w-4 h-4" />
            <span>{{ mode === 'login' ? 'Entrar na Conta' : 'Finalizar Cadastro' }}</span>
          </button>
        </form>

        <div class="my-6 flex items-center justify-center gap-3">
          <span class="h-px bg-slate-200/60 flex-1"></span>
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Ou continue com</span>
          <span class="h-px bg-slate-200/60 flex-1"></span>
        </div>

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

      <div class="mt-6 pt-4 border-t border-slate-200/40 text-center">
        <span class="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-400">
          <ShieldCheck class="w-3.5 h-3.5 text-emerald-500" />
          Autenticação 100% segura e encriptada
        </span>
      </div>

    </div>
  </div>
</template>