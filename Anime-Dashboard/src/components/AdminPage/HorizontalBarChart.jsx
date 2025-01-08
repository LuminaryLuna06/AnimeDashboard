import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

const HorizontalBarChart = () => {
  // Data for the chart
  const data = [
    { name: "Carlotta", pulls: 42534, percentage: 58.39 },
    { name: "Zhezhi", pulls: 6434, percentage: 8.83 },
    { name: "Encore", pulls: 4878, percentage: 6.70 },
    { name: "Verina", pulls: 4837, percentage: 6.64 },
    { name: "Lingyang", pulls: 4772, percentage: 6.55 },
    { name: "Jianxin", pulls: 4740, percentage: 6.51 },
  ];

  // Highlight color for the top character
  const highlightColor = "gold";
  const defaultColor = "gray";

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        layout="vertical" // Makes the chart horizontal
        margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" width={100} />
        <Tooltip
          formatter={(value, name, props) => {
            if (name === "pulls") {
              const { payload } = props;
              return `${value} pulls (${payload.percentage}%)`;
            }
            return value;
          }}
        />
        <Bar dataKey="pulls" barSize={20}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index === 0 ? highlightColor : defaultColor}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HorizontalBarChart;
