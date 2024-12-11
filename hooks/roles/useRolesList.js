import { BUTTON, ROLES, TABLE_DEFAULT_LIMIT } from '@/constant/common/constant';
import { fullfiledHandler } from '@/utils/helper';
import ActionTab from '@/widgets/table/ActionTab';
import CustomHeader from '@/widgets/table/CustomCell';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from '@/utils/timeFunction';
import MOMENT_FORMATS from '@/constant/common/momentConstant';
import {
  getRolesList,
  rolesData,
  setRolesData,
} from '@/redux/slice/rolesSlice';

function useRolesList() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(TABLE_DEFAULT_LIMIT);
  const { data, isLoading } = useSelector(rolesData);

  const [openDialog, setOpenDialog] = useState(null);
  const [openOverlay, setOpenOverlay] = useState(null);

  const [searchData, setSearchData] = useState('');
  const [filterData, setFilterData] = useState([]);

  async function getFetchData({ search = '', filter }) {
    const response = await dispatch(
      getRolesList({
        data: {
          options: {
            page,
            pageSize,
          },
          search,
          searchColumns: ['roleName'],
          filter,
        },
      })
    );

    if (fullfiledHandler(response?.meta?.requestStatus)) {
      dispatch(setRolesData({ name: 'rolesList', value: response?.payload }));
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

  // table function

  const handleAction = (buttonData, rowData) => {
    switch (buttonData) {
      case BUTTON.EDIT: {
        dispatch(setRolesData({ name: 'roleData', value: rowData }));
        setOpenDialog(BUTTON.EDIT);
        return;
      }
      case BUTTON.VIEW: {
        dispatch(setRolesData({ name: 'roleData', value: rowData }));
        setOpenOverlay(BUTTON.VIEW);
        return;
      }
      default:
        console.error('Action not recognized.');
    }
  };

  const handleConfirm = async (openDialog) => {
    switch (openDialog) {
      case BUTTON.EDIT: {
        setOpenOverlay(BUTTON.EDIT);
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
      Cell: ({ row }) => row.index + data?.rolesList?.pagingCounter, // Display the row index (1-based)
      width: '0px', // Optional: Set width for the column
    },
    {
      Header: 'roleName',
      accessor: 'roleName',
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
      Header: 'updated At',
      accessor: 'updatedAt',
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
              isView
              isEdit={row?.original?.roleName !== ROLES.ADMIN}
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

export default useRolesList;
