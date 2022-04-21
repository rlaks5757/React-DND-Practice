import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [3, 1, 2],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <BarCharts options={options} data={data} />;
};

export default BarChart;

const BarCharts = styled(Bar)`
  margin-top: 70px;
`;
