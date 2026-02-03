/**
 * Service API client pour le tableau de bord marketing.
 * Utilisé pour des appels backend optionnels (données marketing).
 * Les données sont actuellement fournies côté client via marketingData.js.
 */

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const fetchMarketingKpis = async (dateRange) => {
  const res = await fetch(`${API_BASE}/api/marketing/kpis?range=${dateRange}`);
  if (!res.ok) throw new Error("Failed to fetch KPIs");
  return res.json();
};

export const fetchMarketingTraffic = async (dateRange) => {
  const res = await fetch(
    `${API_BASE}/api/marketing/traffic?range=${dateRange}`
  );
  if (!res.ok) throw new Error("Failed to fetch traffic");
  return res.json();
};
