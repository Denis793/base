import { DEMO_USER } from '@/shared/config/demoUser';

// === Common Helpers ===
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const hideToastAfterDelay = (setToast, delayMs = 3000) => {
  setTimeout(() => setToast({ show: false, type: '', message: '' }), delayMs);
};

// === CONTACT FORM SUBMIT ===
export const handleContactSubmit = async (values, { resetForm, setSubmitting }, setToast) => {
  try {
    console.log('📨 submit', values);
    await delay(1000);

    setToast({
      show: true,
      type: 'success',
      message: 'Your message has been successfully sent!',
    });

    resetForm();
  } catch (error) {
    console.error('❌ contactSubmit:', error);
    setToast({
      show: true,
      type: 'error',
      message: 'Something went wrong. Please try again.',
    });
  } finally {
    setSubmitting(false);
    hideToastAfterDelay(setToast);
  }
};

// === SIGN-IN FORM SUBMIT ===
export const handleSignInSubmit = async (values, helpers, setToast) => {
  const { setSubmitting, setFieldError, setTouched, resetForm } = helpers;

  try {
    await delay(600);

    const email = values.username.trim().toLowerCase();
    const pass = values.password.trim();

    const emailOk = email === DEMO_USER.email;
    const passOk = pass === DEMO_USER.password;

    if (emailOk && passOk) {
      setToast({ show: true, type: 'success', message: `Welcome back, ${DEMO_USER.name}!` });
      resetForm();
      return;
    }

    setTouched({ username: true, password: true }, true);

    let toastMsg = '';
    if (!emailOk && passOk) {
      setFieldError('username', 'Email is not registered.');
      toastMsg = 'Email is not registered.';
    } else if (emailOk && !passOk) {
      setFieldError('password', 'Incorrect password.');
      toastMsg = 'Incorrect password.';
    } else {
      setFieldError('username', 'Email is not registered.');
      setFieldError('password', 'Incorrect password.');
      toastMsg = 'Email and password are incorrect.';
    }

    setToast({ show: true, type: 'error', message: toastMsg });
  } catch (error) {
    console.error('❌ signInSubmit:', error);
    setToast({ show: true, type: 'error', message: 'Something went wrong. Please try again.' });
  } finally {
    setSubmitting(false);
    hideToastAfterDelay(setToast);
  }
};
