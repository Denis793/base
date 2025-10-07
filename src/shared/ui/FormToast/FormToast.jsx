import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './FormToast.module.scss';

export const FormToast = ({ show, type = 'success', message = '', duration = 3000, onHide }) => {
  useEffect(() => {
    if (show && onHide) {
      const timer = setTimeout(onHide, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onHide]);

  if (!show) return null;

  return (
    <div
      className={clsx(
        styles.toast,
        type === 'success' && styles.toastSuccess,
        type === 'error' && styles.toastError,
        type === 'info' && styles.toastInfo
      )}
    >
      {message}
    </div>
  );
};
