// chartDataUtils.js

/**
 * Prepare growth data for Chart.js stacked bar chart.
 * Calculates actual year (e.g. 2025) as total counts of recipients having the sacrament.
 * Backward years subtract the number of new recipients per year based on mockData.
 */

import { darkenColor } from './colorUtils';

export function prepareGrowthData(growthHistory, recipientTotals) {
  const nowYear = new Date().getFullYear();
  const years = [...Array(5)].map((_, i) => (nowYear - 4 + i).toString());

  // Sacrament keys and their labels
  const keys = [
    'baptized',
    'firstConfession',
    'firstCommunion',
    'baptismRenewal',
    'confirmed',
    'married'
  ];

  const labels = [
    'Batemy',
    'Fampihavanana',
    'Komonio',
    'Fanavaozana',
    'Fankaherezana',
    'Mariazy'
  ];

  const colors = [
    '#6C63FF', '#FF6584', '#FFD369', '#00C9A7', '#FFB830', '#ED254E'
  ];

  // Start with the full total in the current year
  const yearDataMap = {};
  years.forEach((year, index) => {
    yearDataMap[year] = {};
    keys.forEach(key => {
      yearDataMap[year][key] = 0;
    });
  });

  // Set 2025 (current year) data from recipientTotals
  const currentYearKey = nowYear.toString();
  keys.forEach(key => {
    yearDataMap[currentYearKey][key] = recipientTotals[key] || 0;
  });

  // Roll backward in time subtracting new yearly additions
  const reversedYears = [...years].reverse();
  for (let i = 1; i < reversedYears.length; i++) {
    const current = reversedYears[i - 1]; // 2025, 2024, ...
    const prev = reversedYears[i];       // 2024, 2023, ...

    keys.forEach(key => {
      const delta = growthHistory.find(row => row.year.toString() === current)?.[key] || 0;
      yearDataMap[prev][key] = Math.max(0, yearDataMap[current][key] - delta);
    });
  }

  // Build dataset for chart.js
  const datasets = keys.map((key, idx) => ({
    label: labels[idx],
    data: years.map(y => yearDataMap[y][key]),
    backgroundColor: colors[idx],
    borderColor: darkenColor(colors[idx], 20),
    borderWidth: 1,
    stack: labels[idx]
  }));

  return { years, datasets };
}
