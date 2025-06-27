import React from 'react';

export default function Footer() {
  return (
    <footer className="vatican-footer">
      <div className="footer-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <p>&copy; 2025</p>
        <img
          src="/assets/images/NdaY_Logo.png"
          alt="NdaY’ Logo"
          className="nday-logo nday-logo-small"
          style={{ height: '20px' }}
        />
        <span>Catholic Liberstatus</span>
      </div>
    </footer>
  );
}