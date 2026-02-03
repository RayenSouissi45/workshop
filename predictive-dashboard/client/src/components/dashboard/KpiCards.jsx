import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Users,
  ShoppingCart,
  Eye,
  DollarSign,
} from "lucide-react";
import "../../styles/KpiCards.css";

const KpiCards = ({ dateRange }) => {
  const kpis = [
    {
      title: "Visiteurs",
      value: "12.5K",
      change: "+12.5%",
      isPositive: true,
      icon: <Users size={24} />,
      color: "blue",
    },
    {
      title: "Conversions",
      value: "1,248",
      change: "+8.2%",
      isPositive: true,
      icon: <ShoppingCart size={24} />,
      color: "green",
    },
    {
      title: "Taux de Conversion",
      value: "4.2%",
      change: "-0.5%",
      isPositive: false,
      icon: <TrendingUp size={24} />,
      color: "purple",
    },
    {
      title: "Revenu",
      value: "$42,580",
      change: "+15.3%",
      isPositive: true,
      icon: <DollarSign size={24} />,
      color: "orange",
    },
    {
      title: "Taux de Rebond",
      value: "32.1%",
      change: "-2.1%",
      isPositive: true,
      icon: <Eye size={24} />,
      color: "red",
    },
    {
      title: "CPA Moyen",
      value: "$3.42",
      change: "-0.8%",
      isPositive: true,
      icon: <TrendingDown size={24} />,
      color: "teal",
    },
  ];

  return (
    <div className="kpi-grid">
      {kpis.map((kpi, index) => (
        <div key={index} className={`kpi-card ${kpi.color}`}>
          <div className="kpi-header">
            <div className="kpi-icon">{kpi.icon}</div>
            <div
              className={`trend-badge ${
                kpi.isPositive ? "positive" : "negative"
              }`}
            >
              {kpi.isPositive ? (
                <TrendingUp size={14} />
              ) : (
                <TrendingDown size={14} />
              )}
              <span>{kpi.change}</span>
            </div>
          </div>
          <div className="kpi-content">
            <h3 className="kpi-value">{kpi.value}</h3>
            <p className="kpi-title">{kpi.title}</p>
          </div>
          <div className="kpi-footer">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: kpi.isPositive ? "70%" : "30%",
                  backgroundColor: kpi.isPositive
                    ? "var(--success-color)"
                    : "var(--warning-color)",
                }}
              ></div>
            </div>
            <span className="period-label">vs période précédente</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KpiCards;
