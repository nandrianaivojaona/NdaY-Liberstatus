// SacramentStatsCard.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { prepareGrowthData } from '../utils/chartDataUtils';
//import { darkenColor } from '../utils/colorUtils';

export default function SacramentStatsCard({ stats }) {
  const chartRef = useRef();

  useEffect(() => {
    if (!stats?.believers) 
      return;

    const chartData = prepareGrowthData(stats.believers);
    const ctx = chartRef.current.getContext('2d');
    const { years, datasets, yearlyNew, sacramentLabels } = chartData;

    const baseDatasets = datasets;
    const newDatasets = datasets.map((ds, idx) => ({
      label: 'Vaovao',
      data: years.map(year => yearlyNew[ds.label.toLowerCase()]?.[year] || 0),
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      stack: ds.label,
      barPercentage: 0.9,
      categoryPercentage: 0.9
    }));

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: years,
        datasets: [...baseDatasets, ...newDatasets]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: {
            display: true,
            text: "Fivoaran'ny Sakramenta sy Vaovao isantaona"
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: context => `${context.dataset.label}: ${context.raw}`
            }
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

    return () => chart.destroy();
  }, [stats]);

  return (
    <section className="dashboard-section">
      <h3>📊 Statistika Sakramenta</h3>
      <div className="card-folds">
        <div className="fold left">
          <ul>
            <li><strong>Mpino:</strong> {stats?.totalBelievers}</li>
            <li><strong>Batemy:</strong> {stats?.baptized}</li>
            <li><strong>Fampihavanana:</strong> {stats?.firstConfession}</li>
            <li><strong>Komonio:</strong> {stats?.firstCommunion}</li>
            <li><strong>Fanavaozana:</strong> {stats?.baptismRenewal}</li>
            <li><strong>Fankaherezana:</strong> {stats?.confirmed}</li>
            <li><strong>Mariazy:</strong> {stats?.married}</li>
          </ul>
        </div>
        <div className="fold right">
          <canvas ref={chartRef} height="300" />
        </div>
      </div>
    </section>
  );
}
