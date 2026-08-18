<script setup>
import { ref, onMounted, watch } from 'vue';
import PropertyCard from './PropertyCard.vue';
import { Loader2, AlertCircle, RefreshCw, Inbox } from 'lucide-vue-next';
import { fetchImoveis } from '../services/api.js';

const props = defineProps({
  filters: {
    type: Object,
    default: () => ({})
  }
});

const imoveis = ref([]);
const loading = ref(false);
const hasWarning = ref(false);

const loadData = async () => {
  loading.value = true;
  hasWarning.value = false;

  const result = await fetchImoveis(props.filters);
  imoveis.value = result.data;
  hasWarning.value = result.isFallback;
  loading.value = false;
};

// Monitora alterações nos filtros enviando novas requisições para a API
watch(() => props.filters, () => {
  loadData();
}, { deep: true });

onMounted(() => {
  loadData();
});

defineExpose({
  fetchImoveis: loadData
});
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    
    <!-- Cabeçalho do Grid com Indicadores -->
    <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
      <div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">Imóveis em Destaque</h2>
        <p class="text-slate-500 text-sm mt-1">Conheça nossas melhores opções disponíveis no mercado imobiliário.</p>
      </div>

      <!-- Alerta Discreto de Fallback quando a API estiver offline -->
      <div 
        v-if="hasWarning" 
        class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-amber-800 bg-amber-50 border border-amber-200 text-xs font-semibold"
      >
        <AlertCircle class="w-4 h-4 text-amber-500 shrink-0" />
        <span>Backend offline. Exibindo imóveis demonstrativos.</span>
      </div>
    </div>

    <!-- Indicador de Carregamento -->
    <div v-if="loading" class="flex flex-col items-center justify-center py-20">
      <Loader2 class="w-10 h-10 text-brand-600 animate-spin mb-4" />
      <span class="text-sm font-semibold text-slate-500">Buscando imóveis na base de dados...</span>
    </div>

    <template v-else>
      <!-- Listagem de Cards de Imóveis -->
      <div v-if="imoveis.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        <div v-for="imovel in imoveis" :key="imovel.id">
          <PropertyCard :imovel="imovel" />
        </div>
      </div>

      <!-- Estado Vazio (Sem Resultados) -->
      <div v-else class="flex flex-col items-center justify-center py-20 text-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 px-4">
        <Inbox class="w-12 h-12 text-slate-300 mb-4" />
        <h3 class="text-base font-bold text-slate-700 mb-1">Nenhum imóvel encontrado</h3>
        <p class="text-xs text-slate-400 max-w-sm">Tente reajustar seus filtros de pesquisa para encontrar novas correspondências.</p>
        <button 
          @click="loadData" 
          class="mt-4 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 rounded-lg transition"
        >
          <RefreshCw class="w-3.5 h-3.5" />
          <span>Atualizar busca</span>
        </button>
      </div>
    </template>

  </div>
</template>
