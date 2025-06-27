import { mockData } from '../data/mockData.js';

export default class TerritoryController {
  constructor() {
    this.init();
  }

  init() {
    this.populateArchdioceses();
    this.bindEvents();
  }

  populateArchdioceses() {
    const select = document.getElementById('archdiocese-select');
    if (!select) return;

    select.innerHTML = '<option value="">— Safidio ny ArkiDiosezy —</option>';
    mockData.territories.archdioceses.forEach(arch => {
      const option = document.createElement('option');
      option.value = arch.name;
      option.textContent = arch.name;
      select.appendChild(option);
    });
  }

  populateDioceses(archName) {
    const dioceseSelect = document.getElementById('diocese-select');
    if (!dioceseSelect) return;

    const arch = mockData.territories.archdioceses.find(a => a.name === archName);
    dioceseSelect.innerHTML = '<option value="">— Safidio ny Diosezy —</option>';

    if (arch && arch.dioceses) {
      arch.dioceses.forEach(diocese => {
        const option = document.createElement('option');
        option.value = diocese.name;
        option.textContent = diocese.name;
        dioceseSelect.appendChild(option);
      });
    }
  }

  populateVicariates(dioceseName) {
    const vicariateSelect = document.getElementById('vicariate-select');
    if (!vicariateSelect) return;

    const diocese = mockData.territories.archdioceses
      .flatMap(a => a.dioceses)
      .find(d => d.name === dioceseName);

    vicariateSelect.innerHTML = '<option value="">— Safidio ny Vikaria —</option>';

    if (diocese && diocese.vicariates) {
      diocese.vicariates.forEach(vicariate => {
        const option = document.createElement('option');
        option.value = vicariate.name;
        option.textContent = vicariate.name;
        vicariateSelect.appendChild(option);
      });
    }
  }

  populateDistricts(vicariateName) {
    const districtSelect = document.getElementById('district-select');
    if (!districtSelect) return;

    const vicariate = mockData.territories.archdioceses
      .flatMap(a => a.dioceses.flatMap(d => d.vicariates))
      .find(v => v.name === vicariateName);

    districtSelect.innerHTML = '<option value="">— Safidio ny District —</option>';

    if (vicariate && vicariate.districts) {
      vicariate.districts.forEach(district => {
        const option = document.createElement('option');
        option.value = district.name;
        option.textContent = district.name;
        districtSelect.appendChild(option);
      });
    }
  }

  populateParishes(districtName) {
    const parishSelect = document.getElementById('parish-select');
    if (!parishSelect) return;

    const district = mockData.territories.archdioceses
      .flatMap(a => a.dioceses.flatMap(d => d.vicariates.flatMap(v => v.districts)))
      .find(dt => dt.name === districtName);

    parishSelect.innerHTML = '<option value="">— Safidio ny Paroasy na Fiangonana —</option>';

    if (district && district.parishes) {
      district.parishes.forEach(parish => {
        const option = document.createElement('option');
        option.value = parish.name;
        option.textContent = parish.name;
        parishSelect.appendChild(option);
      });
    }
  }

  bindEvents() {
    document.getElementById('archdiocese-select')?.addEventListener('change', (e) => {
      this.populateDioceses(e.target.value);
    });

    document.getElementById('diocese-select')?.addEventListener('change', (e) => {
      this.populateVicariates(e.target.value);
    });

    document.getElementById('vicariate-select')?.addEventListener('change', (e) => {
      this.populateDistricts(e.target.value);
    });

    document.getElementById('district-select')?.addEventListener('change', (e) => {
      this.populateParishes(e.target.value);
    });
  }
}