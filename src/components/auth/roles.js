export const ROLES = {
    visitor: "Mpitsidika",
    believer: "Mpino Katolika",
    family: "Loham-Pianakaviana",
    apv: "Mpitarika APV",
    faritra: "Filohan'ny Faritra",
    priest: "Pretra",
    parish_leader: "Filohan'ny Filan-Kevitra Paroasy"
  };
  
  export function hasPermission(user, permissionKey) {
    const PERMISSIONS = {
      editMessage: [ROLES.priest, ROLES.parish_leader],
      editExecTeam: [ROLES.priest, ROLES.parish_leader, ROLES.faritra],
      manageFamily: [ROLES.apv, ROLES.family]
    };
    return PERMISSIONS[permissionKey]?.includes(user.role);
  }