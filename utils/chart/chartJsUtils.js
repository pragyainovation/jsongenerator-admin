import { convertHexToRgba } from '../helper';

// utils/chartUtils.js
export const colorShade = ['#000000', '#4d4d4d', '#666666', '#808080', '#999999', '#b3b3b3', '#cccccc', '#e6e6e6'];

export const rgbaColorShade = convertHexToRgba(colorShade);

export const generateDataset = (label, color, data) => ({
  label,
  data: data?.map((item) => item[label]),
  borderColor: color, // For the line chart
  backgroundColor: color, // Corrected: set to `color` instead of the string 'color'
});

export const generateData = ({ data, labelKey, dataSetKey }) => {
  return {
    labels: data?.map((item) => item[labelKey]),
    datasets: dataSetKey?.map((item, index) => generateDataset(item, rgbaColorShade[index], data)),
  };
};
