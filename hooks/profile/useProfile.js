import { profileData, updateProfile } from '@/redux/slice/profileSlice';
import route from '@/route/routes';
import { ERouter, fullfiledHandler } from '@/utils/helper';
import { editProfileSchema } from '@/validation/profileValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

function useProfile({ user }) {
  const dispatch = useDispatch();

  const { isLoading } = useSelector(profileData);

  const defaultValues = {
    userName: user?.userName,
    fullName: user?.fullName,
  };

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(editProfileSchema), // Use Yup schema for validation
    defaultValues, // Set the default values from Redux state
  });

  const [openDialog, setOpenDialog] = useState(null);

  // This will be called when the form is submitted
  const onSubmit = async (data) => {
    const response = await dispatch(updateProfile({ data }));
    if (fullfiledHandler(response?.meta?.requestStatus)) {
      const result = await fetch('/api/setSession', {
        method: 'POST',
        body: JSON.stringify({
          user: response.payload,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (result.ok) {
        ERouter.push(route.profile);
      }
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

export default useProfile;
