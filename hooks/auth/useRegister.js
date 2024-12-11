import { STATUS } from '@/constant/common/constant';
import {
  createUser,
  registerData,
  setRegisterFormData,
} from '@/redux/slice/registerSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '@/validation/registerValidation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import route from '@/route/routes';
import { ERouter } from '@/utils/helper';

function useRegister() {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(registerData);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema), // Use Yup schema for validation
    defaultValues: data, // Set the default values from Redux state
  });

  // This will be called when the form is submitted
  const onSubmit = async (data) => {
    dispatch(setRegisterFormData(data));
    dispatch(createUser({ data }));
  };

  useEffect(() => {
    if (isLoading === STATUS.FULFILLED) {
      ERouter.push(route.login);
    }
  }, [isLoading]);

  return {
    handleSubmit,
    control,
    errors,
    reset,
    onSubmit,
    isLoading: isLoading === STATUS.LOADING,
  };
}

export default useRegister;
