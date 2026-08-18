<script setup>
import { ref, computed } from 'vue';
import { useAuth } from '../store/auth.js';
import { Home, User, LogOut, Menu, X, PlusCircle, Sparkles } from 'lucide-vue-next';

const emit = defineEmits(['open-auth', 'open-new-property']);

const { authState, logout } = useAuth();
const user = computed(() => authState?.user || null);

const mobileMenuOpen = ref(false);

const handleLogout = async () => {
  try {
    await logout();
    alert('Sessão encerrada com sucesso!');
  } catch (error) {
    console.error('Erro ao deslogar:', error);
  }
};
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white/70 backdrop-blur-xl backdrop-saturate-150 border-b border-white/40 shadow-lg shadow-slate-900/5 transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        
        <!-- Logo e Links Esquerdos com Router Links -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center gap-2 text-brand-700 font-black text-xl tracking-tight transition hover:opacity-90 active:scale-95">
            <div class="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-md shadow-brand-500/20">
              <Home class="w-4 h-4 stroke-[2.5]" />
            </div>
            <span>Prime<span class="text-slate-800 font-semibold">Imóveis</span></span>
          </router-link>

          <div class="hidden md:flex ml-10 space-x-6">
            <router-link 
              to="/comprar" 
              class="px-3 py-1.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-brand-600 hover:bg-white/60 transition"
              active-class="!font-bold !text-brand-700 !bg-brand-50/80 shadow-sm border border-brand-100/60"
            >
              Comprar
            </router-link>

            <router-link 
              to="/alugar" 
              class="px-3 py-1.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-brand-600 hover:bg-white/60 transition"
              active-class="!font-bold !text-brand-700 !bg-brand-50/80 shadow-sm border border-brand-100/60"
            >
              Alugar
            </router-link>

            <router-link 
              to="/lancamentos" 
              class="px-3 py-1.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-amber-600 hover:bg-white/60 transition flex items-center gap-1"
              active-class="!font-bold !text-amber-700 !bg-amber-50/80 shadow-sm border border-amber-200/60"
            >
              <Sparkles class="w-3.5 h-3.5 text-amber-500" />
              <span>Lançamentos</span>
            </router-link>

            <button 
              @click="emit('open-new-property')" 
              class="px-3 py-1.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/60 transition"
            >
              Anunciar
            </button>
          </div>
        </div>

        <!-- Botões de Perfil / Login Direitos (Desktop) -->
        <div class="hidden md:flex items-center gap-4">
          <!-- Se Logado -->
          <template v-if="user">
            <button 
              @click="emit('open-new-property')"
              class="liquid-glass-button inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white rounded-xl shadow-md"
            >
              <PlusCircle class="w-4 h-4" />
              <span>Anunciar Imóvel</span>
            </button>

            <div class="flex items-center gap-3 pl-4 border-l border-slate-200/60">
              <div class="flex flex-col text-right">
                <span class="text-xs font-bold text-slate-800 leading-none">
                  {{ user.displayName || 'Usuário' }}
                </span>
                <span class="text-[10px] text-slate-400 font-medium truncate max-w-[120px]">{{ user.email }}</span>
              </div>
              <div class="w-9 h-9 rounded-full bg-brand-100/80 flex items-center justify-center text-brand-700 font-bold border border-brand-200/60 shadow-inner">
                <img v-if="user.photoURL" :src="user.photoURL" alt="Avatar" class="w-full h-full rounded-full object-cover" />
                <span v-else>{{ (user.displayName || user.email || 'U')[0].toUpperCase() }}</span>
              </div>
              <button 
                @click="handleLogout" 
                title="Sair"
                class="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50/80 rounded-xl transition"
              >
                <LogOut class="w-4.5 h-4.5" />
              </button>
            </div>
          </template>

          <!-- Se Não Logado -->
          <template v-else>
            <button 
              @click="emit('open-auth')"
              class="inline-flex items-center gap-2 px-5 py-2 text-sm font-bold text-slate-700 bg-white/80 hover:bg-white hover:text-brand-600 rounded-xl border border-slate-200/80 shadow-sm active:scale-95 transition"
            >
              <User class="w-4 h-4 text-brand-600" />
              <span>Entrar / Cadastrar</span>
            </button>
          </template>
        </div>

        <!-- Botão Menu Hamburguer (Mobile) -->
        <div class="flex items-center md:hidden">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-white/80 transition"
          >
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Menu Dropdown Mobile -->
    <div v-show="mobileMenuOpen" class="md:hidden border-t border-white/40 bg-white/90 backdrop-blur-2xl">
      <div class="pt-3 pb-3 space-y-1.5 px-4">
        <router-link 
          to="/comprar" 
          @click="mobileMenuOpen = false"
          class="block px-3.5 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-white"
          active-class="!font-bold !text-brand-700 !bg-brand-50/80"
        >
          Comprar
        </router-link>

        <router-link 
          to="/alugar" 
          @click="mobileMenuOpen = false"
          class="block px-3.5 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-white"
          active-class="!font-bold !text-brand-700 !bg-brand-50/80"
        >
          Alugar
        </router-link>

        <router-link 
          to="/lancamentos" 
          @click="mobileMenuOpen = false"
          class="block px-3.5 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-white flex items-center gap-2"
          active-class="!font-bold !text-amber-700 !bg-amber-50/80"
        >
          <Sparkles class="w-4 h-4 text-amber-500" />
          <span>Lançamentos</span>
        </router-link>

        <button 
          @click="emit('open-new-property'); mobileMenuOpen = false" 
          class="block w-full text-left px-3.5 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-white"
        >
          Anunciar
        </button>
      </div>

      <div class="pt-4 pb-4 border-t border-slate-200/50 px-4">
        <div v-if="user" class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold border border-brand-200">
            <img v-if="user.photoURL" :src="user.photoURL" alt="Avatar" class="w-full h-full rounded-full object-cover" />
            <span v-else>{{ (user.displayName || user.email || 'U')[0].toUpperCase() }}</span>
          </div>
          <div>
            <div class="text-sm font-semibold text-slate-800">{{ user.displayName || 'Usuário' }}</div>
            <div class="text-xs text-slate-500">{{ user.email }}</div>
          </div>
          <button 
            @click="handleLogout"
            class="ml-auto p-2 text-slate-400 hover:text-red-500 rounded-xl transition"
          >
            <LogOut class="w-5 h-5" />
          </button>
        </div>
        <div v-else class="space-y-2">
          <button 
            @click="emit('open-auth'); mobileMenuOpen = false"
            class="w-full text-center py-3 px-4 rounded-xl text-sm font-bold text-white liquid-glass-button"
          >
            Entrar / Cadastrar
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>