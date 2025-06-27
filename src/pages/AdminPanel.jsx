// Admin Panel Page  - Edit Territory Exec Team

import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import ExecTeamEditor from '../components/admin/ExecTeamEditor.jsx';

export default function AdminPanel() {
  const { currentUser } = useAuth();
  const [territoryType, setTerritoryType] = useState("");
  const [selectedTerritory, setSelectedTerritory] = useState("");
  const [territoryList, setTerritoryList] = useState([]);

  useEffect(() => {
    // Example: Select first Faritra for demo
    const faritra = mockData.territories.archdioceses[0].dioceses[0].vicariates[0].districts[0].parishes[0].faritras[0];
    setSelectedTerritory({
      type: 'faritra',
      name: faritra.name
    });
  }, []);
  const p = mockData.territories.archdioceses[0].dioceses[0].vicariates[0].districts[0].parishes[0]; 
  let list = []; 
  useEffect(() => {
    if (territoryType === "parish") { 
      list = [p]; 
    } else if (territoryType === "faritra") { 
      list = p.faritras || [];   
    } else if (territoryType === "apv") { 
      list = p.faritras.flatMap(f => f.apvs.map(apvName => ({ name: apvName }))); 
    }
    setTerritoryList(list); 
  }, [territoryType]);

  if (!currentUser || !hasPermission(currentUser, 'editExecTeam')) {
    return <p>Fijerena Voatokana.</p>;
  }

  return (
    <div className="admin-panel">
      <h2>🔧 Takelaka Fiadidiana Birao</h2>

      {/* Territory Selector */}
      <div className="selector">
        <label htmlFor="territoryType">Safidio ny Sokakin-dRafitra:</label>
        <select
          id="territoryType"
          onChange={(e) => {
            const val = e.target.value;
            const name = val === 'faritra' ? mockData.territories.archdioceses[0].dioceses[0].vicariates[0].districts[0].parishes[0].faritras[0].name : '';
            setSelectedTerritory({ type: val, name });
          }}
        >
          <option value="parish">Paroasy</option>
          <option value="holy-association">Fikambanana Masina</option>
          <option value="action-committee">Vaomiera</option>
          <option value="age-group">Vona</option>
          <option value="faritra">Faritra</option>
          <option value="apv">APV</option>
        </select>
      </div>

      {selectedTerritory.type && selectedTerritory.name && (
        <ExecTeamEditor
          territoryType={selectedTerritory.type}
          territoryName={selectedTerritory.name}
          currentUser={currentUser}
        />
      )}
    </div>
  );
}