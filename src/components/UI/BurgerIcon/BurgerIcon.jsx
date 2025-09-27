import styles from './BurgerIcon.module.scss';

export const BurgerIcon = ({ isOpen, onClick }) => {
  return (
    <button className={`${styles.burger} ${isOpen ? styles.open : ''}`} aria-label="Toggle menu" onClick={onClick}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.cross1}></span>
      <span className={styles.cross2}></span>
    </button>
  );
};
