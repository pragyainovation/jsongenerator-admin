import FilterIcon from '@/icon/FilterIcon';
import { loaderHandler } from '@/utils/helper';
import Button from '@/widgets/button/Button';
import SideOverlay from '@/widgets/SideOverlay';
import DataTable from '@/widgets/table/DataTable';
import classNames from 'classnames';
import LoaderWarpper from '@/shared/LoaderWarpper';
import { BUTTON } from '@/constant/common/constant';
import NotificationFilter from './NotificationFilter';
import NotificationForm from './NotificationForm';
import DialogBox from '@/widgets/DialogBox';
import ConfirmationBox from '@/widgets/Dialogbox/ConfirmationBox';
import useNotificationList from '@/hooks/notification/useNotificationList';
import PlusIcon from '@/icon/PlusIcon';

function NotificationList() {
  const {
    isLoading,
    data,
    columns,
    onPageChange,
    openDialog,
    setOpenDialog,
    openOverlay,
    setOpenOverlay,
    handleConfirm,
    handleFilter,
    getFetchData,
  } = useNotificationList();

  return (
    <div
      className={classNames('h-full overflow-y-hidden grid p-1 relative', {
        'grid-rows-[auto_auto_1fr]': loaderHandler(isLoading),
        'grid-rows-[auto_1fr]': !loaderHandler(isLoading),
      })}
    >
      <LoaderWarpper isLoading={isLoading}>
        {/* filter and notice */}
        <div>
          <div className="flex justify-end gap-1 items-center">
            <Button
              onClick={() => handleConfirm(BUTTON.CREATE)}
              icon={<PlusIcon iconClass={'text-white !text-xl'} />}
              text={'create'}
            />
            <Button
              onClick={() => setOpenOverlay(BUTTON.FILTER)}
              icon={<FilterIcon iconClass={'text-white'} />}
            />
          </div>
        </div>

        {/* table */}
        <div className="overflow-y-auto scrollbar-hide">
          {data?.notificationList?.docs && (
            <DataTable
              columns={columns}
              data={data?.notificationList}
              onPageChange={onPageChange}
            />
          )}
        </div>
      </LoaderWarpper>

      {/* Wrapping DialogBox and SideOverlay components inside a parent fragment */}
      <>
        {/* dialogbox */}
        <DialogBox
          isOpen={openDialog === BUTTON.DELETE}
          onClose={() => (loaderHandler(isLoading) ? {} : setOpenDialog(null))}
        >
          {openDialog === BUTTON.DELETE && (
            <ConfirmationBox
              openDialog={openDialog}
              isLoading={isLoading}
              itemName={data?.notificationData?.title}
              buttonClick={() =>
                openDialog ? handleConfirm(openDialog) : undefined
              }
            />
          )}
        </DialogBox>

        <DialogBox
          isOpen={openDialog === BUTTON.EDIT}
          onClose={() => (loaderHandler(isLoading) ? {} : setOpenDialog(null))}
        >
          {openDialog === BUTTON.EDIT && (
            <ConfirmationBox
              openDialog={openDialog}
              isLoading={isLoading}
              itemName={data?.notificationData?.title}
              buttonClick={() =>
                openDialog ? handleConfirm(openDialog) : undefined
              }
            />
          )}
        </DialogBox>

        <DialogBox
          isOpen={openDialog === BUTTON.SEND}
          onClose={() => (loaderHandler(isLoading) ? {} : setOpenDialog(null))}
        >
          {openDialog === BUTTON.SEND && (
            <ConfirmationBox
              openDialog={openDialog}
              isLoading={isLoading}
              contentText={`Are you sure you want to send notification to ${data?.notificationData?.title}`}
              buttonClick={() =>
                openDialog ? handleConfirm(openDialog) : undefined
              }
            />
          )}
        </DialogBox>

        {/* side overlay */}
        <SideOverlay
          isOpen={openOverlay === BUTTON.FILTER}
          onClose={() => setOpenOverlay(null)}
          title="Filter"
        >
          <NotificationFilter
            handleFilter={handleFilter}
            onClose={() => setOpenOverlay(null)}
          />
        </SideOverlay>

        <SideOverlay
          isOpen={openOverlay === BUTTON.CREATE}
          onClose={() => setOpenOverlay(null)}
          className={'sm:w-[50vw]'}
          title="Create Notification"
        >
          {openOverlay === BUTTON.CREATE && (
            <NotificationForm
              openOverlay={openOverlay}
              setOpenOverlay={setOpenOverlay}
              getFetchData={getFetchData}
            />
          )}
        </SideOverlay>

        <SideOverlay
          isOpen={openOverlay === BUTTON.VIEW}
          onClose={() => setOpenOverlay(null)}
          className={'sm:w-[50vw]'}
          title="View Notification"
        >
          {openOverlay === BUTTON.VIEW && (
            <NotificationForm openOverlay={openOverlay} />
          )}
        </SideOverlay>

        <SideOverlay
          isOpen={openOverlay === BUTTON.EDIT}
          onClose={() => setOpenOverlay(null)}
          className={'sm:w-[50vw]'}
          title="Edit Notification"
        >
          {openOverlay === BUTTON.EDIT && (
            <NotificationForm
              openOverlay={openOverlay}
              setOpenOverlay={setOpenOverlay}
            />
          )}
        </SideOverlay>
      </>
    </div>
  );
}

export default NotificationList;
