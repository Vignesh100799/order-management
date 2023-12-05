
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", uv: 0 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 2000 },
  { name: "Apr" },
  { name: "May", uv: 1890 },
  { name: "Jun", uv: 2390 },
  { name: "Jul", uv: 3490 },
  { name: "Jul", uv: 3490 },
];

export default function LineChartOD() {
  return (
    <section style={{width:'100%'}}>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        // width={500}
        // height={200}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          connectNulls
          type="monotone" 
          dataKey="uv"
          stroke="#DB551B"
          fill="#DB551B"
        />
      </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
