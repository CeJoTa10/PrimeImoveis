<script setup>
import { ref, computed } from 'vue';
import { useAuth } from '../store/auth.js';
import { Home, User, LogOut, Menu, X, PlusCircle } from 'lucide-vue-next';

// Define os eventos de clique que o componente pai (App.vue) irá escutar
const emit = defineEmits(['open-auth', 'open-new-property']);

// Extrai a store de autenticação e função de logout
const { authState, logout } = useAuth();

// Garante o acesso seguro ao objeto user
const user = computed(() => authState?.user || null);

// Controle do menu mobile
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
  <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        
        <!-- Logo e Links Esquerdos com Router Links -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center gap-2 text-brand-700 font-extrabold text-xl tracking-tight transition hover:opacity-90">
            <Home class="w-6 h-6 text-brand-600 stroke-[2.5]" />
            <span>Prime<span class="text-slate-800 font-medium">Imóveis</span></span>
          </router-link>

          <div class="hidden md:flex ml-10 space-x-8">
            <router-link 
              to="/comprar" 
              class="px-1 pt-1 text-sm font-medium text-slate-500 hover:text-brand-600 transition border-b-2 border-transparent"
              active-class="!font-bold !text-brand-700 !border-brand-600"
            >
              Comprar
            </router-link>

            <router-link 
              to="/alugar" 
              class="px-1 pt-1 text-sm font-medium text-slate-500 hover:text-brand-600 transition border-b-2 border-transparent"
              active-class="!font-bold !text-brand-700 !border-brand-600"
            >
              Alugar
            </router-link>

            <router-link 
              to="/lancamentos" 
              class="px-1 pt-1 text-sm font-medium text-slate-500 hover:text-brand-600 transition border-b-2 border-transparent"
              active-class="!font-bold !text-brand-700 !border-brand-600"
            >
              Lançamentos
            </router-link>

            <button 
              @click="emit('open-new-property')" 
              class="px-1 pt-1 text-sm font-medium text-slate-500 hover:text-slate-700 transition"
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
              class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-xl transition duration-150 shadow-sm shadow-brand-200"
            >
              <PlusCircle class="w-4 h-4" />
              Anunciar Imóvel
            </button>

            <div class="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div class="flex flex-col text-right">
                <span class="text-xs font-semibold text-slate-800 leading-none">
                  {{ user.displayName || 'Usuário' }}
                </span>
                <span class="text-[10px] text-slate-400 font-medium">{{ user.email }}</span>
              </div>
              <div class="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold border border-brand-200">
                <img v-if="user.photoURL" :src="user.photoURL" alt="Avatar" class="w-full h-full rounded-full object-cover" />
                <span v-else>{{ (user.displayName || user.email || 'U')[0].toUpperCase() }}</span>
              </div>
              <button 
                @click="handleLogout" 
                title="Sair"
                class="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition"
              >
                <LogOut class="w-5 h-5" />
              </button>
            </div>
          </template>

          <!-- Se Não Logado -->
          <template v-else>
            <button 
              @click="emit('open-auth')"
              class="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-xl transition"
            >
              <User class="w-4 h-4" />
              Entrar / Cadastrar
            </button>
          </template>
        </div>

        <!-- Botão Menu Hamburguer (Mobile) -->
        <div class="flex items-center md:hidden">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition"
          >
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Menu Dropdown Mobile com Router Links -->
    <div v-show="mobileMenuOpen" class="md:hidden border-t border-slate-100 bg-white">
      <div class="pt-2 pb-3 space-y-1 px-4">
        <router-link 
          to="/comprar" 
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          active-class="!font-semibold !text-brand-700 !bg-brand-50"
        >
          Comprar
        </router-link>

        <router-link 
          to="/alugar" 
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          active-class="!font-semibold !text-brand-700 !bg-brand-50"
        >
          Alugar
        </router-link>

        <router-link 
          to="/lancamentos" 
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          active-class="!font-semibold !text-brand-700 !bg-brand-50"
        >
          Lançamentos
        </router-link>

        <button 
          @click="emit('open-new-property'); mobileMenuOpen = false" 
          class="block w-full text-left px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
        >
          Anunciar
        </button>
      </div>

      <div class="pt-4 pb-4 border-t border-slate-100 px-4">
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
            class="w-full text-center py-2.5 px-4 rounded-xl text-sm font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 transition"
          >
            Entrar / Cadastrar
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>