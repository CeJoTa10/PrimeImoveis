<script setup>
import { ref } from 'vue';
import { Search, MapPin, Building, DollarSign, BedDouble, Sparkles } from 'lucide-vue-next';

const emit = defineEmits(['search']);

const filters = ref({
  cidade: '',
  tipo: '',
  precoMax: '',
  quartos: ''
});

const executeSearch = () => {
  emit('search', { ...filters.value });
};
</script>

<template>
  <div class="relative bg-slate-950 overflow-hidden py-24 sm:py-32 flex items-center min-h-[560px]">
    <!-- Imagem de Fundo com Gradient & Overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80" 
        alt="Casa de luxo" 
        class="w-full h-full object-cover object-center opacity-30 select-none pointer-events-none filter saturate-150"
      />
      <div class="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/90 to-slate-950/60"></div>
    </div>

    <!-- Orbes Flutuantes Iluminados de Fundo (Liquid Orbs) -->
    <div class="absolute top-1/4 left-10 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px] pointer-events-none animate-float-orb"></div>
    <div class="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none animate-float-orb-reverse"></div>

    <!-- Conteúdo Central -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
      <div class="max-w-3xl">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/20 text-brand-200 mb-6 shadow-inner">
          <Sparkles class="w-3.5 h-3.5 text-amber-400" />
          <span>Sua imobiliária digital de alta performance</span>
        </span>
        <h1 class="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-sm">
          Encontre o lar perfeito para a sua história.
        </h1>
        <p class="mt-4 text-lg text-slate-300 font-medium max-w-2xl leading-relaxed">
          Pesquise entre milhares de casas, apartamentos e coberturas selecionadas com experiência fluida e sem burocracia.
        </p>
      </div>

      <!-- Barra de Pesquisa em Vidro Líquido (Liquid Glass Search Panel) -->
      <div class="mt-10 liquid-glass p-5 sm:p-6 rounded-3xl shadow-2xl max-w-5xl border border-white/40">
        <form @submit.prevent="executeSearch" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          <!-- Filtro: Localização -->
          <div class="relative flex flex-col justify-center">
            <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 pl-1">Localização</label>
            <div class="relative">
              <MapPin class="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input 
                v-model="filters.cidade"
                type="text" 
                placeholder="Qual cidade ou bairro?"
                class="w-full pl-10 pr-3 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none"
              />
            </div>
          </div>

          <!-- Filtro: Tipo do Imóvel -->
          <div class="relative flex flex-col justify-center">
            <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 pl-1">Tipo do Imóvel</label>
            <div class="relative">
              <Building class="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <select 
                v-model="filters.tipo"
                class="w-full pl-10 pr-3 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none appearance-none cursor-pointer"
              >
                <option value="">Todos os tipos</option>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Cobertura">Cobertura</option>
              </select>
            </div>
          </div>

          <!-- Filtro: Preço Máximo -->
          <div class="relative flex flex-col justify-center">
            <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 pl-1">Preço Máximo</label>
            <div class="relative">
              <DollarSign class="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <select 
                v-model="filters.precoMax"
                class="w-full pl-10 pr-3 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none appearance-none cursor-pointer"
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
            <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 pl-1">Quartos</label>
            <div class="relative">
              <BedDouble class="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <select 
                v-model="filters.quartos"
                class="w-full pl-10 pr-3 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none appearance-none cursor-pointer"
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
              class="w-full py-2.5 px-4 liquid-glass-button text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2"
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
