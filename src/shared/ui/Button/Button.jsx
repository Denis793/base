import clsx from 'clsx';
import styles from './Button.module.scss';

export const Button = ({ children, variant = 'primary', className, ...props }) => {
  return (
    <button type="button" className={clsx(styles.button, styles[variant], className)} {...props}>
      {children}
    </button>
  );
};
