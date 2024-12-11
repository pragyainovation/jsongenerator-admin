import DynamicBarChart from '@/widgets/chart/chartJs/DynamicBarChart';
import DynamicLineChart from '@/widgets/chart/chartJs/DynamicLineChart';
import DynamicPieChart from '@/widgets/chart/chartJs/DynamicPieChart';

function ShowCharts() {
  // utils/chartUtils.js

  const chartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: 'My Dataset',
        data: [300, 50, 100, 150, 75], // Data values for pie chart
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ], // Dynamic background color for each slice
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ], // Dynamic border color
        borderWidth: 1, // Dynamic border width
      },
    ],
  };

  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const generateDataset = (
    label,
    color,
    count = 7,
    range = { min: 0, max: 100 }
  ) => ({
    label,
    data: Array.from({ length: count }, () =>
      getRandomNumber(range.min, range.max)
    ),
    borderColor: color, // For the line chart
    backgroundColor: color, // Ensure this is set for bar charts
  });

  const generateData = (count = 12) => {
    return {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        generateDataset('Dataset 1', 'rgba(255, 99, 132)', count),
        generateDataset('Dataset 2', 'rgba(54, 162, 235)', count),
      ],
    };
  };

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
      <h1 className="text-xl font-bold mb-4">
        Dynamic Chart with Static and Dynamic Options
      </h1>
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
