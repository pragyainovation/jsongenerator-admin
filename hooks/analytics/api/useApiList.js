import { BUTTON, STATUS, TABLE_DEFAULT_LIMIT } from '@/constant/common/constant';
import MOMENT_FORMATS from '@/constant/common/momentConstant';
import { getMetricsList, metricsData, setMetricsData } from '@/redux/slice/metricsSlice';
import { formatDate } from '@/utils/timeFunction';
import ActionTab from '@/widgets/table/ActionTab';
import CustomHeader from '@/widgets/table/CustomCell';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function useApiList() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(TABLE_DEFAULT_LIMIT);
  const [openOverlay, setOpenOverlay] = useState(null);

  const { data, isLoading } = useSelector(metricsData);

  async function getFetchData(filter) {
    const response = await dispatch(
      getMetricsList({
        data: {
          options: {
            page,
            pageSize,
          },
          filter: filter,
        },
      })
    );

    if (response?.meta?.requestStatus === STATUS.FULFILLED) {
      dispatch(setMetricsData({ name: 'apiList', value: response?.payload }));
    }
  }

  useEffect(() => {
    getFetchData();
  }, [dispatch, page, pageSize]);

  const handleFilter = (value) => {
    getFetchData(value);
  };

  const handleAction = (buttonData, rowData) => {
    switch (buttonData) {
      case BUTTON.VIEW: {
        dispatch(setMetricsData({ name: 'apiData', value: rowData }));
        setOpenOverlay(BUTTON.VIEW);
        break;
      }
      default:
        console.error('Action not recognized.');
    }
  };

  const columns = [
    {
      Header: 'No', // Header for the row number column
      accessor: 'No', // Calculate row index
      Cell: ({ row }) => row.index + data?.apiList?.pagingCounter, // Display the row index (1-based)
      width: '0px', // Optional: Set width for the column
    },
    {
      Header: 'Endpoint',
      accessor: 'endpoint',
      Cell: ({ cell }) => {
        return <CustomHeader data={{ value: cell.value }} />;
      },
    },
    {
      Header: 'Method',
      accessor: 'method',
      Cell: ({ cell }) => {
        return <CustomHeader data={{ value: cell.value }} />;
      },
    },
    {
      Header: 'Last Accessed',
      accessor: 'lastAccessed',
      Cell: ({ cell }) => {
        return (
          <CustomHeader
            data={{
              value: formatDate(cell.value, MOMENT_FORMATS.DATE_D_M_YYYY_HH_MM),
            }}
          />
        );
      },
    },
    {
      Header: 'CreatedAt',
      accessor: 'createdAt',
      Cell: ({ cell }) => {
        return (
          <CustomHeader
            data={{
              value: formatDate(cell.value, MOMENT_FORMATS.DATE_D_M_YYYY_HH_MM),
            }}
          />
        );
      },
    },
    {
      Header: 'Action',
      accessor: 'action',
      Cell: ({ row }) => {
        return (
          <div>
            <ActionTab isView onClick={(data) => handleAction(data, row?.original)} />
          </div>
        );
      },
    },
  ];

  const onPageChange = ({ page, pageSelector }) => {
    if (page >= 0) {
      setPage(page + 1);
    } else if (pageSelector) {
      setPage(1);
      setPageSize(pageSelector);
    }
  };

  return {
    isLoading,
    data,
    columns,
    onPageChange,
    openOverlay,
    setOpenOverlay,
    handleFilter,
  };
}

export default useApiList;
