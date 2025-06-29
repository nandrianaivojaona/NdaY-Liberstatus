// src/utils/chartDataUtils.js

export const prepareGrowthData = (mpinoList) => {
    const currentYear = new Date().getFullYear();
    const yearsToShow = 5;
    const years = Array.from({ length: yearsToShow }, (_, i) =>
      currentYear - yearsToShow + 1 + i
    );
  
    const currentTotals = {
      baptized: mpinoList.filter(m => m.baptismDate).length,
      confessed: mpinoList.filter(m => m.confessDate).length,
      communioned: mpinoList.filter(m => m.firstCommunionDate).length,
      renewed: mpinoList.filter(m => m.baptismrenewalDate).length,
      confirmed: mpinoList.filter(m => m.confirmationDate).length,
      married: mpinoList.filter(m => m.marriageDate).length
    };
  
    const yearlyNew = {};
    years.forEach(year => {
      yearlyNew[year] = {
        baptized: mpinoList.filter(m =>
          m.baptismDate && new Date(m.baptismDate).getFullYear() === year
        ).length,
        confessed: mpinoList.filter(m =>
          m.confessDate && new Date(m.confessDate).getFullYear() === year
        ).length,
        communioned: mpinoList.filter(m =>
          m.firstCommunionDate && new Date(m.firstCommunionDate).getFullYear() === year
        ).length,
        renewed: mpinoList.filter(m =>
          m.baptismrenewalDate && new Date(m.baptismrenewalDate).getFullYear() === year
        ).length,
        confirmed: mpinoList.filter(m =>
          m.confirmationDate && new Date(m.confirmationDate).getFullYear() === year
        ).length,
        married: mpinoList.filter(m =>
          m.marriageDate && new Date(m.marriageDate).getFullYear() === year
        ).length
      };
    });
  
    const historicalTotals = {};
    let runningTotals = { ...currentTotals };
    historicalTotals[currentYear] = { ...runningTotals };
  
    for (let i = years.length - 1; i > 0; i--) {
      const year = years[i];
      const prevYear = years[i - 1];
  
      historicalTotals[prevYear] = {
        baptized: runningTotals.baptized - (yearlyNew[year]?.baptized || 0),
        confessed: runningTotals.confessed - (yearlyNew[year]?.confessed || 0),
        communioned: runningTotals.communioned - (yearlyNew[year]?.communioned || 0),
        renewed: runningTotals.renewed - (yearlyNew[year]?.renewed || 0),
        confirmed: runningTotals.confirmed - (yearlyNew[year]?.confirmed || 0),
        married: runningTotals.married - (yearlyNew[year]?.married || 0)
      };
      runningTotals = { ...historicalTotals[prevYear] };
    }
  
    return {
      sacramentLabels: ["Batemy", "Fampihavanana", "Komonio", "Fanavaozana", "Fankaherezana", "Mariazy"],
      historicalTotals,
      yearlyNew,
      years
    };
  };
  
  // Helper: Darken color
  export const darkenColor = (color, percent) => {
    const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (!match) return 'rgb(0,0,0)';
    let [_, r, g, b] = match;
    const darken = val => Math.max(0, Math.min(255, parseInt(val, 10) - percent));
    return `rgb(${darken(r)}, ${darken(g)}, ${darken(b)})`;
  };