<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useThemeStore } from '@/stores/theme';
import TheHeader from '@/components/TheHeader.vue';

onMounted(() => {
  const { setBodyAttribute } = useThemeStore();
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', defaultDark ? 'dark' : 'light');
  }
  setBodyAttribute();
});
</script>

<template>
  <TheHeader />
  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500&display=swap');
</style>
