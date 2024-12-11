import { loaderHandler } from '@/utils/helper';
import DialogBox from '@/widgets/DialogBox';
import SearchBar from '@/widgets/SearchBar';
import DataTable from '@/widgets/table/DataTable';
import classNames from 'classnames';
import { BUTTON } from '@/constant/common/constant';
import ConfirmationBox from '@/widgets/Dialogbox/ConfirmationBox';
import SideOverlay from '@/widgets/SideOverlay';
import LoaderWarpper from '@/shared/LoaderWarpper';
import UserForm from './UserForm';
import useUsersList from '@/hooks/users/useUsersList';

function UsersList() {
  const {
    data,
    isLoading,
    columns,
    onPageChange,
    searchListData,
    handleConfirm,
    openDialog,
    setOpenDialog,
    openOverlay,
    setOpenOverlay,
  } = useUsersList();

  return (
    <div
      className={classNames('h-full overflow-y-hidden grid p-1 relative', {
        'grid-rows-[auto_auto_1fr]': loaderHandler(isLoading),
        'grid-rows-[auto_1fr]': !loaderHandler(isLoading),
      })}
    >
      <LoaderWarpper isLoading={isLoading}>
        {/* searchbar */}
        <div className="mb-2 flex justify-end gap-2">
          <SearchBar
            className="w-full sm:w-auto"
            onSearchValue={(searchValue) => searchListData(searchValue)}
            placeholder="Search user..."
          />
        </div>

        {/* user's data */}
        <div className="overflow-y-auto scrollbar-hide">
          {data?.usersList?.docs && (
            <DataTable
              columns={columns}
              data={data?.usersList}
              onPageChange={onPageChange}
            />
          )}
        </div>
      </LoaderWarpper>

      {/* dialogbox */}
      <DialogBox
        isOpen={openDialog}
        onClose={() => (loaderHandler(isLoading) ? {} : setOpenDialog(null))}
      >
        {openDialog === BUTTON.EDIT && (
          <ConfirmationBox
            openDialog={openDialog}
            isLoading={isLoading}
            itemName={data?.userData?.fullName}
            buttonClick={() =>
              openDialog ? handleConfirm(openDialog) : undefined
            }
          />
        )}
      </DialogBox>

      {/* side overlay */}
      <SideOverlay
        isOpen={openOverlay === BUTTON.EDIT}
        onClose={() => setOpenOverlay(null)}
        className={'sm:w-[50vw]'}
        title="Edit User"
      >
        {openOverlay === BUTTON.EDIT && (
          <UserForm openOverlay={openOverlay} setOpenOverlay={setOpenOverlay} />
        )}
      </SideOverlay>

      <SideOverlay
        isOpen={openOverlay === BUTTON.VIEW}
        onClose={() => setOpenOverlay(null)}
        className={'sm:w-[50vw]'}
        title="View User"
      >
        {openOverlay === BUTTON.VIEW && <UserForm openOverlay={openOverlay} />}
      </SideOverlay>
    </div>
  );
}

export default UsersList;
