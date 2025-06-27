import React from 'react';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';

export default function ExportButton({ stats, filename = "statistics" }) {
  const exportToExcel = () => {
    if (!stats || stats.length === 0) {
      alert("⚠️ Tsy misy angon'isa ho aranty");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(stats);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Satan'ny Mpino Katolika");

    // Export Excel file
    XLSX.writeFile(workbook, `${filename}.xlsx`);
  };

  const exportToCSV = () => {
    if (!stats || stats.length === 0) {
      alert("⚠️ Tsy misy angon'isa ho tehina");
      return;
    }

    const csv = Papa.unparse(stats);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", `${filename}.csv`);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="export-buttons">
      <button onClick={exportToExcel} title="Export SATAn'ny Mpino amin'ny Excel">
        <i className="fas fa-file-excel"></i> Export Excel
      </button>
      <button onClick={exportToCSV} title="Export SATAn'ny Mpino amin'ny CSV">
        <i className="fas fa-file-csv"></i> Export CSV
      </button>
    </div>
  );
}