import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', () => {
  const localStorageTheme = localStorage.getItem('theme') || 'dark';
  const theme = ref<string>(localStorageTheme);

  function setBodyAttribute() {
    theme.value === 'light'
      ? document.body.setAttribute('data-theme', 'light')
      : document.body.setAttribute('data-theme', 'dark');
  }

  function switchTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme.value);
    setBodyAttribute();
  }

  return {
    theme,
    switchTheme,
    setBodyAttribute,
  };
});
