// src/controllers/LiberstatusController.js

import mockData from '../data/mockData.js';
import { ROLES, hasPermission } from '../auth/roles.js';
import StatisticsService from '../utils/StatisticsService.js';
import { territoryService } from '../services/territoryService.js';

export default class LiberstatusController {
  constructor(currentUser) {
    this.user = currentUser;
    this.init();
  }

  init() {
    console.log(`Intialized LiberstatusController for ${this.user.name}`);
    this.handleAccessControl();
    this.populateFaritra();
    this.bindEvents();
    this.renderTerritoryTree();
  }

  handleAccessControl() {
    const allowedRoles = [ROLES.priest, ROLES.parish_leader, ROLES.faritra, ROLES.apv, ROLES.believer];
    if (!allowedRoles.includes(this.user.role)) {
      if (this.user.isExecMember) {
      alert("Miala tsiny, mbola tsy voasokajy ho mpikambana manana andraikitra ianao. Mifandraisa amin'ny admin.");
      } else {
      alert("Takelaka voatokana (Filohan'ny APV sy Loham-Pianakaviana).");
      }
      return;
    }

    console.log("✅ User can access Liberstatus");

    if ([ROLES.apv, ROLES.family].includes(this.user.role)) {
      this.enableManagementFeatures();
    }
  }

  enableManagementFeatures() {
    document.querySelectorAll('[data-requires-login]').forEach(btn => {
      btn.disabled = false;
      btn.title = "";
    });
  }

  populateFaritra() {
    const faritraSelect = document.getElementById('faritraSelector');
    if (!faritraSelect) return;

    const faritras = mockData.territories.archdioceses[0].dioceses[0].vicariates[0].districts[0].parishes[0].faritras;

    faritraSelect.innerHTML = `<option value="">— Safidio ny Faritra —</option>`;
    faritras.forEach(f => {
      const option = document.createElement('option');
      option.value = f.id;
      option.textContent = f.name;
      faritraSelect.appendChild(option);
    });
  }

  bindEvents() {
    document.getElementById('faritraSelector')?.addEventListener('change', () => {
      const faritra = document.getElementById('faritraSelector').value;
      this.renderApvsInFaritra(faritra);
    });

    document.getElementById('apvSelector')?.addEventListener('change', () => {
      const apv = document.getElementById('apvSelector').value;
      this.renderMembersInApv(apv, 'member-list-container');
    });
  }

  renderTerritoryTree() {
    const container = document.getElementById("territory-tree-container");
    if (!container) return;

    const p = mockData.territories.archdioceses[0].dioceses[0].vicariates[0].districts[0].parishes[0];

    const totalHouseholds = p.faritras.reduce((sum, faritra) => {
      return sum + (faritra.apvs.households || 0);
    }, 0);

    container.innerHTML = `
      <div class="territory-card">
      <h3>📍 Paroasy na Fiangonana: ${p.name}</h3>
      <p><strong>Adiresy:</strong> ${p.address}</p>
      <p><strong>Pretra Tompom-paritra:</strong> ${p.priest}</p>
      <ul>
        <li>Mpino: ${StatisticsService.getParishStats().totalBelievers}</li>
        <li>Batemy: ${StatisticsService.getParishStats().baptized}</li>
        <li>Fampihavanana: ${StatisticsService.getParishStats().confessed}</li>
        <li>Komonio voalohany: ${StatisticsService.getParishStats().communioned}</li>
        <li>Fanavaozana Toky Batemy: ${StatisticsService.getParishStats().baptismrenewed}</li>
        <li>Fankaharezana: ${StatisticsService.getParishStats().confirmed}</li>
        <li>Fanambadiana (Mariazy): ${StatisticsService.getParishStats().married}</li>
        <li>Isan'ny APV: ${p.faritras.apvs.length}</li>
        <li>Isan'ny Tafo: ${totalHouseholds}</li>
        <li>Isan'ny Fianakaviana: ${mockData.families.length}</li>
      </ul>
      <h4>👥 Executive Members</h4>
      <ul>
        ${p.executiveMembers.map(member => `<li>${member.name} – ${member.role}</li>`).join('')}
      </ul>
      <button class="toggle-btn" data-target="holy-associations">Fikambanana Masina</button>
      <div id="holy-associations" class="nested-section hidden">
        <h4>📜 Holy Associations</h4>
        <table>
        <thead>
          <tr>
          <th>Anarana</th>
          <th>Mpikambana</th>
          <th>Filohan'ny Fikambanana</th>
          </tr>
        </thead>
        <tbody>
          ${p.holyAssociations.map(assoc => `
          <tr>
            <td>${assoc.name}</td>
            <td>${assoc.membersCount}</td>
            <td>${assoc.president}</td>
          </tr>
          `).join('')}
        </tbody>
        </table>
      </div>
      <button class="toggle-btn" data-target="action-committee">Vaomiera</button>
      <div id="action-committee" class="nested-section hidden">
        <h4>🛠️ Actions Committee</h4>
        <ul>
        ${p.actionCommittee.map(member => `<li>${member.name} – ${member.role}</li>`).join('')}
        </ul>
      </div>
      <button class="toggle-btn" data-target="consulting-socio-economic">Vaomiera Sosialy sy Toekarena</button>
      <div id="consulting-socio-economic" class="nested-section hidden">
        <h4>📊 Consulting Socio-Economic</h4>
        <ul>
        ${p.consultingSocioEconomic.map(member => `<li>${member.name} – ${member.role}</li>`).join('')}
        </ul>
      </div>
      </div>
    `;

    p.faritras.forEach(faritra => {
      this.renderFaritra(container, faritra);
    });
  }

