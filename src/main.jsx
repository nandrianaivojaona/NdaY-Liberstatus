import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Main App
import App from './App';
import MainApp from './pages/MainApp';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';

// Admin Console
import AdminConsolePage from './src-admin-console/pages/AdminConsolePage';

// Shared Providers
import AuthProvider from './context/AuthContext';
import ErrorBoundary from './utils/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ErrorBoundary>
              <Routes>
                {/* Public Landing Page */}
                <Route path="/" element={<LandingPage />} />

                {/* Protected App Layout */}
                <Route path="/app" element={<App />}/>
                <Route index element={<HomePage />} />

                {/* Dynamic routes using parishId */}
                <Route path="liberstatus" element={<MainApp />} />
                <Route path="contributions" element={<MainApp />} />
                <Route path="reports" element={<MainApp />} />

                {/* Admin Console */}
                <Route path="admin_console/:parishId" element={<AdminConsolePage />} />
              </Routes>
        </ErrorBoundary>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);