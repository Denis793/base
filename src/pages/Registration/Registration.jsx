import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { registrationValidationSchema } from '@/shared/utils/validation';
import { handleRegistrationSubmit } from '@/shared/utils/formHandlers';
import { InputField } from '@/shared/ui/InputField';
import { FormToast } from '@/shared/ui/FormToast';
import { Social } from '@/shared/ui/Social';
import { ShapeBackground } from '@/shared/ui/ShapeBackground';
import { Button } from '@/shared/ui/Button';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import styles from '@/pages/SignIn/SignIn.module.scss';

const TOAST_DURATION_MS = 5000;

export const Registration = () => {
  const [toast, setToast] = useState({ show: false, type: '', message: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: { fullName: '', username: '', password: '', confirmPassword: '' },
    validationSchema: registrationValidationSchema,
    onSubmit: (values, helpers) => handleRegistrationSubmit(values, helpers, setToast, TOAST_DURATION_MS),
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
            <h2>Create your New Account</h2>
            <p className="description">Get started with our service. It's fast and easy!</p>
            <h3>Registration with Social Media</h3>
            <Social align="center" variant="light" networks={['google', 'x', 'facebook', 'github']} />
            <div className={styles.divider}>
              <h3>Or, register with your email</h3>
            </div>
            <form onSubmit={formik.handleSubmit} className={styles.form} noValidate>
              <InputField
                name="fullName"
                type="text"
                placeholder="Full Name"
                formik={formik}
                className={styles.formGroup}
              />

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
                  placeholder="Password"
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

              <div className={styles.passwordWrapper}>
                <InputField
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  formik={formik}
                  className={styles.formGroup}
                />
                <button
                  type="button"
                  className={styles.eyeToggle}
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <Button type="submit" variant="primary" disabled={formik.isSubmitting} onClick={touchAllAndValidate}>
                {formik.isSubmitting ? 'Registering…' : 'Register'}
              </Button>

              <FormToast
                show={toast.show}
                type={toast.type}
                message={toast.message}
                duration={TOAST_DURATION_MS}
                onHide={() => setToast({ show: false, type: '', message: '' })}
              />

              <p className={styles.registrationText}>
                Already have an account? <Link to="/signin">Sign In</Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
