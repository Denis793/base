const DEMO_EMAIL = 'demo@gmail.com';
const DEMO_PASSWORD = 'demo123';

export async function signInSubmit(values, helpers, setToast) {
  const { setSubmitting, setFieldError, setTouched, resetForm } = helpers;

  try {
    await new Promise((r) => setTimeout(r, 500));

    const email = values.username.trim().toLowerCase();
    const pass = values.password.trim();

    const emailOk = email === DEMO_EMAIL;
    const passOk = pass === DEMO_PASSWORD;

    if (emailOk && passOk) {
      setToast({ show: true, type: 'success', message: 'Login successful!' });
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
  } finally {
    setSubmitting(false);
    setTimeout(() => setToast({ show: false, type: '', message: '' }), 3000);
  }
}
