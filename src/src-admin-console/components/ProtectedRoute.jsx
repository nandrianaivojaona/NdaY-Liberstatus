import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  const allowed = hasPermission(currentUser, 'manageUsers');

  if (!allowed) {
    return <Navigate to="/" replace />;
  }

  return children;
}