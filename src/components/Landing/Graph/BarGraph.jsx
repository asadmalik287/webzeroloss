import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Text,
} from "recharts";

const Label = (props) => {
  const { x, y, value } = props;
  return (
    <text
      x={x}
      y={y}
      dx={"3.2%"}
      dy={"-3%"}
      fontSize="12"
      fontWeight="bold"
      fill={"#D3DBDB"}
      textAnchor="middle"
      color="white"
    >
      {Number(value).toFixed(2)} {/* Format to 3 decimal places */}
    </text>
  );
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based in JavaScript
  // const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year
  return `${day}/${month}`;
};

const CustomTick = (props) => {
  const { x, y, dx, dy, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <Text
        x={0}
        y={0}
        dy={dy}
        dx={dx}
        textAnchor="middle"
        fill="#D3DBDB"
        fontSize={12}
      >
        {payload.value}
      </Text>
    </g>
  );
};

const BarGraph = ({ chartData }) => {
  const calculatedWidth = chartData?.length * 90; // Adjusted width for smaller graph

  return (
    <div className="custom-horizontal-scrollbar graph-container ">
      <div className="scroll-container">
        <BarChart
          width={chartData?.length <= 7 ? 460 : calculatedWidth}
          height={195}
          data={chartData}
          margin={{
            top: 30,
            right: 30,
            left: 10,
            bottom: 5,
          }}
          barGap={15}
        >
          <CartesianGrid vertical={false} strokeDasharray="0" />
          <XAxis
            dataKey="date"
            tickLine={false}
            fontSize="12"
            // tick={<CustomTick dx={0} dy={10} />}
            tickFormatter={formatDate} // Use the custom date formatter
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            fontSize="12"
            tick={<CustomTick dx={-12} dy={5} />}
          />
          <Tooltip content={<CustomTooltip />} /> {/* Use the custom tooltip */}
          <Bar
            dataKey="pnl"
            label={<Label />}
            fill="#53C07D"
            barSize={30}
            radius={[5, 5, 5, 5]}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default BarGraph;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#ffffff",
          padding: "5px 10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          color: "black",
          fontSize: "12px", // Adjust the font size
        }}
      >
        <p className="label " style={{ margin: 0 }}>{`pnl : ${Number(
          payload[0].value
        ).toFixed(3)}`}</p>
      </div>
    );
  }

  return null;
};
