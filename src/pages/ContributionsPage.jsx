import React, { useEffect, useState } from 'react';
import ExportButton from '../utils/ExportButton.jsx';

export default function ContributionsPage({ territory }) {
  const [contributions, setContributions] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const filtered = mockData.contributions.filter(c => c.parish === territory.name);
    setContributions(filtered);

    const contribCategories = mockData.contributionCategories;
    setCategories(contribCategories);
  }, [territory]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = e.target.category.value;
    const amount = parseInt(e.target.amount.value);
    const apv = e.target.apv.value;

    const newContribution = {
      date: new Date().toISOString(),
      category,
      amount,
      apv,
      parish: territory.name
    };

    // Simulate adding to list
    setContributions([...contributions, newContribution]);
  };

  return (
    <section className="content-section">
      <h2>Adidy sy Ezaka</h2>
      <p>Ezaka sy Adidy isam-pianakaviana.</p>

      <div id="contribution-summary" className="summary-box">
        <h3>Total Contribution</h3>
        <p>Hasina, Adidy sy Ezaka natao hatramin'izao: {contributions.reduce((sum, c) => sum + c.amount, 0)} Ar</p>
      </div>

      {/* Form to add new contribution */}
      <div id="contribution-form" style={{ marginTop: "2rem" }}>
        <h3>Hasina, Adidy na Ezaka Vaovao</h3>
        <form id="contributionForm" onSubmit={handleSubmit}>
          <label htmlFor="category">Sokajy:</label>
          <select id="category" name="category" required>
            <option value="">— Safidio ny Sokajy —</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>

          <label htmlFor="amount">Vola (Ar):</label>
          <input type="number" id="amount" name="amount" min="0" required />

          <label htmlFor="apv">APV:</label>
          <select id="apv" name="apv" required>
            <option value="">— Safidio ny APV —</option>
            {territory.faritras.flatMap(f => f.apvs).map((apv, i) => (
              <option key={i} value={apv}>{apv}</option>
            ))}
          </select>

          <button type="submit">Alefa</button>
        </form>
      </div>

      {/* Table of all contributions */}
      <h3 style={{ marginTop: "3rem" }}>Tabilao feno</h3>
      <table id="contributionTable" border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Sokajy</th>
            <th>APV</th>
            <th>Vola (Ar)</th>
          </tr>
        </thead>
        <tbody>
          {contributions.map((c, i) => (
            <tr key={i}>
              <td>{c.category}</td>
              <td>{c.apv}</td>
              <td>{c.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ExportButton stats={contributions} filename={`contributions_${territory.code}`} />
    </section>
  );
}