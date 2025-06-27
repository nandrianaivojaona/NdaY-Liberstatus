import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from './context/AuthContext';
import TerritoryProvider from './context/TerritoryContext';
import ErrorBoundary from './utils/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <TerritoryProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </TerritoryProvider>
    </AuthProvider>
  </React.StrictMode>
);