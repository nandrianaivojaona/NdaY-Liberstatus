import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';

console.log('App.jsx is loaded');

export default function App() {
  const [selectedTerritory, setSelectedTerritory] = useState(null);

  console.log(`🔄 App component is rendering`);
  console.log(`📍 Current selected territory:`, selectedTerritory);

  if (!selectedTerritory) {
    console.log("🛑 No territory selected → Showing LandingPage");
    return (
      <>
        <Header territory={null} />
        <div id="root" className="app-container">
          <LandingPage onTerritorySelect={(territory) => {
            console.log("✅ Territory selected:", territory);
            setSelectedTerritory(territory);
          }} />
        </div>
        <Footer />
      </>
    );
  }

  console.log("🎉 Territory selected → Showing HomePage");

  return (
    <div id="app-root" className="app-container">
      <Header territory={selectedTerritory} />
      <main className="content">
        <HomePage territory={selectedTerritory} />
      </main>
      <Footer />
    </div>
  );
}