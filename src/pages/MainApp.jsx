import React, { useEffect, useState } from 'react';
import { mockData } from '../data/mockData.js';

export default function MainApp({ territory }) {
  const [parishInfo, setParishInfo] = useState(null);

  useEffect(() => {
    const parish = mockData.territories.archdioceses
      .flatMap(a => a.dioceses)
      .flatMap(d => d.vicariates)
      .flatMap(v => v.districts)
      .flatMap(dt => dt.parishes)
      .find(p => p.name === territory.parish);

    if (parish) {
      setParishInfo(parish);
    }
  }, [territory]);

  if (!parishInfo) return <p>⏳ Takelaka an-dalam-pamahanana...</p>;

  const formattedName = territory.parish.replace(/\s+/g, '');

  return (
    <div className="app-container">
      {/* Header */}
      <header className="parish-header">
        <div className="header-left">
          <span className="welcome-text">Tonga Soa eto</span>
        </div>
        <div className="header-center">
          <img
            id="vatican-flag"
            src={`/assets/images/Flag_of_Vatican_City.png`}
            alt="Vatican Flag"
            style={{ height: "80px", margin: "0 auto" }}
          />
          <img
            id="selected-parish-logo"
            src={`/assets/images/${formattedName}_logo.png`}
            alt={`${territory.parish} Logo`}
            style={{ maxHeight: "100px", display: "block", margin: "10px auto" }}
          />
          <h2>{territory.parish}</h2>
        </div>
        <div className="header-right">
          <button id="sign-in-toggle"><i className="fas fa-sign-in-alt"></i> Hiditra</button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="main-menu">
        <ul>
          <li data-section="home">🏠 Takelaka Fandraisana</li>
          <li data-section="liberstatus">👥 Liberstatus</li>
          <li data-section="contributions">💰 Adidy, Hasina sy Ezaka</li>
          <li data-section="reports">📊 SATAn'ny Mpino</li>
        </ul>
      </nav>

      {/* Content Area */}
      <section id="content" className="main-content">
        <h2>📍 Paroasy: {territory.parish}</h2>
        <p><strong>Adiresy:</strong> {parishInfo.address || "N/A"}</p>
        <p><strong>Pretra Tompom-paritra:</strong> {parishInfo.priest || "N/A"}</p>
        <p><strong>Isan’ny Fianakaviana:</strong> {mockData.families.length}</p>
      </section>

      {/* Footer */}
      <footer className="vatican-footer">
        <div className="footer-content">
          <img src="/assets/images/NdaY_Logo.png" alt="NdaY Logo" className="nday-logo nday-logo-large"/>
          <p>&copy; 2025 NdaY’Catholic Liberstatus</p>
        </div>
      </footer>
    </div>
  );
}