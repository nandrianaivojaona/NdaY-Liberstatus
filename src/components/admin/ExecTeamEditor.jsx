// Admin Panel for Managing executive team of a territory
import React, { useEffect, useState } from 'react';

export default function ExecTeamEditor({ territoryType, territoryName, currentUser }) {
  const [execTeam, setExecTeam] = useState({});
  const [users, setUsers] = useState([]);
  const [territory, setTerritory] = useState(null);

  useEffect(() => {
    const parish = mockData.territories.archdioceses[0].dioceses[0].vicariates[0].districts[0].parishes[0];

    let currentTerritory = null;

    if (territoryType === 'parish') {
      currentTerritory = parish;
    } else if (territoryType === 'faritra') {
      currentTerritory = parish.faritras.find(f => f.name === territoryName);
    } else if (territoryType === 'apv') {
      const faritra = parish.faritras.find(f => f.apvs.some(a => a.name === territoryName));
      currentTerritory = faritra?.apvs.find(a => a.name === territoryName);
    }

    if (currentTerritory) {
      setTerritory(currentTerritory);
      setExecTeam(currentTerritory.execTeam || {});
    }

    setUsers(mockData.users.filter(u => {
      if (territoryType === 'parish') return u.role === ROLES.parish_leader || u.role === ROLES.priest;
      if (territoryType === 'faritra') return u.role === ROLES.faritra || u.role === ROLES.parish_leader;
      if (territoryType === 'apv') return u.role === ROLES.apv || u.role === ROLES.faritra;
      return true;
    }));

  }, [territoryType, territoryName]);

  const handleChange = (position, userId) => {
    setExecTeam(prev => ({ ...prev, [position]: userId }));
  };

  const saveChanges = () => {
    alert(`💼 Filoha dia novaina ho ${execTeam.leader1}`);
    // Later: Send this data to Firebase
  };

  if (!territory) return null;

  return (
    <div className="exec-team-editor">
      <h4>💼 Filohan’ny {territoryType}: {territoryName}</h4>
      <ul>
        {Object.entries(execTeam).map(([position, userId]) => (
          <li key={position}>
            <strong>{position.replace(/([a-z])([A-Z])/g, '$1 $2')}:</strong>
            <select
              value={userId || ''}
              onChange={(e) => handleChange(position, e.target.value)}
              disabled={!currentUser || !hasPermission(currentUser, 'editExecTeam')}
            >
              <option value="">— Safidio ny Mpikambana —</option>
              {users.map(u => (
                <option key={u.id} value={u.id}>{u.name} ({u.role})</option>
              ))}
            </select>
          </li>
        ))}
      </ul>
      <button onClick={saveChanges} disabled={!hasPermission(currentUser, 'editExecTeam')}>
        Tehirizo
      </button>
    </div>
  );
}

const getExecStructure = () => {
  if (territoryType === "holy-association") {
    return {
      positions: ["president", "vicePresident", "secretary", "treasurer"],
      labels: {
        president: "Mpitarika",
        vicePresident: "Mpitarika Fanampin'ny Fikambanana",
        secretary: "Mpitantsoratra",
        treasurer: "Mpitambola"
      }
    };
  } else if (territoryType === "action-committee") {
    return {
      positions: ["leader1", "deputy1", "deputy2", "secretary1", "secretary2"]
    };
  } else if (territoryType === "vovonana") {
    return {
      positions: ["leader", "deputy1", "deputy2", "secretary1", "treasurer"],
      labels: {
        leader: "Filohan'ny Vona",
        deputy1: "Lefitra Vona",
        secretary1: "Mpitantsoratra",
        treasurer: "Mpitambola"
      }
    };
  }

  // Default for Parishes, Faritras, APVs
  return {
    positions: ["leader", "deputy1", "deputy2", "secretary1", "secretary2","advisor", "treasurer"],
    labels: {
      leader: "Filoha",
      deputy1: "Lefitra 1",
      deputy2: "Lefitra 2",
      secretary1: "Mpitantsoratra 1",
      secretary2: "Mpitantsoratra 2",
      treasurer: "Mpitambola",
      advisor: "Mpanolotsaina"
    }
  };
};

