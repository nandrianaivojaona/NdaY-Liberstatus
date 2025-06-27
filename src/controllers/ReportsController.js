// /controllers/ReportsController.js
let Chart;
try {
    Chart = await import('https://cdn.jsdelivr.net/npm/chart.js').then(module => module.default);
} catch (error) {
    Chart = await import('../utils/chart.umd.js').then(module => module.default);
}
import  mockData  from '../data/mockData.js';

function extractSacramentStats(mpinoList) {
  const stats = {
    baptism: {},
    confirmation: {},
    marriage: {}
  };

  mpinoList.forEach(mpino => {
    const apv = mpino.apv || "UNKNOWN";

    stats.baptism[apv] = stats.baptism[apv] || 0;
    stats.confirmation[apv] = stats.confirmation[apv] || 0;
    stats.marriage[apv] = stats.marriage[apv] || 0;

    if (mpino.baptismDate) stats.baptism[apv]++;
    if (mpino.confirmationDate) stats.confirmation[apv]++;
    if (mpino.marriageDate) stats.marriage[apv]++;
  });

  return stats;
}

function getUserAPVs(user, mpinoList) {
  if (user.role === "Priest") {
    return [...new Set(mpinoList.map(mp => mp.apv))];
  }
  if (user.role === "Faritra Leader") {
    return [...new Set(mpinoList.filter(mp => mp.faritra === user.faritra).map(mp => mp.apv))];
  }
  if (user.role === "APV Leader") {
    return [user.apv];
  }
  return [];
}

function buildChartData(stats, sacramentType, apvs) {
  return {
    labels: apvs,
    data: apvs.map(apv => stats[sacramentType][apv] || 0)
  };
}

export default class ReportsController {
  constructor(currentUser) {
    this.currentUser = currentUser;
    this.chart = null;
    this.selectedSacrament = 'baptism';

    this.init();
  }

  init() {
    this.mpinoList = mockData.mpino;
    this.stats = extractSacramentStats(this.mpinoList);
    this.apvs = getUserAPVs(this.currentUser, this.mpinoList);

    this.renderDropdown();
    this.renderChart();
  }

  renderDropdown() {
    const container = document.getElementById('report-controls');
    container.innerHTML = ''; // Clear previous
    const select = document.createElement('select');
    select.innerHTML = `
      <option value="baptism">Batemy</option>
      <option value="confirmation">Fanamafisana</option>
      <option value="marriage">Fanambadiana</option>
    `;
    select.value = this.selectedSacrament;
    select.addEventListener('change', (e) => {
      this.selectedSacrament = e.target.value;
      this.renderChart();
    });
    container.appendChild(select);
  }

  renderChart() {
    const { labels, data } = buildChartData(this.stats, this.selectedSacrament, this.apvs);
    const ctx = document.getElementById('territoryChart').getContext('2d');

    if (this.chart) this.chart.destroy();

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: `Isan'ny ${this.selectedSacrament}`,
          data,
          backgroundColor: '#42A5F5'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: `Statistika Sakramenta - ${this.currentUser.name}`
          }
        }
      }
    });
  }
}
