import React from 'react';

export default function FamilyList({ families, showActions = false }) {
  if (!Array.isArray(families) || families.length === 0) {
    return <p>Tsy misy fianakaviana anaty ilay APV</p>;
  }

  return (
    <ul>
      {families.map((fam, index) => (
        <li key={index}>
          {fam.name} – Filoha: {fam.headOfHousehold || "Tsy misy"}

          {/* Show actions only if allowed */}
          {showActions && (
            <>
              <button onClick={() => alert(`Hanova ${fam.name}`)}>✏️ Hanova</button>
              <button onClick={() => alert(`Alefa email ho ${fam.name}`)}>✉️ Mail</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}