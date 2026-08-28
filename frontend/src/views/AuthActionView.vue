<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { verifyEmailWithActionCode } from '../firebase.js';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, Home, KeyRound } from 'lucide-vue-next';

const route = useRoute();
const router = useRouter();

const status = ref('loading'); // 'loading' | 'success' | 'error'
const message = ref('');
const verifiedEmail = ref('');
const rawCodeInput = ref('');

const processAction = async (code) => {
  if (!code) {
    status.value = 'error';
    message.value = 'Código de verificação não encontrado na URL.';
    return;
  }

  status.value = 'loading';
  message.value = 'Validando e ativando sua conta com o Firebase...';

  try {
    const result = await verifyEmailWithActionCode(code);
    status.value = 'success';
    verifiedEmail.value = result.email;
    message.value = 'Seu e-mail foi confirmado com sucesso! Sua conta agora está ativa e pronta para uso.';
  } catch (err) {
    console.error('[AuthActionView Error]:', err);
    status.value = 'error';
    switch (err.code) {
      case 'auth/expired-action-code':
        message.value = 'Este link/código de confirmação expirou. Solicite um novo link de confirmação.';
        break;
      case 'auth/invalid-action-code':
        message.value = 'Código de confirmação inválido ou já utilizado anteriormente.';
        break;
      case 'auth/user-disabled':
        message.value = 'Esta conta de usuário foi desativada.';
        break;
      case 'auth/user-not-found':
        message.value = 'Usuário associado a este código não foi encontrado.';
        break;
      default:
        message.value = err.message || 'Falha ao confirmar o e-mail. Tente novamente.';
    }
  }
};

const handleManualSubmit = () => {
  if (!rawCodeInput.value.trim()) return;
  processAction(rawCodeInput.value.trim());
};

onMounted(() => {
  const oobCode = route.query.oobCode || route.query.code;
  const mode = route.query.mode;

  if (oobCode) {
    processAction(oobCode);
  } else if (!mode) {
    status.value = 'error';
    message.value = 'Nenhum código de verificação foi detectado nos parâmetros de URL.';
  }
});
</script>

<template>
  <div class="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
    <!-- Efeitos de iluminação de fundo -->
    <div class="absolute -top-32 -left-32 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none animate-float-orb"></div>
    <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-float-orb-reverse"></div>

    <!-- Container Card -->
    <div class="relative w-full max-w-lg liquid-glass rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/60 z-10 text-center space-y-6">
      
      <!-- Estado: CARREGANDO -->
      <div v-if="status === 'loading'" class="space-y-4 py-6">
        <div class="w-20 h-20 bg-brand-50 text-brand-600 rounded-3xl flex items-center justify-center mx-auto border border-brand-200/60 shadow-inner">
          <Loader2 class="w-10 h-10 animate-spin" />
        </div>
        <h1 class="text-2xl font-black text-slate-800 tracking-tight">Confirmando seu E-mail</h1>
        <p class="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">{{ message }}</p>
      </div>

      <!-- Estado: SUCESSO -->
      <div v-else-if="status === 'success'" class="space-y-5 py-4">
        <div class="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto border border-emerald-200/60 shadow-inner">
          <CheckCircle2 class="w-10 h-10" />
        </div>
        <div>
          <span class="inline-block px-3 py-1 bg-emerald-100/80 text-emerald-800 text-xs font-bold rounded-full mb-3">Conta Verificada</span>
          <h1 class="text-2xl font-black text-slate-800 tracking-tight">E-mail Confirmado!</h1>
          <p v-if="verifiedEmail" class="text-sm font-semibold text-slate-700 mt-1">{{ verifiedEmail }}</p>
          <p class="text-xs text-slate-500 mt-2 leading-relaxed max-w-sm mx-auto">{{ message }}</p>
        </div>

        <div class="pt-4 flex flex-col sm:flex-row gap-3">
          <button 
            @click="router.push('/')"
            class="flex-1 py-3 px-5 liquid-glass-button text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg transition"
          >
            <span>Ir para o Início & Entrar</span>
            <ArrowRight class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Estado: ERRO -->
      <div v-else class="space-y-5 py-4">
        <div class="w-20 h-20 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mx-auto border border-red-200/60 shadow-inner">
          <AlertCircle class="w-10 h-10" />
        </div>
        <div>
          <span class="inline-block px-3 py-1 bg-red-100/80 text-red-800 text-xs font-bold rounded-full mb-3">Falha na Verificação</span>
          <h1 class="text-2xl font-black text-slate-800 tracking-tight">Não foi possível confirmar</h1>
          <p class="text-xs text-red-600 font-medium mt-2 leading-relaxed max-w-sm mx-auto">{{ message }}</p>
        </div>

        <!-- Inserção manual de código caso queira tentar novamente -->
        <div class="bg-white/80 p-4 rounded-2xl border border-slate-200/80 text-left space-y-3 shadow-sm">
          <label class="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
            <KeyRound class="w-3.5 h-3.5 text-brand-600" />
            Tentar com outro código ou link
          </label>
          <div class="flex gap-2">
            <input 
              v-model="rawCodeInput"
              type="text" 
              placeholder="Cole o código oobCode ou link recebido"
              class="flex-1 px-3 py-2 text-xs liquid-glass-input rounded-xl focus:outline-none"
            />
            <button 
              @click="handleManualSubmit"
              :disabled="!rawCodeInput.trim()"
              class="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl disabled:opacity-50 transition"
            >
              Validar
            </button>
          </div>
        </div>

        <div class="pt-2">
          <button 
            @click="router.push('/')"
            class="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition"
          >
            <Home class="w-4 h-4" />
            <span>Voltar para a Página Principal</span>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>
