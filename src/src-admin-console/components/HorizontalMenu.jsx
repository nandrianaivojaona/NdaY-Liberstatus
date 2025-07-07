import React from 'react';
import useAuth  from '../context/AuthContext';

export default function HorizontalMenu() {
  const { currentUser } = useAuth();

  return (
    <nav className="horizontal-menu">
      <ul>
        <li><a href="/admin-console/users">Mpampiantra</a></li>
        <li><a href="/admin-console/believers">Mpino</a></li>
        <li><a href="/admin-console/families">Fianakaviabodirindrina</a></li>
        <li><a href="/admin-console/territory">Fiompiana</a></li>
        <li><a href="/admin-console/stats">Statistika</a></li>

        {/* Only show management links if user has permission */}
        {hasPermission(currentUser, 'manageUsers') && (
          <>
            <li><a href="/admin-console/settings">Settings</a></li>
            <li><a href="/admin-console/logs">Audit Logs</a></li>
          </>
        )}
      </ul>
    </nav>
  );
}