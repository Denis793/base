import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { signInValidationSchema, registrationValidationSchema } from '@/shared/utils/validation';
import { handleSignInSubmit, handleRegistrationSubmit } from '@/shared/utils/formHandlers';
import { InputField } from '@/shared/ui/InputField';
import { FormToast } from '@/shared/ui/FormToast';
import { Social } from '@/shared/ui/Social';
import { ShapeBackground } from '@/shared/ui/ShapeBackground';
import { Button } from '@/shared/ui/Button';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './AuthPage.module.scss';

const TOAST_DURATION_MS = 5000;

export const AuthPage = ({ mode = 'signin' }) => {
  const isSignIn = mode === 'signin';
  const isRegistration = mode === 'registration';

  const [toast, setToast] = useState({ show: false, type: '', message: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const config = useMemo(() => {
    if (isSignIn) {
      return {
        initialValues: { username: '', password: '' },
        validationSchema: signInValidationSchema,
        submitHandler: (values, helpers) => handleSignInSubmit(values, helpers, setToast),
        cardTitle: 'Sign in to your Account',
        cardDescription: 'Lorem ipsum dolor sit amet, consectetur',
        socialTitle: 'Sign in with Social Media',
        dividerTitle: 'Or, sign in with your email',
        actionText: 'Don’t have an account?',
        actionLinkText: 'Register',
        actionLinkTo: '/registration',
        buttonText: 'Sign In',
        passwordPlaceholder: '**************',
      };
    } else {
      return {
        initialValues: { fullName: '', username: '', password: '', confirmPassword: '' },
        validationSchema: registrationValidationSchema,
        submitHandler: (values, helpers) => handleRegistrationSubmit(values, helpers, setToast, TOAST_DURATION_MS),
        cardTitle: 'Create your New Account',
        cardDescription: "Get started with our service. It's fast and easy!",
        socialTitle: 'Registration with Social Media',
        dividerTitle: 'Or, register with your email',
        actionText: 'Already have an account?',
        actionLinkText: 'Sign In',
        actionLinkTo: '/signin',
        buttonText: 'Register',
        passwordPlaceholder: 'Password',
      };
    }
  }, [isSignIn]);

  const formik = useFormik({
    initialValues: config.initialValues,
    validationSchema: config.validationSchema,
    onSubmit: config.submitHandler,
    enableReinitialize: true,
  });

  const touchAllAndValidate = () => {
    const touched = Object.keys(formik.values).reduce((a, k) => ({ ...a, [k]: true }), {});
    formik.setTouched(touched, true);
  };

  return (
    <>
      <div className={styles.authPageWrapper}>
        <ShapeBackground />
        <div className="container">
          <main className={styles.authPage}>
            <section className={styles.wrapper}>
              <div className={styles.card}>
                <div className={styles.cardHeader} />

                <h2>{config.cardTitle}</h2>
                <p className="description">{config.cardDescription}</p>

                <h3>{config.socialTitle}</h3>
                <Social align="center" variant="light" networks={['google', 'x', 'facebook', 'github']} />

                <div className={styles.divider}>
                  <h3>{config.dividerTitle}</h3>
                </div>

                <form onSubmit={formik.handleSubmit} className={styles.form} noValidate>
                  {isRegistration && (
                    <InputField
                      name="fullName"
                      type="text"
                      placeholder="Full Name"
                      formik={formik}
                      className={styles.formGroup}
                    />
                  )}

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
                      placeholder={config.passwordPlaceholder}
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

                  {isRegistration && (
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
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={formik.isSubmitting}
                    onClick={touchAllAndValidate}
                    className={styles.btnPrimary}
                  >
                    {formik.isSubmitting ? `${config.buttonText}ing…` : config.buttonText}
                  </Button>

                  <FormToast
                    show={toast.show}
                    type={toast.type}
                    message={toast.message}
                    duration={isRegistration ? TOAST_DURATION_MS : 3000}
                    onHide={() => setToast({ show: false, type: '', message: '' })}
                  />

                  <p className={styles.actionText}>
                    {config.actionText} <Link to={config.actionLinkTo}>{config.actionLinkText}</Link>
                  </p>
                </form>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};
