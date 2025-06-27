import Papa from 'papaparse';

function exportToCSV(data) {
  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "data.csv";
  link.click();
}

// Login Modal Wrapper
import React, { useState } from 'react';
import LoginForm from './LoginForm';

export default function LoginModal({ onLoginSuccess }) {
  const [showModal, setShowModal] = useState(false);

  const handleLogin = (user) => {
    onLoginSuccess(user);
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)} id="sign-in-toggle">
        <i className="fas fa-sign-in-alt"></i> Hiditra
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={(e) => {
          if (e.target.className === "modal-overlay") {
            setShowModal(false);
          }
        }}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>×</span>
            <LoginForm onSuccess={handleLogin} />
          </div>
        </div>
      )}
    </div>
  );
}