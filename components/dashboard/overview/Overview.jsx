import useAllAnalytics from '@/hooks/analytics/overview/useAllAnalytics';
import DownloadIcon from '@/icon/DownloadIcon';
import SchemaIcon from '@/icon/SchemaIcon';
import { generateData } from '@/utils/chart/chartJsUtils';
import { loaderHandler } from '@/utils/helper';
import DynamicBarChart from '@/widgets/chart/chartJs/DynamicBarChart';
import CardBox from '@/widgets/dashboard/CardBox';
import SimpleLoader from '@/widgets/loader/SimpleLoader';

function Overview() {
  const { data, isLoading } = useAllAnalytics();
  const { createdSchema, totalCreatedJson, highUsedAPI } = data;
  const highUsedApidata = generateData({ data: highUsedAPI, labelKey: 'endpoint', dataSetKey: ['successCount', 'failureCount'] });

  const maxHighUsedApi = highUsedAPI?.reduce((max, current) => {
    const currentMax = Math.max(current?.successCount || 0, current?.failureCount || 0);

    return currentMax > max ? currentMax : max;
  }, 0);

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
        {totalCreatedJson && <CardBox icon={<DownloadIcon />} count={totalCreatedJson?.count} label="Total download" />}
      </div>

      <div className="w-full border rounded my-2 h-96">
        {highUsedApidata && (
          <DynamicBarChart
            data={highUsedApidata}
            options={{
              titleDisplay: true,
              titleText: 'High Used API Chart',
              legendDisplay: true,
              legendPosition: 'bottom',
              yMin: 0,
              yMax: maxHighUsedApi * 2,
              yStepSize: (maxHighUsedApi * 10) / 5,
              pluginsZoom: { zoom: { enabled: true } },
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Overview;
