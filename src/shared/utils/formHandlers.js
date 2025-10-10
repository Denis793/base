import { validateUserCredentials } from '@/shared/utils/userService';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const hideToastAfterDelay = (setToast, delayMs = 3000) => {
  setTimeout(() => setToast({ show: false, type: '', message: '' }), delayMs);
};

const API_URL = 'http://localhost:3001/api/messages';

export const handleContactSubmit = async (values, helpers, setToast) => {
  helpers.setSubmitting(true);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: `HTTP Error: ${response.status}` }));
      throw new Error(errorData.message || 'Server responded with an unknown error');
    }

    helpers.resetForm();

    setToast({
      show: true,
      type: 'success',
      message: 'Ваше повідомлення успішно надіслано та збережено!',
    });
  } catch (error) {
    console.error('Submission error:', error);
    setToast({
      show: true,
      type: 'error',
      message: `Помилка при відправці: ${error.message}. Перевірте консоль та сервер.`,
    });
  } finally {
    helpers.setSubmitting(false);
  }
};

export const handleSignInSubmit = async (values, helpers, setToast) => {
  const { setSubmitting, setFieldError, setTouched, resetForm } = helpers;

  try {
    await delay(600);

    const email = values.username.trim();
    const password = values.password.trim();

    const { valid, reason, user } = validateUserCredentials(email, password);

    if (valid) {
      setToast({ show: true, type: 'success', message: `Welcome back, ${user.name}!` });
      resetForm();
      return;
    }

    setTouched({ username: true, password: true }, true);

    let message = '';
    if (reason === 'email') {
      setFieldError('username', 'Email is not registered.');
      message = 'Email is not registered.';
    } else if (reason === 'password') {
      setFieldError('password', 'Incorrect password.');
      message = 'Incorrect password.';
    }

    setToast({ show: true, type: 'error', message });
  } catch (error) {
    console.error('❌ signInSubmit:', error);
    setToast({ show: true, type: 'error', message: 'Something went wrong. Please try again.' });
  } finally {
    setSubmitting(false);
    hideToastAfterDelay(setToast);
  }
};
