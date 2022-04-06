import React from 'react';
import ReactApexChart from 'react-apexcharts';

//ReactApexChart
const ChartTest = () => {
  const series = [
    {
      name: 'Income',
      type: 'column',
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6, 0, 0, 0, 0],
    },
    {
      name: 'Cashflow',
      type: 'column',
      data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5, 0, 0, 0, 0],
    },
    {
      name: 'Revenue',
      type: 'line',
      data: [20, 29, 37, 36, 44, 45, 50, 58, 0, 0, 0, 0],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
      events: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 1, 2],
    },
    title: {
      text: /*'XYZ - Stock Analysis (2009 - 2016)'*/ '',
      align: 'left',
      offsetX: 110,
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#008FFB',
        },
        labels: {
          style: {
            colors: '#008FFB',
          },
        },
        title: {
          text: /*'Income (thousand crores)'*/ '',
          style: {
            color: '#008FFB',
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      {
        seriesName: 'Income',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#00E396',
        },
        labels: {
          style: {
            colors: '#00E396',
          },
        },
        title: {
          text: /*'Operating Cashflow (thousand crores)'*/ '',
          style: {
            color: '#00E396',
          },
        },
      },
      {
        seriesName: 'Revenue',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#FEB019',
        },
        labels: {
          style: {
            colors: '#FEB019',
          },
        },
        title: {
          text: /*'Revenue (thousand crores)'*/ '',
          style: {
            color: '#FEB019',
          },
        },
      },
    ],
    tooltip: {
      fixed: {
        enabled: false,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60,
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40,
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="line" />
    </div>
  );
};

export default ChartTest;
