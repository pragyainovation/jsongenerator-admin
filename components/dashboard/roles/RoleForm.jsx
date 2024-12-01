import { BUTTON } from '@/constant/common/constant';
import useRoles from '@/hooks/roles/useRoles';
import LoaderWarpper from '@/shared/LoaderWarpper';
import { loaderHandler } from '@/utils/helper';
import Button from '@/widgets/button/Button';
import CheckBox from '@/widgets/CheckBox';
import InputField from '@/widgets/inputField/InputField';
import React from 'react';
import { Controller } from 'react-hook-form';

function RoleForm({ openOverlay, setOpenOverlay }) {
  const {
    data,
    isLoading,
    permissionLoading,
    permissionDetails,
    onSubmit,
    handleSubmit,
    handleCheck
  } = useRoles({ openOverlay, setOpenOverlay });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-rows-[1fr_auto] h-full w-full">
      <LoaderWarpper isLoading={isLoading || permissionLoading}>
        <div className="overflow-y-auto custom-scrollbar h-full w-full flex flex-col gap-2 p-1">
            {
              permissionDetails?.permissionList && Object.entries(permissionDetails?.permissionList).map(([key, value])=>{
                return (
                  <div key={key}>
                    <label>{key}</label>
                    <div className='grid grid-cols-2 xl:grid-cols-3'>
                    {
                      value?.map(item=>{
                        return (
                          <div key={item?._id} className=''>
                            <CheckBox label={item?.permission} disabled={openOverlay === BUTTON.VIEW} checked={data?.roleData?.permissions?.includes(item?._id)} id={item?._id} onChange={(e)=>handleCheck(e,item?._id)}/>
                          </div>
                        )
                      })
                    }
                    </div>
                  </div>
                )
              })
            }
        </div>

        <div className="flex justify-end flex-col gap-2 sm:flex-row border-t py-2 w-full">
          {openOverlay === BUTTON.EDIT && <Button text={openOverlay} type="submit" isLoading={loaderHandler(isLoading)} disabled={loaderHandler(isLoading)} className="w-full" />}
        </div>
      </LoaderWarpper>
    </form>
  );
}
export default RoleForm
