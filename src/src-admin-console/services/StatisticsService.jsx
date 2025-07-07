import mockData from '../data/mockData';

export default class StatisticsService {
  static getBelieversCountByApv(apvId) {
    return mockData.believers.filter(b => b.apv === apvId).length;
  }

  static getUsersByTerritory(level, territoryId) {
    const keys = {
      archdiocese: 'archdiocese',
      diocese: 'diocese',
      vicariate: 'vicariate',
      district: 'district',
      parish: 'parish',
      zone: 'faritra',
      bcm: 'apv'
    };

    return mockData.users.filter(u => u[keys[level]] === territoryId);
  }
}