<script setup>
import { ref } from 'vue';
import Hero from '../components/Hero.vue';
import PropertyGrid from '../components/PropertyGrid.vue';

const searchFilters = ref({});
const gridRef = ref(null);

const handleSearch = (filters) => {
  searchFilters.value = filters;
};
</script>

<template>
  <div>
    <!-- Hero Banner & Search Filter -->
    <Hero @search="handleSearch" />

    <!-- Main Property Showcase Grid -->
    <PropertyGrid 
      ref="gridRef"
      :filters="searchFilters"
    />
  </div>
</template>
