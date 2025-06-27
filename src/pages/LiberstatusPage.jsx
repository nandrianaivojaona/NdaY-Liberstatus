import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
// import mockData  from '../data/mockData.js';

export default function LiberstatusPage({ territory }) {
  const { currentUser } = useAuth();

  useEffect(() => {
    const content = document.getElementById("content");
    const mainMenu = document.querySelector(".main-menu");
    const mgmtSection = document.getElementById("management-section");

    // Bind menu item clicks
    if (mainMenu) {
      mainMenu.querySelectorAll("li").forEach(li => {
        li.addEventListener("click", () => {
          const page = li.getAttribute("data-section");
          setCurrentPage(page);
        });
      });
    }

    // ✅ Apply RBAC: Show/hide management section based on role
    if (mgmtSection && hasPermission(currentUser, 'manageFamily')) {
      mgmtSection.style.display = 'block';
    } else {
      mgmtSection?.classList.add('hidden');
    }

    // Render appropriate content based on selected page
    if (content) {
      content.innerHTML = ""; // Clear previous content
      switch (currentPage) {
        case "home":
          new HomeController(currentUser);
          break;
        case "liberstatus":
          new LiberstatusController(currentUser);
          break;
        case "contributions":
          new ContributionsController(currentUser);
          break;
        case "reports":
          new ReportsController(currentUser);
          break;
        default:
          content.innerHTML = "<p>Tena eny ianao...</p>";
          break;
      }
    }
  }, [currentPage, currentUser]);

  return (
    <section className="content-section">
      <h2>LiberStatus</h2>
      <p>SATAn'ny Mpino (Liberstatus).</p>

      {/* Search Panel */}
      <div className="selection-panel">
        <h3>🔍 Tadiavo ny APV na Fianakaviana</h3>
        <input type="text" id="memberSearch" placeholder="Hitady anarana..." />
        <button id="searchBtn">🔍 Hitady</button>
      </div>

      {/* Territory Tree Container */}
      <div id="territory-tree-container" className="territory-tree"></div>

      {/* Management Section */}
      <div id="management-section" className="management hidden">
        <h3>🔧 APV & Family Leader Management</h3>
        <button id="addHouseholdBtn" data-requires-login disabled>➕ Add Household</button>
        <button id="modifyFamilyBtn" data-requires-login disabled>✏️ Modify Family</button>
        <button id="moveMpinoBtn" data-requires-login disabled>🔁 Move Mpino</button>
        <button id="deleteMpinoBtn" data-requires-login disabled>❌ Delete Mpino</button>
      </div>
    </section>
  );
}