import React from 'react';
import mockData from '../../data/mockData';

export default function UserTable() {
  const users = mockData.users;

  return (
    <table className="users-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Anarana</th>
          <th>Email</th>
          <th>Asa</th>
          <th>APV</th>
          <th>Faritra</th>
          <th>Paroasy</th>
          <th>Disitirika</th>
          <th>Vikaria</th>
          <th>Diosezy</th>
          <th>Arkidioszey</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.apv || "—"}</td>
            <td>{user.zone || "—"}</td>
            <td>{user.parish}</td>
            <td>{user.district || "—"}</td>
            <td>{user.vicariate || "—"}</td>
            <td>{user.diocese || "—"}</td>
            <td>{user.archdiocese || "—"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}