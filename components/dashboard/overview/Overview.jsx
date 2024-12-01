import useAllAnalytics from '@/hooks/analytics/useAllAnalytics';
import DownloadIcon from '@/icon/DownloadIcon';
import SchemaIcon from '@/icon/SchemaIcon';
import { loaderHandler } from '@/utils/helper';
import CardBox from '@/widgets/dashboard/CardBox';
import SimpleLoader from '@/widgets/loader/SimpleLoader';

function Overview() {
  const { data, isLoading } = useAllAnalytics();
  const { createdSchema, createdJson } = data;

  return (
    <div className="w-full h-full overflow-y-auto custom-scrollbar p-1">
      {loaderHandler(isLoading) && (
        <div className="w-full h-full flex justify-center items-center relative">
          <SimpleLoader isAbsoulte text={'loading...'} className="flex gap-2 items-center" />
        </div>
      )}

      {/* header card */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
        {createdSchema && <CardBox icon={<SchemaIcon />} count={createdSchema?.count} label="Total created schema" />}
        {createdJson && <CardBox icon={<DownloadIcon />} count={createdJson?.count} label="Total download" />}
      </div>
    </div>
  );
}

export default Overview;
