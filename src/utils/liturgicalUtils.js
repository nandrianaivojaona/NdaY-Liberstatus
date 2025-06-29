// utils/liturgicalUtils.js

export const getLiturgicalEvents = (year) => {
    // Helper: Get Sunday of a specific week (e.g., Easter is Year A/B/C dependent)
    const getEasterDate = (year) => {
      const f = Math.floor(year / 100);
      const g = year % 100;
      const c = Math.floor((19 * g + 247) % 30);
      const i = Math.floor((f - 16) / 2);
      const h = (22 + c - i) % 30;
      let month = 3; // March
      let day = h;
      if (h > 31) {
        month = 4; // April
        day = h - 31;
      }
      return new Date(year, month, day);
    };
  
    const easter = getEasterDate(year);
  
    // Add liturgical feasts with calculated dates
    const fixedEvents = [
      { title: "Advent 1", description: "Fetin'ny Ady", date: getSundayOfAdvent1(year) },
      { title: "Noël", description: "Fetin'ny nahaterakana ny Tompo", date: new Date(year, 11, 25) }, // Dec 25
      { title: "Epiphanie", description: "Fetin'ny Fanahy Masina", date: new Date(year, 0, 6) }, // Jan 6
      { title: "Baptême du Seigneur", description: "Fetin'ny Batemy ny Kristianina", date: addDays(easter, -1) }, // Baptism of Jesus
      { title: "Pâques", description: "Fetin'ny Fiditra", date: easter },
      { title: "Ascension", description: "Fetin'ny Fandondonana an-danitra", date: addDays(easter, 39) },
      { title: "Pentecôte", description: "Fetin'ny Fanahy Masina", date: addDays(easter, 49) },
      { title: "Assomption", description: "Fetin'ny Fanakiana ny Ray aman dina", date: new Date(year, 7, 15) }, // Aug 15
      { title: "Toussaint", description: "Fetin'ny Masina rehetra", date: new Date(year, 10, 1) }, // Nov 1
      { title: "Christ le Roi", description: "Fetin'ny Kristo Tompo", date: getLastSundayOfLiturgicalYear(year) }
    ];
  
    return fixedEvents.map(event => ({
      ...event,
      date: event.date.toISOString().split("T")[0] // Format as YYYY-MM-DD
    }));
  };
  
  function getSundayOfAdvent1(year) {
    const christmas = new Date(year, 11, 25); // December 25
    const christmasDay = christmas.getDay(); // 0=Sunday, ..., 6=Saturday
    const advent4 = new Date(christmas);
    advent4.setDate(25 - (christmasDay || 7) + 1);
    const advent1 = new Date(advent4);
    advent1.setDate(advent4.getDate() - 21);
    return advent1;
  }
  
  function getLastSundayOfLiturgicalYear(year) {
    const christmas = new Date(year, 11, 25);
    const nextYearAdvent1 = getSundayOfAdvent1(year + 1);
    const lastSunday = new Date(nextYearAdvent1);
    lastSunday.setDate(lastSunday.getDate() - 7);
    return lastSunday;
  }
  
  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }