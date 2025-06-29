// src/pages/HomePage.jsx

import React, { useEffect, useState } from 'react';
import StatisticsService from '../utils/StatisticsService';
import Card from '../components/Card';
import mockData from '../data/mockData';
import { prepareGrowthData, darkenColor } from '../utils/chartDataUtils';
import { getLiturgicalEvents } from '../utils/liturgicalUtils';

const currentYear = new Date().getFullYear();

// Function to merge and sort events
const getCombinedEvents = () => {
  const internationalEvents = getLiturgicalEvents(currentYear);
  const localEvents = mockData.calendarEvents || [];

  const merged = [...internationalEvents, ...localEvents].map(event => ({
    ...event,
    dateObj: new Date(event.date),
    isInternational: !event.isCustom
  }));

  merged.sort((a, b) => a.dateObj - b.dateObj);
  return merged.filter(event => event.dateObj >= new Date());
};

const combinedEvents = getCombinedEvents();

export default function HomePage({ territory }) {
  const [stats, setStats] = useState(null);
  const [faritraStats, setFaritraStats] = useState([]);

  // Load stats when territory changes
  useEffect(() => {
    console.log("🟢 HomePage mounted with territory:", territory);
    if (!territory || !territory.parishId) return;

    const parishStats = StatisticsService.getParishStatsById(territory.parishId);
    const faritraStats = StatisticsService.getFaritraStatsByParishId(territory.parishId);

    if (parishStats) {
      console.log("📊 Parish stats loaded:", parishStats);
      setStats(parishStats);
    }

    if (faritraStats) {
      setFaritraStats(faritraStats);
    }
  }, [territory]);

  // Initialize Chart after component mounts
  useEffect(() => {
    if (!territory || !territory.parishId || !stats) return;

    let script;
    let isMounted = true;

    const initChart = () => {
      const canvas = document.getElementById("growthChart");
      if (!canvas || !isMounted) return;

      const ctx = canvas.getContext("2d");

      const data = prepareGrowthData(mockData.mpino.filter(m => m.parishId === territory.parishId));

      const colors = [
        "rgba(255, 215, 0, 0.7)",   // Baptism
        "rgba(255, 99, 71, 0.7)",   // Confession
        "rgba(197, 162, 88, 0.7)", // Communion
        "rgba(255, 165, 0, 0.7)", // Renewal
        "rgba(0, 123, 255, 0.7)",  // Confirmation
        "rgba(40, 167, 69, 0.7)"   // Marriage
      ];

      const sacramentKeys = [
        "baptized", "firstConfession", "firstCommunion",
        "baptismRenewal", "confirmed", "married"
      ];

      const datasets = [];

      // Historical Totals per Year (Stacked Datasets)
sacramentKeys.forEach((key, idx) => {
  datasets.push({
    label: data.sacramentLabels[idx],
    data: data.years.map(year => data.historicalTotals[key]?.[year] || 0),
    backgroundColor: colors[idx],
    borderColor: darkenColor(colors[idx], 20),
    borderWidth: 1,
    stack: data.sacramentLabels[idx]
  });
});

// New Recipients per Year (Black Top Segment)
sacramentKeys.forEach((key, idx) => {
  datasets.push({
    label: "Vaovao",
    data: data.years.map(year => data.yearlyNew[key]?.[year] || 0),
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    stack: data.sacramentLabels[idx],
    barPercentage: 0.9,
    categoryPercentage: 0.9
  });
});

      window.growthChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.years.map(String),
          datasets
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Fivoaran'ny Sakramenta: Elatra sy Vokatr’ny Taona"
            },
            tooltip: {
              mode: 'index',
              intersect: false,
              callbacks: {
                label: context => {
                  const datasetIndex = context.datasetIndex;
                  const keyIndex = datasetIndex % sacramentKeys.length;
                  const key = sacramentKeys[keyIndex];
                  const year = context.label;

                  if (context.dataset.label === "Vaovao") {
                    return `→ Vaovao tamin’ny taona: ${context.raw}`;
                  }

                  const historical = data.historicalTotals[year]?.[key] || 0;
                  const newCount = data.yearlyNew[year]?.[key] || 0;

                  return [
                    `${context.dataset.label}: ${historical}`,
                    `→ Vaovao tamin’ny taona: ${newCount}`,
                    `→ Total: ${historical + newCount}`
                  ];
                }
              }
            },
            legend: {
              position: 'top',
              labels: {
                filter: (legendItem, data) => {
                  if (legendItem.text === 'Vaovao') {
                    return !data.datasets.slice(0, legendItem.datasetIndex).some(
                      ds => ds.label === 'Vaovao'
                    );
                  }
                  return true;
                }
              }
            }
          },
          scales: {
            x: {
              stacked: true,
              title: { display: true, text: "Taona" }
            },
            y: {
              stacked: true,
              beginAtZero: true,
              title: { display: true, text: "Isan'ny mpandray" },
              ticks: { stepSize: 1 }
            }
          }
        }
      });

    
    };

    if (typeof Chart !== "undefined") {
      initChart();
    } else {
      script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/chart.js ";
      script.async = true;
      script.onload = () => {
        if (isMounted) initChart();
      };
      document.body.appendChild(script);
    }

    return () => {
      isMounted = false;
      if (window.growthChart && typeof window.growthChart.destroy === "function") {
        window.growthChart.destroy();
      }
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [territory, stats]);

  // Safely render executive team
  const renderExecTeam = (execTeam) => {
    if (!execTeam) return <p className="muted">Tsy misy birao</p>;

    return (
      <ul>
        <li>Filoha: {StatisticsService.getUserNameById(execTeam.FilohaFK)}</li>
        <li>Lefitra 1: {StatisticsService.getUserNameById(execTeam.Lefitra1)}</li>
        <li>Lefitra 2: {StatisticsService.getUserNameById(execTeam.Lefitra2)}</li>
        <li>Mpitambola: {StatisticsService.getUserNameById(execTeam.Mpitambola)}</li>
        <li>Mpitantsoratra: {StatisticsService.getUserNameById(execTeam.Mpitantsoratra)}</li>
        <li>Mpitantsoratra Mpanampy: {StatisticsService.getUserNameById(execTeam.MpitantsoratraMpanampy)}</li>
      </ul>
    );
  };

  return (
    <div className="app-layout">
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2>Dashboard – {territory.parish}</h2>
        <p>Archidiocese: {territory.archdiocese} | Diocese: {territory.diocese}</p>
        <p>Vikaria: {territory.vicariate} | Distrika: {territory.district}</p>
      </header>
      {/* Executive Team */}
      <section className="dashboard-section">
        <h3>👤 Biraon'ny Filan-Kevitra Pastoraly</h3>
        <div className="dashboard-cards">
          <Card
            title="Pretra Tompom-paritra"
            value={StatisticsService.getUserNameById(territory.execTeam?.FilohaFK)}
            icon="fas fa-cross"
          />
          <Card 
  title="Filohan’ny Filan-Kevitra sy Lefitra"
  value={
    <div>
      <p>Filoha: {territory.execTeam?.FilohaFK || "Tsy misy"}</p>
      <p>Lefitra 1: {territory.execTeam?.Lefitra1 || "Tsy misy"}</p>
      <p>Lefitra 2: {territory.execTeam?.Lefitra2 || "Tsy misy"}</p>
    </div>
  } 
/>
        </div>
      </section>
      {/* Dashboard Summary Cards */}
      <section className="dashboard-section">
        <h3>📊 Angon'isa ankapobeny</h3>
        <div className="dashboard-cards">
          <Card title="Mpino" value={stats?.parishBelievers ?? 0} icon="fas fa-users" />
          <Card title="Batemy" value={stats?.parishBaptized ?? 0} icon="fas fa-water" />
          <Card title="Fampihavanana" value={stats?.parishConfessed ?? 0} icon="fas fa-cross" />
          <Card title="Komonio voalohany" value={stats?.parishCommunioned ?? 0} icon="fas fa-church" />
          <Card title="Fanavaozana" value={stats?.parishRenewed ?? 0} icon="fas fa-bible" />
          <Card title="Fankaherezana" value={stats?.parishConfirmed ?? 0} icon="fas fa-cross" />
          <Card title="Mariazy" value={stats?.parishMarried ?? 0} icon="fas fa-ring" />
        </div>
      </section>

      {/* Faritra Statistics Section */}
      <section className="faritra-stats-section">
      

       {/* Faritra Breakdown */}
      <div className="faritra-breakdown">
        <h3>🟠 Faritra</h3>
        {faritraStats.map(faritra => (
          <div key={faritra.id} className="card">
            <h4>Faritra: {faritra.name}</h4>
            <p>Mpino: {faritra.faritraMpino}</p>
            <p>Batemy: {faritra.faritraBaptized}</p>
            <p>Fampihavanana: {faritra.faritraConfessed}</p>
            <p>Komonio voalohany: {faritra.faritraCommunioned}</p>
            <p>Fanavaozana: {faritra.faritraRenewed}</p>
            <p>Fankaherezana: {faritra.faritraConfirmed}</p>
            <p>Mariazy: {faritra.faritraMarried}</p>
            <p>Fianakaviana: {faritra.faritraFamilies}</p>
            <p>Tafo: {faritra.faritraTafos}</p>
            <p>Fokontany: {faritra.address || "Tsy misy"}</p>

            {/* APV List Inside Faritra */}
            <h5>🔵 APV</h5>
            {faritra.apvStats.map(apv => (
              <div key={apv.id} className="sub-card">
                <h6>{apv.name}</h6>
                <p>Mpino: {apv.apvMpino}</p>
                <p>Batemy: {apv.apvBaptized}</p>
                <p>Fampihavanana: {apv.apvConfessed}</p>
                <p>Komonio voalohany: {apv.apvCommunioned}</p>
                <p>Fanavaozana: {apv.apvRenewed}</p>
                <p>Fankaherezana: {apv.apvConfirmed}</p>
                <p>Mariazy: {apv.apvMarried}</p>
                <p>Tafo: {apv.apvtafos}</p>
                <p>Fianakaviana: {apv.apvFamilies}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      </section>

      {/* Priest Message Section */}
      <section className="priest-message">
        <h3>Kabary avy amin’ilay Pretra</h3>
        <div className="message-content" id="priest-message-content">
          <p>Tonga eto amin'ny Liberstatus sy ny Adidy isam-pianakaviana eto anivon'ny Paroasy {territory.parish}</p>
          <p>Fampianarana ny fivoaran’ny fiangonana sy ny fananana.</p>
        </div>
      </section>



      {/* Holy Associations, Vovonana, Action Committees - Horizontally Scrolled */}
      <div className="statistics-section">
        <h3 style={{ textAlign: "center" }}>📈 Angon'isa ankapobeny Fikambanana Masina</h3>

        {/* Holy Associations Horizontal List */}
        <div className="horizontal-category-group">
          <h4>Fikambanana Masina</h4>
          <div className="horizontal-scroll-wrapper">
            {Array.isArray(stats?.holyAssociations) && stats.holyAssociations.length > 0 ? (
              stats.holyAssociations.map((assoc, index) => {
                const members = mockData.mpino.filter(m => assoc.memberIds?.includes(m.id));
                return (
                  <div key={`assoc-${index}`} className="card horizontal-card">
                    <h5>{assoc.name}</h5>
                    <p><strong>Sokajy:</strong> {assoc.category || "Tsy misy"}</p>
                    <p><strong>Isan’ny mpikambana:</strong> {members.length || 0}</p>
                    <ul className="vertical-list">
                      {members.length > 0 ? (
                        members.map((member, idx) => (
                          <li key={`assoc-member-${idx}`} className="list-item">{member.fullName}</li>
                        ))
                      ) : (
                        <li className="list-item muted">Tsy misy mpikambana</li>
                      )}
                    </ul>
                  </div>
                );
              })
            ) : (
              <p className="no-data">Tsy misy fikambanana masina</p>
            )}
          </div>
        </div>

        {/* Vovonana Horizontal List */}
        <div className="horizontal-category-group">
          <h4>Vovonana</h4>
          <div className="horizontal-scroll-wrapper">
            {Array.isArray(stats?.vovonana) && stats.vovonana.length > 0 ? (
              stats.vovonana.map((vona, index) => {
                const members = mockData.mpino.filter(m => m.vovonanaId === vona.id);
                return (
                  <div key={`vona-${index}`} className="card horizontal-card">
                    <h5>{vona.name}</h5>
                    <p><strong>Sokajy:</strong> {vona.category || "Tsy misy"}</p>
                    <p><strong>Isan’ny mpikambana:</strong> {members.length || 0}</p>
                    <ul className="vertical-list">
                      {members.length > 0 ? (
                        members.map((m, idx) => (
                          <li key={`vona-member-${idx}`} className="list-item">{m.fullName}</li>
                        ))
                      ) : (
                        <li className="list-item muted">Tsy misy mpikambana</li>
                      )}
                    </ul>
                  </div>
                );
              })
            ) : (
              <p className="no-data">Tsy misy vovonana</p>
            )}
          </div>
        </div>

        {/* Action Committees Horizontal List */}
        <div className="horizontal-category-group">
          <h4>Komitin'ny Asa</h4>
          <div className="horizontal-scroll-wrapper">
            {Array.isArray(stats?.actionCommittees) && stats.actionCommittees.length > 0 ? (
              stats.actionCommittees.map((committee, index) => {
                const members = mockData.mpino.filter(m => m.committeeId === committee.id);
                return (
                  <div key={`comm-${index}`} className="card horizontal-card">
                    <h5>{committee.name}</h5>
                    <p><strong>Sokajy:</strong> {committee.category || "Tsy misy"}</p>
                    <p><strong>Isan’ny mpikambana:</strong> {members.length || 0}</p>
                    <ul className="vertical-list">
                      {members.length > 0 ? (
                        members.map((m, idx) => (
                          <li key={`comm-member-${idx}`} className="list-item">{m.fullName}</li>
                        ))
                      ) : (
                        <li className="list-item muted">Tsy misy mpikambana</li>
                      )}
                    </ul>
                  </div>
                );
              })
            ) : (
              <p className="no-data">Tsy misy komitin’ny asa</p>
            )}
          </div>
        </div>
      </div>

      {/* Liturgical Calendar Events */}
      <div className="calendar-section">
        <h2 style={{ textAlign: "center" }}>📅 Tetiandro Litorjika</h2>
        <div className="calendar-events-container">
          {combinedEvents.length > 0 ? (
            <div className="horizontal-event-list">
              {combinedEvents.map((event, index) => {
                const eventDate = new Date(event.dateObj || event.date);
                const isToday =
                  eventDate.toDateString() === new Date().toDateString();

                return (
                  <div key={`event-${index}`} className={`event-card ${isToday ? 'highlight' : ''}`}>
                    {isToday && <span className="today-badge">Ankehitriny</span>}
                    <div className="event-header">
                      <strong>{event.date}</strong>: <em>{event.title}</em>
                    </div>
                    <div className="event-description">{event.description}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="no-data">Tsy misy hetsy enregistrée na avo lany izao</p>
          )}
        </div>
      </div>

      {/* Graph Section */}
      <div className="charts-section">
        <h3>📊 Fivoaran’ny Sakramenta</h3>
        <div className="chart-container">
          <canvas id="growthChart"></canvas>
        </div>
      </div>
    </div>
  );
}