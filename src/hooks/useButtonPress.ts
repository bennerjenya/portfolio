import { onMounted } from 'vue';

export const useButtonPress = (callback: Function, keyCode: string) => {
  onMounted(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.code === keyCode) callback();
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });
};
