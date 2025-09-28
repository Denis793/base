import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from './ThemeToggle.module.scss';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const handleToggle = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button className={styles.toggle} onClick={handleToggle} aria-label="Toggle theme">
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
};
