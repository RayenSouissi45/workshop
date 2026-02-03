import React from "react";
import { ExternalLink } from "lucide-react";
import "../../styles/Tables.css";

const sources = [
  {
    source: "Google",
    visits: "8,450",
    bounce: "32.4%",
    duration: "4:32",
    pages: 3.2,
    trend: "+12.5%",
  },
  {
    source: "Facebook",
    visits: "5,230",
    bounce: "28.1%",
    duration: "3:45",
    pages: 2.8,
    trend: "+8.7%",
  },
  {
    source: "Instagram",
    visits: "4,120",
    bounce: "35.2%",
    duration: "2:58",
    pages: 2.1,
    trend: "+15.3%",
  },
  {
    source: "LinkedIn",
    visits: "2,890",
    bounce: "25.8%",
    duration: "5:12",
    pages: 3.8,
    trend: "+5.4%",
  },
  {
    source: "Twitter",
    visits: "1,950",
    bounce: "38.9%",
    duration: "2:15",
    pages: 1.9,
    trend: "+3.2%",
  },
  {
    source: "Newsletter",
    visits: "3,450",
    bounce: "22.4%",
    duration: "6:05",
    pages: 4.2,
    trend: "+18.1%",
  },
  {
    source: "Direct",
    visits: "4,820",
    bounce: "40.1%",
    duration: "2:30",
    pages: 2.0,
    trend: "+2.1%",
  },
];

export default function SourceTable({ dateRange }) {
  return (
    <div className="table-wrapper">
      <div className="table-header">
        <h3 className="table-title">Sources de trafic</h3>
        <div className="table-filter">
          <select className="filter-select">
            <option>Par visites</option>
            <option>Par engagement</option>
            <option>Par conversion</option>
          </select>
        </div>
      </div>
      <div className="table-responsive">
        <table className="data-table compact">
          <thead>
            <tr>
              <th>Source</th>
              <th>Visites</th>
              <th>Taux rebond</th>
              <th>Durée</th>
              <th>Pages/visite</th>
              <th>Tendance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((item, i) => (
              <tr key={i}>
                <td>
                  <div className="source-item">
                    <div className={"source-icon " + item.source.toLowerCase()}>
                      {item.source.charAt(0)}
                    </div>
                    <span>{item.source}</span>
                  </div>
                </td>
                <td>
                  <span className="metric-value">{item.visits}</span>
                </td>
                <td>
                  <div className="progress-cell">
                    <span className="metric-value">{item.bounce}</span>
                    <div className="progress-bar small">
                      <div
                        className="progress-fill"
                        style={{
                          width: parseFloat(item.bounce) + "%",
                          backgroundColor:
                            parseFloat(item.bounce) < 30
                              ? "#4CAF50"
                              : parseFloat(item.bounce) < 40
                              ? "#FF9800"
                              : "#F44336",
                        }}
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <span className="metric-value">{item.duration}</span>
                </td>
                <td>
                  <div className="progress-cell">
                    <span className="metric-value">{item.pages}</span>
                    <div className="progress-bar small">
                      <div
                        className="progress-fill"
                        style={{
                          width: item.pages * 25 + "%",
                          backgroundColor:
                            item.pages > 3
                              ? "#4CAF50"
                              : item.pages > 2
                              ? "#FF9800"
                              : "#F44336",
                        }}
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className={
                      "trend-value " +
                      (item.trend.startsWith("+") ? "positive" : "negative")
                    }
                  >
                    {item.trend}
                  </span>
                </td>
                <td>
                  <button type="button" className="action-btn small">
                    <ExternalLink size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-summary">
        <div className="summary-item">
          <span className="summary-label">Total visites</span>
          <span className="summary-value">31,910</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Taux rebond moyen</span>
          <span className="summary-value">32.1%</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Durée moyenne</span>
          <span className="summary-value">3:57</span>
        </div>
      </div>
    </div>
  );
}
