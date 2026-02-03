import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Calendar } from "lucide-react";
import "../../styles/Charts.css";

const data = [
  { date: "01 Oct", visiteurs: 4200, sessions: 5200, taux: 42 },
  { date: "02 Oct", visiteurs: 5300, sessions: 6100, taux: 38 },
  { date: "03 Oct", visiteurs: 4800, sessions: 5800, taux: 41 },
  { date: "04 Oct", visiteurs: 6200, sessions: 7200, taux: 35 },
  { date: "05 Oct", visiteurs: 5800, sessions: 6800, taux: 39 },
  { date: "06 Oct", visiteurs: 7100, sessions: 8200, taux: 32 },
  { date: "07 Oct", visiteurs: 6500, sessions: 7500, taux: 37 },
];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="custom-tooltip">
      <p className="tooltip-date">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} className="tooltip-item" style={{ color: entry.color }}>
          {entry.name}: {entry.value.toLocaleString()}
          {entry.dataKey === "taux" ? "%" : ""}
        </p>
      ))}
    </div>
  );
}

export default function TrafficChart({ dateRange }) {
  return (
    <div className="chart-wrapper">
      <div className="chart-header">
        <h3 className="chart-title">Évolution du trafic</h3>
        <div className="chart-controls">
          <button type="button" className="chart-btn active">
            Journalier
          </button>
          <button type="button" className="chart-btn">
            Hebdomadaire
          </button>
          <button type="button" className="chart-btn">
            Mensuel
          </button>
          <button type="button" className="chart-btn icon">
            <Calendar size={16} />
          </button>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="date" stroke="#666" tick={{ fontSize: 12 }} />
            <YAxis stroke="#666" tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="visiteurs"
              stroke="#4361ee"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Visiteurs"
            />
            <Line
              type="monotone"
              dataKey="sessions"
              stroke="#4cc9f0"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ r: 4 }}
              name="Sessions"
            />
            <Line
              type="monotone"
              dataKey="taux"
              stroke="#f72585"
              strokeWidth={2}
              yAxisId="right"
              orientation="right"
              dot={{ r: 4 }}
              name="Taux de rebond %"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-footer">
        <div className="chart-stats">
          <div className="stat">
            <span className="stat-label">Visiteurs totaux</span>
            <span className="stat-value">39.9K</span>
          </div>
          <div className="stat">
            <span className="stat-label">Sessions</span>
            <span className="stat-value">46.8K</span>
          </div>
          <div className="stat">
            <span className="stat-label">Taux de rebond moyen</span>
            <span className="stat-value">37.7%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
