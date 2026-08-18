<script setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import AuthModal from './components/AuthModal.vue';
import NewPropertyModal from './components/NewPropertyModal.vue';
import Footer from './components/Footer.vue';

// Estados de abertura dos Modais
const isAuthModalOpen = ref(false);
const isNewPropertyModalOpen = ref(false);

const handlePropertyCreated = () => {
  // Dispara recarregamento se necessário
};
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50 selection:bg-brand-500 selection:text-white">
    <!-- Barra de Navegação -->
    <Navbar 
      @open-auth="isAuthModalOpen = true"
      @open-new-property="isNewPropertyModalOpen = true"
    />

    <!-- Conteúdo Principal via Vue Router -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Rodapé -->
    <Footer />

    <!-- Modais Flutuantes -->
    <AuthModal 
      :is-open="isAuthModalOpen" 
      @close="isAuthModalOpen = false" 
    />
    
    <NewPropertyModal 
      :is-open="isNewPropertyModalOpen" 
      @close="isNewPropertyModalOpen = false"
      @property-created="handlePropertyCreated"
    />
  </div>
</template>

<style>
/* Estilos Globais Customizados */
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f5f9;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
