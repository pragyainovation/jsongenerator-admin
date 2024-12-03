// components/DynamicPieChart.js
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  // Optionally you could import a specific scale element for more control
} from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const DynamicPieChart = ({ data, options }) => {
  // Static chart options with placeholders for dynamic customization
  const staticOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1.2, // Aspect ratio when resizing
    backgroundColor: 'rgba(0, 0, 0, 0)', // Background color of chart
    animation: {
      duration: 1000, // Animation duration for chart rendering
    },
    layout: {
      padding: 20, // Padding around the chart
    },
    plugins: {
      legend: {
        display: options?.legendDisplay ?? true, // Legend visibility
        position: options?.legendPosition ?? 'bottom', // Legend position (top, left, etc.)
        labels: {
          boxWidth: options?.legendBoxWidth ?? 20, // Width of the legend color box
        },
      },
      title: {
        display: options?.titleDisplay ?? true, // Title visibility
        text: options?.titleText ?? 'Dynamic Pie Chart', // Chart title text
        position: options?.titlePosition ?? 'top', // Title position (top, bottom)
        font: options?.titleFont ?? { size: 16, family: 'Arial' }, // Title font
      },
      tooltip: {
        enabled: options?.tooltipEnabled ?? true, // Tooltip visibility
        mode: options?.tooltipMode ?? 'nearest', // Tooltip interaction mode
        callbacks: options?.tooltipCallbacks ?? {}, // Custom tooltip callbacks
      },
    },
    hover: {
      mode: options?.hoverMode ?? 'nearest', // Hover interaction mode
      animationDuration: options?.hoverAnimationDuration ?? 400, // Duration of hover animation
    },
    // Dynamic scale-like control (cutout to adjust the inner radius)
    cutout: options?.cutout || '50%', // Controls the cutout (radius) for the center of the pie chart (similar to a scale)
    radius: options?.radius || '100%', // Controls the radius of the pie chart
  };

  // Merging static options with dynamic options passed as props
  const mergedOptions = { ...staticOptions };

  return <Pie data={data} options={mergedOptions} />;
};

export default DynamicPieChart;
