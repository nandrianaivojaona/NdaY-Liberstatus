import React, { useState } from 'react';
import mockData from './data/mockData';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';

export default function App() {
  const [selectedTerritory, setSelectedTerritory] = useState(null);

  // Default parish for layout
  const defaultParish = mockData.territories.archdioceses[0].dioceses[0].vicariates[0].districts[0].parishes[0];

  return (
    <Layout
      showParishLogo={!!selectedTerritory}
      parishLogoUrl={selectedTerritory?.logo || defaultParish.logo}
      parishName={selectedTerritory?.name || defaultParish.name}
    >
      {!selectedTerritory ? (
        <LandingPage onTerritorySelect={setSelectedTerritory} />
      ) : (
        <HomePage territory={selectedTerritory} />
      )}
    </Layout>
  );
}