import { BUTTON } from '@/constant/common/constant';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/validation/registerValidation';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginData,
  loginUser,
  resendOtp,
  resetLoginForm,
  setLoginFormData,
  verifyOtp,
} from '@/redux/slice/loginSlice';
import { useState } from 'react';
import { ERouter, fullfiledHandler } from '@/utils/helper';
import route from '@/route/routes';

function useLogin() {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(loginData); // form data from Redux

  const [openDialog, setOpenDialog] = useState(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema), // Use Yup schema for validation
    defaultValues: data, // Set the default values from Redux state
  });

  const onSubmit = async (value) => {
    dispatch(setLoginFormData({ name: 'loginData', value })); // store in redux
    const response = await dispatch(loginUser({ data: value })); // login api call

    if (fullfiledHandler(response?.meta?.requestStatus)) {
      setOpenDialog(BUTTON.OTP);
    }
  };

  const handleResendOtp = async () => {
    await dispatch(resendOtp({ data: data?.loginData }));
  };

  const handleVerifyOtp = async (otp) => {
    const response = await dispatch(
      verifyOtp({
        data: {
          email: data?.loginData.email,
          otp,
        },
      })
    );

    if (fullfiledHandler(response?.meta?.requestStatus)) {
      const result = await fetch('/api/setSession', {
        method: 'POST',
        body: JSON.stringify({
          user: response?.payload?.user,
          token: response?.payload.token,
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
  };

  const handleOtp = (buttonName, otp) => {
    switch (buttonName) {
      case 'submit': {
        handleVerifyOtp(otp);
        return;
      }
      case 'resend': {
        handleResendOtp();
        return;
      }
      default: {
        console.error('Otp, Action not recognized!');
      }
    }
  };

  return {
    handleSubmit,
    control,
    errors,
    reset,
    onSubmit,
    openDialog,
    setOpenDialog,
    isLoading,
    handleOtp,
  };
}

export default useLogin;
