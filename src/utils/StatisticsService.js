import mockData from '../data/mockData';

export default class StatisticsService {

  // 🔹 Internal helper to find a parish by name
  static _getParishByName(parishName) {
    return mockData.territories.archdioceses[0].dioceses[0].vicariates[0].districts[0].parishes.find(p => p.name === parishName);
  }

  // 🔹 Get stats for a specific parish
  static getParishStatsByParishName(parishName) {
    const p = this._getParishByName(parishName);
    if (!p) return null;

    const mpinoList = mockData.mpino.filter(m => m.parish === p.name);

    return {
      name: p.name,
      address: p.address,
      execTeam: p.execTeam || {},
      holyAssociations: this.getHolyAssociationStatsForParish(p),
      vovonana: this.getVovonanaStatsForParish(p),
      actionCommittees: this.getActionCommitteeStatsForParish(p),
      totalBelievers: mpinoList.length,
      baptized: mpinoList.filter(m => m.baptismDate).length,
      confirmed: mpinoList.filter(m => m.confirmationDate).length,
      married: mpinoList.filter(m => m.marriageDate).length,
      families: mockData.families.filter(f => f.parish === p.name).length
    };
  }

  // 🔹 Get all Holy Associations for the parish
  static getHolyAssociationStatsForParish(parish) {
    if (!Array.isArray(parish.holyAssociations)) return [];

    return parish.holyAssociations.map(assoc => {
      const members = mockData.mpino.filter(m => assoc.memberIds.includes(m.id));
      return {
        name: assoc.name,
        category: assoc.category,
        membersCount: assoc.memberIds?.length || 0,
        baptizedCount: members.filter(m => m.baptismDate).length
      };
    });
  }

  // 🔹 Get Vovonana Stats
  static getVovonanaStatsForParish(parish) {
    if (!Array.isArray(parish.vovonana)) return [];

    return parish.vovonana.map(vona => {
      const members = mockData.mpino.filter(m => m.vovonana === vona.name);
      return {
        name: vona.name,
        category: vona.category,
        membersCount: members.length,
        baptizedCount: members.filter(m => m.baptismDate).length
      };
    });
  }

  // 🔹 Get Action Committee Stats
  static getActionCommitteeStatsForParish(parish) {
    if (!Array.isArray(parish.actionCommittees)) return [];

    return parish.actionCommittees.map(committee => {
      const members = mockData.mpino.filter(m => m.actionCommittee === committee.name);
      return {
        name: committee.name,
        category: committee.category,
        membersCount: members.length,
        baptizedCount: members.filter(m => m.baptismDate).length
      };
    });
  }

  // 🔹 Get Faritra Stats
  static getFaritraStatsByParishName(parishName) {
    const p = this._getParishByName(parishName);
    if (!p || !Array.isArray(p.faritras)) return [];

    return p.faritras.map(faritra => {
      const mpinoInFaritra = mockData.mpino.filter(m => m.faritra === faritra.code);
      const familiesInFaritra = mockData.families.filter(f => f.faritra === faritra.code);

      return {
        name: faritra.name,
        code: faritra.code,
        leader: faritra.execTeam?.leader1 || "Tsy misy",
        deputy1: faritra.execTeam?.deputy1 || "Tsy misy",
        deputy2: faritra.execTeam?.deputy2 || "Tsy misy",
        totalMpino: mpinoInFaritra.length,
        baptized: mpinoInFaritra.filter(m => m.baptismDate).length,
        totalFamilies: familiesInFaritra.length,
        apvStats: this.getApvStatsByFaritra(faritra)
      };
    });
  }

  // 🔹 Get APV Stats by Faritra
  static getApvStatsByFaritra(faritra) {
    if (!faritra.apvs || !Array.isArray(faritra.apvs)) return [];

    return faritra.apvs.map(apv => {
      const mpinoInApv = mockData.mpino.filter(m => m.apv === apv.name);
      const familiesInApv = mockData.families.filter(f => f.apv === apv.name);

      return {
        name: apv.name,
        code: apv.code,
        leader: apv.execTeam?.leader1 || "Tsy misy",
        secretary1: apv.execTeam?.secretary1 || "Tsy misy",
        totalMpino: mpinoInApv.length,
        baptized: mpinoInApv.filter(m => m.baptismDate).length,
        totalHouseholds: apv.households?.length || 0,
        totalFamilies: familiesInApv.length
      };
    });
  }

  // 🔹 Get Family Stats by APV
  static getFamilyStatsByApv(apvName, parishName) {
    const p = this._getParishByName(parishName);
    const apvs = p.faritras.flatMap(f => f.apvs.filter(a => a.name === apvName));

    return apvs.map(apv => {
      const familiesInApv = mockData.families.filter(f => f.apv === apv.name);
      const mpinoInApv = mockData.mpino.filter(m => m.apv === apv.name);

      return {
        apvName: apv.name,
        totalFamilies: familiesInApv.length,
        familyHeads: familiesInApv.map(f => f.headOfHousehold),
        totalMpino: mpinoInApv.length,
        baptized: mpinoInApv.filter(m => m.baptismDate).length
      };
    });
  }

  // 🔹 Get All Parishes' Stats (for dashboard)
  static getAllTerritoryStats() {
    const parishes = mockData.territories.archdioceses[0].dioceses[0].vicariates[0].districts[0].parishes;

    return {
      totalParishes: parishes.length,
      totalMpino: mockData.mpino.length,
      totalBaptized: mockData.mpino.filter(m => m.baptismDate).length,
      totalConfirmed: mockData.mpino.filter(m => m.confirmationDate).length,
      totalMarried: mockData.mpino.filter(m => m.marriageDate).length,
      totalFamilies: mockData.families.length
    };
  }

  // 🔹 Get MPINO by APV
  static getMpinoByApv(apvName, parishName) {
    const p = this._getParishByName(parishName);
    const apvs = p.faritras.flatMap(f => f.apvs.filter(a => a.name === apvName));

    return apvs.flatMap(apv => mockData.mpino.filter(m => m.apv === apv.name));
  }

  // 🔹 Get Family Heads in APV
  static getFamilyHeadsInApv(apvName, parishName) {
    const p = this._getParishByName(parishName);
    const apvs = p.faritras.flatMap(f => f.apvs.filter(a => a.name === apvName));

    return mockData.families.filter(f => f.apv === apvName && f.headOfHousehold);
  }

  // 🔹 Get Family Members by ID
  static getFamilyMembers(familyId) {
    const family = mockData.families.find(f => f.id === familyId);
    if (!family) return [];

    return mockData.mpino.filter(m => family.members.includes(m.id));
  }

  // 🔹 Get statistics per Faritra
  static getStatsByFaritra(faritraCode, parishName) {
    const p = this._getParishByName(parishName);
    const faritra = p.faritras.find(f => f.code === faritraCode);

    if (!faritra) return null;

    const mpinoInFaritra = mockData.mpino.filter(m => m.faritra === faritra.code);

    return {
      name: faritra.name,
      code: faritra.code,
      totalMpino: mpinoInFaritra.length,
      totalBaptized: mpinoInFaritra.filter(m => m.baptismDate).length,
      apvStats: this.getApvStatsByFaritra(faritra)
    };
  }
}