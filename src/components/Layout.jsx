import React, { useState } from 'react';
import { APP_IMAGES } from '../config/appConfig';
import MainMenu from './MainMenu';

export default function Layout({ children, parishName, showParishLogo = false, selectedTerritory = null }) {
  // Get logo path based on territory
  const getParishLogoUrl = () => {
    if (showParishLogo && selectedTerritory) {
      return `${APP_IMAGES.defaultlogoFolder}/Logo_${selectedTerritory.code}.png`;
    }
    return APP_IMAGES.defaultParishLogo;
  };

  const [activeSection, setActiveSection] = useState("home");

  const handleSectionChange = (section) => {
    console.log("🔄 Switching to section:", section);
    setActiveSection(section);
  };

  const getParishName = () => {
    return selectedTerritory?.name || "";
  };

  return (
    <div className="app-layout">
      {/* Header with Vatican Background */}
      <header className="parish-header">
        {/* Left Side: Welcome Text */}
        <div className="header-left">
          <span className="welcome-text">Tonga Soa eto</span>
        </div>

        {/* Center Section: Logo + Name */}
        <div className="header-center">
          <h1 className="parish-title">LiberStatus, Fitantanana ny Vahoak'Andriamanitra</h1>
          <img
            src={showParishLogo && selectedTerritory ? getParishLogoUrl() : APP_IMAGES.defaultParishLogo}
            alt={`${getParishName() || "Vatican"} Logo`}
            className="parish-logo"
            style={{ maxHeight: "80px", zIndex: 2 }}
          />
        </div>
        <div className="header-right">
          <h2>{getParishName() || ""}</h2>
          <button id="sign-in-toggle">
            <i className="fas fa-sign-in-alt"></i> Hiditra
          </button>
        </div>
      </header>
      <MainMenu activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content Area */}
      <main className="content-section">
        {children}
      </main>
    </div>
  );
}