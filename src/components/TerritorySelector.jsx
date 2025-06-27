import React, { useEffect } from 'react';
import TerritoryController from '../controllers/TerritoryController.js';

export default function TerritorySelector({ onTerritorySelect }) {
  useEffect(() => {
    new TerritoryController();
  }, []);

  const handleNext = () => {
    const selectedParish = document.getElementById('parish-select').value;
    if (!selectedParish) {
      alert("⚠️ Safidio ny Paroasy");
      return;
    }

    const territory = {
      archdiocese: document.getElementById('archdiocese-select').value,
      diocese: document.getElementById('diocese-select').value,
      vicariate: document.getElementById('vicariate-select').value,
      district: document.getElementById('district-select').value,
      parish: selectedParish
    };

    onTerritorySelect(territory);
  };

  return (
    <section className="territory-selector">
      <h3>Tonga Soa eto, Safidio ny Paroasy sy Fiangonana</h3>
      <form id="menu-card-form">
        <label htmlFor="archdiocese-select">Archidiocese:</label>
        <select id="archdiocese-select"></select>

        <label htmlFor="diocese-select">Diosezy:</label>
        <select id="diocese-select"></select>

        <label htmlFor="vicariate-select">Vikaria:</label>
        <select id="vicariate-select"></select>

        <label htmlFor="district-select">District:</label>
        <select id="district-select"></select>

        <label htmlFor="parish-select">Paroasy:</label>
        <select id="parish-select"></select>

        <button type="button" onClick={handleNext}>Avy eo ➡️</button>
      </form>
    </section>
  );
}