  renderFaritra(container, faritra) {
    const fmpino = mockData.mpino.filter(m => m.faritra === faritra.id);
    const ffam = mockData.families.filter(f => f.faritra === faritra.id);
    const totalHouseholds = mockData.territories.archdioceses[0].dioceses[0].vicariates[0].districts[0].parishes[0].faritras.reduce((sum, f) => {
      return sum + (f.apvs.households || 0);
    }, 0);

    container.innerHTML += `
      <div class="territory-card">
      <h4>🔵 Faritra: ${faritra.name}</h4>
      <p>Fokontany: ${faritra.fokontany}</p>
      <p>Isan'ny Tafo: ${totalHouseholds}</p>
      <p>Isan'ny Fianakaviana: ${ffam.length}</p>
      <p>Mpino: ${fmpino.length}</p>
      <p>Batemy: ${fmpino.filter(m => m.baptismDate).length}</p>
      <p>Fampihavanana: ${fmpino.filter(m => m.confessionDate).length}</p>
      <p>Komonio voalohany: ${fmpino.filter(m => m.firstCommunionDate).length}</p>
      <p>Fanavaozana Toky Batemy: ${fmpino.filter(m => m.baptismRenewalDate).length}</p>
      <p>Fankaharezana: ${fmpino.filter(m => m.confirmationDate).length}</p>
      <p>Fanambadiana (Mariazy): ${fmpino.filter(m => m.marriageDate).length}</p>
      <h4>👥 Birao</h4>
      <ul>
      <li><strong>Leader:</strong> ${faritra.leader?.name || "N/A"} – ${faritra.leader?.contact || "N/A"}</li>
      <li><strong>Deputy 1:</strong> ${faritra.deputies?.[0]?.name || "N/A"} – ${faritra.deputies?.[0]?.contact || "N/A"}</li>
      <li><strong>Deputy 2:</strong> ${faritra.deputies?.[1]?.name || "N/A"} – ${faritra.deputies?.[1]?.contact || "N/A"}</li>
      <li><strong>Treasurer:</strong> ${faritra.treasurer?.name || "N/A"} – ${faritra.treasurer?.contact || "N/A"}</li>
      <li><strong>Secretary 1:</strong> ${faritra.secretaries?.[0]?.name || "N/A"} – ${faritra.secretaries?.[0]?.contact || "N/A"}</li>
      <li><strong>Secretary 2:</strong> ${faritra.secretaries?.[1]?.name || "N/A"} – ${faritra.secretaries?.[1]?.contact || "N/A"}</li>
      </ul>
      <button class="toggle-btn" data-target="${faritra.id}-apvs">+</button>
      </div>
      <div id="${faritra.name}-apvs" class="nested-section hidden"></div>
    `;

    faritra.apvs.forEach(apvName => {
      this.renderApv(document.getElementById(`${faritra.id}-apvs`), apvName, faritra.id);
    });
  }

