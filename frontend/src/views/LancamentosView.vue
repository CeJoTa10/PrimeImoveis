<script setup>
import { ref } from 'vue';
import PropertyGrid from '../components/PropertyGrid.vue';
import { Search, MapPin, Building, DollarSign, BedDouble, Sparkles, Rocket } from 'lucide-vue-next';

const filters = ref({
  lancamento: true,
  cidade: '',
  tipo: '',
  precoMax: '',
  quartos: ''
});

const searchFilters = ref({ lancamento: true });

const applyFilters = () => {
  searchFilters.value = { ...filters.value };
};
</script>

<template>
  <div class="min-h-screen bg-slate-50/50">
    
    <!-- Banner de Cabeçalho dos Lançamentos (Liquid Glass com Orbe Amber) -->
    <div class="bg-gradient-to-r from-amber-950 via-slate-950 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
      <!-- Orbe Amber Flutuante -->
      <div class="absolute top-0 right-1/3 w-96 h-96 bg-amber-500/20 rounded-full blur-[140px] pointer-events-none animate-float-orb"></div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles class="w-4 h-4 text-amber-400" />
          <span>Lançamentos & Obras</span>
        </div>
        <h1 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight flex items-center gap-3">
          <span>Lançamentos Imobiliários Exclusivos</span>
          <Rocket class="w-8 h-8 text-amber-400 hidden sm:inline-block" />
        </h1>
        <p class="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl">
          Seja o primeiro a garantir unidades em empreendimentos na planta e recém-lançados com condições especiais de tabela zero.
        </p>

        <!-- Filtros Integrados no Topo com Liquid Glass -->
        <div class="mt-8 liquid-glass p-5 rounded-3xl shadow-2xl border border-white/40 text-slate-800">
          <form @submit.prevent="applyFilters" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            <!-- Localização -->
            <div class="relative flex flex-col justify-center">
              <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 pl-1">Localização</label>
              <div class="relative">
                <MapPin class="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <input 
                  v-model="filters.cidade"
                  type="text" 
                  placeholder="Cidade ou Bairro"
                  class="w-full pl-10 pr-3 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none"
                />
              </div>
            </div>

            <!-- Tipo -->
            <div class="relative flex flex-col justify-center">
              <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 pl-1">Tipo</label>
              <div class="relative">
                <Building class="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <select 
                  v-model="filters.tipo"
                  class="w-full pl-10 pr-3 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">Todos os tipos</option>
                  <option value="Apartamento">Apartamento</option>
                  <option value="Casa">Casa</option>
                  <option value="Cobertura">Cobertura</option>
                </select>
              </div>
            </div>

            <!-- Preço Máximo -->
            <div class="relative flex flex-col justify-center">
              <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 pl-1">Investimento Máximo</label>
              <div class="relative">
                <DollarSign class="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <select 
                  v-model="filters.precoMax"
                  class="w-full pl-10 pr-3 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">Qualquer valor</option>
                  <option value="1000000">Até R$ 1 Milhão</option>
                  <option value="2500000">Até R$ 2,5 Milhões</option>
                  <option value="5000000">Até R$ 5 Milhões</option>
                </select>
              </div>
            </div>

            <!-- Quartos -->
            <div class="relative flex flex-col justify-center">
              <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 pl-1">Quartos</label>
              <div class="relative">
                <BedDouble class="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <select 
                  v-model="filters.quartos"
                  class="w-full pl-10 pr-3 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">Qualquer qtd</option>
                  <option value="1">1+ quarto</option>
                  <option value="2">2+ quartos</option>
                  <option value="3">3+ quartos</option>
                  <option value="4">4+ quartos</option>
                </select>
              </div>
            </div>

            <!-- Botão -->
            <div class="flex items-end">
              <button 
                type="submit"
                class="w-full py-2.5 px-4 bg-amber-600/90 hover:bg-amber-600 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 active:scale-95 transition"
              >
                <Search class="w-4 h-4" />
                <span>Ver Lançamentos</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>

    <!-- Grid de Imóveis -->
    <PropertyGrid :filters="searchFilters" />
  </div>
</template>
