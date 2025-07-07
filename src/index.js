import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Main App
import App from './App';

// Admin Console
import AdminConsolePage from './src-admin-console/pages/AdminConsolePage';
import './src-admin-console/index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      {/* Main App */}
      <Route path="/*" element={<App />} />

      {/* Admin Console */}
      <Route path="/admin-console/*" element={
        <AuthProvider>
          <AdminConsolePage />
        </AuthProvider>
      } />
    </Routes>
  </Router>
);