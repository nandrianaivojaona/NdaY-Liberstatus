import React, { createContext, useContext, useState, useEffect } from 'react';
import mockData from '../data/mockData';

// 🔐 Create context
const AuthContext = createContext();

// 🧠 Custom hook to use auth context
export function useAuth() {
  return useContext(AuthContext);
}

// 🧱 AuthProvider component
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // Simulate loading phase

  // Simulate login delay (mimic Firebase)
  useEffect(() => {
    // Simulate app init delay or fetch user logic
    const timer = setTimeout(() => {
      // For now, simulate no user logged in
      setCurrentUser({
        role: "visitor", // Default role
        isLoggedIn: false
      });
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // 🎯 Mock Login Function
  const login = (email, password) => {
    const foundUser = mockData.users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setCurrentUser({
        ...foundUser,
        isLoggedIn: true
      });
      return true;
    } else {
      alert("⚠️ Email na teny miafina tsy manan-kery");
      return false;
    }
  };

  // 🚪 Mock Logout Function
  const logout = () => {
    setCurrentUser({
      role: "visitor",
      isLoggedIn: false
    });
  };

  // 📦 Context value passed down
  const value = {
    currentUser,
    isAuthenticated: currentUser?.isLoggedIn || false,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <div>⏳ Fanakalozana anarana...</div>}
    </AuthContext.Provider>
  );
}