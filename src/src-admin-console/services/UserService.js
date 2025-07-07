import mockData from '../../data/mockData';

export default class UserService {
  static getAllUsers() {
    return mockData.users;
  }

  static getUsersByTerritory(territoryId) {
    return mockData.users.filter(u =>
      u.parish === territoryId ||
      u.faritra === territoryId ||
      u.apv === territoryId
    );
  }
}