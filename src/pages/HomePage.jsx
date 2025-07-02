import React, { useEffect, useState } from 'react';
import StatisticsService from '../utils/StatisticsService';
import Card from '../components/Card';
import mockData from '../data/mockData';
import { prepareGrowthData, darkenColor } from '../utils/chartDataUtils';
import { getLiturgicalEvents } from '../utils/liturgicalUtils';

const currentYear = new Date().getFullYear();

// Function to merge and sort liturgical events
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
  const [chartInstance, setChartInstance] = useState(null);

  // Load stats when territory changes
  useEffect(() => {
    console.log("🟢 HomePage mounted with territory:", territory);
    if (!territory || !territory.parishId) return;

    const parishStats = StatisticsService.getParishStatsById(territory.parishId);
    const faritraStats = StatisticsService.getZoneStatsByParishId(territory.parishId);

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
    if (!stats) return;
    let script;
    let isMounted = true;

    const initChart = () => {
      const canvas = document.getElementById("growthChart");
      if (!canvas || !isMounted) return;

      const ctx = canvas.getContext("2d");

      // Use believers from StatisticsService
      const data = prepareGrowthData(mockData.believers.filter(b => b.parish === territory.parishId));

      const colors = [
        "rgba(255, 215, 0, 0.7)",   // Baptism
        "rgba(255, 99, 71, 0.7)",   // Confession
        "rgba(197, 162, 88, 0.7)",  // Communion
        "rgba(255, 165, 0, 0.7)",   // Renewal
        "rgba(0, 123, 255, 0.7)",   // Confirmation
        "rgba(40, 167, 69, 0.7)"    // Marriage
      ];

      const sacramentKeys = ["baptized", "firstConfession", "firstCommunion", "baptismRenewal", "confirmed", "married"];
      const datasets = [];

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

      const chart = new window.Chart(ctx, {
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
                  const historical = data.historicalTotals[key]?.[year] || 0;
                  const newCount = data.yearlyNew[key]?.[year] || 0;
                  return [
                    `${context.dataset.label}: ${historical}`,
                    `→ Vaovao tamin’ny taona: ${newCount}`,
                    `→ Total: ${historical + newCount}`
                  ];
                }
              }
            },
            legend: {
              position: 'top'
            }
          },
          scales: {
            x: { stacked: true },
            y: {
              stacked: true,
              beginAtZero: true,
              ticks: { stepSize: 1 }
            }
          }
        }
      });

      setChartInstance(chart);
    };

    if (typeof window.Chart !== "undefined") {
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
      if (chartInstance && typeof chartInstance.destroy === "function") {
        chartInstance.destroy();
      }
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [territory, stats]);

  // Hook for Expand/Collapse
  const useToggle = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggle = () => setIsExpanded(prev => !prev);
    return { isExpanded, toggle };
  };

  // Expandable Tooltip Component
  const ExpandableTooltip = ({ title, items }) => {
    const { isExpanded, toggle } = useToggle();
    return (
      <div className="expandable-category">
        <button className="category-header" onClick={toggle}>
          {title}
          <span className="arrow">{isExpanded ? "▼" : "▶"}</span>
        </button>
        {isExpanded && (
          <div className="tooltip-popup">
            <h6>{title}</h6>
            <ul className="tooltip-list">
              {items.length > 0 ? (
                items.map((item, idx) => <li key={idx}>{item}</li>)
              ) : (
                <li className="muted">Tsy misy zavatra</li>
              )}
            </ul>
          </div>
        )}
      </div>
    );
  };

  // Render Executive Team
  const renderExecTeam = (execTeam) => {
    if (!execTeam) return <p className="muted">Tsy misy birao</p>;
    return (
      <ul>
        <li>Filoha: {StatisticsService.getUserNameById(execTeam.president)}</li>
        <li>Lefitra 1: {StatisticsService.getUserNameById(execTeam.vicePresident1)}</li>
        <li>Lefitra 2: {StatisticsService.getUserNameById(execTeam.vicePresident2)}</li>
        <li>Mpitambola: {StatisticsService.getUserNameById(execTeam.treasurer)}</li>
        <li>Mpitantsoratra: {StatisticsService.getUserNameById(execTeam.secretary)}</li>
        <li>Mpitantsoratra Mpanampy: {StatisticsService.getUserNameById(execTeam.deputySecretary)}</li>
      </ul>
    );
  };

  return (
    <div className="app-layout">
      {/* HEADER */}
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2>Rindranisa Mpino Katolika eto amin’ny Fiangonana {territory.parish}</h2>
        <p>{territory.archdiocese} | {territory.diocese}</p>
        <p>{territory.vicariate} | {territory.district}</p>
      </header>

      {/* TOP CARD: PRIEST WELCOME MESSAGE + PHOTO + CHURCH LOGO */}
      <section className="dashboard-section top-folded-card">
        <div className="card-folds">
          <div className="fold left priest-photo">
            <img src="/assets/images/priest.jpg" alt="Pretra Tompom-paritra" className="priest-image" />
          </div>
          <div className="fold middle priest-message">
            <h4>🙏 Hafatry ny Pretra Tompom-Paritra</h4>
            <div className="message-content">
              <p><strong>Fiadanan'i Kristy,</strong></p>
              <p>
                Tonga eto amin’ny Liberstatus sy ny Adidy isam-pianakaviana eto anivon'ny Paroasy {territory.parish}.
                “Aoka isika ho mpandray anjara feno amin’ny Sakramenta, ho mpanompo tsy reraka amin’ny fanompoana masina, ary ho mpitandrina malina amin’ny vahoakan’Andriamanitra, satria asan’ny Tompo no ataontsika.”
              </p>
              <blockquote>
                👉 1 Korintianina 15:58: 
                “Koa, ry rahalahy malalako, aoka ianareo haharitra, tsy miovaova, mahery fo mandrakariva amin’ny asan’ny Tompo, satria fantatrareo fa tsy foana ny asanareo amin’ny Tompo.”
              </blockquote>
            </div>
          </div>
          <div className="fold right church-logo">
            <img src="/assets/images/logo_PAR999.png" alt={`Logo - ${territory.parish}`} className="church-logo-img" />
          </div>
        </div>
      </section>

      {/* FIRST CARD: CHURCH TEAM */}
      <section className="dashboard-section three-fold-card">
        <h3>👥 Birao mandrafitra ny Fiangonana</h3>
        <div className="card-folds">
          <div className="fold left church-team">
            <h4>🪧 Pretra Tompom-paritra</h4>
            <p>{stats?.priest || "Tsy misy pretra"}</p>
          </div>
          <div className="fold middle exec-team">
            <h4>🪟 Filan-Kevitra Pastoraly</h4>
            {renderExecTeam(stats?.execTeam)}
          </div>
          <div className="fold right caes-team">
            <h4>🪟 CAES - FK Ekonomika sy Sosialy</h4>
            <ul>
              {stats?.financesCouncil && stats.financesCouncil.length > 0 ? (
                <>
                  {stats.financesCouncil.map((fc, index) => (
                    <React.Fragment key={index}>
                      <li>Filoha CAES: {fc.president}</li>
                      <li>Treasurer: {fc.treasurer}</li>
                      <li>Mpitantsoratra: {fc.secretary}</li>
                    </React.Fragment>
                  ))}
                </>
              ) : (
                <li>Tsy misy mpikambana</li>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* SECOND CARD: HOLY ASSOCIATIONS, GROUPS, COMMITTEES */}
      <section className="dashboard-section three-fold-card">
        <h3>⛪ Fikambanana Masina</h3>
        <div className="card-folds">
          {/* COLUMN 1: Holy Associations */}
          <div className="fold left">
            <h4>🟣 Fikambanana Masina</h4>
            {mockData.holyAssociationCategories.map(category => {
              const assocsInCategory = stats?.holyAssociations?.filter(a => a.category === category) || [];
              const allMemberNames = assocsInCategory.flatMap(a =>
                (a.memberIds || []).map(id => StatisticsService.getUserNameById(id))
              );

              return (
                <ExpandableTooltip
                  key={category}
                  title={`${category} (${assocsInCategory.length})`}
                  items={allMemberNames}
                >
                  <ul>
                    {assocsInCategory.map((assoc, idx) => (
                      <li key={idx}>
                        {assoc.name} ({assoc.membersCount} mpikambana)
                      </li>
                    ))}
                  </ul>
                </ExpandableTooltip>
              );
            })}
          </div>

          {/* COLUMN 2: Groups */}
          <div className="fold middle">
            <h4>🔵 Vovonana</h4>
            <p>Mila fenoina ny sokajim-Bovonana</p>
          </div>

          {/* COLUMN 3: Committees */}
          <div className="fold right">
            <h4>🟡 Vaomiera</h4>
            <p>Mila fenoina ny Sokajim-Baomiera</p>
          </div>
        </div>
      </section>

      {/* THIRD CARD: STATS SUMMARY AND CHART */}
      <section className="dashboard-section two-fold-card">
        <h3>📊 Angon'isa ankapobeny ny Sakramenta eto anivon'ny Fiangonana</h3>
        <div className="card-folds">
          <div className="fold left">
            <Card title="Mpino" value={stats?.totalBelievers ?? 0} icon="fas fa-users" />
            <Card title="Batemy" value={stats?.baptized ?? 0} icon="fas fa-water" />
            <Card title="Fampihavanana" value={stats?.firstConfession ?? 0} icon="fas fa-confessional" />
            <Card title="Komonio" value={stats?.firstCommunion ?? 0} icon="fas fa-church" />
            <Card title="Fanavaozana" value={stats?.baptismRenewal ?? 0} icon="fas fa-redo" />
            <Card title="Fankaherezana" value={stats?.confirmed ?? 0} icon="fas fa-cross" />
            <Card title="Mariazy" value={stats?.married ?? 0} icon="fas fa-ring" />
          </div>
          <div className="fold right">
            <h4>Fanehoan-kisary ny Fivoaran’ny Sakramenta</h4>
            <canvas id="growthChart"></canvas>
          </div>
        </div>
      </section>

      {/* FOURTH CARD: ZONES BREAKDOWN */}
      <section className="dashboard-section">
        <h3>🟠 Faritra</h3>
        <div className="faritra-breakdown">
          {faritraStats.map(zone => (
            <div key={zone.id} className="card">
              <h4>Faritra: {zone.name}</h4>
              <p>Mpino: {zone.believersCount}</p>
              <p>Batemy: {zone.believers.filter(b => b.baptismDate).length}</p>
              <p>Fianakaviana: {zone.familiesCount}</p>
              <p>Tafo: {zone.roofHouseholdsCount}</p>
              <p>Fokontany: {zone.neighborhood || "Tsy misy"}</p>
              <h5>🔵 APV</h5>
              {zone.apvs.map(apv => (
                <div key={apv.id} className="sub-card">
                  <h6>{apv.name}</h6>
                  <p>Mpino: {apv.believersCount}</p>
                  <p>Fianakaviana: {apv.familiesCount}</p>
                  <p>Tafo: {apv.roofHouseholdsCount}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FIFTH CARD: LITURGICAL EVENTS */}
      <section className="calendar-section">
        <h2>📅 Tetiandro Litorjika</h2>
        <div className="horizontal-event-list">
          {combinedEvents.length > 0 ? (
            combinedEvents.map((event, index) => {
              const eventDate = new Date(event.dateObj || event.date);
              const isToday = eventDate.toDateString() === new Date().toDateString();
              return (
                <div key={`event-${index}`} className={`event-card ${isToday ? 'highlight' : ''}`}>
                  {isToday && <span className="today-badge">Ankehitriny</span>}
                  <strong>{event.date}</strong>: <em>{event.title}</em>
                  <p>{event.description}</p>
                </div>
              );
            })
          ) : (
            <p>Tsy misy hetsy enregistrée na avo lany izao</p>
          )}
        </div>
      </section>
    </div>
  );
}