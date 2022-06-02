import { useState } from 'react';

export const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = () => {
    setIsShown(!isShown);
    document.body.classList.toggle('noScroll');
  };
  return {
    isShown,
    toggle,
  };
};