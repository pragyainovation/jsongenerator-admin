import { BUTTON } from '@/constant/common/constant';
import useProfile from '@/hooks/profile/useProfile';
import EditIcon from '@/icon/EditIcon';
import UserIcon from '@/icon/UserIcon';
import route from '@/route/routes';
import { ERouter } from '@/utils/helper';
import Button from '@/widgets/button/Button';
import DialogBox from '@/widgets/DialogBox';
import ConfirmationBox from '@/widgets/Dialogbox/ConfirmationBox';

function Profile({ user }) {
  const { openDialog, setOpenDialog } = useProfile({ user });
  return (
    <div className="border rounded w-full h-full overflow-y-auto custom-scrollbar">
      <div className="w-full bg-black flex flex-col gap-5 items-center p-10 text-white relative">
        <div className="absolute right-1 top-1">
          <Button
            noClass
            onClick={() => setOpenDialog(BUTTON.EDIT)}
            icon={<EditIcon iconClass={'!text-white'} />}
          />
        </div>
        <div className="w-32 aspect-square rounded-full bg-white flex justify-center items-center shrink-0">
          <UserIcon iconClass="!text-7xl" />
        </div>
        <h1>{user.fullName}</h1>
        <h1>{user.email}</h1>
      </div>
      <div className="p-2 flex flex-col gap-2">
        {/* <label>Subscription :</label>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 xl:grid-cols-4'>
                <CardBox />
                <CardBox />
                <CardBox />
                <CardBox />
            </div> */}

        <h6>Password :</h6>
        <div>
          <Button
            onClick={() => setOpenDialog('updatePassword')}
            text={'Edit Password'}
          />
        </div>
      </div>
      <DialogBox isOpen={openDialog} onClose={() => setOpenDialog(null)}>
        {openDialog === BUTTON.EDIT && (
          <ConfirmationBox
            openDialog={openDialog}
            itemName="Profile"
            buttonClick={() => ERouter.push(route.editProfile)}
          />
        )}
        {openDialog === 'updatePassword' && (
          <ConfirmationBox
            openDialog={openDialog}
            contentText='Are you sure you want to update "Password"?'
            buttonClick={() => ERouter.push(route.EditPassword)}
          />
        )}
      </DialogBox>
    </div>
  );
}

export default Profile;
