import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const DynamicBarChart = ({ data, options }) => {
  // Static chart options
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
        text: options?.titleText ?? 'Dynamic Bar Chart', // Chart title text
        position: options?.titlePosition ?? 'top', // Title position (top, bottom)
        font: options?.titleFont ?? { size: 16, family: 'Arial' }, // Title font
      },
      tooltip: {
        enabled: options?.tooltipEnabled ?? true, // Tooltip visibility
        mode: options?.tooltipMode ?? 'nearest', // Tooltip interaction mode
        callbacks: options?.tooltipCallbacks ?? {}, // Custom tooltip callbacks
      },
      zoom: options?.pluginsZoom ?? { zoom: { enabled: true } }, // Zoom and pan
    },
    scales: {
      x: {
        grid: {
          display: options?.xGridDisplay ?? true, // X-axis gridline visibility
        },
        ticks: {
          font: {
            size: options?.xTickFontSize ?? 12, // Font size for X-axis ticks
          },
        },
        // labels: options?.xLabels ?? ['Jan', 'Feb', 'Mar'], // Custom X-axis labels
      },
      y: {
        beginAtZero: options?.yBeginAtZero ?? true, // Start Y-axis at zero
        min: options?.yMin ?? 0, // Minimum value for Y-axis
        max: options?.yMax ?? 100, // Maximum value for Y-axis
        stepSize: options?.yStepSize ?? 10, // Y-axis step size
        grid: {
          display: options?.yGridDisplay ?? true, // Y-axis gridline visibility
        },
      },
    },
    hover: {
      mode: options?.hoverMode ?? 'nearest', // Hover interaction mode
      animationDuration: options?.hoverAnimationDuration ?? 400, // Duration of hover animation
    },
    elements: {
      bar: {
        borderWidth: options?.barBorderWidth ?? 2, // Bar border width
        borderColor: options?.barBorderColor ?? 'rgba(0, 0, 0, 1)', // Bar border color
      },
    },
  };

  // Merging static options with dynamic options passed as props
  const mergedOptions = { ...staticOptions, ...options };

  return <Bar data={data} options={mergedOptions} />;
};

export default DynamicBarChart;
