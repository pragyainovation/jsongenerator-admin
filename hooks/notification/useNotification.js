/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import { BUTTON } from '@/constant/common/constant';
import {
  createNotification,
  notificationData,
  setNotificationData,
  updateNotification,
} from '@/redux/slice/notificationSlice';
import { fullfiledHandler, getId } from '@/utils/helper';
import { notificationSchema } from '@/validation/notificationValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { rolesData } from '@/redux/slice/rolesSlice';

function useNotification({ openOverlay, setOpenOverlay, getFetchData }) {
  const dispatch = useDispatch();

  const { isLoading, data } = useSelector(notificationData);
  const { data: roleData } = useSelector(rolesData);
  const [isCreated, setCreated] = useState(false);
  const defaultValues = {
    title: data?.notificationData?.title ?? undefined,
    message: data?.notificationData?.message ?? undefined,
    createdBy: data?.notificationData?.createdBy ?? undefined,
    notificationStatus: data?.notificationData?.notificationStatus ?? undefined,
    sentCount: data?.notificationData?.sentCount ?? undefined,
    roles:
      data?.notificationData?.roles?.map((item) => ({
        label: item?.roleName,
        value: item?._id,
      })) ?? undefined,
    softDeletedAt: data?.notificationData?.softDeletedAt ?? undefined,
    isGlobal:
      data?.notificationData?.isGlobal !== undefined
        ? {
            label: data.notificationData.isGlobal.toString(),
            value: data.notificationData.isGlobal,
          }
        : undefined,
  };

  const { handleSubmit, control, watch, reset } = useForm({
    resolver: yupResolver(notificationSchema),
    defaultValues,
  });

  const onSubmit = async (value) => {
    switch (openOverlay) {
      case BUTTON.CREATE: {
        const payloadData = {
          title: value?.title,
          message: value?.message,
          roles: value?.roles?.map((item) => item?.value),
          users: value?.users?.map((item) => item?.value),
          isGlobal: value?.isGlobal?.value ? true : false,
        };
        const responseData = await dispatch(
          createNotification({ data: payloadData })
        );

        if (fullfiledHandler(responseData?.meta?.requestStatus)) {
          getFetchData({});
          setOpenOverlay(null);
        }
        return;
      }
      case BUTTON.EDIT: {
        const params = getId(data?.notificationData);
        const payloadData = {
          title: value?.title,
          message: value?.message,
          roles: value?.roles?.map((item) => item?.value),
          users: value?.users?.map((item) => item?.value),
          isGlobal: value?.isGlobal?.value === 'true' ? true : false,
        };
        const responseData = await dispatch(
          updateNotification({ data: payloadData, params })
        );

        if (fullfiledHandler(responseData?.meta?.requestStatus)) {
          const updatedData = data?.notificationList?.docs?.map((item) => {
            return item?._id === responseData?.payload?._id
              ? { ...responseData?.payload }
              : item;
          });
          dispatch(
            setNotificationData({
              key: 'notificationList.docs',
              value: updatedData,
            })
          );
          setOpenOverlay(null);
        }
        return;
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
    isCreated,
    setCreated,
    reset,
    roleData,
  };
}

export default useNotification;
