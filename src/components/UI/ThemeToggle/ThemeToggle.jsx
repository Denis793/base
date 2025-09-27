import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './ThemeToggle.module.scss';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button onClick={toggleTheme} className={styles.toggle} aria-label="Toggle theme">
      {theme === 'light' ? <FaSun /> : <FaMoon />}
    </button>
  );
};
