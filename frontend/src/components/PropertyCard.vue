<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { BedDouble, Bath, Car, Maximize, Heart, MapPin, Sparkles } from 'lucide-vue-next';

const props = defineProps({
  imovel: {
    type: Object,
    required: true
  }
});

const router = useRouter();

// Estado de favorito local por card
const isFavorited = ref(false);

const toggleFavorite = () => {
  isFavorited.value = !isFavorited.value;
};

const goToDetails = () => {
  if (props.imovel?.id) {
    router.push(`/imovel/${props.imovel.id}`);
  }
};

// Formatação brasileira de moedas
const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(value || 0);
};
</script>

<template>
  <div 
    @click="goToDetails"
    class="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-brand-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer select-none"
  >
    
    <!-- Imagem de Destaque -->
    <div class="relative overflow-hidden aspect-[4/3] bg-slate-100">
      <img 
        :src="imovel.imagem" 
        :alt="imovel.titulo" 
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
      />
      
      <!-- Destaque Tag -->
      <div class="absolute top-3 left-3 flex flex-col gap-1 z-10">
        <span 
          v-if="imovel.destaque" 
          class="bg-brand-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm w-fit"
        >
          Destaque
        </span>
        <span 
          v-if="imovel.lancamento" 
          class="bg-amber-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm w-fit flex items-center gap-1"
        >
          <Sparkles class="w-3 h-3" /> Lançamento
        </span>
      </div>

      <!-- Tipo de Imóvel Tag -->
      <span 
        class="absolute top-3 right-12 bg-slate-900/75 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-1 rounded-lg z-10"
      >
        {{ imovel.tipo }}
      </span>

      <!-- Botão Favoritar -->
      <button 
        @click.stop="toggleFavorite"
        class="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white text-slate-400 hover:text-red-500 shadow-sm active:scale-95 transition z-10"
        :class="{ '!text-red-500 !bg-white': isFavorited }"
      >
        <Heart 
          class="w-4 h-4 transition-colors" 
          :class="{ 'fill-red-500 text-red-500': isFavorited }" 
        />
      </button>
    </div>

    <!-- Conteúdo do Card -->
    <div class="p-5 flex flex-col flex-1">
      
      <!-- Preço -->
      <div class="flex items-baseline gap-1.5 mb-2">
        <span class="text-xl font-extrabold text-brand-700">{{ formatCurrency(imovel.preco) }}</span>
        <span v-if="imovel.transacao === 'Aluguel' || imovel.tipo === 'Aluguel'" class="text-xs text-slate-400 font-medium">/ mês</span>
      </div>

      <!-- Título -->
      <h3 class="text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-brand-600 transition mb-1">
        {{ imovel.titulo }}
      </h3>

      <!-- Localização -->
      <div class="flex items-center gap-1 text-slate-400 mb-4">
        <MapPin class="w-3.5 h-3.5 shrink-0" />
        <span class="text-xs font-medium line-clamp-1">{{ imovel.localizacao }}</span>
      </div>

      <!-- Características (Quartos, Banheiros, Vagas, Área) -->
      <div class="grid grid-cols-4 gap-2 pt-4 border-t border-slate-100 text-slate-500 mt-auto">
        <div class="flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-xl" title="Quartos">
          <BedDouble class="w-4 h-4 text-slate-400 mb-1" />
          <span class="text-[11px] font-bold text-slate-700">{{ imovel.quartos }} Qto</span>
        </div>
        <div class="flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-xl" title="Banheiros">
          <Bath class="w-4 h-4 text-slate-400 mb-1" />
          <span class="text-[11px] font-bold text-slate-700">{{ imovel.banheiros }} Ban</span>
        </div>
        <div class="flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-xl" title="Vagas de Garagem">
          <Car class="w-4 h-4 text-slate-400 mb-1" />
          <span class="text-[11px] font-bold text-slate-700">{{ imovel.vagas }} Vagas</span>
        </div>
        <div class="flex flex-col items-center justify-center p-1.5 bg-slate-50 rounded-xl" title="Área Privativa">
          <Maximize class="w-4 h-4 text-slate-400 mb-1" />
          <span class="text-[11px] font-bold text-slate-700">{{ imovel.area }} m²</span>
        </div>
      </div>
    </div>
  </div>
</template>
