// src/utils/StatisticsService.js

import mockData from '../data/mockData';

export default class StatisticsService {
  /**
   * Helper: Get a territory by ID
   */
  static getTerritoryById(id) {
    const allLevels = [
      ...mockData.territories.archdioceses,
      ...mockData.territories.archdioceses.flatMap(a => a.dioceses || []),
      ...mockData.territories.archdioceses.flatMap(a => a.dioceses?.flatMap(d => d.vicariates || []) || []),
      ...mockData.territories.archdioceses.flatMap(a => a.dioceses?.flatMap(d => d.vicariates?.flatMap(v => v.districts || []) || [])),
      ...mockData.territories.archdioceses.flatMap(a => a.dioceses?.flatMap(d => d.vicariates?.flatMap(v => v.districts?.flatMap(dt => dt.parishes || []) || [])))
    ];

    return allLevels.find(t => t.id === id);
  }

  /**
   * Get user name by ID
   */
  static getUserNameById(userId) {
    const user = mockData.users.find(u => u.id === userId);
    return user ? user.name : "Tsy misy";
  }

  /**
   * Get Parish Stats by ID (not name)
   */
  static getParishStatsById(parishId) {
    const p = this.getTerritoryById(parishId);
    if (!p) return null;

    // Filter mpino using parishId
    const mpinoList = mockData.mpino.filter(m => m.parish === parishId);

    const totalBaptized = mpinoList.filter(m => m.baptismDate).length;
    const totalConfessed = mpinoList.filter(m => m.confessDate).length;
    const totalCommunioned = mpinoList.filter(m => m.firstCommunionDate).length;
    const totalRenewed = mpinoList.filter(m => m.baptismrenewalDate).length;
    const totalConfirmed = mpinoList.filter(m => m.confirmationDate).length;
    const totalMarried = mpinoList.filter(m => m.marriageDate).length;

    return {
      name: p.name,
      address: p.address || "Tsy misy",
      contact: p.contact || "Tsy misy",

      execTeam: {
        FilohaFK: this.getUserNameById(p.execTeam?.FilohaFK),
        Lefitra1: this.getUserNameById(p.execTeam?.Lefitra1),
        Lefitra2: this.getUserNameById(p.execTeam?.Lefitra2),
        Mpitambola: this.getUserNameById(p.execTeam?.Mpitambola),
        Mpitantsoratra: this.getUserNameById(p.execTeam?.Mpitantsoratra),
        MpitantsoratraMpanampy: this.getUserNameById(p.execTeam?.MpitantsoratraMpanampy)
      },

      // Sacrament Stats
      parishBelievers: mpinoList.length,
      parishBaptized: totalBaptized,
      parishConfessed: totalConfessed,
      parishCommunioned: totalCommunioned,
      parishRenewed: totalRenewed,
      parishConfirmed: totalConfirmed,
      parishMarried: totalMarried,

      // Group Stats
      holyAssociations: this.getHolyAssociationStatsForParish(p),
      vovonana: this.getVovonanaStatsForParish(p),
      actionCommittees: this.getActionCommitteeStatsForParish(p),

      // Breakdown by Faritra
      faritraStats: this.getFaritraStatsByParishId(p.id)
    };
  }

  /**
   * Get Holy Association Stats for a Parish
   */
  static getHolyAssociationStatsForParish(p) {
    if (!Array.isArray(p.holyAssociations)) return [];

    return p.holyAssociations.map(assoc => {
      const validMembers = mockData.mpino.filter(m =>
        Array.isArray(assoc.memberIds) && assoc.memberIds.includes(m.id)
      );

      return {
        name: assoc.name,
        category: assoc.category,
        membersCount: validMembers.length,
        excmembers: validMembers.map(m => ({
          id: m.id,
          name: m.name,
          baptismDate: m.baptismDate,
          confessDate: m.confessDate,
          firstCommunionDate: m.firstCommunionDate,
          baptismrenewalDate: m.baptismrenewalDate,
          confirmationDate: m.confirmationDate,
          marriageDate: m.marriageDate
        }))
      };
    });
  }

