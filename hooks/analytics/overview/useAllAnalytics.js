import { analyticsData, getAnalytics, setAnayticData } from '@/redux/slice/analyticsSlice';
import { fullfiledHandler } from '@/utils/helper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function useAllAnalytics() {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector(analyticsData);

  const getFetchData = async () => {
    const response = await dispatch(
      getAnalytics({
        data: {
          requests: [
            { endpoint: 'createdSchema' },
            { endpoint: 'totalCreatedJson' },
            {
              endpoint: 'highUsedAPI',
              data: {
                options: {
                  page: 1,
                  pageSize: 5,
                  isPaginate: false,
                },
                filter: [
                  {
                    searchColumns: 'lastAccessed',
                    type: 'date',
                    startDate: '',
                    endDate: '',
                  },
                ],
                sort: {
                  totalHitCount: -1,
                },
              },
            },
          ],
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
    getFetchData();
  }, []);

  return { data, isLoading };
}

export default useAllAnalytics;
