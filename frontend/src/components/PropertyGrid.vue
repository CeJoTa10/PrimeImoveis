<script setup>
import { ref, onMounted, watch } from 'vue';
import PropertyCard from './PropertyCard.vue';
import { Loader2, AlertCircle, RefreshCw, Inbox } from 'lucide-vue-next';

const props = defineProps({
  filters: {
    type: Object,
    default: () => ({})
  }
});

const imoveis = ref([]);
const loading = ref(false);
const hasWarning = ref(false);

const fetchImoveis = async () => {
  loading.value = true;
  hasWarning.value = false;
  
  // Constrói os parâmetros de busca
  const queryParams = new URLSearchParams();
  if (props.filters.cidade) queryParams.append('cidade', props.filters.cidade);
  if (props.filters.tipo) queryParams.append('tipo', props.filters.tipo);
  if (props.filters.precoMax) queryParams.append('precoMax', props.filters.precoMax);
  if (props.filters.quartos) queryParams.append('quartos', props.filters.quartos);

  try {
    const response = await fetch(`http://localhost:3000/api/imoveis?${queryParams.toString()}`);
    if (!response.ok) throw new Error('Falha ao conectar na API de imóveis');
    const data = await response.json();
    imoveis.value = data;
  } catch (err) {
    console.warn('[PropertyGrid] Backend offline. Carregando dados locais mock para visualização.', err.message);
    hasWarning.value = true;
    
    // Dados de fallback para demonstração imediata do frontend
    imoveis.value = getFallbackData(props.filters);
  } finally {
    loading.value = false;
  }
};

// Monitora alterações nos filtros enviando novas requisições para a API
watch(() => props.filters, () => {
  fetchImoveis();
}, { deep: true });

onMounted(() => {
  fetchImoveis();
});

// Banco de dados mock de fallback
function getFallbackData(filters) {
  const fallbackList = [
    {
      id: "imovel-1",
      titulo: "Apartamento de Luxo Frente ao Mar",
      tipo: "Apartamento",
      preco: 1250000,
      localizacao: "Copacabana, Rio de Janeiro - RJ",
      quartos: 3,
      banheiros: 2,
      vagas: 2,
      area: 120,
      imagem: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      destaque: true
    },
    {
      id: "imovel-2",
      titulo: "Casa de Condomínio com Piscina",
      tipo: "Casa",
      preco: 2400000,
      localizacao: "Alphaville, Barueri - SP",
      quartos: 4,
      banheiros: 5,
      vagas: 4,
      area: 350,
      imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      destaque: true
    },
    {
      id: "imovel-3",
      titulo: "Cobertura Duplex Espetacular",
      tipo: "Cobertura",
      preco: 4800000,
      localizacao: "Ipanema, Rio de Janeiro - RJ",
      quartos: 3,
      banheiros: 4,
      vagas: 3,
      area: 280,
      imagem: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      destaque: false
    },
    {
      id: "imovel-4",
      titulo: "Casa de Campo Charmosa",
      tipo: "Casa",
      preco: 850000,
      localizacao: "Atibaia, São Paulo - SP",
      quartos: 3,
      banheiros: 2,
      vagas: 3,
      area: 200,
      imagem: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      destaque: true
    }
  ];

  let result = [...fallbackList];
  if (filters.tipo) {
    result = result.filter(item => item.tipo.toLowerCase() === filters.tipo.toLowerCase());
  }
  if (filters.cidade) {
    result = result.filter(item => item.localizacao.toLowerCase().includes(filters.cidade.toLowerCase()));
  }
  if (filters.precoMax) {
    result = result.filter(item => item.preco <= Number(filters.precoMax));
  }
  if (filters.quartos) {
    result = result.filter(item => item.quartos >= Number(filters.quartos));
  }
  return result;
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Título do Bloco -->
    <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
      <div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">Imóveis em Destaque</h2>
        <p class="text-slate-500 text-sm mt-1">Conheça nossas melhores opções disponíveis no mercado imobiliário.</p>
      </div>

      <!-- Alerta de Conexão com Mock de Demonstração -->
      <div 
        v-if="hasWarning" 
        class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-amber-800 bg-amber-50 border border-amber-200 text-xs font-semibold"
      >
        <AlertCircle class="w-4 h-4 text-amber-500 shrink-0" />
        <span>Backend offline. Exibindo imóveis demonstrativos.</span>
      </div>
    </div>

    <!-- Estado de Loading -->
    <div v-if="loading" class="flex flex-col items-center justify-center py-20">
      <Loader2 class="w-10 h-10 text-brand-600 animate-spin mb-4" />
      <span class="text-sm font-semibold text-slate-500">Buscando imóveis na base de dados...</span>
    </div>

    <!-- Lista Grid -->
    <template v-else>
      <div v-if="imoveis.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        <div v-for="imovel in imoveis" :key="imovel.id">
          <PropertyCard :imovel="imovel" />
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="flex flex-col items-center justify-center py-20 text-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 px-4">
        <Inbox class="w-12 h-12 text-slate-300 mb-4" />
        <h3 class="text-base font-bold text-slate-700 mb-1">Nenhum imóvel encontrado</h3>
        <p class="text-xs text-slate-400 max-w-sm">Tente reajustar seus filtros de pesquisa para encontrar novas correspondências.</p>
        <button 
          @click="fetchImoveis" 
          class="mt-4 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 rounded-lg transition"
        >
          <RefreshCw class="w-3.5 h-3.5" />
          Atualizar busca
        </button>
      </div>
    </template>
  </div>
</template>
