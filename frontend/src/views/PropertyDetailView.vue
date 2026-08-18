<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchImovelById } from '../services/api.js';
import { 
  BedDouble, Bath, Car, Maximize, MapPin, 
  ChevronLeft, Phone, Mail, MessageSquare, Send, Check, 
  Sparkles, ShieldCheck, Heart, Share2, Loader2, AlertCircle 
} from 'lucide-vue-next';

const route = useRoute();
const router = useRouter();

const imovel = ref(null);
const loading = ref(true);
const selectedImageIndex = ref(0);
const isFavorited = ref(false);
const contactSent = ref(false);
const isSubmittingContact = ref(false);

const contactForm = ref({
  nome: '',
  email: '',
  telefone: '',
  mensagem: ''
});

const loadImovel = async () => {
  loading.value = true;
  contactSent.value = false;
  selectedImageIndex.value = 0;
  
  const id = route.params.id;
  const result = await fetchImovelById(id);
  imovel.value = result.data;
  
  if (imovel.value) {
    contactForm.value.mensagem = `Olá, tenho interesse no imóvel "${imovel.value.titulo}" (Cód: ${imovel.value.id}). Gostaria de mais informações.`;
  }
  loading.value = false;
};

onMounted(() => {
  loadImovel();
});

watch(() => route.params.id, () => {
  loadImovel();
});

const formatCurrency = (val) => {
  if (!val) return 'R$ 0';
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(val);
};

const activeImage = computed(() => {
  if (!imovel.value) return '';
  if (imovel.value.galeria && imovel.value.galeria.length > 0) {
    return imovel.value.galeria[selectedImageIndex.value] || imovel.value.imagem;
  }
  return imovel.value.imagem;
});

const galleryList = computed(() => {
  if (!imovel.value) return [];
  if (imovel.value.galeria && imovel.value.galeria.length > 0) {
    return imovel.value.galeria;
  }
  return [imovel.value.imagem];
});

const handleWhatsAppClick = () => {
  if (!imovel.value) return;
  const num = imovel.value.corretor?.whatsapp || '5511998765432';
  const text = encodeURIComponent(`Olá! Vi o imóvel "${imovel.value.titulo}" no site Prime Imóveis e gostaria de agendar uma visita.`);
  window.open(`https://wa.me/${num}?text=${text}`, '_blank');
};

const handleContactSubmit = async () => {
  isSubmittingContact.value = true;
  await new Promise(r => setTimeout(r, 800));
  isSubmittingContact.value = false;
  contactSent.value = true;
};
</script>

