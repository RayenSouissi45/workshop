import React, { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import KpiCards from "../components/dashboard/KpiCards";
import TrafficChart from "../components/dashboard/TrafficChart";
import ChannelChart from "../components/dashboard/ChannelChart";
import CampaignTable from "../components/dashboard/CampaignTable";
import SourceTable from "../components/dashboard/SourceTable";
import LocationMap from "../components/dashboard/LocationMap";
import "../styles/global.css";
import "../styles/variables.css";
import "../styles/Dashboard.css";

export default function MarketingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [dateRange, setDateRange] = useState("last30");

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`dashboard-container ${darkMode ? "dark-mode" : ""}`}>
      <Sidebar isOpen={sidebarOpen} />
      <main
        className={`main-content ${
          sidebarOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <Header
          toggleSidebar={toggleSidebar}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
        <div className="dashboard-content">
          <section className="dashboard-grid">
            <KpiCards dateRange={dateRange} />
            <div className="charts-row">
              <TrafficChart dateRange={dateRange} />
              <ChannelChart dateRange={dateRange} />
            </div>
            <CampaignTable dateRange={dateRange} />
            <div className="tables-row">
              <SourceTable dateRange={dateRange} />
              <LocationMap dateRange={dateRange} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
