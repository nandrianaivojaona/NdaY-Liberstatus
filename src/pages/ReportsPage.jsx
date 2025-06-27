import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function ReportsPage({ territory }) {
  const chartRef = useRef(null);

  // Function to render growth chart
  const renderGrowthChart = () => {
    const ctx = chartRef.current.getContext('2d');

    const stats = {
      baptized: mockData.mpino.filter(m => m.baptismDate).length,
      confirmed: mockData.mpino.filter(m => m.confirmationDate).length,
      married: mockData.mpino.filter(m => m.marriageDate).length
    };

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mpino', 'Batemy', 'Fankaherezana', 'Mariazy'],
        datasets: [{
          label: 'Statistiques ny Mpino',
          data: [
            mockData.mpino.length,
            stats.baptized,
            stats.confirmed,
            stats.married
          ],
          backgroundColor: [
            '#B31917',   // Vatican Red
            '#FFD700',   // Yellow
            '#C5A258',   // Gold
            '#800000'    // Deep Red
          ],
          borderColor: '#fff',
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "📊 Fivoaran'ny Sakramenta",
            font: {
              size: 16
            }
          },
          datalabels: {
            color: '#fff',
            anchor: 'end',
            align: 'top',
            formatter: (value) => value
          }
        },
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    });
  };

  // Render chart on load
  useEffect(() => {
    if (chartRef.current) {
      renderGrowthChart();
    }
  }, [territory]);

  return (
    <section className="content-section">
      <h2>📊 SATAn'ny Mpino</h2>

      <div className="charts-section">
        <p>Fivoaran'ny Paroasy sy ny fampiasa ankapobeny</p>
        <div style={{ height: '400px', width: '100%' }}>
          <canvas ref={chartRef}></canvas>
        </div>
      </div>

      {/* Optional: Add more reports like family breakdown */}
      <div className="report-details">
        <h3>📈 Angon'isa ara-pitantanana</h3>
        <ul>
          <li><strong>Mpino:</strong> {mockData.mpino.length}</li>
          <li><strong>Batemy:</strong> {stats.baptized}</li>
          <li><strong>Fankaherezana:</strong> {stats.confirmed}</li>
          <li><strong>Mariazy:</strong> {stats.married}</li>
        </ul>
      </div>

      {/* Table-based report section */}
      <div className="report-table-section" style={{ marginTop: '2rem' }}>
        <h3>📜 SATAn'ny Faritra sy APV</h3>
        <table className="report-table">
          <thead>
            <tr>
              <th>Faritra</th>
              <th>APV</th>
              <th>Mpino</th>
              <th>Batemy</th>
              <th>Mariazy</th>
            </tr>
          </thead>
          <tbody>
            {territory.faritras.map((faritra, i) => (
              <React.Fragment key={i}>
                {faritra.apvs.map((apvName, j) => {
                  const apvMembers = mockData.mpino.filter(
                    m => m.faritra === faritra.name && m.apv === apvName
                  );
                  const baptized = apvMembers.filter(m => m.baptismDate).length;
                  const married = apvMembers.filter(m => m.marriageDate).length;

                  return (
                    <tr key={`${i}-${j}`}>
                      <td>{faritra.name}</td>
                      <td>{apvName}</td>
                      <td>{apvMembers.length}</td>
                      <td>{baptized}</td>
                      <td>{married}</td>
                    </tr>
                  );
                })}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}