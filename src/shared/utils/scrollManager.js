import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollWithOffset } from './scrollWithOffset';

export const useScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => scrollWithOffset(element), 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);
};
