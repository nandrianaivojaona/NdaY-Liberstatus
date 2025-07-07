// TerritoryBreakdownCard.jsx
import React from 'react';

export default function TerritoryBreakdownCard({ zoneStats }) {
  return (
    <section className="dashboard-section">
      <h3>🗺️ Faritra sy APV</h3>
      <div className="horizontal-stats-scroll">
        {Array.isArray(zoneStats) && zoneStats.map((zone, index) => (
          <div className="card horizontal-card" key={index}>
            <h5>{zone.name}</h5>
            <ul>
              <li>Mpino: {zone.believersCount}</li>
              <li>Batemy: {zone.believers?.filter(b => b.baptismDate).length ?? 0}</li>
              <li>Fianakaviana: {zone.familiesCount}</li>
              <li>Tafo: {zone.roofHouseholdsCount}</li>
              <li>Fokontany: {zone.neighborhood || 'Tsy fantatra'}</li>
            </ul>
            <h6>APV</h6>
            <div className="apv-horizontal-list">
              {Array.isArray(zone.apvs) && zone.apvs.map((apv, i) => (
                <div className="apv-card" key={i}>
                  <h6>{apv.name}</h6>
                  <p>Mpino: {apv.believersCount}</p>
                  <p>Fianakaviana: {apv.familiesCount}</p>
                  <p>Tafo: {apv.roofHouseholdsCount}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
