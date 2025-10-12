import * as Yup from 'yup';

export const contactValidationSchema = Yup.object({
  fullName: Yup.string().min(2, 'Too short').required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9+\-\s]*$/, 'Invalid phone number')
    .required('Phone number is required'),
  subject: Yup.string().max(100, 'Too long'),
  message: Yup.string(),
});

export const signInValidationSchema = Yup.object({
  username: Yup.string().trim().email('Invalid email').required('Email is required'),
  password: Yup.string().trim().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const registrationValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Full name must be at least 2 characters')
    .max(50, 'Full name must be 50 characters or less')
    .required('Full name is required'),
  username: Yup.string().email('Invalid email address').required('Email address is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
});
