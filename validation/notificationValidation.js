import * as yup from 'yup';
const notificationSchema = yup
  .object()
  .shape({
    title: yup.string().required('Title is required'),
    message: yup.string().required('Message is required'),
    roles: yup
      .array()
      .of(
        yup.object().shape({
          label: yup.string().required('Role label is required'),
          value: yup.string().required('Role value is required'),
        })
      )
      .required('Roles are required'),
    isGlobal: yup
      .object()
      .shape({
        label: yup.string().required('Global label is required'),
        value: yup.string().required('Global value is required'),
      })
      .required('Global is required'),
  })
  .required();

export { notificationSchema };
