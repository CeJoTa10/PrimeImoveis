<script setup>
import { ref, reactive, watch } from 'vue';
import { useAuth } from '../store/auth.js';
import { createImovel } from '../services/api.js';
import { X, Plus, AlertCircle, Loader2, Building, PlusCircle } from 'lucide-vue-next';

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
    const novoImovel = await createImovel(formData, token.value);
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
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
    <!-- Backdrop Blur Overlay -->
    <div 
      @click="emit('close')" 
      class="fixed inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity"
    ></div>

    <!-- Modal Card Liquid Glass -->
    <div class="relative liquid-glass w-full max-w-lg rounded-3xl p-6 sm:p-8 z-10 shadow-2xl overflow-hidden border border-white/60 max-h-[90vh] overflow-y-auto">
      
      <!-- Orbes de Luz de Fundo -->
      <div class="absolute -top-20 -right-20 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <button 
        @click="emit('close')" 
        class="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-white/60 transition"
      >
        <X class="w-5 h-5" />
      </button>

      <h2 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
        <PlusCircle class="w-6 h-6 text-brand-600 stroke-[2.5]" />
        <span>Anunciar Novo Imóvel</span>
      </h2>

      <div v-if="errorMessage" class="mb-6 p-4 bg-red-50/90 border border-red-200 rounded-2xl text-red-700 text-xs font-semibold flex items-center gap-2">
        <AlertCircle class="w-4 h-4 text-red-500 shrink-0" />
        <span>{{ errorMessage }}</span>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Título do Anúncio *</label>
          <input 
            v-model="formData.titulo"
            type="text" 
            required 
            placeholder="Ex: Apartamento decorado no centro"
            class="w-full px-3.5 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none"
          />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Tipo *</label>
            <select 
              v-model="formData.tipo"
              required 
              class="w-full px-3.5 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none cursor-pointer"
            >
              <option value="Apartamento">Apartamento</option>
              <option value="Casa">Casa</option>
              <option value="Cobertura">Cobertura</option>
            </select>
          </div>
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Preço (R$) *</label>
            <input 
              v-model="formData.preco"
              type="number" 
              required 
              placeholder="Ex: 450000"
              class="w-full px-3.5 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Localização *</label>
          <input 
            v-model="formData.localizacao"
            type="text" 
            required 
            placeholder="Cidade, Estado ou Bairro"
            class="w-full px-3.5 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none"
          />
        </div>

        <div class="grid grid-cols-4 gap-3">
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Quartos</label>
            <input 
              v-model="formData.quartos"
              type="number" 
              placeholder="0"
              class="w-full px-3 py-2 text-sm liquid-glass-input rounded-xl focus:outline-none text-center"
            />
          </div>
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Banheiros</label>
            <input 
              v-model="formData.banheiros"
              type="number" 
              placeholder="0"
              class="w-full px-3 py-2 text-sm liquid-glass-input rounded-xl focus:outline-none text-center"
            />
          </div>
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Vagas</label>
            <input 
              v-model="formData.vagas"
              type="number" 
              placeholder="0"
              class="w-full px-3 py-2 text-sm liquid-glass-input rounded-xl focus:outline-none text-center"
            />
          </div>
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Área (m²)</label>
            <input 
              v-model="formData.area"
              type="number" 
              placeholder="0"
              class="w-full px-3 py-2 text-sm liquid-glass-input rounded-xl focus:outline-none text-center"
            />
          </div>
        </div>

        <div>
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">Descrição do Imóvel</label>
          <textarea 
            v-model="formData.descricao"
            rows="3"
            placeholder="Descreva os detalhes importantes..."
            class="w-full px-3.5 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none resize-none"
          ></textarea>
        </div>

        <div>
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1 block">URL da Imagem do Imóvel</label>
          <input 
            v-model="formData.imagem"
            type="url" 
            placeholder="Ex: https://images.unsplash.com/..."
            class="w-full px-3.5 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none"
          />
        </div>

        <div class="flex items-center gap-2 py-2">
          <input 
            v-model="formData.destaque"
            id="destaque" 
            type="checkbox" 
            class="w-4 h-4 text-brand-600 border-slate-300 rounded focus:ring-brand-500"
          />
          <label for="destaque" class="text-xs font-semibold text-slate-700 cursor-pointer select-none">Exibir em destaque na página inicial</label>
        </div>

        <div class="flex gap-4 pt-4 border-t border-slate-200/50">
          <button 
            type="button" 
            @click="emit('close')" 
            class="flex-1 py-3 border border-slate-200/80 bg-white/80 hover:bg-white text-slate-600 font-semibold text-sm rounded-xl transition active:scale-[0.98]"
          >
            Cancelar
          </button>

          <button 
            type="submit" 
            :disabled="isSubmitting"
            class="flex-1 liquid-glass-button text-white font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50"
          >
            <Loader2 v-if="isSubmitting" class="w-4 h-4 animate-spin" />
            <span>Cadastrar Imóvel</span>
          </button>
        </div>
      </form>

    </div>
  </div>
</template>
