/**
 * Service for managing territory-related operations.
 */
import Papa from 'papaparse';
export const territoryService = {
    /**
     * Get all Archdioceses.
     */
    getArchdioceses() {
      return mockData.territories.archdioceses || [];
    },
  
    /**
     * Get Dioceses under a specific Archdiocese.
     * @param {string} archdioceseName - Name of the Archdiocese
     */
    getDioceses(archdioceseName) {
      const archdiocese = this.getArchdioceses().find(a => a.name === archdioceseName);
      return archdiocese?.dioceses || [];
    },
  
    /**
     * Get Vicariates under a specific Diocese.
     * @param {string} dioceseName - Name of the Diocese
     */
    getVicariates(dioceseName) {
      const diocese = this.getDioceses(dioceseName)?.[0];
      return diocese?.vicariates || [];
    },
  
    /**
     * Get Districts under a specific Vicariate.
     * @param {string} vicariateName - Name of the Vicariate
     */
    getDistricts(vicariateName) {
      const vicariate = this.getVicariates(vicariateName)?.[0];
      return vicariate?.districts || [];
    },
  
    /**
     * Get Parishes under a specific District.
     * @param {string} districtName - Name of the District
     */
    getParishes(districtName) {
      const district = this.getDistricts(districtName)?.[0];
      return district?.parishes || [];
    },
  
    /**
     * Get Faritras under a specific Parish.
     * @param {string} parishName - Name of the Parish
     */
    getFaritras(parishName) {
      const parish = this.getParishes(parishName)?.[0];
      return parish?.faritras || [];
    },
  
    /**
     * Get APVs under a specific Faritra.
     * @param {string} faritraName - Name of the Faritra
     * @param {string} parishName - Name of the Parish
     */
    getAPVs(faritraName, parishName) {
      const faritra = this.getFaritras(parishName).find(f => f.name === faritraName);
      return faritra?.apvs || [];
    },
  
    /**
     * Get households (Tokantrano) in a specific APV.
     * @param {string} apvName - Name of the APV
     * @param {string} faritraName - Name of the Faritra
     */
    getHouseholds(apvName, faritraName) {
      const households = mockData.households.filter(h =>
        h.apv === apvName && h.faritra === faritraName
      );
      return households;
    },
  
    /**
     * Get families in a specific APV.
     * @param {string} apvName - Name of the APV
     */
    getFamiliesInAPV(apvName) {
      const families = mockData.families.filter(f => f.apv === apvName);
      return families;
    },
  
    /**
     * Get believers in a specific APV.
     * @param {string} apvName - Name of the APV
     */
    getBelieversInAPV(apvName) {
      const believers = mockData.mpino.filter(m => m.apv === apvName);
      return believers;
    },
  
    /**
     * Get believers in a specific Faritra.
     * @param {string} faritraName - Name of the Faritra
     */
    getBelieversInFaritra(faritraName) {
      const believers = mockData.mpino.filter(m => m.faritra === faritraName);
      return believers;
    }
  };