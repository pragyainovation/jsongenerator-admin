/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import { BUTTON } from '@/constant/common/constant';
import { donationData } from '@/redux/slice/donationSlice';
import { closeTicket, setTicketData, ticketData } from '@/redux/slice/ticketSlice';
import { fullfiledHandler, getId } from '@/utils/helper';
import { ticketSchema } from '@/validation/ticketValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

function useDonation() {

  const { isLoading, data } = useSelector(donationData);

  return {
    isLoading,
    data,
  };
}

export default useDonation
