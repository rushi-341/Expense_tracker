import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
import "../styles/AppUI.css";

/* 🌙 Custom Tooltip */
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "rgba(0,0,0,0.75)",
          padding: "8px 12px",
          borderRadius: "8px",
          color: "#fff"
        }}
      >
        <p style={{ margin: 0 }}>{label}</p>
        <p style={{ margin: 0, fontWeight: "600" }}>
          ₹{payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

const WeeklyChart = ({ expenses }) => {
  const [weekOffset, setWeekOffset] = useState(0);

  /* 📅 Get Monday of a given week */
  const getMonday = (date) => {
    const d = new Date(date);
    const day = d.getDay(); // Sun=0
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  };

  /* 📆 Calculate Monday based on offset */
  const baseDate = new Date();
  baseDate.setDate(baseDate.getDate() + weekOffset * 7);
  const monday = getMonday(baseDate);

  /* 📆 Generate Mon → Sun */
  const weekDays = [...Array(7)].map((_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });

  /* 📊 Prepare data */
  const data = weekDays.map(date => {
    const dayString = date.toISOString().split("T")[0];

    const total = expenses
      .filter(exp => {
        const expDate = new Date(exp.createdAt)
          .toISOString()
          .split("T")[0];
        return expDate === dayString;
      })
      .reduce((sum, exp) => sum + exp.amount, 0);

    return {
      day: date.toLocaleDateString("en-IN", { weekday: "short" }),
      amount: total
    };
  });

  /* 📅 Week label */
  const weekLabel = `${weekDays[0].toLocaleDateString()} – ${weekDays[6].toLocaleDateString()}`;

  return (
  <div className="glass-card">
    {/* Week Navigation */}
    <div className="week-nav">
      <button
        className="week-btn"
        onClick={() => setWeekOffset(prev => prev - 1)}
      >
        ⬅ Prev
      </button>

      <h3>Weekly Spending</h3>

      <button
        className="week-btn"
        onClick={() => setWeekOffset(prev => prev + 1)}
      >
        Next ➡
      </button>
    </div>

    <div className="week-label">{weekLabel}</div>

    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="amount"
          stroke="#ffffff"
          strokeWidth={3}
          dot={{ r: 5 }}
          activeDot={{ r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

};

export default WeeklyChart;
