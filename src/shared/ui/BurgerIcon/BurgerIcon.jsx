import clsx from 'clsx';
import styles from './BurgerIcon.module.scss';

export const BurgerIcon = ({ isOpen, onClick }) => {
  return (
    <button
      type="button"
      aria-label="Toggle menu"
      className={clsx(styles.burger, isOpen && styles.open)}
      onClick={onClick}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.cross1}></span>
      <span className={styles.cross2}></span>
    </button>
  );
};
