import React, { createContext, useState, useContext } from 'react';

// Create context
const TerritoryContext = createContext();

// Custom hook to use this context
export const useTerritory = () => {
  console.log('useTerritory hook called');
  const context = useContext(TerritoryContext);
  if (!context) {
    console.error('useTerritory must be used within a TerritoryProvider');
    throw new Error('useTerritory must be used within a TerritoryProvider');
  }
  console.log('useTerritory hook successfully retrieved context');
  return context;
};

// Provider component
export default function TerritoryProvider({ children }) {
  console.log('TerritoryProvider rendered');
  const [selectedTerritory, setSelectedTerritory] = useState(null);
  const [territoryType, setTerritoryType] = useState(null);

  console.log('Initial state:', { selectedTerritory, territoryType });

  const value = {
    selectedTerritory,
    territoryType,
    selectTerritory: (territory, type) => {
      console.log('selectTerritory called with:', { territory, type });
      setSelectedTerritory(territory);
      setTerritoryType(type);
      console.log('State updated:', { selectedTerritory: territory, territoryType: type });
    },
    clearTerritory: () => {
      console.log('clearTerritory called');
      setSelectedTerritory(null);
      setTerritoryType(null);
      console.log('State cleared:', { selectedTerritory: null, territoryType: null });
    }
  };

  return (
    <TerritoryContext.Provider value={value}>
      {console.log('TerritoryContext.Provider rendered')}
      {children}
    </TerritoryContext.Provider>
  );
}