import { loaderHandler } from '@/utils/helper';
import DialogBox from '@/widgets/DialogBox';
import SearchBar from '@/widgets/SearchBar';
import DataTable from '@/widgets/table/DataTable';
import classNames from 'classnames';
import { BUTTON } from '@/constant/common/constant';
import ConfirmationBox from '@/widgets/Dialogbox/ConfirmationBox';
import SideOverlay from '@/widgets/SideOverlay';
import TicketFilter from './TicketFilter';
import Button from '@/widgets/button/Button';
import FilterIcon from '@/icon/FilterIcon';
import LoaderWarpper from '@/shared/LoaderWarpper';
import TicketForm from './TicketForm';
import useTicketList from '@/hooks/tickets/useTicketList';

function TicketList() {
  const {
    data,
    isLoading,
    columns,
    onPageChange,
    searchListData,
    openDialog,
    setOpenDialog,
    handleConfirm,
    openOverlay,
    setOpenOverlay,
    handleFilter,
  } = useTicketList();
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
            placeholder="Search ticket..."
          />
          <Button
            onClick={() => setOpenOverlay(BUTTON.FILTER)}
            icon={<FilterIcon iconClass={'text-white'} />}
          />
        </div>

        <div className="overflow-y-auto scrollbar-hide">
          {data?.ticketList?.docs && (
            <DataTable
              columns={columns}
              data={data?.ticketList}
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
        {openDialog === BUTTON.CLOSE && (
          <ConfirmationBox
            openDialog={openDialog}
            isLoading={isLoading}
            itemName={data?.ticketData?.subject}
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
        <TicketFilter
          handleFilter={handleFilter}
          onClose={() => setOpenOverlay(null)}
        />
      </SideOverlay>

      <SideOverlay
        isOpen={openOverlay === BUTTON.CLOSE}
        onClose={() => setOpenOverlay(null)}
        className={'sm:w-[50vw]'}
        title="Close Ticket"
      >
        {openOverlay === BUTTON.CLOSE && (
          <TicketForm
            openOverlay={openOverlay}
            setOpenOverlay={setOpenOverlay}
          />
        )}
      </SideOverlay>

      <SideOverlay
        isOpen={openOverlay === BUTTON.VIEW}
        onClose={() => setOpenOverlay(null)}
        className={'sm:w-[50vw]'}
        title="View Ticket"
      >
        {openOverlay === BUTTON.VIEW && (
          <TicketForm openOverlay={openOverlay} />
        )}
      </SideOverlay>
    </div>
  );
}

export default TicketList;
