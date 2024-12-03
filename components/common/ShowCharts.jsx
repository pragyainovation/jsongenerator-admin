import { chartData, generateData } from '@/utils/chart/chartJsUtils';
import DynamicBarChart from '@/widgets/chart/chartJs/DynamicBarChart';
import DynamicLineChart from '@/widgets/chart/chartJs/DynamicLineChart';
import DynamicPieChart from '@/widgets/chart/chartJs/DynamicPieChart';

function ShowCharts() {
  const data = generateData(12);
  const pieData = chartData;

  const chartOptions = {
    titleDisplay: true,
    titleText: 'Custom Chart Title',
    legendDisplay: true,
    legendPosition: 'bottom',
    yMin: 0,
    yMax: 120,
    yStepSize: 20,
    pluginsZoom: { zoom: { enabled: true } },
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Dynamic Chart with Static and Dynamic Options</h1>
      <div className="h-96">
        {' '}
        {/* Set a fixed height for the chart container */}
        <DynamicLineChart data={data} options={chartOptions} />
      </div>
      <div className="h-96">
        {' '}
        {/* Set a fixed height for the chart container */}
        <DynamicBarChart data={data} options={chartOptions} />
      </div>
      <div className="h-96">
        {' '}
        {/* Set a fixed height for the chart container */}
        <DynamicPieChart data={pieData} />
      </div>
    </div>
  );
}

export default ShowCharts;
