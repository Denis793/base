const hideToastAfterDelay = (setToast, delayMs = 3000) => {
  setTimeout(() => setToast({ show: false, type: '', message: '' }), delayMs);
};

const API_MESSAGES_URL = 'http://localhost:3001/api/messages';
const API_REGISTER_URL = 'http://localhost:3001/api/register';
const API_LOGIN_URL = 'http://localhost:3001/api/login';

export const handleContactSubmit = async (values, helpers, setToast) => {
  helpers.setSubmitting(true);

  try {
    const response = await fetch(API_MESSAGES_URL, {
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
    const response = await fetch(API_LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const result = await response.json();

    if (response.ok) {
      setToast({ show: true, type: 'success', message: `Welcome back, ${result.user.name}!` });
      resetForm();
      return;
    }

    setTouched({ username: true, password: true }, true);

    let message = result.message;

    if (result.reason === 'email') {
      setFieldError('username', result.message);
    } else if (result.reason === 'password') {
      setFieldError('password', result.message);
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

export const handleRegistrationSubmit = async (values, helpers, setToast) => {
  const { setSubmitting, setFieldError, resetForm } = helpers;

  try {
    const response = await fetch(API_REGISTER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const result = await response.json();

    if (response.status === 409) {
      setFieldError('username', result.message);
      setToast({
        show: true,
        type: 'error',
        message: result.message,
      });
      return;
    }

    if (!response.ok) {
      throw new Error(result.message || `HTTP Error: ${response.status}`);
    }

    setToast({
      show: true,
      type: 'success',
      message: `Registration successful! Welcome, ${result.user.name}!`,
    });

    resetForm();
  } catch (error) {
    console.error('❌ registrationSubmit:', error);
    setToast({
      show: true,
      type: 'error',
      message: `Registration failed: ${error.message || 'Something went wrong. Please try again.'}`,
    });
  } finally {
    setSubmitting(false);
    hideToastAfterDelay(setToast);
  }
};
