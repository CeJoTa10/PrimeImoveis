<script setup>
import { ref } from 'vue';
import PropertyGrid from '../components/PropertyGrid.vue';
import { Search, MapPin, Building, DollarSign, BedDouble, Tag } from 'lucide-vue-next';

const filters = ref({
  transacao: 'Comprar',
  cidade: '',
  tipo: '',
  precoMax: '',
  quartos: ''
});

const searchFilters = ref({ transacao: 'Comprar' });

const applyFilters = () => {
  searchFilters.value = { ...filters.value };
};
</script>

<template>
  <div class="min-h-screen bg-slate-50/50">
    
    <!-- Banner de Cabeçalho da Categoria -->
    <div class="bg-gradient-to-r from-slate-950 via-brand-950 to-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
      <!-- Orbe de Fundo -->
      <div class="absolute -top-10 left-1/3 w-80 h-80 bg-brand-500/15 rounded-full blur-[120px] pointer-events-none animate-float-orb"></div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="flex items-center gap-2 text-brand-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Tag class="w-4 h-4" />
          <span>Comprar Imóveis</span>
        </div>
        <h1 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
          Encontre imóveis à venda com as melhores condições
        </h1>
        <p class="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl">
          Casas, apartamentos e coberturas selecionadas para quem busca comprar um imóvel próprio com transparência.
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
                  <option value="Casa">Casa</option>
                  <option value="Apartamento">Apartamento</option>
                  <option value="Cobertura">Cobertura</option>
                </select>
              </div>
            </div>

            <!-- Preço Máximo -->
            <div class="relative flex flex-col justify-center">
              <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 pl-1">Preço Máximo</label>
              <div class="relative">
                <DollarSign class="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <select 
                  v-model="filters.precoMax"
                  class="w-full pl-10 pr-3 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">Qualquer valor</option>
                  <option value="500000">Até R$ 500 mil</option>
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
                class="w-full py-2.5 px-4 liquid-glass-button text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2"
              >
                <Search class="w-4 h-4" />
                <span>Filtrar</span>
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
