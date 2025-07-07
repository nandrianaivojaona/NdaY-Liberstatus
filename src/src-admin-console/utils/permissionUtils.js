// src-admin-console/utils/permissionUtils.js

// Roles from mockData
import { ROLES } from '../../data/mockData';

// Define role-based permissions
export const ROLE_PERMISSIONS = {
  [ROLES.visitor]: [],
  [ROLES.believer]: ['view_own_profile'],
  [ROLES.family]: ['view_family', 'edit_family_members'],
  [ROLES.apv]: ['view_apv', 'edit_apv_executives', 'edit_family_members'],
  [ROLES.faritra]: ['view_zone', 'edit_zone_executives', 'manage_apvs'],
  [ROLES.priest]: ['view_parish', 'manage_clergy', 'manage_believers', 'manage_associations'],
  [ROLES.parish_leader]: [
    'admin_parish',
    'manage_zones',
    'manage_associations',
    'manage_councils',
    'manage_commissions'
  ],
  district_leader: ['admin_district', 'manage_parishes', 'view_all_parishes_in_district'],
  diocese_leader: ['admin_diocese', 'manage_districts', 'view_all_districts'],
  archdiocese_leader: ['admin_archdiocese', 'manage_dioceses']
};

/**
 * Helper: Get the territory level (e.g., parish, apv) that this user operates at
 */
export function getUserTerritoryScope(user) {
  if (!user || !user.role) return null;

  if (user.archdiocese && !user.diocese) return { level: 'archdiocese', id: user.archdiocese };
  if (user.diocese && !user.vicariate) return { level: 'diocese', id: user.diocese };
  if (user.vicariate && !user.district) return { level: 'vicariate', id: user.vicariate };
  if (user.district && !user.parish) return { level: 'district', id: user.district };
  if (user.parish && !user.faritra) return { level: 'parish', id: user.parish };
  if (user.faritra && !user.apv) return { level: 'faritra', id: user.faritra };
  if (user.apv) return { level: 'apv', id: user.apv };

  return null;
}

/**
 * Helper: Check if a territory belongs to the user's scope
 */
export function isUserInTerritoryScope(user, territoryId, territoryLevel) {
  const userScope = getUserTerritoryScope(user);
  if (!userScope) return false;

  // User operates at higher or equal level (e.g., Parish Leader in same Parish)
  if (territoryLevel === userScope.level && territoryId === userScope.id) return true;

  // District Leader managing Parishes under their district
  if (userScope.level === 'district' && territoryLevel === 'parish') {
    const parish = findParishById(territoryId);
    return parish?.district === userScope.id;
  }

  // Faritra Leader managing APVs under their zone
  if (userScope.level === 'faritra' && territoryLevel === 'apv') {
    const apv = findApvById(territoryId);
    return apv?.zone === userScope.id;
  }

  // Priest or Parish Leader managing believers/families/apvs in their parish
  if (['parish', 'faritra', 'apv'].includes(userScope.level)) {
    const territoryFieldMap = {
      parish: 'parish',
      faritra: 'zone',
      apv: 'apv'
    };
    const userTerritoryField = territoryFieldMap[userScope.level];
    return user[userTerritoryField] === territoryId;
  }

  return false;
}

/**
 * Helper: Check if user has a specific permission
 */
export function hasPermission(user, requiredPermission) {
  const permissions = ROLE_PERMISSIONS[user.role] || [];
  return permissions.includes(requiredPermission);
}

/**
 * Helper: Find a parish by ID from mockData
 */
function findParishById(parishId) {
  const mockData = require('../../data/mockData').default;
  for (const archdiocese of mockData.territories.archdioceses) {
    for (const diocese of archdiocese.dioceses || []) {
      for (const vicariate of diocese.vicariates || []) {
        for (const district of vicariate.districts || []) {
          for (const parish of district.parishes || []) {
            if (parish.id === parishId) return parish;
          }
        }
      }
    }
  }
  return null;
}

/**
 * Helper: Find an APV by ID from mockData
 */
function findApvById(apvId) {
  const mockData = require('../../data/mockData').default;
  for (const archdiocese of mockData.territories.archdioceses) {
    for (const diocese of archdiocese.dioceses || []) {
      for (const vicariate of diocese.vicariates || []) {
        for (const district of vicariate.districts || []) {
          for (const parish of district.parishes || []) {
            for (const zone of parish.zones || []) {
              for (const apv of zone.apvs || []) {
                if (apv.id === apvId) return apv;
              }
            }
          }
        }
      }
    }
  }
  return null;
}