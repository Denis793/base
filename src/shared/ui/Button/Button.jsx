import clsx from 'clsx';
import { forwardRef } from 'react';
import styles from './Button.module.scss';

export const Button = forwardRef(
  ({ children, variant = 'primary', round = false, icon = null, direction = null, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={clsx(
          styles.button,
          ...variant.split(' ').map((v) => styles[v]),
          round && styles.round,
          direction && styles[`arrow${direction.charAt(0).toUpperCase() + direction.slice(1)}`],
          className
        )}
        {...props}
      >
        {icon ? <img src={icon} alt={`${direction || ''} arrow`} className={styles.arrowIcon} /> : children}
      </button>
    );
  }
);
