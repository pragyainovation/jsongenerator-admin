/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import { donationData } from '@/redux/slice/donationSlice';

import { useSelector } from 'react-redux';

function useDonation() {
  const { isLoading, data } = useSelector(donationData);

  return {
    isLoading,
    data,
  };
}

export default useDonation;
