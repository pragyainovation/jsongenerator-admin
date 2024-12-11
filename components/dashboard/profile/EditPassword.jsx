import { BUTTON } from '@/constant/common/constant';
import useUpdatePassword from '@/hooks/profile/useUpdatePassword';
import route from '@/route/routes';
import LoaderWarpper from '@/shared/LoaderWarpper';
import { ERouter, loaderHandler } from '@/utils/helper';
import Button from '@/widgets/button/Button';
import DialogBox from '@/widgets/DialogBox';
import ConfirmationBox from '@/widgets/Dialogbox/ConfirmationBox';
import HookFormInput from '@/widgets/inputField/HookFormInput';

function EditPassword({ user }) {
  const {
    handleSubmit,
    control,
    isLoading,
    onSubmit,
    openDialog,
    setOpenDialog,
  } = useUpdatePassword({ user });
  return (
    <div className="w-full h-full overflow-y-auto overflow-hidden p-1 custom-scrollbar relative ">
      <LoaderWarpper isLoading={isLoading}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full grid grid-rows-[1fr_auto] gap-2"
        >
          <div className="border rounded h-full p-2">
            <HookFormInput
              name="oldPassword"
              label="Old Password"
              className="!mb-2"
              control={control}
              placeholder="Enter your old password"
            />

            <HookFormInput
              name="newPassword"
              label="New Password"
              control={control}
              placeholder="Enter your new passsword"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              text="Cancel"
              className="w-full"
              onClick={() => setOpenDialog(BUTTON.CANCEL)}
            />
            <Button
              type="submit"
              text="Update"
              isLoading={loaderHandler(isLoading)}
              className="w-full"
              disabled={loaderHandler(isLoading)}
            />
          </div>
        </form>
      </LoaderWarpper>
      <DialogBox isOpen={openDialog} onClose={() => setOpenDialog(null)}>
        {openDialog === BUTTON.CANCEL && (
          <ConfirmationBox
            openDialog={openDialog}
            buttonClick={() => ERouter.push(route.profile)}
          />
        )}
      </DialogBox>
    </div>
  );
}

export default EditPassword;
