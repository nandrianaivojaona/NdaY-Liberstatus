import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { hasPermission } from '../src-admin-console/utils/permissionUtils';

export default function MainApp({ territory }) {
  const { parishId } = useParams(); // e.g., PAR001
  const [stats, setStats] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (parishId) {
      const parishStats = StatisticsService.getParishStatsById(parishId);
      setStats(parishStats);
    }
  }, [parishId]);

  if (!stats) return <p>⏳ Fanakalozana satany en cours...</p>;

  // Check if user has permission to access Admin Console
  const canAccessAdmin = currentUser && (
    hasPermission(currentUser, 'admin_parish') ||
    hasPermission(currentUser, 'manage_zones') ||
    hasPermission(currentUser, 'manage_apvs')
  );

  return (
    <div className="main-app">
      {/* Header */}
      <header className="parish-header">
        {/* Your existing header content */}
      </header>

      {/* Horizontal Menu */}
      <nav className="main-menu">
        <ul>
          <li data-section="home">🏠 Takelaka Fandraisana</li>
          <li data-section="liberstatus">👥 Liberstatus</li>
          <li data-section="contributions">💰 Adidy, Hasina sy Ezaka</li>
          <li data-section="reports">📊 SATAn'ny Mpino</li>

          {/* Conditionally render Admin Console link */}
          {canAccessAdmin && (
            <li data-section="admin_console">
              🛠️ Admin Console
            </li>
          )}
        </ul>
      </nav>

      {/* Content Area */}
      <section id="content" className="main-content">
        {/* Rendered dynamically */}
      </section>

      {/* Footer */}
      <footer className="vatican-footer">
        {/* Footer content */}
      </footer>
    </div>
  );
}