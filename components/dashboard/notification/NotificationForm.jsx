import { BUTTON } from '@/constant/common/constant';
import useNotification from '@/hooks/notification/useNotification';
import LoaderWarpper from '@/shared/LoaderWarpper';
import { loaderHandler } from '@/utils/helper';
import { OPTIONS } from '@/utils/options/commonOptions';
import Button from '@/widgets/button/Button';
import SimpleDropdown from '@/widgets/dropdown/SimpleDropdown';
import InputField from '@/widgets/inputField/InputField';
import TextAreaField from '@/widgets/inputField/TextAreaField';
import { Controller } from 'react-hook-form';

function RecursiveRenderer({ data }) {
  return (
    <div className="flex flex-col gap-2">
      {Object.entries(data)
        .filter(([key]) => !['_id', '__v'].includes(key))
        .map(([key, value]) => (
          <div key={key} className="flex flex-col gap-1">
            <span className="font-bold">{key}:</span>
            {typeof value === 'object' && value !== null ? (
              <div className="ml-4 border-l-2 border-gray-300 pl-2">
                <RecursiveRenderer data={value} />
              </div>
            ) : (
              <span className="bg-gray-100 rounded p-1 break-all">
                {String(value)}
              </span>
            )}
          </div>
        ))}
    </div>
  );
}

function NotificationForm({ openOverlay, setOpenOverlay, getFetchData }) {
  const { data, isLoading, onSubmit, control, handleSubmit, roleData, watch } =
    useNotification({ openOverlay, setOpenOverlay, getFetchData });

  if (openOverlay === BUTTON.VIEW) {
    return (
      <form className="grid grid-rows-[1fr_auto] h-full w-full">
        <LoaderWarpper isLoading={isLoading}>
          <div className="overflow-y-auto custom-scrollbar h-full w-full flex flex-col gap-2 p-1">
            {data?.notificationData && (
              <RecursiveRenderer data={data.notificationData} />
            )}
          </div>
        </LoaderWarpper>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-rows-[1fr_auto] h-full w-full"
    >
      <LoaderWarpper isLoading={isLoading}>
        <LoaderWarpper isLoading={isLoading}>
          <div className="overflow-y-auto custom-scrollbar h-full w-full flex flex-col gap-2 p-1">
            {/* title Field */}
            <Controller
              name="title"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputField
                  {...field}
                  isRequired
                  label="title"
                  placeholder="Enter title..."
                  error={error}
                />
              )}
            />

            {/* message Field */}
            <Controller
              name="message"
              control={control}
              render={({ field, fieldState: { error } }) => {
                return (
                  <TextAreaField
                    {...field}
                    isRequired
                    label="message"
                    placeholder="Enter message..."
                    error={error}
                  />
                );
              }}
            />

            {/* message Field */}
            {roleData && (
              <Controller
                name="roles"
                control={control}
                defaultValue={[]}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <SimpleDropdown
                      {...field}
                      isRequired
                      label="roles"
                      placeholder="select roles..."
                      rolesList
                      ismulti
                      options={roleData?.rolesList?.docs?.map((item) => ({
                        label: item.roleName,
                        value: item._id,
                      }))}
                      error={error}
                    />
                  );
                }}
              />
            )}

            {/* eslint-disable-next-line */}
            {watch('roles')?.length > 0 && (
              <Controller
                name="isGlobal"
                control={control}
                defaultValue={[]}
                render={({ field, fieldState: { error } }) => (
                  <SimpleDropdown
                    {...field}
                    isRequired
                    label="isGlobal"
                    placeholder="select isGlobal..."
                    rolesList
                    options={OPTIONS.BOOLEAN}
                    error={error}
                  />
                )}
              />
            )}
          </div>
          <div className="flex justify-end flex-col gap-2 sm:flex-row border-t py-2 w-full">
            {(openOverlay === BUTTON.CREATE || openOverlay === BUTTON.EDIT) && (
              <Button
                text={
                  openOverlay === BUTTON.EDIT
                    ? 'Edit Notification'
                    : 'Create Notification'
                }
                type="submit"
                isLoading={loaderHandler(isLoading)}
                disabled={loaderHandler(isLoading)}
                className="w-full"
              />
            )}
          </div>
        </LoaderWarpper>
      </LoaderWarpper>
    </form>
  );
}

export default NotificationForm;