  /**
   * Get Vovonana Stats for a Parish
   */
  static getVovonanaStatsForParish(p) {
    if (!Array.isArray(p.vovonana)) return [];

    return p.vovonana.map(vona => {
      const membersInVovonana = mockData.mpino.filter(m => m.vovonanaId === vona.id);

      return {
        name: vona.name,
        category: vona.category,
        membersCount: membersInVovonana.length,
        baptizedCount: membersInVovonana.filter(m => m.baptismDate).length
      };
    });
  }

  /**
   * Get Action Committee Stats for a Parish
   */
  static getActionCommitteeStatsForParish(p) {
    if (!Array.isArray(p.actionCommittees)) return [];

    return p.actionCommittees.map(committee => {
      const membersInCommittee = mockData.mpino.filter(m => m.committeeId === committee.id);

      return {
        name: committee.name,
        category: committee.category,
        membersCount: membersInCommittee.length,
        baptizedCount: membersInCommittee.filter(m => m.baptismDate).length
      };
    });
  }

  /**
   * Get Faritra Stats by Parish ID
   */
  static getFaritraStatsByParishId(parishId) {
    const p = this.getTerritoryById(parishId);
    if (!p || !Array.isArray(p.faritras)) return [];

    return p.faritras.map(faritra => {
      const mpinoInFaritra = Array.isArray(mockData.mpino)
      ? mockData.mpino.filter(m => m.faritra === faritra.id)
      : [];

    const familiesInFaritra = Array.isArray(mockData.families)
      ? mockData.families.filter(f => f.faritra === faritra.id)
      : [];

    const tafosInFaritra = Array.isArray(mockData.tafos)
      ? mockData.tafos.filter(t => t.faritra === faritra.id)
      : [];
    

      return {
        code: faritra.id,
        name: faritra.name,
        faritraMpino: mpinoInFaritra.length,
        faritraBaptized: mpinoInFaritra.filter(m => m.baptismDate).length,
        faritraConfessed: mpinoInFaritra.filter(m => m.confessDate).length,
        faritraCommunioned: mpinoInFaritra.filter(m => m.firstCommunionDate).length,
        faritraRenewed: mpinoInFaritra.filter(m => m.baptismrenewalDate).length,
        faritraConfirmed: mpinoInFaritra.filter(m => m.confirmationDate).length,
        faritraMarried: mpinoInFaritra.filter(m => m.marriageDate).length,
        faritraFamilies: familiesInFaritra.length,
        faritraTafos: tafosInFaritra.length,
        apvStats: this.getApvStatsByFaritraId(faritra.id)
      };
    });
  }

  /**
   * Get APV Stats by Faritra ID
   */
  static getApvStatsByFaritraId(faritraId) {
    const faritra = this.getTerritoryById(faritraId);
    if (!faritra || !Array.isArray(faritra.apvs)) return [];

    return faritra.apvs.map(apv => {
      const mpinoInApv = mockData.mpino.filter(m => m.apvid === apv.id);
      const familiesInApv = mockData.families.filter(f => f.apv === apv.id);
      const tafosInApv = mockData.tafos.filter(t => t.apv === apv.id);

      return {
        name: apv.name,
        code: apv.id,
        apvMpino: mpinoInApv.length,
        apvBaptized: mpinoInApv.filter(m => m.baptismDate).length,
        apvConfessed: mpinoInApv.filter(m => m.confessDate).length,
        apvCommunioned: mpinoInApv.filter(m => m.firstCommunionDate).length,
        apvRenewed: mpinoInApv.filter(m => m.baptismrenewalDate).length,
        apvConfirmed: mpinoInApv.filter(m => m.confirmationDate).length,
        apvMarried: mpinoInApv.filter(m => m.marriageDate).length,
        apvFamilies: familiesInApv.length,
        apvTafos: tafosInApv.length
      };
    });
  }
}