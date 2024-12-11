import {
  BUTTON,
  ROLES,
  STATUS,
  TABLE_DEFAULT_LIMIT,
} from '@/constant/common/constant';
import ActionTab from '@/widgets/table/ActionTab';
import CustomHeader from '@/widgets/table/CustomCell';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from '@/utils/timeFunction';
import MOMENT_FORMATS from '@/constant/common/momentConstant';
import {
  deleteNotification,
  getNotificationlist,
  notificationData,
  pushNotification,
  setNotificationData,
} from '@/redux/slice/notificationSlice';
import { getRolesList, setRolesData } from '@/redux/slice/rolesSlice';
import { fullfiledHandler, getId } from '@/utils/helper';

function useNotificationList() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(TABLE_DEFAULT_LIMIT);
  const { data, isLoading } = useSelector(notificationData);

  const [openDialog, setOpenDialog] = useState(null);
  const [openOverlay, setOpenOverlay] = useState(null);

  const [searchData, setSearchData] = useState('');
  const [filterData, setFilterData] = useState([]);

  async function getFetchData({ search = '', filter }) {
    const response = await dispatch(
      getNotificationlist({
        data: {
          options: {
            page,
            pageSize,
          },
          search,
          searchColumns: ['title', 'message'],
          filter,
        },
      })
    );

    if (response?.meta?.requestStatus === STATUS.FULFILLED) {
      dispatch(
        setNotificationData({
          name: 'notificationList',
          value: response?.payload,
        })
      );
    }
  }

  const fetchRolesData = async ({ search = '' }) => {
    const response = await dispatch(
      getRolesList({
        data: {
          options: {
            page,
            pageSize,
            isPaginate: false,
          },
          search,
          searchColumns: ['roleName'],
          filter: [
            {
              searchColumns: 'roleName',
              type: 'array',
              search: [ROLES.CLIENT],
            },
          ],
        },
      })
    );
    if (fullfiledHandler(response?.meta?.requestStatus)) {
      dispatch(setRolesData({ name: 'rolesList', value: response?.payload }));
    }
  };

  useEffect(() => {
    getFetchData({});
    fetchRolesData({});
  }, [page, pageSize]);

  const handleFilter = (value) => {
    setFilterData(value);
    getFetchData({ search: searchData, filter: value });
  };

  const searchListData = async (value) => {
    setSearchData(setSearchData);
    getFetchData({ search: value, filter: filterData });
  };

  // open dialog
  const handleConfirm = async (openDialog) => {
    switch (openDialog) {
      case BUTTON.CREATE: {
        dispatch(setNotificationData({ name: 'notificationData', value: [] }));
        setOpenOverlay(BUTTON.CREATE);
        return;
      }
      case BUTTON.EDIT: {
        await fetchRolesData({});
        setOpenOverlay(BUTTON.EDIT);
        setOpenDialog(null);
        return;
      }
      case BUTTON.DELETE: {
        const params = getId(data?.notificationData);
        const responseData = await dispatch(deleteNotification({ params }));

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
          setOpenDialog(null);
        }
        return;
      }
      case BUTTON.SEND: {
        const params = getId(data?.notificationData);
        const responseData = await dispatch(pushNotification({ params }));

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
          setOpenDialog(null);
        }
        return;
      }

      default:
        console.error('Notification: handleConfirm not recognized.');
    }
  };

  // action for table
  const handleAction = (buttonData, rowData) => {
    switch (buttonData) {
      case BUTTON.EDIT: {
        dispatch(
          setNotificationData({ name: 'notificationData', value: rowData })
        );
        setOpenDialog(BUTTON.EDIT);
        return;
      }
      case BUTTON.VIEW: {
        dispatch(
          setNotificationData({ name: 'notificationData', value: rowData })
        );
        setOpenOverlay(BUTTON.VIEW);
        break;
      }
      case BUTTON.DELETE: {
        dispatch(
          setNotificationData({ name: 'notificationData', value: rowData })
        );
        setOpenDialog(BUTTON.DELETE);
        break;
      }
      case BUTTON.SEND: {
        dispatch(
          setNotificationData({ name: 'notificationData', value: rowData })
        );
        setOpenDialog(BUTTON.SEND);
        break;
      }
      default:
        console.error('Notification: handleAction not recognized.');
    }
  };

  const columns = [
    {
      Header: 'No', // Header for the row number column
      accessor: 'No', // Calculate row index
      Cell: ({ row }) => row.index + data?.notificationList?.pagingCounter, // Display the row index (1-based)
      width: '0px', // Optional: Set width for the column
    },
    {
      Header: 'title',
      accessor: 'title',
      Cell: ({ cell }) => {
        return <CustomHeader data={{ value: cell.value }} />;
      },
    },
    {
      Header: 'message',
      accessor: 'message',
      Cell: ({ cell }) => {
        return <CustomHeader data={{ value: cell.value }} />;
      },
    },
    {
      Header: 'createdBy',
      accessor: 'createdBy',
      Cell: ({ cell }) => {
        return <CustomHeader data={{ value: cell.value?.fullName }} />;
      },
    },
    {
      Header: 'isGlobal',
      accessor: 'isGlobal',
      Cell: ({ cell }) => {
        return <CustomHeader data={{ value: cell.value ? 'Yes' : 'No' }} />;
      },
    },
    {
      Header: 'notificationStatus',
      accessor: 'notificationStatus',
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
      Header: 'Action',
      accessor: 'action',
      Cell: ({ row }) => {
        const isDeleted = row?.original?.softDeletedAt ? true : false;
        return (
          <div>
            <ActionTab
              isView
              isEdit={!isDeleted}
              isDelete={!isDeleted}
              isSend={!isDeleted}
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
    getFetchData,
  };
}

export default useNotificationList;
