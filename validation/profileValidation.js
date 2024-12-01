import * as yup from 'yup';

const editProfileSchema = yup.object().shape({
  userName: yup.string().required('Username is required'),
  fullName: yup.string().required('Fullname is required'),
});

const editPasswordSchema = yup.object().shape({
  oldPassword: yup.string().required('Old password is required').min(6, 'Password must be at least 6 characters'),
  newPassword: yup
    .string()
    .required('New password is required')
    .min(6, 'Password must be at least 6 characters')
    .test('not-same-as-old', 'New password cannot be the same as the old password', function (value) {
      return value !== this.parent.oldPassword;
    }),
});

export { editProfileSchema, editPasswordSchema };
