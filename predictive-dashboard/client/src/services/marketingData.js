/**
 * Données mock pour le tableau de bord marketing (atelier Frontend).
 * Peut être remplacé par des appels API via api.js.
 */

export const getKpis = (dateRange) => {
  return [
    {
      title: "Visiteurs",
      value: "12.5K",
      change: "+12.5%",
      isPositive: true,
      color: "blue",
    },
    {
      title: "Conversions",
      value: "1,248",
      change: "+8.2%",
      isPositive: true,
      color: "green",
    },
    {
      title: "Taux de Conversion",
      value: "4.2%",
      change: "-0.5%",
      isPositive: false,
      color: "purple",
    },
    {
      title: "Revenu",
      value: "$42,580",
      change: "+15.3%",
      isPositive: true,
      color: "orange",
    },
    {
      title: "Taux de Rebond",
      value: "32.1%",
      change: "-2.1%",
      isPositive: true,
      color: "red",
    },
    {
      title: "CPA Moyen",
      value: "$3.42",
      change: "-0.8%",
      isPositive: true,
      color: "teal",
    },
  ];
};

export const getTrafficData = (dateRange) => {
  return [
    { date: "01 Oct", visiteurs: 4200, sessions: 5200, taux: 42 },
    { date: "02 Oct", visiteurs: 5300, sessions: 6100, taux: 38 },
    { date: "03 Oct", visiteurs: 4800, sessions: 5800, taux: 41 },
    { date: "04 Oct", visiteurs: 6200, sessions: 7200, taux: 35 },
    { date: "05 Oct", visiteurs: 5800, sessions: 6800, taux: 39 },
    { date: "06 Oct", visiteurs: 7100, sessions: 8200, taux: 32 },
    { date: "07 Oct", visiteurs: 6500, sessions: 7500, taux: 37 },
  ];
};

export const getChannelData = (dateRange) => {
  return [
    { name: "Organique", value: 35, color: "#4361ee" },
    { name: "Social", value: 25, color: "#4cc9f0" },
    { name: "Email", value: 20, color: "#7209b7" },
    { name: "Direct", value: 12, color: "#f72585" },
    { name: "Référence", value: 8, color: "#ff9e00" },
  ];
};
