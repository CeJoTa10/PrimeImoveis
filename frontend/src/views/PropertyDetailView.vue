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
  <div class="min-h-screen bg-slate-50/50 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Orbes Flutuantes Iluminados de Fundo -->
    <div class="absolute top-20 left-10 w-96 h-96 bg-brand-500/10 rounded-full blur-[140px] pointer-events-none"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      
      <!-- Botão Voltar & Breadcrumbs -->
      <div class="flex items-center justify-between mb-6">
        <button 
          @click="router.back()" 
          class="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-brand-600 transition liquid-glass px-4 py-2 rounded-xl shadow-sm border border-white/60 active:scale-95"
        >
          <ChevronLeft class="w-4 h-4" />
          <span>Voltar para listagem</span>
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
      <div v-if="loading" class="flex flex-col items-center justify-center py-32 liquid-glass rounded-3xl border border-white/60 shadow-lg">
        <Loader2 class="w-12 h-12 text-brand-600 animate-spin mb-4" />
        <span class="text-sm font-semibold text-slate-500">Carregando detalhes do imóvel...</span>
      </div>

      <div v-else-if="imovel" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Coluna Esquerda/Principal: Fotos + Specs + Descrição -->
        <div class="lg:col-span-2 space-y-8">
          
          <!-- Galeria de Imagens -->
          <div class="liquid-glass p-3 sm:p-4 rounded-3xl border border-white/60 shadow-xl space-y-3">
            
            <!-- Imagem Principal -->
            <div class="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 group">
              <img 
                :src="activeImage" 
                :alt="imovel.titulo" 
                class="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              
              <!-- Badges Superiores -->
              <div class="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                <span v-if="imovel.destaque" class="bg-brand-600/90 backdrop-blur-md text-white text-xs font-black px-3 py-1 rounded-xl uppercase tracking-wider shadow-md">
                  Destaque
                </span>
                <span v-if="imovel.lancamento" class="bg-amber-500/90 backdrop-blur-md text-white text-xs font-black px-3 py-1 rounded-xl uppercase tracking-wider shadow-md flex items-center gap-1">
                  <Sparkles class="w-3.5 h-3.5" /> Lançamento
                </span>
                <span class="bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-xl">
                  {{ imovel.tipo }}
                </span>
              </div>

              <!-- Botão Favoritar -->
              <button 
                @click="isFavorited = !isFavorited"
                class="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-md rounded-xl text-slate-500 hover:text-red-500 shadow-md active:scale-95 transition border border-white/50"
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
                :class="selectedImageIndex === idx ? 'border-brand-600 ring-4 ring-brand-500/20 opacity-100 scale-[1.02]' : 'border-transparent opacity-60 hover:opacity-100'"
              >
                <img :src="img" :alt="`Foto ${idx + 1}`" class="w-full h-full object-cover" />
              </button>
            </div>
          </div>

          <!-- Cabeçalho do Imóvel & Specs -->
          <div class="liquid-glass p-6 sm:p-8 rounded-3xl border border-white/60 shadow-xl space-y-6">
            <div>
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200/50 w-fit">
                  {{ imovel.transacao === 'Aluguel' ? 'Disponível para Locação' : 'Disponível para Venda' }}
                </span>
                <span class="text-xs text-slate-400 font-medium">Código do imóvel: {{ imovel.id }}</span>
              </div>

              <h1 class="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                {{ imovel.titulo }}
              </h1>

              <div class="flex items-center gap-1.5 text-slate-500 text-sm mt-2">
                <MapPin class="w-4 h-4 text-brand-600 shrink-0" />
                <span>{{ imovel.localizacao }}</span>
              </div>
            </div>

            <!-- Preço -->
            <div class="pt-4 border-t border-slate-200/60 flex items-baseline gap-2">
              <span class="text-3xl sm:text-5xl font-black text-brand-700">
                {{ formatCurrency(imovel.preco) }}
              </span>
              <span v-if="imovel.transacao === 'Aluguel' || imovel.tipo === 'Aluguel'" class="text-base font-bold text-slate-500">
                / mês
              </span>
            </div>

            <!-- Card Grid de Características -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div class="flex flex-col items-center justify-center p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/80 shadow-sm text-center">
                <BedDouble class="w-6 h-6 text-brand-600 mb-2" />
                <span class="text-lg font-black text-slate-800">{{ imovel.quartos }}</span>
                <span class="text-xs font-medium text-slate-500">Quartos</span>
              </div>

              <div class="flex flex-col items-center justify-center p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/80 shadow-sm text-center">
                <Bath class="w-6 h-6 text-brand-600 mb-2" />
                <span class="text-lg font-black text-slate-800">{{ imovel.banheiros }}</span>
                <span class="text-xs font-medium text-slate-500">Banheiros</span>
              </div>

              <div class="flex flex-col items-center justify-center p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/80 shadow-sm text-center">
                <Car class="w-6 h-6 text-brand-600 mb-2" />
                <span class="text-lg font-black text-slate-800">{{ imovel.vagas }}</span>
                <span class="text-xs font-medium text-slate-500">Vagas</span>
              </div>

              <div class="flex flex-col items-center justify-center p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/80 shadow-sm text-center">
                <Maximize class="w-6 h-6 text-brand-600 mb-2" />
                <span class="text-lg font-black text-slate-800">{{ imovel.area }} m²</span>
                <span class="text-xs font-medium text-slate-500">Área Útil</span>
              </div>
            </div>
          </div>

          <!-- Descrição Detalhada -->
          <div class="liquid-glass p-6 sm:p-8 rounded-3xl border border-white/60 shadow-xl space-y-4">
            <h2 class="text-xl font-black text-slate-900 border-b border-slate-200/60 pb-3">
              Descrição do Imóvel
            </h2>
            <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
              {{ imovel.descricaoDetalhada || imovel.descricao }}
            </p>
          </div>

          <!-- Comodidades / Diferenciais -->
          <div v-if="imovel.comodidades && imovel.comodidades.length > 0" class="liquid-glass p-6 sm:p-8 rounded-3xl border border-white/60 shadow-xl space-y-4">
            <h2 class="text-xl font-black text-slate-900 border-b border-slate-200/60 pb-3">
              Comodidades e Diferenciais
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div 
                v-for="(item, idx) in imovel.comodidades" 
                :key="idx"
                class="flex items-center gap-2.5 p-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/80 text-xs font-bold text-slate-700 shadow-sm"
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
          <div class="sticky top-24 liquid-glass p-6 sm:p-8 rounded-3xl border border-white/60 shadow-2xl space-y-6">
            
            <!-- Perfil do Corretor -->
            <div class="flex items-center gap-4 pb-6 border-b border-slate-200/60">
              <img 
                :src="imovel.corretor?.foto || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'" 
                alt="Corretor" 
                class="w-14 h-14 rounded-full object-cover border-2 border-brand-500 shadow-md shrink-0"
              />
              <div>
                <span class="text-[10px] font-black uppercase tracking-wider text-brand-600">Corretor Responsável</span>
                <h3 class="text-base font-bold text-slate-900">{{ imovel.corretor?.nome || 'Carlos Eduardo Silva' }}</h3>
                <span class="text-xs text-slate-400 font-medium">CRECI: 98765-F</span>
              </div>
            </div>

            <!-- Botão Direto WhatsApp -->
            <button 
              @click="handleWhatsAppClick"
              class="w-full py-3.5 px-4 bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition"
            >
              <MessageSquare class="w-5 h-5" />
              <span>Falar via WhatsApp</span>
            </button>

            <div class="relative flex items-center justify-center">
              <span class="h-px bg-slate-200/60 w-full"></span>
              <span class="bg-white/80 px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider absolute rounded-full">Ou envie uma mensagem</span>
            </div>

            <!-- Mensagem de Sucesso -->
            <div v-if="contactSent" class="p-4 bg-emerald-50/90 backdrop-blur-md border border-emerald-200 rounded-2xl text-emerald-800 text-center space-y-2">
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
                  class="w-full px-3.5 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none"
                />
              </div>

              <div>
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">E-mail *</label>
                <input 
                  v-model="contactForm.email"
                  type="email" 
                  required 
                  placeholder="exemplo@email.com"
                  class="w-full px-3.5 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none"
                />
              </div>

              <div>
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Telefone / WhatsApp *</label>
                <input 
                  v-model="contactForm.telefone"
                  type="tel" 
                  required 
                  placeholder="(00) 00000-0000"
                  class="w-full px-3.5 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none"
                />
              </div>

              <div>
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Mensagem</label>
                <textarea 
                  v-model="contactForm.mensagem"
                  rows="3"
                  class="w-full px-3.5 py-2.5 text-sm liquid-glass-input rounded-xl focus:outline-none resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                :disabled="isSubmittingContact"
                class="w-full py-3 px-4 liquid-glass-button text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50"
              >
                <Loader2 v-if="isSubmittingContact" class="w-4 h-4 animate-spin" />
                <Send v-else class="w-4 h-4" />
                <span>Enviar Solicitação</span>
              </button>
            </form>

            <div class="pt-4 border-t border-slate-200/50 text-center">
              <span class="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
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
