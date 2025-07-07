import React from 'react';
import { useParams } from 'react-router-dom';
import MainHomePage from './MainHomePage';
import mockData from '../data/mockData';

export default function HomePage() {
  const { parishId } = useParams();

  // Get full territory info based on parishId
  const getTerritoryChain = () => {
    const territory = {
      archdiocese: "",
      diocese: "",
      vicariate: "",
      district: "",
      parish: "",
      parishId: ""
    };

    for (const arch of mockData.territories.archdioceses) {
      territory.archdiocese = arch.name;
      for (const diocese of arch.dioceses || []) {
        territory.diocese = diocese.name;
        for (const vicariate of diocese.vicariates || []) {
          territory.vicariate = vicariate.name;
          for (const district of vicariate.districts || []) {
            territory.district = district.name;
            for (const parish of district.parishes || []) {
              if (parish.id === parishId) {
                territory.parish = parish.name;
                break;
              }
            }
          }
        }
      }
    }

    return territory;
  };

  const territory = getTerritoryChain();
  territory.parishId = parishId;

  return <MainHomePage territory={territory} />;
}