import React from 'react';

export default function MainMenu({ activeSection = "home", onSectionChange = () => {} }) {
  const handleNavClick = (e) => {
    const section = e.target.closest('li')?.getAttribute('data-section');
    if (section) {
      console.log("📍 Section clicked:", section);
      onSectionChange(section);
    }
  };

  return (
    <nav className="main-menu" onClick={handleNavClick}>
      <ul>
        <li data-section="home" className={activeSection === "home" ? "active" : ""}>
          <i className="fas fa-home"></i> Takelaka Fandraisana
        </li>
        <li data-section="liberstatus" className={activeSection === "liberstatus" ? "active" : ""}>
          <i className="fas fa-users"></i> Liberstatus
        </li>
        <li data-section="contributions" className={activeSection === "contributions" ? "active" : ""}>
          <i className="fas fa-hand-holding-usd"></i> Hasina, Adidy sy Ezaka
        </li>
        <li data-section="reports" className={activeSection === "reports" ? "active" : ""}>
          <i className="fas fa-chart-bar"></i> SATAn'ny Mpino
        </li>
      </ul>
    </nav>
  );
}