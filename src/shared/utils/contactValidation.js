import * as Yup from 'yup';

export const contactValidationSchema = Yup.object().shape({
  fullName: Yup.string().min(2, 'Too short').required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9+\-\s]*$/, 'Invalid phone number')
    .required('Phone number is required'),
  subject: Yup.string().max(100, 'Too long'),
  message: Yup.string(),
});
