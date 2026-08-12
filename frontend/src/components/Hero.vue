<script setup>
import { ref } from 'vue';
import { Search, MapPin, Building, DollarSign, BedDouble } from 'lucide-vue-next';

const emit = defineEmits(['search']);

// Estado local dos filtros de pesquisa
const filters = ref({
  cidade: '',
  tipo: '',
  precoMax: '',
  quartos: ''
});

const executeSearch = () => {
  // Envia os filtros para o componente pai fazer a query na API
  emit('search', { ...filters.value });
};
</script>

<template>
  <div class="relative bg-slate-900 overflow-hidden py-24 sm:py-32 flex items-center min-h-[500px]">
    <!-- Imagem de Fundo Premium com Gradient Overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80" 
        alt="Casa de luxo" 
        class="w-full h-full object-cover object-center opacity-40 select-none pointer-events-none"
      />
      <div class="absolute inset-0 bg-gradient-to-tr from-brand-950 via-brand-900/80 to-transparent"></div>
    </div>

    <!-- Conteúdo Central -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
      <div class="max-w-3xl">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/25 border border-brand-400/30 text-brand-200 mb-6">
          ✨ Sua imobiliária digital de confiança
        </span>
        <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Encontre o lar perfeito para a sua história.
        </h1>
        <p class="mt-4 text-lg text-slate-300">
          Pesquise entre milhares de casas, apartamentos e coberturas selecionadas especialmente para você com as melhores taxas do mercado.
        </p>
      </div>

      <!-- Barra de Pesquisa Avançada -->
      <div class="mt-10 bg-white/95 backdrop-blur-lg p-5 rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-950/20 max-w-5xl border border-white/20">
        <form @submit.prevent="executeSearch" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          <!-- Filtro: Localização (Cidade) -->
          <div class="relative flex flex-col justify-center">
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1">Localização</label>
            <div class="relative">
              <MapPin class="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input 
                v-model="filters.cidade"
                type="text" 
                placeholder="Qual cidade deseja?"
                class="w-full pl-9 pr-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
              />
            </div>
          </div>

          <!-- Filtro: Tipo de Imóvel -->
          <div class="relative flex flex-col justify-center">
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1">Tipo do Imóvel</label>
            <div class="relative">
              <Building class="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <select 
                v-model="filters.tipo"
                class="w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition appearance-none cursor-pointer"
              >
                <option value="">Todos os tipos</option>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Cobertura">Cobertura</option>
              </select>
            </div>
          </div>

          <!-- Filtro: Faixa de Preço (Máximo) -->
          <div class="relative flex flex-col justify-center">
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1">Preço Máximo</label>
            <div class="relative">
              <DollarSign class="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <select 
                v-model="filters.precoMax"
                class="w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition appearance-none cursor-pointer"
              >
                <option value="">Qualquer preço</option>
                <option value="500000">Até R$ 500 mil</option>
                <option value="1000000">Até R$ 1 Milhão</option>
                <option value="2000000">Até R$ 2 Milhões</option>
                <option value="5000000">Até R$ 5 Milhões</option>
              </select>
            </div>
          </div>

          <!-- Filtro: Número de Quartos -->
          <div class="relative flex flex-col justify-center">
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1">Quartos</label>
            <div class="relative">
              <BedDouble class="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <select 
                v-model="filters.quartos"
                class="w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition appearance-none cursor-pointer"
              >
                <option value="">Qualquer quantidade</option>
                <option value="1">1+ quarto</option>
                <option value="2">2+ quartos</option>
                <option value="3">3+ quartos</option>
                <option value="4">4+ quartos</option>
              </select>
            </div>
          </div>

          <!-- Botão Pesquisar -->
          <div class="flex items-end">
            <button 
              type="submit"
              class="w-full bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-brand-200 transition duration-150"
            >
              <Search class="w-4 h-4" />
              <span>Buscar</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>
