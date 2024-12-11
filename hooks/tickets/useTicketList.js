import {
  BUTTON,
  STATUS,
  TABLE_DEFAULT_LIMIT,
  TICKET,
} from '@/constant/common/constant';
import {
  getTicketlist,
  setTicketData,
  ticketData,
} from '@/redux/slice/ticketSlice';
import ActionTab from '@/widgets/table/ActionTab';
import CustomHeader from '@/widgets/table/CustomCell';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from '@/utils/timeFunction';
import MOMENT_FORMATS from '@/constant/common/momentConstant';

function useTicketList() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(TABLE_DEFAULT_LIMIT);
  const { data, isLoading } = useSelector(ticketData);

  const [openDialog, setOpenDialog] = useState(null);
  const [openOverlay, setOpenOverlay] = useState(null);

  const [searchData, setSearchData] = useState('');
  const [filterData, setFilterData] = useState([]);

  async function getFetchData({ search = '', filter }) {
    const response = await dispatch(
      getTicketlist({
        data: {
          options: {
            page,
            pageSize,
          },
          search,
          searchColumns: ['subject', 'ticketNo'],
          filter,
        },
      })
    );

    if (response?.meta?.requestStatus === STATUS.FULFILLED) {
      dispatch(setTicketData({ name: 'ticketList', value: response?.payload }));
    }
  }

  useEffect(() => {
    getFetchData({});
  }, [page, pageSize]);

  const handleFilter = (value) => {
    setFilterData(value);
    getFetchData({ search: searchData, filter: value });
  };

  const searchListData = async (value) => {
    setSearchData(setSearchData);
    getFetchData({ search: value, filter: filterData });
  };

  const handleAction = (buttonData, rowData) => {
    switch (buttonData) {
      case BUTTON.CLOSE: {
        dispatch(setTicketData({ name: 'ticketData', value: rowData }));
        setOpenDialog(BUTTON.CLOSE);
        return;
      }
      case BUTTON.VIEW: {
        dispatch(setTicketData({ name: 'ticketData', value: rowData }));
        setOpenOverlay(BUTTON.VIEW);
        break;
      }
      default:
        console.error('Action not recognized.');
    }
  };

  const handleConfirm = async (openDialog) => {
    switch (openDialog) {
      case BUTTON.CLOSE: {
        setOpenOverlay(BUTTON.CLOSE);
        setOpenDialog(null);

        return;
      }
      case BUTTON.VIEW: {
        setOpenOverlay(BUTTON.VIEW);
        setOpenDialog(null);
        return;
      }
      default:
        console.error('Action not recognized.'); // Return something to avoid inconsistent return
    }
  };

  const columns = [
    {
      Header: 'No', // Header for the row number column
      accessor: 'No', // Calculate row index
      Cell: ({ row }) => row.index + data?.ticketList?.pagingCounter, // Display the row index (1-based)
      width: '0px', // Optional: Set width for the column
    },
    {
      Header: 'Ticket No',
      accessor: 'ticketNo',
      Cell: ({ cell }) => {
        return <CustomHeader data={{ value: cell.value }} />;
      },
    },
    {
      Header: 'Subject',
      accessor: 'subject',
      Cell: ({ cell }) => {
        return <CustomHeader data={{ value: cell.value }} />;
      },
    },
    {
      Header: 'Description',
      accessor: 'description',
      Cell: ({ cell }) => {
        return <CustomHeader data={{ value: cell.value }} />;
      },
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ cell }) => {
        return <CustomHeader data={{ value: cell.value }} />;
      },
    },
    {
      Header: 'Created At',
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
      Header: 'Closed  At',
      accessor: 'closedAt',
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
        const isOpen = row?.original?.status === TICKET.OPEN;
        return (
          <div>
            <ActionTab
              isView
              isClose={isOpen}
              onClick={(data) => handleAction(data, row?.original)}
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
    data,
    isLoading,
    dispatch,
    columns,
    onPageChange,
    searchListData,
    openDialog,
    setOpenDialog,
    handleConfirm,
    openOverlay,
    setOpenOverlay,
    handleFilter,
  };
}

export default useTicketList;
