/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import { BUTTON } from '@/constant/common/constant';
import { setUserData, updateUser, userData } from '@/redux/slice/usersSlice';
import { ERouter, fullfiledHandler, getId } from '@/utils/helper';
import { userUpdateSchema } from '@/validation/userValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

function useUsers({
  openOverlay,
  setOpenOverlay
}) {
  const dispatch = useDispatch();

  const { isLoading, data } = useSelector(userData);

  const defaultValues = {
    userName: data?.userData?.userName ?? undefined,
    fullName: data?.userData?.fullName ?? undefined,
    email: data?.userData?.email ?? undefined,
        }

  const { handleSubmit, control, watch, reset } = useForm({
    resolver: yupResolver(userUpdateSchema),
    defaultValues,
  });

  const onSubmit = async (value) => {
  switch(openOverlay){
    case BUTTON.EDIT:{
      const params = getId(data?.userData);
      const payloadData = {
        userName: value?.userName,
        fullName: value?.fullName
      }
      const responseData = await dispatch(updateUser({ data: payloadData, params }));

      if (fullfiledHandler(responseData?.meta?.requestStatus)) {
        const updatedData = data?.usersList?.docs?.map(item=>{
          return item?._id === responseData?.payload?._id ? {...responseData?.payload} : item
        })
        dispatch(setUserData({key:"usersList.docs" ,value:updatedData}))
        setOpenOverlay(null)
      }
      return
    }
    default:
        console.error('Action not recognized.');
  }

  };

  return {
    isLoading,
    onSubmit,
    control,
    data,
    watch,
    handleSubmit,
    reset,
  };
}

export default useUsers
