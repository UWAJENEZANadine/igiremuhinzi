import React from "react";
import sales from "../../assets/constants/sales.json";
import { Space } from "antd";
import "./Overview.css";
import {
  ComposedChart,
  XAxis,
  Tooltip,
  YAxis,
  Legend,
  CartesianGrid,
  Area,
  Bar,
  Line,
} from "recharts";

const data = [
  {
    name: "JAN",
    Order: 4000,
    sales: 2400,
    amount: 2400,
  },
  {
    name: "FEB",
    uv: 3000,
    sales: 1398,
    amount: 2210,
  },
  {
    name: "MARCH",
    Order: 2000,
    sales: 9800,
    amount: 2290,
  },
  {
    name: "APLY",
    Order: 2780,
    sales: 3908,
    amount: 2000,
  },
  {
    name: "MAY",
    Order: 1890,
    sales: 4800,
    amount: 2181,
  },
  {
    name: "JUNE",
    Order: 2390,
    sales: 3800,
    amount: 2500,
  },
  {
    name: "JULY",
    Order: 3490,
    sales: 4300,
    amount: 2100,
  },
];
const Overview = () => {
  return (
    <>
      <div className="grid">
        {sales.map((data) => (
          <>
            <Space>
              {data.title}
              {data.value}
            </Space>
          </>
        ))}
      </div>

      <div>
        <ComposedChart width={730} height={250} data={data} className="chart-container" >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="Order" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="sales" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="amount" stroke="#ff7300" />
        </ComposedChart>
      </div>
    </>
  );
};

export default Overview;
