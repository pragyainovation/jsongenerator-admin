import * as yup from 'yup';

const userUpdateSchema = yup.object().shape({
  userName: yup.string().required('Username is required'),
  fullName: yup.string().required('Fullname is required'),
  email: yup.string().required('Email is required').email('Enter a valid email address'),
});

export { userUpdateSchema };
