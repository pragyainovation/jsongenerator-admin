/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import { BUTTON } from '@/constant/common/constant';
import {
  closeTicket,
  setTicketData,
  ticketData,
} from '@/redux/slice/ticketSlice';
import { fullfiledHandler, getId } from '@/utils/helper';
import { ticketSchema } from '@/validation/ticketValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

function useTicket({ openOverlay, setOpenOverlay }) {
  const dispatch = useDispatch();

  const { isLoading, data } = useSelector(ticketData);
  const [isCreated, setCreated] = useState(false);

  const defaultValues = {
    subject: data?.ticketData?.subject ?? undefined,
    description: data?.ticketData?.description ?? undefined,
    closedReason: data?.ticketData?.closedReason ?? undefined,
  };

  const { handleSubmit, control, watch, reset } = useForm({
    resolver: yupResolver(ticketSchema),
    defaultValues,
  });

  const onSubmit = async (value) => {
    switch (openOverlay) {
      case BUTTON.CLOSE: {
        const params = getId(data?.ticketData);
        const payloadData = { closedReason: value?.closedReason };
        const responseData = await dispatch(
          closeTicket({ data: payloadData, params })
        );

        if (fullfiledHandler(responseData?.meta?.requestStatus)) {
          const updatedData = data?.ticketList?.docs?.map((item) => {
            return item?._id === responseData?.payload?._id
              ? { ...responseData?.payload }
              : item;
          });
          dispatch(
            setTicketData({ key: 'ticketList.docs', value: updatedData })
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
  };
}

export default useTicket;
