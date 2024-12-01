import { analyticsData, getAnalytics, setAnayticData } from '@/redux/slice/analyticsSlice';
import { fullfiledHandler } from '@/utils/helper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function useAllAnalytics() {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector(analyticsData);
  const getAnalyticsData = async () => {
    const response = await dispatch(
      getAnalytics({
        data: {
          requests: [{ endpoint: 'createdSchema' }, { endpoint: 'createdJson' }],
        },
      })
    );

    if (fullfiledHandler(response?.meta?.requestStatus)) {
      response?.payload?.forEach((item) => {
        dispatch(setAnayticData({ name: item.endpoint, value: item.data }));
      });
    }
  };
  useEffect(() => {
    getAnalyticsData();
  }, []);
  return { data, isLoading };
}

export default useAllAnalytics;
