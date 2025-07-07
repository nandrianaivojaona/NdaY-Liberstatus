import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export default function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser] = useState({
    id: "PAR001_U001",
    name: "Hasina Mario",
    role: "Filohan'ny Filan-Kevitra Paroasy", // Role determines access
    parish: "PAR001"
  });

  const value = {
    currentUser,
    hasPermission: (action) => hasPermission(currentUser, action)
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}