import * as yup from 'yup';

const ticketSchema = yup.object().shape({
  subject: yup.string().required('Subject is required'),
  description: yup
    .string()
    .required('Description is required')
    .max(1000, 'Description must not exceed 1000'),
  closedReason: yup.string().required('Closed reason is required.'),
});

export { ticketSchema };
