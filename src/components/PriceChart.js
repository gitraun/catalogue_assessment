// components/PriceChart.js
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function PriceChart({ timeframe }) {
  //Mock data
  const data = [
    { time: "00:00", price: 63000 },
    { time: "04:00", price: 64200 },
    { time: "08:00", price: 63800 },
    { time: "12:00", price: 63400 },
    { time: "16:00", price: 63179.71 },
  ];

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" axisLine={false} tickLine={false} dy={10} />
          <YAxis domain={["auto", "auto"]} axisLine={false} tickLine={false} dx={-10} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#4F46E5" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
