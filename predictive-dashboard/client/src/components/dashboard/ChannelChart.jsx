import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { ArrowUpRight } from "lucide-react";
import "../../styles/Charts.css";

const ChannelChart = ({ dateRange }) => {
  const data = [
    { name: "Organique", value: 35, color: "#4361ee" },
    { name: "Social", value: 25, color: "#4cc9f0" },
    { name: "Email", value: 20, color: "#7209b7" },
    { name: "Direct", value: 12, color: "#f72585" },
    { name: "Référence", value: 8, color: "#ff9e00" },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip pie">
          <p className="tooltip-name">{payload[0].name}</p>
          <p className="tooltip-value">{payload[0].value} %</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart-wrapper">
      <div className="chart-header">
        <h3 className="chart-title">Canaux d'acquisition</h3>
        <div className="trend-indicator positive">
          <ArrowUpRight size={16} />
          <span>+12.4%</span>
        </div>
      </div>
      <div className="pie-chart-container">
        <div className="pie-chart">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="pie-stats">
          <div className="pie-stat">
            <div
              className="stat-dot"
              style={{ backgroundColor: "#4361ee" }}
            ></div>
            <div className="stat-info">
              <span className="stat-name">Organique</span>
              <span className="stat-percent">35%</span>
            </div>
          </div>
          <div className="pie-stat">
            <div
              className="stat-dot"
              style={{ backgroundColor: "#4cc9f0" }}
            ></div>
            <div className="stat-info">
              <span className="stat-name">Social</span>
              <span className="stat-percent">25%</span>
            </div>
          </div>
          <div className="pie-stat">
            <div
              className="stat-dot"
              style={{ backgroundColor: "#7209b7" }}
            ></div>
            <div className="stat-info">
              <span className="stat-name">Email</span>
              <span className="stat-percent">20%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="chart-summary">
        <p className="summary-text">
          Le trafic organique reste le canal principal avec <strong>35%</strong>{" "}
          des acquisitions. Les réseaux sociaux montrent la plus forte
          croissance ce mois-ci.
        </p>
      </div>
    </div>
  );
};

export default ChannelChart;
