import React, { useState } from 'react';
import mockData from '../../data/mockData';
import { ROLES } from '../../auth/roles';
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

export default function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const matchedUser = mockData.users.find(u => u.email === email && u.password === password);

    if (!matchedUser) {
      setError("❌ Email na tenimiafina raty");
      return;
    }

    // Simulate successful login
    console.log("✅ Fidirana dia vokatr'ilay:", matchedUser.name);
    onSuccess(matchedUser);
  };

  return (
    <div className="login-form">
      <h3>Fidirana</h3>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Tenimiafina"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Hiditra</button>
      </form>
    </div>
  );
}