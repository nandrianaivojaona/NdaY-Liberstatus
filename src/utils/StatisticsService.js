import mockData from '../data/mockData';

export default class StatisticsService {
  /**
   * Helper: Get a territory by ID (Archdiocese, Diocese, Vicariate, District, Parish)
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
    if (!userId) return "Not available";
    const user = mockData.users.find(u => u.id === userId);
    return user ? user.name : "Not available";
  }

  /**
   * Get Parish Stats by ID
   */
  static getParishStatsById(parishId) {
    const parish = this.getTerritoryById(parishId);
    if (!parish) return null;

    const believersInParish = mockData.believers.filter(b => b.parish === parishId);

    return {
      // Basic Info
      name: parish.name,
      address: parish.address || "Not available",
      contact: parish.contact || "Not available",
      priest: parish.priest,

      // Executive Team
      execTeam: {
        president: this.getUserNameById(parish.execTeam?.president),
        vicePresident1: this.getUserNameById(parish.execTeam?.vicePresident1),
        vicePresident2: this.getUserNameById(parish.execTeam?.vicePresident2),
        treasurer: this.getUserNameById(parish.execTeam?.treasurer),
        secretary: this.getUserNameById(parish.execTeam?.secretary),
        deputySecretary: this.getUserNameById(parish.execTeam?.deputySecretary),
        advisor: this.getUserNameById(parish.execTeam?.advisor)
      },

      // Finance Council (Finances Council)
      financesCouncil: parish.financesCouncil?.map(fc => ({
        id: fc.id,
        name: fc.name,
        contact: fc.contact,
        president: this.getUserNameById(fc.execTeam?.president),
        vicePresident1: this.getUserNameById(fc.execTeam?.vicePresident1),
        treasurer: this.getUserNameById(fc.execTeam?.treasurer),
        secretary: this.getUserNameById(fc.execTeam?.secretary),
        membersCount: fc.memberIds?.length || 0
      })) || [],

      // Holy Associations
      holyAssociations: parish.holyAssociations?.map(ha => ({
        id: ha.id,
        name: ha.name,
        category: ha.category,
        contact: ha.contact,
        president: this.getUserNameById(ha.execTeam?.president),
        membersCount: ha.memberIds?.length || 0
      })) || [],

      // Sacraments Stats
      totalBelievers: believersInParish.length,
      baptized: believersInParish.filter(b => b.baptismDate).length,
      firstConfession: believersInParish.filter(b => b.confessDate).length,
      firstCommunion: believersInParish.filter(b => b.firstCommunionDate).length,
      baptismRenewal: believersInParish.filter(b => b.baptismrenewalDate).length,
      confirmed: believersInParish.filter(b => b.confirmationDate).length,
      married: believersInParish.filter(b => b.marriageDate).length,

      // Territorial Breakdown
      zones: parish.zones?.map(zone => ({
        id: zone.id,
        name: zone.name,
        neighborhood: zone.neighborhood,
        contact: zone.contact,
        executiveTeam: {
          president: this.getUserNameById(zone.execTeam?.zonePresident),
          vicePresident1: this.getUserNameById(zone.execTeam?.zoneVicePresident1),
          vicePresident2: this.getUserNameById(zone.execTeam?.zoneVicePresident2),
          treasurer: this.getUserNameById(zone.execTeam?.zoneTreasurer),
          secretary: this.getUserNameById(zone.execTeam?.zoneSecretary)
        },
        apvs: zone.apvs?.map(apv => ({
          id: apv.id,
          name: apv.name,
          leader: this.getUserNameById(apv.execTeam?.leader),
          roofHouseholdsCount: apv.roofHouseholds?.length || 0,
          familiesCount: mockData.families.filter(f => f.apv === apv.id).length,
          believersCount: believersInParish.filter(b => b.apv === apv.id).length
        })),
        believersCount: believersInParish.filter(b => b.zone === zone.id).length,
        familiesCount: mockData.families.filter(f => f.zone === zone.id).length,
        roofHouseholdsCount: mockData.roofHouseHolds.filter(rh => rh.zone === zone.id).length
      })) || [],

      totalZones: parish.zones?.length || 0,
      totalAPVs: parish.zones?.reduce((acc, z) => acc + (z.apvs?.length || 0), 0) || 0,
      totalRoofHouseholds: mockData.roofHouseHolds.filter(rh => rh.parish === parishId).length,
      totalFamilies: mockData.families.filter(f => f.parish === parishId).length
    };
  }

  /**
   * Get Zone Stats by Parish ID
   */
  static getZoneStatsByParishId(parishId) {
    const parish = this.getTerritoryById(parishId);
    if (!parish?.zones) return [];

    return parish.zones.map(zone => {
      const believersInZone = mockData.believers.filter(b => b.zone === zone.id);
      const familiesInZone = mockData.families.filter(f => f.zone === zone.id);
      const householdsInZone = mockData.roofHouseHolds.filter(rh => rh.zone === zone.id);

      return {
        id: zone.id,
        name: zone.name,
        neighborhood: zone.neighborhood,
        contact: zone.contact,
        believers: believersInZone, // Full believer objects
        believersCount: believersInZone.length,
        // Sacraments Stats
        baptized: believersInZone.filter(b => b.baptismDate).length,
        firstConfession: believersInZone.filter(b => b.confessDate).length,
        firstCommunion: believersInZone.filter(b => b.firstCommunionDate).length,
        baptismRenewal: believersInZone.filter(b => b.baptismrenewalDate).length,
        confirmed: believersInZone.filter(b => b.confirmationDate).length,
        married: believersInZone.filter(b => b.marriageDate).length,
        // Contact Info
        contact: zone.contact || "Not available",
        // Executive Team

        // Families and Roof Households

        families: familiesInZone, // Full family objects
        roofHouseholds: householdsInZone, // Full household objects
        
        familiesCount: familiesInZone.length,
        roofHouseholdsCount: householdsInZone.length,

        // Executive Team
        executiveTeam: {
          president: this.getUserNameById(zone.execTeam?.zonePresident),
          vicePresident1: this.getUserNameById(zone.execTeam?.zoneVicePresident1),
          vicePresident2: this.getUserNameById(zone.execTeam?.zoneVicePresident2),
          treasurer: this.getUserNameById(zone.execTeam?.zoneTreasurer),
          secretary: this.getUserNameById(zone.execTeam?.zoneSecretary)
        },
        apvs: zone.apvs?.map(apv => ({
          id: apv.id,
          name: apv.name,
          leader: this.getUserNameById(apv.execTeam?.leader),
          believersCount: believersInZone.filter(b => b.apv === apv.id).length,
          familiesCount: familiesInZone.filter(f => f.apv === apv.id).length,
          roofHouseholdsCount: householdsInZone.filter(rh => rh.apv === apv.id).length
        })) || []
      };
    });
  }

  /**
   * Get APV Stats by Zone ID
   */
  static getApvStatsByZoneId(zoneId) {
    const zone = this.getTerritoryById(zoneId);
    if (!zone?.apvs) return [];

    return zone.apvs.map(apv => {
      const believersInApv = mockData.believers.filter(b => b.apv === apv.id);
      const familiesInApv = mockData.families.filter(f => f.apv === apv.id);
      const householdsInApv = mockData.roofHouseHolds.filter(rh => rh.apv === apv.id);

      return {
        id: apv.id,
        name: apv.name,
        leader: this.getUserNameById(apv.execTeam?.leader),
        believersCount: believersInApv.length,
        familiesCount: familiesInApv.length,
        roofHouseholdsCount: householdsInApv.length
      };
    });
  }
}