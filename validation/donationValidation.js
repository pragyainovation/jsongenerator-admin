import * as yup from 'yup';

const donationSchema = yup.object().shape({
  currency: yup
    .object({
      label: yup.string().required('Currency name is required'), // Validates the name (e.g., 'United States Dollar')
      value: yup.string().required('Currency value is required'), // Validates the value (e.g., 'usd')
    })
    .required('Currency is required'),
  amount: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' ? 0 : value)) // Transform empty string to 0
    .required('Amount is required')
    .min(10, 'Amount must be at least 10'), // Minimum value check
});

const verifyPaymentSchema = yup.object().shape({
  sessionId: yup.string().required('PaymentId is required'),
});

export { donationSchema, verifyPaymentSchema };
