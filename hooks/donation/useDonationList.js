import {
  BUTTON,
  STATUS,
  TABLE_DEFAULT_LIMIT,
} from '@/constant/common/constant';
import MOMENT_FORMATS from '@/constant/common/momentConstant';
import {
  donationData,
  getDonationList,
  setDonationData,
} from '@/redux/slice/donationSlice';
import showToast from '@/utils/showToast';
import { formatDate } from '@/utils/timeFunction';
import ActionTab from '@/widgets/table/ActionTab';
import CustomHeader from '@/widgets/table/CustomCell';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function useDonationList() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(TABLE_DEFAULT_LIMIT);
  const [openOverlay, setOpenOverlay] = useState(null);

  const { data, isLoading } = useSelector(donationData);

  async function getFetchData(filter) {
    const response = await dispatch(
      getDonationList({
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
      dispatch(
        setDonationData({ name: 'donationList', value: response?.payload })
      );
    }
  }

  useEffect(() => {
    getFetchData();
  }, [dispatch, page, pageSize]);

  const handleFilter = (value) => {
    getFetchData(value);
  };

  const handleAction = (buttonData, rowData, setCopied) => {
    switch (buttonData) {
      case BUTTON.COPY: {
        navigator.clipboard
          .writeText(rowData?.paymentId)
          .then(() => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 2000);
          })
          .catch((err) => {
            showToast(err?.message ?? err, STATUS.ERROR);
          });
        break;
      }
      case BUTTON.VIEW: {
        dispatch(setDonationData({ name: 'donationData', value: rowData }));
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
      Cell: ({ row }) => row.index + data?.donationList?.pagingCounter, // Display the row index (1-based)
      width: '0px', // Optional: Set width for the column
    },
    {
      Header: 'PayemntId',
      accessor: 'paymentId',
      Cell: ({ cell }) => {
        return <CustomHeader data={{ value: cell.value }} />;
      },
    },
    {
      Header: 'Amount',
      accessor: 'paymentAmount',
      Cell: ({ cell }) => {
        return <CustomHeader data={{ value: cell.value / 100 }} />;
      },
    },
    {
      Header: 'Currency',
      accessor: 'currency',
      Cell: ({ cell }) => {
        return <CustomHeader data={{ value: cell.value }} />;
      },
    },

    {
      Header: 'Payment Status',
      accessor: 'paymentStatus',
      Cell: ({ cell }) => {
        return <CustomHeader data={{ value: cell.value }} />;
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
            <ActionTab
              isCopy
              isView
              onClick={(data, setCopied) =>
                handleAction(data, row?.original, setCopied)
              }
            />
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

export default useDonationList;
