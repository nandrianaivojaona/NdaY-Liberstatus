// src/data/roles.js

export const ROLES = {
  visitor: "Mpitsidika",
  believer: "Mpino Katolika",
  family: "Loham-Pianakaviana",
  apv: "Mpitarika APV",
  faritra: "Filohan'ny Faritra",
  priest: "Pretra",
  parish_leader: "Filohan'ny Filan-Kevitra Paroasy"
};

export const PERMISSIONS = {
  editMessage: [ROLES.priest, ROLES.parish_leader],
  editExecTeam: [ROLES.priest, ROLES.parish_leader, ROLES.faritra],
  manageFamily: [ROLES.apv, ROLES.family],
  viewReports: [ROLES.priest, ROLES.faritra, ROLES.apv]
};

export function hasPermission(user, permissionKey) {
  return PERMISSIONS[permissionKey]?.includes(user.role);
}

export function getUserTerritory(user) {
  if (!user || !user.isLoggedIn) return {};
  return {
    archdiocese: user.archdiocese || "",
    diocese: user.diocese || "",
    vicariate: user.vicariate || "",
    district: user.district || "",
    parish: user.parish || "",
    faritra: user.faritra || "",
    apv: user.apv || "",
    family: user.family || "",
  };
}