import clsx from 'clsx';
import { forwardRef } from 'react';
import styles from './Button.module.scss';

export const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      type = 'button',
      round = false,
      icon = null,
      direction = null,
      className,
      ...props
    },
    ref
  ) => {
    const variantClasses = variant
      .split(' ')
      .map((v) => styles[v])
      .filter(Boolean);

    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          styles.button,
          variantClasses,
          round && styles.round,
          direction && styles[`arrow${direction[0].toUpperCase() + direction.slice(1)}`],
          className
        )}
        {...props}
      >
        {icon ? <img src={icon} alt="icon" className={styles.arrowIcon} /> : children}
      </button>
    );
  }
);