  renderApv(container, apvName, faritraId, faritraName) {
    const members = territoryService.getBelieversInAPV(apvName);
    const stats = {
      totalBelievers: members.length,
      baptized: members.filter(m => m.baptismDate).length,
      confessed: members.filter(m => m.confessionDate).length,
      communioned: members.filter(m => m.firstCommunionDate).length,
      baptismrenewed: members.filter(m => m.baptismRenewalDate).length,
      confirmed: members.filter(m => m.confirmationDate).length,
      married: members.filter(m => m.marriageDate).length,
      households: mockData.households.filter(f => f.apv === apvName).length,
      families: mockData.families.filter(f => f.apv === apvName).length
    };
    const faritra = mockData.territories.archdioceses[0].dioceses[0].vicariates[0].districts[0].parishes[0].faritras.find(f => f.id === faritraId);
    if (!faritra) return;

    const apv = faritra.apvs.find(apv => apv.name === apvName);
    if (!apv) return;

    container.innerHTML += `
    <div class="territory-card">
      <h5>🟡 APV: ${apvName}</h5>
      <p>Isan'ny Tafo: ${stats.households}</p>
      <p>Isan'ny Fianakaviana: ${stats.families}</p>
      <p>Fokontany: ${apv.fokontany || "N/A"}</p>
      <p>Mpino: ${stats.totalBelievers}</p>
      <p>Batemy: ${stats.baptized}</p>
      <p>Fampihavanana: ${stats.confessed}</p>
      <p>Komonio voalohany: ${stats.communioned}</p>
      <p>Fanavaozana Toky Batemy: ${stats.baptismrenewed}</p>
      <p>Fankaharezana: ${stats.confirmed}</p>
      <p>Fanambadiana (Mariazy): ${stats.married}</p>
      <button class="toggle-btn" data-target="${apvName}-members">+</button>
    </div>
    <div id="${apvName}-members" class="nested-section hidden"></div>
  `;


    container.innerHTML += html;
    this.renderMembersInApv(apv.name, `${apv.id}-members`);
  }

  renderMembersInApv(apvName, targetId) {
    const members = territoryService.getBelieversInAPV(apvName);
    const target = document.getElementById(targetId);
    if (!target) return;

    target.innerHTML = `<h6>Liste ny Mpino anaty APV: ${apvName}</h6><ul>`;
    members.forEach(m => {
      target.innerHTML += `<li>${m.fullName} – Batemy: ${m.baptismDate || "Tsy vita"}</li>`;
      target.innerHTML += `<li>${m.fullName} – Fampihavanana: ${m.confessionDate || "Tsy vita"}</li>`;
      target.innerHTML += `<li>${m.fullName} – Komonio voalohany: ${m.firstCommunionDate || "Tsy vita"}</li>`;
      target.innerHTML += `<li>${m.fullName} – Fanavaozana Toky Batemy: ${m.baptismRenewalDate || "Tsy vita"}</li>`;
      target.innerHTML += `<li>${m.fullName} – Fankaharezana: ${m.confirmationDate || "Tsy vita"}</li>`;
      target.innerHTML += `<li>${m.fullName} – Fanambadiana (Mariazy): ${m.marriageDate || "Tsy vita"}</li>`;
    target.innerHTML += `<li>${m.fullName} – Fianakaviana: ${m.familyName || "Tsy fantatra"}</li>`;
    target.innerHTML += `<li>${m.fullName} – Tafo: ${m.household || "Tsy fantatra"}</li>`;
    });
    target.innerHTML += "</ul>";
    target.classList.remove('hidden');
  }

}