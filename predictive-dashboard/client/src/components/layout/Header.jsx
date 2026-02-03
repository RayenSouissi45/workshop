import React from "react";
import { Bell, Search, Calendar, Sun, Moon } from "lucide-react";
import "../../styles/Header.css";

const Header = ({
  toggleSidebar,
  toggleDarkMode,
  darkMode,
  dateRange,
  setDateRange,
}) => {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="search-bar">
          <Search size={20} />
          <input type="text" placeholder="Rechercher..." />
        </div>
      </div>
      <div className="header-right">
        <div className="date-filter">
          <Calendar size={18} />
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="date-select"
          >
            <option value="today">Aujourd'hui</option>
            <option value="last7">7 derniers jours</option>
            <option value="last30">30 derniers jours</option>
            <option value="last90">90 derniers jours</option>
            <option value="custom">Personnalisé</option>
          </select>
        </div>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
        <div className="user-profile">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marketing"
            alt="Profile"
            className="avatar"
          />
          <div className="user-info">
            <span className="user-name">Alex Martin</span>
            <span className="user-role">Marketing Manager</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
