/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import { metricsData } from '@/redux/slice/metricsSlice';

import { useSelector } from 'react-redux';

function useApi() {
  const { isLoading, data } = useSelector(metricsData);

  return {
    isLoading,
    data,
  };
}

export default useApi;
