import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HorizontalMenu from '../components/HorizontalMenu';
import TerritoryTree from '../components/TerritoryTree';
import UserTable from '../components/UserTable';
import Footer from '../../components/Footer';
import mockData from '../../data/mockData';

export default function AdminConsolePage({ parishId = "PAR001" }) {
  const [territory, setTerritory] = useState(null);

  useEffect(() => {
    const findParishById = () => {
      for (const archdiocese of mockData.territories.archdioceses) {
        for (const diocese of archdiocese.dioceses || []) {
          for (const vicariate of diocese.vicariates || []) {
            for (const district of vicariate.districts || []) {
              for (const parish of district.parishes || []) {
                if (parish.id === parishId) {
                  return parish;
                }
              }
            }
          }
        }
      }
      return null;
    };

    const parish = findParishById();
    if (parish) {
      setTerritory(parish);
    } else {
      setTerritory({
        name: "Tsy voafantina ny Paroasy",
        fokontany: "toy izay koa ny Fokontaniny"
      });
    }
  }, [parishId]);

  if (!territory) return <div>Loading...</div>;

  return (
    <div className="admin-console">
      {/* Header dynamically shows current parish info */}
      <Header territory={territory} />

      {/* Navigation Menu */}
      <HorizontalMenu />

      {/* Main Content Area */}
      <main className="admin-main">
        {/* Territory Tree for selected parish */}
        <div className="territory-tree-section">
          <h3>Tetiaran-dRafitry ny Fiangonana Katolika</h3>
          <TerritoryTree parish={territory} />
        </div>

        {/* User Table filtered by this parish */}
        <div className="user-table-section">
          <h3>Mpiadidy eo anivon'ny Fiangonana Katolika (user)</h3>
          <UserTable parishId={parishId} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}