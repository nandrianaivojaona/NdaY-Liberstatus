// PriestMessageCard.jsx
import React from 'react';
//import './PriestMessageCard.css';

export default function PriestMessageCard({ priest, message, logo }) {
  return (
    <section className="top-folded-card">
      <div className="card-folds">
        <div className="fold left priest-photo">
          <img src="/assets/images/priest.jpg" alt="Pretra Tompom-paritra" className="priest-image" />
        </div>
        <div className="fold middle priest-message">
          <h4>🙏 Hafatry ny Pretra</h4>
          <div className="message-content">
            <p><strong>Fiadanan'i Kristy,</strong></p>
            <p>{message || 'Tonga eto amin’ny Hafatra sy ny Famporisihana avy amin’ny Pretra tompon’andraikitra.'}</p>
            <blockquote>
              1 Korintianina 15:58 — "Aoka ianareo haharitra..."
            </blockquote>
          </div>
        </div>
        <div className="fold right church-logo">
          <img src={logo} alt="Logo Paroasy" className="church-logo-img" />
        </div>
      </div>
    </section>
  );
}
