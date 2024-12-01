
import { BUTTON } from '@/constant/common/constant';
import { getPermissionList, permissionData, setPermissionData } from '@/redux/slice/permissionSlice';
import { rolesData, setRolesData, updateRoles } from '@/redux/slice/rolesSlice';
import { fullfiledHandler, getId, groupBy } from '@/utils/helper';
import { userUpdateSchema } from '@/validation/userValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

function useRoles({
  openOverlay,
  setOpenOverlay
}) {
  const dispatch = useDispatch();

  const { isLoading, data } = useSelector(rolesData);
  const { isLoading: permissionLoading, data: permissionDetails } = useSelector(permissionData);

  async function getFetchData() {
    const response = await dispatch(
      getPermissionList({
        data: {
          "roleName": data?.roleData?.roleName 
        },
      })
    );

    if (fullfiledHandler(response?.meta?.requestStatus)) {
      const groupData = groupBy(response?.payload, "categoryName", ['_id', 'permission'])
      dispatch(setPermissionData({ name: 'permissionList', value: groupData }));
    }
  }

  useEffect(() => {
    if(data?.roleData?.roleName){
      getFetchData();
    }
  }, []);

  const defaultValues = {
    permissions: data?.roleData?.permissions
  };
  

  const { handleSubmit, control,watch, reset } = useForm({
    defaultValues,
  });

  const handleCheck = (value, id) => {
    if(value){
      const updatedData = [...data?.roleData?.permissions, id]
      dispatch(setRolesData({key: 'roleData.permissions', value: updatedData}))
    }else{
      const updatedData =  data?.roleData?.permissions?.filter(item=>item !== id)
      dispatch(setRolesData({key: 'roleData.permissions', value: updatedData}))
    }
  };

  const onSubmit = async () => {
  switch(openOverlay){
    case BUTTON.EDIT:{
      const params = getId(data?.roleData);
      const payloadData = {
        permissions: data?.roleData?.permissions,
      }
      const responseData = await dispatch(updateRoles({ data: payloadData, params }));

      if (fullfiledHandler(responseData?.meta?.requestStatus)) {
        const updatedData = data?.rolesList?.docs?.map(item=>{
          return item?._id === responseData?.payload?._id ? {...responseData?.payload} : item
        })
        dispatch(setRolesData({key:"rolesList.docs" ,value:updatedData}))
        setOpenOverlay(null)
      }
      return
    }
    default:
        console.error('Action not recognized.');
  }

  };

  return {
    isLoading,
    onSubmit,
    control,
    data,
    watch,
    handleSubmit,
    reset,
    permissionLoading,
    permissionDetails,
    handleCheck
  };
}

export default useRoles
