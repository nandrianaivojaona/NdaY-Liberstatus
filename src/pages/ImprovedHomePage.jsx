// ImprovedHomePage.jsx
import React from 'react';
import PriestMessageCard from './../components/PriestMessageCard';
import ChurchTeamCard from './../components/ChurchTeamCard';
import AssociationsCard from './../components/AssociationsCard';
import SacramentStatsCard from './../components/SacramentStatsCard';
import TerritoryBreakdownCard from './../components/TerritoryBreakdownCard';
import LiturgicalCalendarCard from './../components/LiturgicalCalendarCard';
import '../../public/assets/css/HomePage.css';
//import '../components/TerritorySelector.jsx';
import '../utils/StatisticsService.js';
import mockData from '../data/mockData.js';

export default function ImprovedHomePage({ territory, stats, zoneStats, events }) {
  return (
    <div className="vatican-container">
      <header className="vatican-header">
        <div className="vatican-coat-of-arms">
          <img src="/assets/images/logo_PAR999.png" alt="Parish Logo" />
        </div>
        <h1 className="vatican-title">Paroasy {territory.parish}</h1>
        <p className="vatican-subtitle">
          {territory.archdiocese} &bull; {territory.diocese} &bull; {territory.vicariate} &bull; {territory.district}
        </p>
      </header>

      {/* 1. Priest Message Card */}
      <PriestMessageCard priest={stats?.priest} message={stats?.priestMessage} />

      {/* 2. Church Team Card */}
      <ChurchTeamCard stats={stats} />

      {/* 3. Associations Card */}
      <AssociationsCard stats={stats} />

      {/* 4. Sacrament Statistics */}
      <SacramentStatsCard stats={stats} territory={territory} />

      {/* 5. Territory Breakdown */}
      <TerritoryBreakdownCard zoneStats={zoneStats} />

      {/* 6. Liturgical Calendar */}
      <LiturgicalCalendarCard events={events} />
    </div>
  );
}
