<script setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import PropertyGrid from './components/PropertyGrid.vue';
import AuthModal from './components/AuthModal.vue';
import NewPropertyModal from './components/NewPropertyModal.vue';
import Footer from './components/Footer.vue';

// Filtros compartilhados entre Hero (busca) e PropertyGrid (listagem)
const searchFilters = ref({});

// Estados de abertura dos Modais
const isAuthModalOpen = ref(false);
const isNewPropertyModalOpen = ref(false);

// Referência ao grid de imóveis para recarregar a lista quando um novo imóvel for criado
const gridRef = ref(null);

const handleSearch = (filters) => {
  searchFilters.value = filters;
};

const handlePropertyCreated = () => {
  if (gridRef.value) {
    gridRef.value.fetchImoveis();
  }
};
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50 selection:bg-brand-500 selection:text-white">
    <!-- Barra de Navegação -->
    <Navbar 
      @open-auth="isAuthModalOpen = true"
      @open-new-property="isNewPropertyModalOpen = true"
    />

    <!-- Conteúdo Principal -->
    <main class="flex-grow">
      <!-- Banner de Destaque e Barra de Filtros -->
      <Hero @search="handleSearch" />

      <!-- Listagem de Imóveis -->
      <PropertyGrid 
        ref="gridRef" 
        :filters="searchFilters" 
      />
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
