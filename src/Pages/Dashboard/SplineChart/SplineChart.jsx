import React from "react";
import { CartesianGrid,  Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const SplineChart = ({lineData}) => {

  const tickStyle={
    fill: "#858585", fontFamily: 'Lato',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '19px'
  }

  return (
    <ResponsiveContainer width="99%" height="100%" >
      <LineChart data={lineData}>
        <CartesianGrid vertical={false} stroke="#EAEAEA" />
        <XAxis dataKey="name" tickLine={false} stroke="transparent" tick={tickStyle} />
        <YAxis tickLine={false} stroke="transparent" tick={tickStyle} tickCount={6} />
        <Line  type="monotone" dataKey="views" stroke="#9BDD7C" dot={false} strokeWidth={3} />
        <Line type="monotone" dataKey="likes" stroke="#E9A0A0" dot={false} strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer >);
};

export default SplineChart;