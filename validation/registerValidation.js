import * as yup from 'yup';

const registerSchema = yup.object().shape({
  userName: yup.string().required('Username is required'),
  fullName: yup.string().required('Fullname is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email address'),
});

const loginSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email address'),
});

export { registerSchema, loginSchema };
