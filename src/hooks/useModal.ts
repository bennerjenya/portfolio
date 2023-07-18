import { ref } from 'vue';

export const useModal = () => {
  const isShown = ref<boolean>(false);
  const openModal = () => {
    isShown.value = true;
    document.body.classList.add('noScroll');
  };

  const closeModal = () => {
    isShown.value = false;
    document.body.classList.remove('noScroll');
  };

  const toggle = () => {
    isShown.value = !isShown.value;
    document.body.classList.toggle('noScroll');
  };

  return {
    isShown,
    toggle,
    openModal,
    closeModal,
  };
};
