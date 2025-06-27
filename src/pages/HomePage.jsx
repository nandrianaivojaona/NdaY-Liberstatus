import React, { useEffect, useState } from 'react';
import StatisticsService from '../utils/StatisticsService';
import Card from '../components/Card';
import { APP_IMAGES } from '../config/appConfig';

export default function HomePage({ territory }) {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    console.log("🟢 HomePage mounted with territory:", territory);
    if (!territory || !territory.name) return;

    const parishStats = StatisticsService.getParishStatsByParishName(territory.name);
    if (parishStats) {
      console.log("📊 Parish stats loaded:", parishStats);
      setStats(parishStats);
    }
  }, [territory]);

  if (!stats) {
    return (
      <div style={{ padding: "2rem", background: "#f9f9f9" }}>
        <h2>⏳ Takelaka en cours de chargement...</h2>
        <p>Andalam-pahanana Takelaka...</p>
      </div>
    );
  }

  return (
    <section className="content-section">
      <h2 style={{ textAlign: "center" }}>📍 Paroasy: {stats.name}</h2>
      <p style={{ textAlign: "center" }}><strong>Adiresy:</strong> {stats.address}</p>

      {/* Priest's Message Section */}
      <div className="priest-message">
        <div className="message-header">
          <img src="/assets/images/priest.jpg" alt="Parish Priest" className="priest-photo" loading="lazy" />
          <div>
            <h1>Hafatra avy amin'ny Paroasy</h1>
            <p className="message-meta">
              Daty: <span id="message-date"></span> | 
              Nanoratra: <span id="message-author"></span>
            </p>
          </div>
        </div>
        <div className="message-content" id="priest-message-content">
          <p>Tonga eto amin'ny Fanaharana ny Liberstatus sy ny Adidy isam-pianakaviana eto anivon'ny Paroasy Alasora.</p>
        </div>

        {/* Edit button for authorized users */}
        <div className="message-actions hidden" id="message-actions">
          <button id="edit-message-btn" className="vatican-button">
            <i className="fas fa-edit"></i> Hanova hafatra
          </button>
        </div>
      </div>

      {/* Global Parish's Sacraments Statistics Section */}

      <div className="dashboard-section">
        <h3 style={{ textAlign: "center" }}>📊 Angon'isa ankapoben'ny Fiangonana</h3>
        <div className="dashboard-cards">
          <Card title="Isan'ny Mpino" value={globalStats.totalBelievers} icon="fas fa-users" />
          <Card title="Batemy" value={globalStats.baptized} icon="fas fa-water" />
          <Card title="Fampihavanana" value={globalStats.confessed} icon="fas fa-receipt" />
          <Card title="Komonio voalohany" value={globalStats.communioned} icon="fas fa-church" />
          <Card title="Fanavaozana" value={globalStats.baptismrenewed} icon="fas fa-bible" />
          <Card title="Fankaherezana" value={globalStats.confirmed} icon="fas fa-cross" />
          <Card title="Mariazy" value={globalStats.married} icon="fas fa-ring" />

          <h4 style={{ textAlign: "center" }}>🏠 Isan'ny APV sy Tafo ary Fianakaviana</h4>

          <Card title="APV" value={globalStats.apvCount} icon="fas fa-users" />

          <Card title="Tafo" value={globalStats.houseHolds} icon="fas fa-house" />
          <Card title="Fianakaviana" value={globalStats.families} icon="fas fa-users-cog" />
        </div>
      </div>

      {/* Parish's Holy Assocation, Committees Statistics Section */}

      <div className="statistics-section">
        <h3 style={{ textAlign: "center" }}>📈 Angon'isa ankapobeny Fikambanana Masina</h3>
          <div className="stats-list">
            <Card title="Fikambanana Masina" value={stats.holyAssociations.length} icon="fas fa-church" />
            <Card title="Vovonana" value={stats.vovonana.length} icon="fas fa-users" />
            <Card title="Komity Asa" value={stats.actionCommittees.length} icon="fas fa-tools" />
            <Card title="Mpikambana amin'ny Komity Asa" value={stats.actionCommitteeMembers} icon="fas fa-user-cog" />
            <Card title="Mpikambana amin'ny Vovonana" value={stats.vovonanaMembers} icon="fas fa-users-cog" />
          </div>
      </div>

      {/* Render Vovonana Stats */}

      <div className="vovonana-breakdown">
        <h3 style={{ textAlign: "center" }}>🟠 Vovonana</h3>
        {stats.vovonana.map(vov => (
          <div key={vov.name} className="vovonana-stats card">
            <h4>{vov.name}</h4>
            <p><strong>Isan'ny Mpikambana:</strong> {vov.membersId.length}</p>
            <h5>Birao Mpanatanteraka:</h5>
            <ul>
              {vov.execMembers.map(exec => (
                <li key={exec.name}>
                  <strong>{exec.name}</strong> - {exec.role}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Render Action Committees Stats */}
      <div className="action-committee-members-breakdown">
        <h3 style={{ textAlign: "center" }}>🔵 Filan-kevitry ny Asa ara-Toekarana sy Sosialy CAES</h3>
        <p><strong>Isan'ny Mpikambana:</strong> {stats.actionCommittees.reduce((count, committee) => count + committee.membersId.length, 0)}</p>
        <h5>Birao Mpanatanteraka:</h5>
        <ul>
          {stats.actionCommittees.map(committee =>
            committee.execMembers.map(exec => (
              <li key={exec.name}>
                <strong>{exec.name}</strong> - {exec.role}
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Graphs of those Parish's statistics  */}

      <div className="charts-section">
        <h2 style={{ textAlign: "center" }}>Fivoaran'ny Paroasy (Graphe)</h2>
        <div style={{ height: "500px", width: "100%" }}>
          <canvas id="growthChart"></canvas>
        </div>
      </div>
      <div className="calendar-section">
        <h2 style={{ textAlign: "center" }}>Tetiandro Litorjika</h2>
        <div className="calendar-events" id="calendar-events">
          <p>Ny tetiandro dia hanamarika ireo hetsy izay vokatr'ilay paroasy</p>
        </div>
      </div>
    </section>
  );
}