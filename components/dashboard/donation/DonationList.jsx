import useDonationList from '@/hooks/donation/useDonationList';
import FilterIcon from '@/icon/FilterIcon';
import { loaderHandler } from '@/utils/helper';
import Button from '@/widgets/button/Button';
import SideOverlay from '@/widgets/SideOverlay';
import DataTable from '@/widgets/table/DataTable';
import classNames from 'classnames';
import DonationFilter from './DonationFilter';
import LoaderWarpper from '@/shared/LoaderWarpper';
import { BUTTON } from '@/constant/common/constant';
import DonationForm from './DonationForm';

function DonationList() {
  const { isLoading, data, columns, onPageChange, openOverlay, setOpenOverlay, handleFilter } = useDonationList();
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
          <div className="flex justify-end">
            <Button onClick={() => setOpenOverlay(BUTTON.FILTER)} icon={<FilterIcon iconClass={'text-white'} />} />
          </div>
          <div className="mb-1">{data?.donationList?.docs && <span className="text-sm px-1 text-red-500"> Notice: Every created payment expires after 30 minutes.</span>}</div>
        </div>

        {/* table */}
        <div className="overflow-y-auto scrollbar-hide">{data?.donationList?.docs && <DataTable columns={columns} data={data?.donationList} onPageChange={onPageChange} />}</div>
      </LoaderWarpper>

      {/* side overlay */}
      <SideOverlay isOpen={openOverlay === BUTTON.FILTER} onClose={() => setOpenOverlay(null)} title="Filter">
        <DonationFilter handleFilter={handleFilter} onClose={() => setOpenOverlay(null)} />
      </SideOverlay>

      <SideOverlay isOpen={openOverlay === BUTTON.VIEW} onClose={() => setOpenOverlay(null)} className={'sm:w-[50vw]'} title="View Donation">
        {openOverlay === BUTTON.VIEW && <DonationForm openOverlay={openOverlay} />}
      </SideOverlay>
    </div>
  );
}

export default DonationList;
