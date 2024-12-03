// utils/chartUtils.js

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const generateDataset = (label, color, count = 7, range = { min: 0, max: 100 }) => ({
  label,
  data: Array.from({ length: count }, () => getRandomNumber(range.min, range.max)),
  borderColor: color,
  backgroundColor: `${color}80`, // Adding transparency
});

export const generateData = (count = 12) => {
  return {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [generateDataset('Dataset 1', 'rgba(255, 99, 132)', count), generateDataset('Dataset 2', 'rgba(54, 162, 235)', count)],
  };
};

export const chartData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [
    {
      label: 'My Dataset',
      data: [300, 50, 100, 150, 75], // Data values for pie chart
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'], // Dynamic background color for each slice
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'], // Dynamic border color
      borderWidth: 1, // Dynamic border width
    },
  ],
};
