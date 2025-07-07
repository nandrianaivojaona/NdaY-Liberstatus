import React, { useEffect } from 'react';

export default function Header({ territory }) {
  const formattedName = territory?.name.replace(/\s+/g, '') || 'Default';
  const logoPath = `../assets/images/${formattedName}_logo.png`;

  // Set background image dynamically for body or root
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background-image', `url('${logoPath}')`);
    root.style.setProperty('--background-opacity', '0.2');
  }, [formattedName, logoPath]);

  return (
    <header className="parish-header">
      {/* Left Side - Welcome Message */}
      <div className="header-left">
        <span className="welcome-text">Tonga Soa eto</span>
      </div>

      {/* Center - Parish Logo + Name */}
      <div className="header-center">
        <div className="parish-logo-container">
          <img
            id="selected-parish-logo"
            src={logoPath}
            alt={`${territory?.name} Logo`}
            className="parish-logo"
            onError={(e) => {
              e.target.src = '../assets/images/default_parish_logo.png'; // fallback
            }}
          />
          <div className="exec-members-tooltip">
            <p>Pretra Tompom-Paritra:</p>
            <p>{territory?.priest || "N/A"}</p>
            <p>Filan-Kevitra Pastoraly:</p>
            <ul>
              {territory?.execMembers && territory.execMembers.length > 0 ? (
                territory.execMembers.map((member, index) => (
                  <li key={index}>{member}</li>
                ))
              ) : (
                <li>N/A</li>
              )}
            </ul>
          </div>
        </div>
        <h2>{territory?.name || "Fiangonana tsy voafantina"}</h2>
        <p>Fokontany: {territory?.fokontany || "Tsy voafantina"}</p>
      </div>
      const { currentUser } = useAuth();
      {/* Right Side - User Info / Sign In */}
      <div className="header-right">
      {currentUser ? (
        <button id="sign-in-toggle">
          <i className="fas fa-user-circle"></i> {currentUser.name}
        </button>
      ) : (
        <button id="sign-in-toggle">
          <i className="fas fa-sign-in-alt"></i> Hiditra
        </button>
      )}
    </div>
    </header>
  );
}