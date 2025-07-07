// ChurchTeamCard.jsx
import React from 'react';

export default function ChurchTeamCard({ stats }) {
  const renderExecTeam = (exec) => (
    <ul>
      <li><strong>Filoha:</strong> {exec?.president || '—'}</li>
      <li><strong>Lefitra 1:</strong> {exec?.vicePresident1 || '—'}</li>
      <li><strong>Lefitra 2:</strong> {exec?.vicePresident2 || '—'}</li>
      <li><strong>Mpitambola:</strong> {exec?.treasurer || '—'}</li>
      <li><strong>Mpitantsoratra:</strong> {exec?.secretary || '—'}</li>
      <li><strong>Mpampanampy:</strong> {exec?.deputySecretary || '—'}</li>
    </ul>
  );

  return (
    <section className="dashboard-section">
      <h3>👥 Birao Mandrafitra ny Fiangonana</h3>
      <div className="card-folds church-team-columns">
        <div className="team-column">
          <h5>🪧 Pretra Tompom-paritra</h5>
          <p>{stats?.priest || 'Tsy fantatra'}</p>
        </div>
        <div className="team-column">
          <h5>🪟 Filan-Kevitra Pastoraly</h5>
          {stats?.execTeam ? renderExecTeam(stats.execTeam) : <p>Tsy misy</p>}
        </div>
        <div className="team-column">
          <h5>🪙 Birao Ekonomika sy Sosialy</h5>
          {stats?.financesCouncil?.length > 0 ? (
            <ul>
              {stats.financesCouncil.map((fc, i) => (
                <li key={i}>{fc.president} ({fc.membersCount || '?'}) mpikambana</li>
              ))}
            </ul>
          ) : (
            <p>Tsy misy</p>
          )}
        </div>
      </div>
    </section>
  );
}
