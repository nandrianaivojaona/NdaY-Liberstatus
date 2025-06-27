import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase'; // Firebase auth instance

// 🔐 Create context
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// 🧱 AuthProvider component
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // Wait for Firebase

  // Listen for auth changes (Firebase)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        console.log("🟢 User logged in:", user);
        setCurrentUser({
          id: user.uid,
          email: user.email,
          role: "Pretra", // This should come from DB later
          isLoggedIn: true
        });
      } else {
        console.log("🔴 No user signed in");
        setCurrentUser({
          role: "visitor",
          isLoggedIn: false
        });
      }

      setLoading(false);
    });

    return () => {
      console.log("🟡 Unsubscribed from auth listener");
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    login: () => {}, // Placeholder – will be replaced with real logic
    logout: () => {} // Same here
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}