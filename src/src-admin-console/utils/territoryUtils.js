// utils/territoryUtils.js
export function getUserTerritoryScope(user) {
    if (user.archdiocese && !user.diocese && !user.vicariate && !user.district && !user.parish)
      return { level: 'archdiocese', id: user.archdiocese };
  
    if (user.diocese && !user.vicariate && !user.district && !user.parish)
      return { level: 'diocese', id: user.diocese };
  
    if (user.vicariate && !user.district && !user.parish)
      return { level: 'vicariate', id: user.vicariate };
  
    if (user.district && !user.parish)
      return { level: 'district', id: user.district };
  
    if (user.parish && !user.faritra)
      return { level: 'parish', id: user.parish };
  
    if (user.faritra && !user.apv)
      return { level: 'faritra', id: user.faritra };
  
    if (user.apv)
      return { level: 'apv', id: user.apv };
  
    return { level: null, id: null };
  }