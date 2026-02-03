import React from "react";
import { MapPin, Users, Globe } from "lucide-react";
import "../../styles/Map.css";

const locations = [
  { country: "France", visitors: "8,450", percent: 35, growth: "+12.5%" },
  { country: "États-Unis", visitors: "6,230", percent: 26, growth: "+8.7%" },
  { country: "Allemagne", visitors: "3,120", percent: 13, growth: "+15.3%" },
  { country: "Royaume-Uni", visitors: "2,890", percent: 12, growth: "+5.4%" },
  { country: "Canada", visitors: "1,950", percent: 8, growth: "+3.2%" },
  { country: "Autres", visitors: "2,270", percent: 9, growth: "+1.8%" },
];
const topCities = [
  { city: "Paris", visitors: "3,240" },
  { city: "New York", visitors: "2,150" },
  { city: "Berlin", visitors: "1,890" },
  { city: "Londres", visitors: "1,750" },
];

export default function LocationMap({ dateRange }) {
  return (
    <div className="map-wrapper">
      <div className="map-header">
        <h3 className="map-title">
          <Globe size={20} /> Géographie des visiteurs
        </h3>
        <span className="map-period">Derniers 30 jours</span>
      </div>
      <div className="map-visualization">
        <div className="world-map">
          <div className="map-container">
            <div
              className="map-region europe"
              style={{ top: "30%", left: "45%" }}
            >
              <div className="region-dot large" />
              <span className="region-label">Europe</span>
            </div>
            <div
              className="map-region north-america"
              style={{ top: "35%", left: "20%" }}
            >
              <div className="region-dot medium" />
              <span className="region-label">Amérique du Nord</span>
            </div>
            <div
              className="map-region asia"
              style={{ top: "40%", left: "70%" }}
            >
              <div className="region-dot small" />
              <span className="region-label">Asie</span>
            </div>
          </div>
        </div>
        <div className="map-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <Users size={20} />
            </div>
            <div className="stat-content">
              <span className="stat-number">24.9K</span>
              <span className="stat-label">Visiteurs totaux</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <MapPin size={20} />
            </div>
            <div className="stat-content">
              <span className="stat-number">42</span>
              <span className="stat-label">Pays</span>
            </div>
          </div>
        </div>
      </div>
      <div className="location-details">
        <div className="location-section">
          <h4 className="section-title">Top pays</h4>
          <div className="location-list">
            {locations.map((loc, i) => (
              <div key={i} className="location-item">
                <div className="location-info">
                  <span className="country">{loc.country}</span>
                  <span className="visitors">{loc.visitors}</span>
                </div>
                <div className="location-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: loc.percent + "%" }}
                    />
                  </div>
                  <span className="growth">{loc.growth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="location-section">
          <h4 className="section-title">Top villes</h4>
          <div className="city-list">
            {topCities.map((city, i) => (
              <div key={i} className="city-item">
                <div className="city-rank">{i + 1}</div>
                <div className="city-name">
                  <MapPin size={14} />
                  <span>{city.city}</span>
                </div>
                <span className="city-visitors">{city.visitors}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
