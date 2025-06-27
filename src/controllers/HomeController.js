// src/controllers/HomeController.js

import StatisticsService from '../utils/StatisticsService.js';
import { hasPermission } from '../auth/roles.js';

export default class HomeController {
  constructor(currentUser) {
    this.currentUser = currentUser;
    this.init();
  }

  init() {
    console.log("🔄 Initializing HomeController");
    this.loadPriestMessage();
    this.renderDashboardStats();
    this.loadCalendarEvents();
    this.initGrowthChart();
    this.setupMessageEditing();
  }

  async loadPriestMessage() {
    try {
      const response = await fetch('/api/parishMessage');
      if (!response.ok) {
        throw new Error('Failed to fetch parish message');
      }

      const message = await response.json();
      const messageDate = new Date(message.date);
      const currentDate = new Date();

      // Check if the message is outdated
      if (messageDate < currentDate) {
        console.warn('The priest message is outdated and will not be displayed.');
        document.getElementById('priest-message-content').textContent = 'Tsy misy hafatra azo aseho amin\'izao fotoana izao.';
        return;
      }

      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const formattedDate = messageDate.toLocaleDateString('mg-MG', options);

      document.getElementById('message-date').textContent = formattedDate;
      document.getElementById('message-author').textContent = message.author;
      document.getElementById('priest-message-content').innerHTML = message.content.replace(/\n/g, '<br>');
    } catch (error) {
      console.error('Error loading priest message:', error);
      document.getElementById('priest-message-content').textContent = 'Tsy afaka nampiditra ny hafatra avy amin\'ny pretra.';
    }
  }

  setupMessageEditing() {
    const actionsDiv = document.getElementById('message-actions');
    if (!actionsDiv) return;

    if (hasPermission(this.currentUser, 'editMessage')) {
      actionsDiv.classList.remove('hidden');
    } else {
      actionsDiv.classList.add('hidden');
    }
  }

  renderDashboardStats() {
    const stats = StatisticsService.getParishStats();

    document.getElementById('total-believers').textContent = stats.totalBelievers;
    document.getElementById('baptized-count').textContent = stats.baptized;
    document.getElementById('confess-count').textContent = stats.confessed;
    document.getElementById('firstcommunion-count').textContent = stats.communioned;
    document.getElementById('baptismrenewed-count').textContent = stats.baptismrenewed;
    document.getElementById('confirmation-count').textContent = stats.confirmed;
    document.getElementById('married-count').textContent = stats.married;
    document.getElementById('family-count').textContent = stats.families;
    document.getElementById('household-count').textContent = mockData.territories.archdioceses[0].dioceses[0].vicariates[0].districts[0].parishes[0].households.length;
    document.getElementById('apv-count').textContent = mockData.territories.archdioceses[0].dioceses[0].vicariates[0].districts[0].parishes[0].faritras.length;
    document.getElementById('faritra-count').textContent = mockData.territories.archdioceses[0].dioceses[0].vicariates[0].districts[0].parishes[0].faritras.length;
  }

  initGrowthChart() {
    const ctx = document.getElementById('growthChart')?.getContext('2d');
    if (!ctx) return;

    const stats = StatisticsService.getAllTerritoryStats();

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2020', '2021', '2022', '2023', '2024'],
        datasets: [
          {
            label: 'Batemy',
            data: stats.baptism || [80, 90, 100, 110, 120],
            backgroundColor: '#FFD700'
          },
          {
            label: 'Fampihavanana',
            data: stats.firstConfession || [70, 80, 90, 100, 110],
            backgroundColor: '#1E90FF'
          },
          {
            label: 'Komonio Voalohany',
            data: stats.firstCommunion || [60, 70, 80, 90, 100],
            backgroundColor: '#32CD32'
          },
          {
            label: 'Fanavaozana ny Toky Batemy',
            data: stats.baptismRenewal || [50, 60, 70, 80, 90],
            backgroundColor: '#FFA500'
          },
          {
            label: 'Fankaharezana',
            data: stats.confirmation || [40, 50, 60, 70, 80],
            backgroundColor: '#8A2BE2'
          },
          {
            label: 'Fanambadiana (Mariazy)',
            data: stats.marriage || [30, 40, 50, 60, 70],
            backgroundColor: '#FF69B4'
          }
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Fivoaran'ny Sakramenta"
          }
        },
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  loadCalendarEvents() {
    const container = document.getElementById("calendar-events");
    if (!container) return;

    const events = mockData.calendarEvents || [];

    container.innerHTML = "";

    events.forEach(event => {
      const eventCard = document.createElement("div");
      eventCard.className = "calendar-event-card";
      eventCard.innerHTML = `
        <h4>${event.title}</h4>
        <p><strong>Datera:</strong> ${event.date}</p>
        <p>${event.description}</p>
      `;
      container.appendChild(eventCard);
    });
  }
}