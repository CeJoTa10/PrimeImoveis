<script setup>
import { ref, reactive, watch } from 'vue';
import { useAuth } from '../store/auth.js';
import { X, Plus, AlertCircle, Loader2 } from 'lucide-vue-next';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close', 'property-created']);
const { token } = useAuth();

const isSubmitting = ref(false);
const errorMessage = ref('');

const formData = reactive({
  titulo: '',
  descricao: '',
  tipo: 'Apartamento',
  preco: '',
  localizacao: '',
  quartos: '',
  banheiros: '',
  vagas: '',
  area: '',
  imagem: '',
  destaque: false
});

// Limpa campos ao abrir/fechar
watch(() => props.isOpen, (newVal) => {
  if (!newVal) {
    formData.titulo = '';
    formData.descricao = '';
    formData.tipo = 'Apartamento';
    formData.preco = '';
    formData.localizacao = '';
    formData.quartos = '';
    formData.banheiros = '';
    formData.vagas = '';
    formData.area = '';
    formData.imagem = '';
    formData.destaque = false;
    errorMessage.value = '';
  }
});

const handleSubmit = async () => {
  isSubmitting.value = true;
  errorMessage.value = '';

  try {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    const response = await fetch(`${API_URL}/api/imoveis`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.value}`
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error || 'Erro desconhecido ao salvar o imóvel.');
    }

    const novoImovel = await response.json();
    emit('property-created', novoImovel);
    emit('close');
  } catch (err) {
    console.error('[NewPropertyModal] Erro ao cadastrar imóvel:', err);
    errorMessage.value = err.message || 'Falha ao cadastrar. Verifique a conexão com o servidor Express.';
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
    <div class="relative bg-white w-full max-w-lg rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
      
      <!-- Botão Fechar -->
      <button 
        @click="emit('close')"
        class="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-50 transition"
      >
        <X class="w-5 h-5" />
      </button>

      <h2 class="text-xl font-extrabold text-slate-800 mb-6 flex items-center gap-2">
        <Plus class="w-5 h-5 text-brand-600 stroke-[2.5]" />
        Anunciar Novo Imóvel
      </h2>

      <!-- Erros -->
      <div 
        v-if="errorMessage" 
        class="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold flex items-center gap-2"
      >
        <AlertCircle class="w-4 h-4 text-red-500 shrink-0" />
        <span>{{ errorMessage }}</span>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        
        <!-- Título -->
        <div>
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Título do Anúncio *</label>
          <input 
            v-model="formData.titulo"
            type="text" 
            required 
            placeholder="Ex: Apartamento decorado no centro"
            class="w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
          />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <!-- Tipo -->
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Tipo *</label>
            <select 
              v-model="formData.tipo"
              required
              class="w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition cursor-pointer"
            >
              <option value="Apartamento">Apartamento</option>
              <option value="Casa">Casa</option>
              <option value="Cobertura">Cobertura</option>
            </select>
          </div>

          <!-- Preço -->
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Preço (R$) *</label>
            <input 
              v-model="formData.preco"
              type="number" 
              required 
              placeholder="Ex: 450000"
              class="w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
            />
          </div>
        </div>

        <!-- Localização -->
        <div>
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Localização *</label>
          <input 
            v-model="formData.localizacao"
            type="text" 
            required 
            placeholder="Cidade, Estado ou Bairro"
            class="w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
          />
        </div>

        <!-- Atributos -->
        <div class="grid grid-cols-4 gap-3">
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Quartos</label>
            <input 
              v-model="formData.quartos"
              type="number" 
              placeholder="0"
              class="w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
            />
          </div>
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Banheiros</label>
            <input 
              v-model="formData.banheiros"
              type="number" 
              placeholder="0"
              class="w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
            />
          </div>
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Vagas</label>
            <input 
              v-model="formData.vagas"
              type="number" 
              placeholder="0"
              class="w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
            />
          </div>
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Área (m²)</label>
            <input 
              v-model="formData.area"
              type="number" 
              placeholder="0"
              class="w-full px-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
            />
          </div>
        </div>

        <!-- Descrição -->
        <div>
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Descrição do Imóvel</label>
          <textarea 
            v-model="formData.descricao"
            rows="3"
            placeholder="Descreva os detalhes importantes..."
            class="w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition resize-none"
          ></textarea>
        </div>

        <!-- URL da imagem -->
        <div>
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">URL da Imagem do Imóvel</label>
          <input 
            v-model="formData.imagem"
            type="url" 
            placeholder="Ex: https://images.unsplash.com/..."
            class="w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
          />
        </div>

        <!-- Destaque -->
        <div class="flex items-center gap-2 py-2">
          <input 
            v-model="formData.destaque"
            id="destaque" 
            type="checkbox" 
            class="w-4 h-4 text-brand-600 border-slate-300 rounded focus:ring-brand-500"
          />
          <label for="destaque" class="text-xs font-semibold text-slate-600 cursor-pointer select-none">Exibir em destaque na página inicial</label>
        </div>

        <!-- Botões -->
        <div class="flex gap-4 pt-4 border-t border-slate-100">
          <button 
            type="button" 
            @click="emit('close')"
            class="flex-1 py-2.5 border border-slate-200 text-slate-600 font-semibold text-sm rounded-xl hover:bg-slate-50 transition active:scale-[0.98]"
          >
            Cancelar
          </button>
          <button 
            type="submit" 
            :disabled="isSubmitting"
            class="flex-1 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50"
          >
            <Loader2 v-if="isSubmitting" class="w-4 h-4 animate-spin" />
            <span>Cadastrar Imóvel</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
