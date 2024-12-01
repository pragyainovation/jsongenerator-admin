import { profileData, updatePassword } from '@/redux/slice/profileSlice';
import { fullfiledHandler, logout } from '@/utils/helper';
import { editPasswordSchema } from '@/validation/profileValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

function useUpdatePassword() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(profileData);
  const [openDialog, setOpenDialog] = useState(null);

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(editPasswordSchema), // Use Yup schema for validation
  });

  // This will be called when the form is submitted
  const onSubmit = async (data) => {
    const response = await dispatch(updatePassword({ data }));
    if (fullfiledHandler(response?.meta?.requestStatus)) {
      await logout();
    }
  };

  return {
    handleSubmit,
    control,
    onSubmit,
    isLoading,
    openDialog,
    setOpenDialog,
  };
}

export default useUpdatePassword;
