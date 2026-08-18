<script setup>
import { ref } from 'vue';
import PropertyGrid from '../components/PropertyGrid.vue';
import { Search, MapPin, Building, DollarSign, BedDouble, KeyRound } from 'lucide-vue-next';

const filters = ref({
  transacao: 'Aluguel',
  cidade: '',
  tipo: '',
  precoMax: '',
  quartos: ''
});

const searchFilters = ref({ transacao: 'Aluguel' });

const applyFilters = () => {
  searchFilters.value = { ...filters.value };
};
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    
    <!-- Banner de Cabeçalho da Categoria -->
    <div class="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
          <KeyRound class="w-4 h-4" />
          <span>Alugar Imóveis</span>
        </div>
        <h1 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
          Imóveis para alugar nos melhores bairros
        </h1>
        <p class="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl">
          Encontre apartamentos, studios e casas prontas para morar com aluguel sem burocracia.
        </p>

        <!-- Filtros Integrados no Topo -->
        <div class="mt-8 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-xl border border-white/20 text-slate-800">
          <form @submit.prevent="applyFilters" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            <!-- Localização -->
            <div class="relative flex flex-col justify-center">
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1">Localização</label>
              <div class="relative">
                <MapPin class="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input 
                  v-model="filters.cidade"
                  type="text" 
                  placeholder="Cidade ou Bairro"
                  class="w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                />
              </div>
            </div>

            <!-- Tipo -->
            <div class="relative flex flex-col justify-center">
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1">Tipo do Imóvel</label>
              <div class="relative">
                <Building class="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <select 
                  v-model="filters.tipo"
                  class="w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition cursor-pointer"
                >
                  <option value="">Todos os tipos</option>
                  <option value="Apartamento">Apartamento</option>
                  <option value="Casa">Casa</option>
                  <option value="Cobertura">Cobertura</option>
                </select>
              </div>
            </div>

            <!-- Aluguel Máximo Mensal -->
            <div class="relative flex flex-col justify-center">
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1">Aluguel Máx. (Mês)</label>
              <div class="relative">
                <DollarSign class="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <select 
                  v-model="filters.precoMax"
                  class="w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition cursor-pointer"
                >
                  <option value="">Qualquer valor</option>
                  <option value="3000">Até R$ 3.000 / mês</option>
                  <option value="5000">Até R$ 5.000 / mês</option>
                  <option value="8000">Até R$ 8.000 / mês</option>
                  <option value="15000">Até R$ 15.000 / mês</option>
                </select>
              </div>
            </div>

            <!-- Quartos -->
            <div class="relative flex flex-col justify-center">
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 pl-1">Quartos</label>
              <div class="relative">
                <BedDouble class="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <select 
                  v-model="filters.quartos"
                  class="w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition cursor-pointer"
                >
                  <option value="">Qualquer qtd</option>
                  <option value="1">1+ quarto</option>
                  <option value="2">2+ quartos</option>
                  <option value="3">3+ quartos</option>
                </select>
              </div>
            </div>

            <!-- Botão -->
            <div class="flex items-end">
              <button 
                type="submit"
                class="w-full bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition duration-150"
              >
                <Search class="w-4 h-4" />
                <span>Buscar Aluguéis</span>
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
