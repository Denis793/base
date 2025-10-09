import { useEffect, useState } from 'react';
import { themeImages } from '@/shared/config/themeImages';
import clsx from 'clsx';
import styles from './ThemeImage.module.scss';

export const ThemeImage = ({ name, alt = 'image', className, position = 'center', fit = 'contain' }) => {
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const imageSrc = isDark ? themeImages[name]?.dark : themeImages[name]?.light;

  if (!imageSrc) {
    console.warn(`No theme image found for key: "${name}"`);
    return null;
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      loading="lazy"
      className={clsx(styles.themeImage, styles[`pos-${position}`], styles[`fit-${fit}`], className)}
    />
  );
};
