# Predictive Dashboard - Workshops

Projet unifié regroupant **deux ateliers** : tableau de bord marketing (frontend) et tableau de bord d’analyse prédictive (full-stack avec ML).

## Ateliers couverts

1. **Tableau de bord marketing (Frontend)**  
   Interface avec Sidebar, Header, KPI cards, graphiques (trafic, canaux), tableaux (campagnes, sources), carte géographique.  
   **Route :** `/` (page d’accueil).

2. **Analyse prédictive (ML)**  
   Dashboard interactif avec algorithmes de ML (TensorFlow.js), visualisation des prédictions (Recharts, MUI).  
   **Route :** `/predictive`.

## Objectifs

- Construire une interface dashboard avec un framework JS moderne (React)
- Intégrer des algorithmes de ML pour l’analyse prédictive (TensorFlow.js)
- Visualiser les données et prédictions de manière interactive (Recharts, MUI)
- Déployer une application complète full-stack

## Architecture du projet

```
predictive-dashboard/
├── client/                 # Frontend - React
│   ├── public/
│   ├── src/
│   │   ├── components/     # Composants UI (layout, dashboard ML + marketing)
│   │   ├── pages/          # Pages (MarketingPage, etc.)
│   │   ├── services/       # Services API (mlService, marketingData, api)
│   │   ├── styles/         # Feuilles de style (variables, global, composants)
│   │   └── utils/
│   └── package.json
├── server/                 # Backend - Node.js/Express
│   ├── models/             # Modèles de données
│   ├── routes/             # Routes API
│   ├── ml/                 # Algorithmes ML
│   └── package.json
├── ml-models/              # Modèles entraînés
└── README.md
```

## Démarrage

### 1. Installation des dépendances

```bash
cd predictive-dashboard
```

Puis, en racine si un `package.json` existe avec `install-all` :

```bash
npm run install-all
```

Ou manuellement :

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 2. Lancer les serveurs

**Deux terminaux :**

```bash
# Terminal 1 - Backend
cd server
npm start

# Terminal 2 - Frontend
cd client
npm start
```

**Un seul terminal (depuis la racine, si configuré) :**

```bash
npm run dev
```

### 3. Accès

- **Frontend :** http://localhost:3000
  - **Dashboard Marketing :** http://localhost:3000/
  - **Analyse prédictive :** http://localhost:3000/predictive
- **Backend API :** http://localhost:5000

La sidebar permet de basculer entre « Dashboard Marketing » et « Analyse Prédictive ».

## API (backend ML)

- `GET /` - Message de bienvenue API
- `GET /api/ml/sample-data` - Données de démonstration
- `POST /api/ml/train` - Entraîner le modèle (body: `{ data, labels }`)
- `POST /api/ml/predict` - Prédictions (body: `{ data }`)
- `POST /api/ml/analyze-time-series` - Analyse de séries temporelles (body: `{ data, windowSize? }`)

## Technologies

- **Frontend :** React, React Router, Material-UI, Recharts, Axios, Chart.js, react-chartjs-2, lucide-react
- **Backend :** Node.js, Express, TensorFlow.js (`@tensorflow/tfjs` — version pure JS pour compatibilité Windows)
- **ML :** Régression, tendance, saisonnalité, détection d’anomalies
