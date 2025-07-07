// AssociationsCard.jsx
import React from 'react';

export default function AssociationsCard({ stats }) {
  return (
    <section className="dashboard-section">
      <h3>⛪ Fikambanana, Vovonana, Vaomiera</h3>
      <div className="card-folds">
        <div className="team-column">
          <h5>🟣 Fikambanana Masina</h5>
          <ul>
            {stats?.holyAssociations?.map((a, i) => (
              <li key={i}>{a.name} ({a.membersCount || 0} mpikambana)</li>
            )) || <li>Tsy misy</li>}
          </ul>
        </div>
        <div className="team-column">
          <h5>🔵 Vovonana</h5>
          <p>Mbola tsy voasoratra</p>
        </div>
        <div className="team-column">
          <h5>🟡 Vaomiera</h5>
          <p>Mbola tsy voasoratra</p>
        </div>
      </div>
    </section>
  );
}
