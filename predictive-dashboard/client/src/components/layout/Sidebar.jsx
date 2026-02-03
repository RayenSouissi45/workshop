import React from "react";
import {
  Home,
  BarChart3,
  TrendingUp,
  Users,
  Mail,
  Settings,
  LogOut,
  HelpCircle,
  FileText,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import "../../styles/Sidebar.css";

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { icon: <Home size={20} />, label: "Dashboard Marketing", path: "/" },
    {
      icon: <BarChart3 size={20} />,
      label: "Analyse Prédictive",
      path: "/predictive",
    },
    {
      icon: <TrendingUp size={20} />,
      label: "Campaigns",
      path: "#",
    },
    { icon: <Users size={20} />, label: "Audience", path: "#" },
    {
      icon: <Mail size={20} />,
      label: "Email Marketing",
      path: "#",
    },
    {
      icon: <FileText size={20} />,
      label: "Reports",
      path: "#",
    },
    {
      icon: <Settings size={20} />,
      label: "Settings",
      path: "#",
    },
  ];

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">M</div>
          <span className="logo-text">MarketingDash</span>
        </div>
      </div>
      <nav className="sidebar-nav">
        <div className="nav-section">
          <h3 className="nav-title">MAIN MENU</h3>
          <ul className="nav-menu">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  end={item.path === "/"}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="sidebar-footer">
        <div className="user-stats">
          <div className="stat-item">
            <span className="stat-value">24</span>
            <span className="stat-label">Campagnes</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">12.5K</span>
            <span className="stat-label">Visites</span>
          </div>
        </div>
        <div className="sidebar-actions">
          <button className="sidebar-btn">
            <HelpCircle size={18} />
            <span>Aide</span>
          </button>
          <button className="sidebar-btn logout">
            <LogOut size={18} />
            <span>Déconnexion</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
