import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function NavMenu({ onPageChange }) {
  const { currentUser } = useAuth();

  // Simulate dynamic menu based on role
  const menuItems = [
    { label: "🏠 Takelaka Fandraisana", section: "home" },
    { label: "👥 Liberstatus", section: "liberstatus" },
    { label: "💰 Hasina sy Adidy ary Ezaka", section: "contributions" },
    { label: "📊 Tatitry ny Mpino Katolika", section: "reports" },
    { label: "📊 Fiadidiana ny Birao rehetra", section: "AdminPanel" }
  ];

  // These items only appear for users with roles like APV, Family, etc.
  const managementItems = [
    { label: "🔧 Hanova ny Rafitra", section: "admin/exec-team" }
  ];

  useEffect(() => {
    const nav = document.querySelector('.main-menu');
    if (!nav) return;

    nav.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', () => {
        const page = li.getAttribute('data-section');
        onPageChange(page);
      });
    });
  }, [onPageChange]);

  return (
    <nav className="main-menu">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} data-section={item.section}>
            <i className="fas fa-home"></i> {item.label}
          </li>
        ))}
        {/* Conditional rendering for management features */}
        {/* Main Menu Items */}
        {menuItems.map((item, index) => (
          <li key={index} data-section={item.section}>
            <i className={`fas fa-${item.section === "reports" ? "chart-bar" : item.section === "contributions" ? "hand-holding-usd" : item.section === "liberstatus" ? "users" : "home"}`}></i> {item.label}
          </li>
        ))}

        {/* Admin Console – Only show if user has access */}
        {currentUser && ['priest', 'parish_leader', 'faritra', 'apv', 'family'].includes(currentUser.role) && (
          <>
            <li className="menu-divider" style={{ borderBottom: '1px solid #e0e0e0', margin: '8px 0' }}></li>
            {adminItems.map((item, index) => (
              <li key={index + menuItems.length} data-section={item.section}>
                <i className="fas fa-cog"></i> {item.label}
              </li>
            ))}
          </>
        )}
      </ul>
    </nav>
  );
}