<template>
  <div class="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      
      <!-- Botão Voltar & Breadcrumbs -->
      <div class="flex items-center justify-between mb-6">
        <button 
          @click="router.back()" 
          class="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-600 transition bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm"
        >
          <ChevronLeft class="w-4 h-4" />
          Voltar para listagem
        </button>

        <div class="hidden sm:flex items-center gap-2 text-xs text-slate-400">
          <router-link to="/" class="hover:text-slate-600">Home</router-link>
          <span>/</span>
          <span>Imóveis</span>
          <span>/</span>
          <span class="text-slate-700 font-semibold truncate max-w-[200px]">{{ imovel?.titulo || 'Carregando' }}</span>
        </div>
      </div>

      <!-- Estado de Carregamento -->
      <div v-if="loading" class="flex flex-col items-center justify-center py-32 bg-white rounded-3xl border border-slate-100 shadow-sm">
        <Loader2 class="w-12 h-12 text-brand-600 animate-spin mb-4" />
        <span class="text-sm font-semibold text-slate-500">Carregando detalhes do imóvel...</span>
      </div>

      <div v-else-if="imovel" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Coluna Esquerda/Principal: Fotos + Specs + Descrição -->
        <div class="lg:col-span-2 space-y-8">
          
          <!-- Galeria de Imagens -->
          <div class="bg-white p-3 sm:p-4 rounded-3xl border border-slate-100 shadow-sm space-y-3">
            
            <!-- Imagem Principal -->
            <div class="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 group">
              <img 
                :src="activeImage" 
                :alt="imovel.titulo" 
                class="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              
              <!-- Badges Superiores -->
              <div class="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                <span v-if="imovel.destaque" class="bg-brand-600 text-white text-xs font-extrabold px-3 py-1 rounded-lg uppercase tracking-wider shadow-md">
                  Destaque
                </span>
                <span v-if="imovel.lancamento" class="bg-amber-500 text-white text-xs font-extrabold px-3 py-1 rounded-lg uppercase tracking-wider shadow-md">
                  ✨ Lançamento
                </span>
                <span class="bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-lg">
                  {{ imovel.tipo }}
                </span>
              </div>

              <!-- Botão Favoritar -->
              <button 
                @click="isFavorited = !isFavorited"
                class="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-xl text-slate-500 hover:text-red-500 shadow-md active:scale-95 transition"
                :class="{ '!text-red-500 !bg-white': isFavorited }"
              >
                <Heart class="w-5 h-5" :class="{ 'fill-red-500 text-red-500': isFavorited }" />
              </button>
            </div>

            <!-- Miniaturas / Carrossel -->
            <div v-if="galleryList.length > 1" class="grid grid-cols-4 gap-3">
              <button 
                v-for="(img, idx) in galleryList" 
                :key="idx"
                @click="selectedImageIndex = idx"
                class="relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition focus:outline-none"
                :class="selectedImageIndex === idx ? 'border-brand-600 ring-2 ring-brand-500/30 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'"
              >
                <img :src="img" :alt="`Foto ${idx + 1}`" class="w-full h-full object-cover" />
              </button>
            </div>
          </div>

          <!-- Cabeçalho do Imóvel & Specs -->
          <div class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            
            <div>
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 w-fit">
                  {{ imovel.transacao === 'Aluguel' ? 'Disponível para Locação' : 'Disponível para Venda' }}
                </span>
                <span class="text-xs text-slate-400 font-medium">Código do imóvel: {{ imovel.id }}</span>
              </div>

              <h1 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {{ imovel.titulo }}
              </h1>

              <div class="flex items-center gap-1.5 text-slate-500 text-sm mt-2">
                <MapPin class="w-4 h-4 text-brand-600 shrink-0" />
                <span>{{ imovel.localizacao }}</span>
              </div>
            </div>

            <!-- Preço -->
            <div class="pt-4 border-t border-slate-100 flex items-baseline gap-2">
              <span class="text-3xl sm:text-4xl font-black text-brand-700">
                {{ formatCurrency(imovel.preco) }}
              </span>
              <span v-if="imovel.transacao === 'Aluguel' || imovel.tipo === 'Aluguel'" class="text-base font-semibold text-slate-500">
                / mês
              </span>
            </div>

            <!-- Card Grid de Características -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div class="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                <BedDouble class="w-6 h-6 text-brand-600 mb-2" />
                <span class="text-base font-extrabold text-slate-800">{{ imovel.quartos }}</span>
                <span class="text-xs font-medium text-slate-500">Quartos</span>
              </div>

              <div class="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                <Bath class="w-6 h-6 text-brand-600 mb-2" />
                <span class="text-base font-extrabold text-slate-800">{{ imovel.banheiros }}</span>
                <span class="text-xs font-medium text-slate-500">Banheiros</span>
              </div>

              <div class="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                <Car class="w-6 h-6 text-brand-600 mb-2" />
                <span class="text-base font-extrabold text-slate-800">{{ imovel.vagas }}</span>
                <span class="text-xs font-medium text-slate-500">Vagas</span>
              </div>

              <div class="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                <Maximize class="w-6 h-6 text-brand-600 mb-2" />
                <span class="text-base font-extrabold text-slate-800">{{ imovel.area }} m²</span>
                <span class="text-xs font-medium text-slate-500">Área Útil</span>
              </div>
            </div>
          </div>

          <!-- Descrição Detalhada -->
          <div class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <h2 class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
              Descrição do Imóvel
            </h2>
            <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
              {{ imovel.descricaoDetalhada || imovel.descricao }}
            </p>
          </div>

          <!-- Comodidades / Diferenciais -->
          <div v-if="imovel.comodidades && imovel.comodidades.length > 0" class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <h2 class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
              Comodidades e Diferenciais
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div 
                v-for="(item, idx) in imovel.comodidades" 
                :key="idx"
                class="flex items-center gap-2.5 p-3 rounded-xl bg-brand-50/50 border border-brand-100 text-xs font-semibold text-slate-700"
              >
                <div class="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center shrink-0">
                  <Check class="w-3 h-3 stroke-[3]" />
                </div>
                <span>{{ item }}</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Coluna Direita: Card do Corretor e Formulário de Contato -->
        <div class="space-y-6">
          <div class="sticky top-24 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 space-y-6">
            
            <!-- Perfil do Corretor -->
            <div class="flex items-center gap-4 pb-6 border-b border-slate-100">
              <img 
                :src="imovel.corretor?.foto || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'" 
                alt="Corretor" 
                class="w-14 h-14 rounded-full object-cover border-2 border-brand-500 shadow-sm shrink-0"
              />
              <div>
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-brand-600">Corretor Responsável</span>
                <h3 class="text-base font-bold text-slate-900">{{ imovel.corretor?.nome || 'Carlos Eduardo Silva' }}</h3>
                <span class="text-xs text-slate-400 font-medium">CRECI: 98765-F</span>
              </div>
            </div>

            <!-- Botão Direto WhatsApp -->
            <button 
              @click="handleWhatsAppClick"
              class="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-200 transition duration-150"
            >
              <MessageSquare class="w-5 h-5" />
              <span>Falar via WhatsApp</span>
            </button>

            <div class="relative flex items-center justify-center">
              <span class="h-px bg-slate-100 w-full"></span>
              <span class="bg-white px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider absolute">Ou envie uma mensagem</span>
            </div>

            <!-- Mensagem de Sucesso -->
            <div v-if="contactSent" class="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-center space-y-2">
              <div class="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <Check class="w-6 h-6" />
              </div>
              <h4 class="font-bold text-sm">Mensagem enviada com sucesso!</h4>
              <p class="text-xs text-emerald-600">O corretor responsável entrará em contato em breve.</p>
              <button @click="contactSent = false" class="text-xs font-bold text-emerald-700 underline pt-2">Enviar outra mensagem</button>
            </div>

            <!-- Formulário de Contato -->
            <form v-else @submit.prevent="handleContactSubmit" class="space-y-4">
              <div>
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Seu Nome *</label>
                <input 
                  v-model="contactForm.nome"
                  type="text" 
                  required 
                  placeholder="Nome completo"
                  class="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                />
              </div>

              <div>
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">E-mail *</label>
                <input 
                  v-model="contactForm.email"
                  type="email" 
                  required 
                  placeholder="exemplo@email.com"
                  class="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                />
              </div>

              <div>
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Telefone / WhatsApp *</label>
                <input 
                  v-model="contactForm.telefone"
                  type="tel" 
                  required 
                  placeholder="(00) 00000-0000"
                  class="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                />
              </div>

              <div>
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Mensagem</label>
                <textarea 
                  v-model="contactForm.mensagem"
                  rows="3"
                  class="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                :disabled="isSubmittingContact"
                class="w-full py-3 px-4 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md shadow-brand-100 transition disabled:opacity-50"
              >
                <Loader2 v-if="isSubmittingContact" class="w-4 h-4 animate-spin" />
                <Send v-else class="w-4 h-4" />
                <span>Enviar Solicitação</span>
              </button>
            </form>

            <div class="pt-4 border-t border-slate-100 text-center">
              <span class="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                <ShieldCheck class="w-4 h-4 text-emerald-500" />
                Seus dados estão protegidos com total segurança
              </span>
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>
