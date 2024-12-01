import { STATUS } from '@/constant/common/constant';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/validation/registerValidation';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginData, loginUser, resetLoginForm, setLoginFormData } from '@/redux/slice/loginSlice';
import { useEffect } from 'react';
import { ERouter } from '@/utils/helper';
import route from '@/route/routes';

function useLogin() {
  const dispatch = useDispatch();
  const { data, isLoading, response } = useSelector(loginData); // form data from Redux

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema), // Use Yup schema for validation
    defaultValues: data, // Set the default values from Redux state
  });

  const onSubmit = async (data) => {
    dispatch(setLoginFormData(data)); // store in redux
    dispatch(loginUser({ data })); // login api call
  };

  useEffect(() => {
    async function setSession() {
      const result = await fetch('/api/setSession', {
        method: 'POST',
        body: JSON.stringify({
          user: response.user,
          token: response.token,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (result.ok) {
        dispatch(resetLoginForm());
        ERouter.push(route.dashboard);
      }
    }

    if (response?.token) {
      setSession();
    }
  }, [response]);

  return {
    handleSubmit,
    control,
    errors,
    reset,
    onSubmit,
    isLoading: isLoading === STATUS.LOADING, // Check if the form is loading
  };
}

export default useLogin;
