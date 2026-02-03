import React from "react";
import { TrendingUp, TrendingDown, MoreVertical } from "lucide-react";
import "../../styles/Tables.css";

const campaigns = [
  {
    name: "Black Friday 2023",
    status: "active",
    budget: "$15,000",
    spent: "$12,450",
    impressions: "2.4M",
    clicks: "45.2K",
    ctr: "1.88%",
    cpc: "$0.28",
    trend: "up",
  },
  {
    name: "Email Newsletter Oct",
    status: "active",
    budget: "$5,000",
    spent: "$3,200",
    impressions: "N/A",
    clicks: "8.5K",
    ctr: "21.4%",
    cpc: "$0.38",
    trend: "up",
  },
  {
    name: "Social Media Q4",
    status: "paused",
    budget: "$8,000",
    spent: "$6,750",
    impressions: "1.8M",
    clicks: "32.1K",
    ctr: "1.78%",
    cpc: "$0.21",
    trend: "down",
  },
  {
    name: "Google Search Brand",
    status: "active",
    budget: "$3,500",
    spent: "$2,980",
    impressions: "850K",
    clicks: "15.4K",
    ctr: "1.81%",
    cpc: "$0.19",
    trend: "up",
  },
  {
    name: "Retargeting Display",
    status: "completed",
    budget: "$6,000",
    spent: "$5,900",
    impressions: "3.2M",
    clicks: "28.7K",
    ctr: "0.90%",
    cpc: "$0.21",
    trend: "down",
  },
];

function getStatusColor(status) {
  if (status === "active") return "#4CAF50";
  if (status === "paused") return "#FF9800";
  if (status === "completed") return "#9E9E9E";
  return "#666";
}

export default function CampaignTable({ dateRange }) {
  return (
    <div className="table-wrapper">
      <div className="table-header">
        <h3 className="table-title">Performances des campagnes</h3>
        <button type="button" className="table-action">
          Voir tout
        </button>
      </div>
      <div className="table-responsive">
        <table className="data-table">
          <thead>
            <tr>
              <th>Campagne</th>
              <th>Statut</th>
              <th>Budget</th>
              <th>Dépensé</th>
              <th>Impressions</th>
              <th>CTR</th>
              <th>CPC</th>
              <th>Tendance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c, i) => (
              <tr key={i}>
                <td>
                  <div className="campaign-name">
                    <div className="campaign-icon">{c.name.charAt(0)}</div>
                    <span>{c.name}</span>
                  </div>
                </td>
                <td>
                  <span
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(c.status) }}
                  >
                    {c.status === "active"
                      ? "Active"
                      : c.status === "paused"
                      ? "En pause"
                      : "Terminée"}
                  </span>
                </td>
                <td>{c.budget}</td>
                <td>{c.spent}</td>
                <td>{c.impressions}</td>
                <td>{c.ctr}</td>
                <td>{c.cpc}</td>
                <td>
                  <div className={"trend " + c.trend}>
                    {c.trend === "up" ? (
                      <TrendingUp size={16} />
                    ) : (
                      <TrendingDown size={16} />
                    )}
                  </div>
                </td>
                <td>
                  <button type="button" className="action-btn">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-footer">
        <div className="table-summary">
          <span className="summary-text">
            Total dépensé: <strong>$31,280</strong> sur <strong>$37,500</strong>{" "}
            de budget
          </span>
        </div>
        <div className="table-pagination">
          <button type="button" className="pagination-btn">
            Précédent
          </button>
          <span className="pagination-info">1-5 sur 12</span>
          <button type="button" className="pagination-btn">
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}
