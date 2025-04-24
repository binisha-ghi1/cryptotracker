import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const SparklineChart = ({ data }) => {
  if (!Array.isArray(data)) return null; 

  const formattedData = data.map((val, index) => ({ index, value: val }));

  return (
    <ResponsiveContainer width="100%" height={40}>
      <LineChart data={formattedData}>
        <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SparklineChart;


