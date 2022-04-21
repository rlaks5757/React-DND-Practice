import React from 'react';
import {
  LineChart,
  Bar,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '21년 01월',
    월별계획물량: 1000,
    월별계획실적: 1000,
    누계계획: 1000,
    누계실적: 1000,
  },
  {
    name: '21년 02월',
    월별계획물량: 1000,
    월별계획실적: 1100,
    누계계획: 2000,
    누계실적: 2100,
  },
  {
    name: '21년 03월',
    월별계획물량: 1000,
    월별계획실적: 1000,
    누계계획: 3000,
    누계실적: 3100,
  },
  {
    name: '21년 04월',
    월별계획물량: 1000,
    월별계획실적: 1200,
    누계계획: 4000,
    누계실적: 4300,
  },
  {
    name: '21년 05월',
    월별계획물량: 1000,
    월별계획실적: 1000,
    누계계획: 5000,
    누계실적: 5300,
  },
  {
    name: '21년 06월',
    월별계획물량: 1000,
    월별계획실적: 0,
    누계계획: 6000,
  },
  {
    name: '21년 07월',
    월별계획물량: 1000,
    월별계획실적: 0,
    누계계획: 7000,
  },
];

const Rechart = () => {
  return (
    <ResponsiveContainer width="100%" height="90%">
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="월별계획물량" fill="#8884d8" barSize={10} />
        <Bar dataKey="월별계획실적" fill="#82ca9d" barSize={10} />
        <Line
          type="monotone"
          dataKey="누계계획"
          stroke="#8884d8"
          // activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="누계실적" stroke="#82ca9d" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Rechart;
