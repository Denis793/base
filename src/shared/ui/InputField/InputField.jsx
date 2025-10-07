import React from 'react';
import clsx from 'clsx';
import styles from './InputField.module.scss';

export const InputField = ({ name, type = 'text', as = 'input', placeholder, rows = 4, formik, className }) => {
  const fieldProps = formik.getFieldProps(name);
  const error = formik.touched[name] && formik.errors[name];

  const InputTag = as;

  return (
    <div className={clsx(styles.fieldWrapper, error && styles.errorState, className)}>
      <div className={styles.inputContainer}>
        <InputTag
          {...fieldProps}
          id={name}
          name={name}
          type={type}
          rows={rows}
          className={styles.input}
          placeholder={!error ? placeholder : ''}
        />
        {error && <span className={styles.inlineError}>{formik.errors[name]}</span>}
      </div>
    </div>
  );
};
