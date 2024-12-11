import FilterIcon from '@/icon/FilterIcon';
import { loaderHandler } from '@/utils/helper';
import Button from '@/widgets/button/Button';
import SideOverlay from '@/widgets/SideOverlay';
import DataTable from '@/widgets/table/DataTable';
import classNames from 'classnames';
import LoaderWarpper from '@/shared/LoaderWarpper';
import { BUTTON } from '@/constant/common/constant';
import useApiList from '@/hooks/analytics/api/useApiList';
import ApiAnalyticsForm from './ApiAnalyticsForm';
import ApiAnalyticsFilter from './ApiAnalyticsFilter';

function ApiAnalytics() {
  const {
    isLoading,
    data,
    columns,
    onPageChange,
    openOverlay,
    setOpenOverlay,
    handleFilter,
  } = useApiList();
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
            <Button
              onClick={() => setOpenOverlay(BUTTON.FILTER)}
              icon={<FilterIcon iconClass={'text-white'} />}
            />
          </div>
        </div>

        {/* table */}
        <div className="overflow-y-auto scrollbar-hide">
          {data?.apiList?.docs && (
            <DataTable
              columns={columns}
              data={data?.apiList}
              onPageChange={onPageChange}
            />
          )}
        </div>
      </LoaderWarpper>

      {/* side overlay */}
      <SideOverlay
        isOpen={openOverlay === BUTTON.FILTER}
        onClose={() => setOpenOverlay(null)}
        title="Filter"
      >
        <ApiAnalyticsFilter
          handleFilter={handleFilter}
          onClose={() => setOpenOverlay(null)}
        />
      </SideOverlay>

      <SideOverlay
        isOpen={openOverlay === BUTTON.VIEW}
        onClose={() => setOpenOverlay(null)}
        className={'sm:w-[50vw]'}
        title="View Api"
      >
        {openOverlay === BUTTON.VIEW && (
          <ApiAnalyticsForm openOverlay={openOverlay} />
        )}
      </SideOverlay>
    </div>
  );
}

export default ApiAnalytics;
