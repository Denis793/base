import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { signInValidationSchema } from '@/shared/utils/validation';
import { handleSignInSubmit } from '@/shared/utils/formHandlers';
import { InputField } from '@/shared/ui/InputField';
import { FormToast } from '@/shared/ui/FormToast';
import { Social } from '@/shared/ui/Social';
import { ShapeBackground } from '@/shared/ui/ShapeBackground';
import { Button } from '@/shared/ui/Button';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import styles from './SignIn.module.scss';

export const SignIn = () => {
  const [toast, setToast] = useState({ show: false, type: '', message: '' });
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: signInValidationSchema,
    onSubmit: (values, helpers) => handleSignInSubmit(values, helpers, setToast),
  });

  const touchAllAndValidate = () => {
    const touched = Object.keys(formik.values).reduce((a, k) => ({ ...a, [k]: true }), {});
    formik.setTouched(touched, true);
  };

  return (
    <>
      <ShapeBackground />
      <main className={styles.signin}>
        <section className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.cardHeader} />

            <FormToast
              show={toast.show}
              type={toast.type}
              message={toast.message}
              onHide={() => setToast({ show: false, type: '', message: '' })}
            />

            <h2>Sign in to your Account</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur</p>

            <h3>Sign in with Social Media</h3>
            <Social align="center" variant="light" networks={['google', 'x', 'facebook', 'github']} />

            <div className={styles.divider}>
              <h3>Or, sign in with your email</h3>
            </div>

            <form onSubmit={formik.handleSubmit} className={styles.form} noValidate>
              <InputField
                name="username"
                type="email"
                placeholder="example@gmail.com"
                formik={formik}
                className={styles.formGroup}
              />

              <div className={styles.passwordWrapper}>
                <InputField
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="**************"
                  formik={formik}
                  className={styles.formGroup}
                />
                <button
                  type="button"
                  className={styles.eyeToggle}
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <Button type="submit" variant="primary" disabled={formik.isSubmitting} onClick={touchAllAndValidate}>
                {formik.isSubmitting ? 'Signing In…' : 'Sign In'}
              </Button>

              <p className={styles.signupText}>
                Don’t have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
