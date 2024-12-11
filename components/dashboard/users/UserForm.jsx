import { BUTTON } from '@/constant/common/constant';
import useUsers from '@/hooks/users/useUsers';
import LoaderWarpper from '@/shared/LoaderWarpper';
import { loaderHandler } from '@/utils/helper';
import Button from '@/widgets/button/Button';
import InputField from '@/widgets/inputField/InputField';
import { Controller } from 'react-hook-form';

function UserForm({ openOverlay, setOpenOverlay }) {
  const { isLoading, onSubmit, control, handleSubmit } = useUsers({
    openOverlay,
    setOpenOverlay,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-rows-[1fr_auto] h-full w-full"
    >
      <LoaderWarpper isLoading={isLoading}>
        <div className="overflow-y-auto custom-scrollbar h-full w-full flex flex-col gap-2 p-1">
          {/* Email Field */}
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <InputField
                {...field}
                isRequired
                readOnly
                label="Email"
                placeholder="Enter email..."
                error={error?.message}
              />
            )}
          />

          {/* Username Field */}
          <Controller
            name="userName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <InputField
                {...field}
                isRequired
                readOnly={openOverlay === BUTTON.VIEW}
                label="User Name"
                placeholder="Enter username..."
                error={error?.message}
              />
            )}
          />

          {/* Full Name Field */}
          <Controller
            name="fullName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <InputField
                {...field}
                isRequired
                readOnly={openOverlay === BUTTON.VIEW}
                label="Full Name"
                placeholder="Enter full name..."
                error={error?.message}
              />
            )}
          />
        </div>

        <div className="flex justify-end flex-col gap-2 sm:flex-row border-t py-2 w-full">
          {openOverlay === BUTTON.EDIT && (
            <Button
              text={openOverlay}
              type="submit"
              isLoading={loaderHandler(isLoading)}
              disabled={loaderHandler(isLoading)}
              className="w-full"
            />
          )}
        </div>
      </LoaderWarpper>
    </form>
  );
}

export default UserForm;
