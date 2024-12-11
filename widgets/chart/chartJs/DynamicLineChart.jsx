import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DynamicLineChart = ({ data, options = {} }) => {
  // Define static options
  const staticOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1.2, // Can be customized
    backgroundColor: 'rgba(0, 0, 0, 0)', // Chart background color
    animation: {
      duration: 1000, // Chart rendering animation
    },
    layout: {
      padding: 20, // Padding around the chart
    },
    plugins: {
      legend: {
        display: options.legendDisplay ?? true, // Control legend visibility
        position: options.legendPosition ?? 'bottom', // Legend position
        labels: {
          boxWidth: options.legendBoxWidth ?? 20, // Width of legend box
        },
      },
      title: {
        display: options.titleDisplay ?? true, // Chart title visibility
        text: options.titleText ?? 'Chart Title', // Title text
        position: options.titlePosition ?? 'top', // Title position
        font: options.titleFont ?? { size: 16, family: 'Arial' }, // Title font
      },
      tooltip: {
        enabled: options.tooltipEnabled ?? true, // Tooltip visibility
        mode: options.tooltipMode ?? 'nearest', // Interaction mode
        callbacks: options.tooltipCallbacks ?? {},
      },
      zoom: options.pluginsZoom ?? { zoom: { enabled: true } }, // Enable zoom and panning
    },
    scales: {
      x: {
        grid: {
          display: options.xGridDisplay ?? true, // Grid visibility for X axis
        },
        ticks: {
          font: {
            size: options.xTickFontSize ?? 12, // Font size for X axis ticks
          },
        },
        // labels: options.xLabels ?? ['Jan', 'Feb', 'Mar'], // Custom X axis labels
      },
      y: {
        beginAtZero: options.yBeginAtZero ?? true, // Start Y axis at zero
        min: options.yMin ?? 0, // Minimum Y axis value
        max: options.yMax ?? 100, // Maximum Y axis value
        stepSize: options.yStepSize ?? 10, // Step size for Y axis ticks
        grid: {
          display: options.yGridDisplay ?? true, // Grid visibility for Y axis
        },
      },
    },
    hover: {
      mode: options.hoverMode ?? 'nearest', // Hover interaction mode
      animationDuration: options.hoverAnimationDuration ?? 400, // Hover animation duration
    },
  };

  // Merge static options with dynamic options passed from the parent
  const mergedOptions = { ...staticOptions };

  return <Line data={data} options={mergedOptions} />;
};

export default DynamicLineChart;
