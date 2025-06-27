import React, { useState, useEffect } from 'react';
import mockData from '../data/mockData.js';
console.log("✅ LandingPage is entered after importing mockData");
function LandingPage({ onTerritorySelect }) {
  console.log("✅ LandingPage: Initialized with mockData");

  // Initial state for each level
  const [archdioceses, setArchdioceses] = useState(mockData.territories.archdioceses);
  const [selectedArchdiocese, setSelectedArchdiocese] = useState('');
  const [dioceses, setDioceses] = useState([]);
  const [selectedDiocese, setSelectedDiocese] = useState('');
  const [vicariates, setVicariates] = useState([]);
  const [selectedVicariate, setSelectedVicariate] = useState('');
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [parishes, setParishes] = useState([]);
  const [selectedParish, setSelectedParish] = useState('');

  // Load Archdioceses on mount
  useEffect(() => {
    console.log("✅ Mounting LandingPage");

    if (mockData.territories?.archdioceses?.length > 0) {
      setArchdioceses(mockData.territories.archdioceses);
    } else {
      console.warn("⚠️ No archdioceses found in mockData");
    }
  }, []);

  // Step 1: Archdiocese selection
  const handleArchdioceseChange = (e) => {
    const archName = e.target.value;
    console.log("🟡 Archdiocese selected:", archName);

    if (!archName) {
      setDioceses([]);
      setVicariates([]);
      setDistricts([]);
      setParishes([]);
      setSelectedDiocese('');
      setSelectedVicariate('');
      setSelectedDistrict('');
      setSelectedParish('');
      return;
    }

    const arch = mockData.territories.archdioceses.find(a => a.name === archName);
    if (arch && arch.dioceses && arch.dioceses.length > 0) {
      console.log("✅ Dioceses found:", arch.dioceses);
      setDioceses(arch.dioceses);
    } else {
      console.warn("⚠️ No dioceses found for this Archdiocese");
    }
    setSelectedArchdiocese(archName);
    setVicariates([]);
    setDistricts([]);
    setParishes([]);
  };

  // Step 2: Diocese selection
  const handleDioceseChange = (e) => {
    const dioceseName = e.target.value;
    console.log("🔵 Diocese selected:", dioceseName);

    if (!dioceseName || !selectedArchdiocese) {
      console.warn("⚠️ No Archdiocese selected yet!");
      return;
    }

    const arch = archdioceses.find(a => a.name === selectedArchdiocese);
    const dio = arch?.dioceses.find(d => d.name === dioceseName);

    if (dio && dio.vicariates && dio.vicariates.length > 0) {
      console.log("✅ Vicariates found:", dio.vicariates);
      setVicariates(dio.vicariates);
    } else {
      console.warn("⚠️ No vicariates found for this Diocese");
    }

    setSelectedDiocese(dioceseName);
    setVicariates(dio?.vicariates || []);
    setDistricts([]);
    setParishes([]);
    setSelectedVicariate('');
    setSelectedDistrict('');
    setSelectedParish('');
  };

  // Step 3: Vicariate selection
  const handleVicariateChange = (e) => {
    const vicariateName = e.target.value;
    console.log("🟣 Vicariate selected:", vicariateName);

    if (!vicariateName || !selectedDiocese) {
      console.warn("⚠️ No Diocese selected yet!");
      return;
    }

    const arch = archdioceses.find(a => a.name === selectedArchdiocese);
    const dio = arch?.dioceses.find(d => d.name === selectedDiocese);
    const vic = dio?.vicariates.find(v => v.name === vicariateName);

    if (vic && vic.districts && vic.districts.length > 0) {
      console.log("✅ Districts found:", vic.districts);
      setDistricts(vic.districts);
    } else {
      console.warn("⚠️ No districts found for this Vicariate");
    }

    setSelectedVicariate(vicariateName);
    setDistricts(vic?.districts || []);
    setParishes([]);
    setSelectedDistrict('');
    setSelectedParish('');
  };

  // Step 4: District selection
  const handleDistrictChange = (e) => {
    const districtName = e.target.value;
    console.log("🟠 District selected:", districtName);

    if (!districtName || !selectedVicariate) {
      console.warn("⚠️ No Vicariate selected yet!");
      return;
    }

    const dist = districts.find(dt => dt.name === districtName);
    if (dist && dist.parishes && dist.parishes.length > 0) {
      console.log("✅ Parishes found:", dist.parishes);
      setParishes(dist.parishes);
    } else {
      console.warn("⚠️ No parishes found for this District");
    }

    setSelectedDistrict(districtName);
    setSelectedParish('');
  };

  // Step 5: Parish selection — final step
  const handleParishChange = (e) => {
    const name = e.target.value;
    console.log("🟢 Parish selected:", name);

    const parish = parishes.find(p => p.name === name);
    if (parish) {
      console.log("🎉 Final territory selected:", parish);
      setSelectedParish(name);
      onTerritorySelect(parish);
    } else {
      console.error("❌ No valid parish found in mockData for:", name);
    }
  };
  console.log("✅ LandingPage: Component mounted");
  return (
    <section className="landing-page" style={{ display: 'block', visibility: 'visible' }}>
      {/* Header Section */}
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ visibility: 'visible' }}>Tonga Soa</h1>
        <img
          src="../public/assets/images/Flag_Of_Vatican_City.png"
          alt="Vatican Logo"
          style={{ width: '100px', height: '100px', margin: '10px auto', display: 'block' }}
        />
        <h2 style={{ visibility: 'visible' }}>Fifidianana Fiangonana anaty Rafitra Katolika.</h2>
        <h3 style={{ visibility: 'visible' }}>Safidio ireo mandrafitra ny Fiangonanao</h3>
      </header>

      

      {/* Step 1: Archdiocese */}
      <label htmlFor="archdiocese-select" style={{ visibility: 'visible' }}>Archidiocese:</label>
      <select
        id="archdiocese-select"
        onChange={handleArchdioceseChange}
        value={selectedArchdiocese}
        style={{ visibility: 'visible' }}
      >
        <option value="">— Safidio ny ArkiDiosezy —</option>
        {archdioceses.map((arch, index) => (
          <option key={index} value={arch.name} style={{ visibility: 'visible' }}>
            {arch.name}
          </option>
        ))}
      </select>

      {/* Step 2: Diocese */}
      {selectedArchdiocese && (
        <>
          <label style={{ visibility: 'visible' }}>Diosezy:</label>
          <select
            onChange={handleDioceseChange}
            value={selectedDiocese}
            style={{ visibility: 'visible' }}
          >
            <option style={{ visibility: 'visible' }}>-- Safidio ny Diosezy --</option>
            {dioceses.map((d, i) => (
              <option key={i} value={d.name} style={{ visibility: 'visible' }}>
                {d.name}
              </option>
            ))}
          </select>
        </>
      )}

      {/* Step 3: Vicariate */}
      {selectedDiocese && (
        <>
          <label style={{ visibility: 'visible' }}>Vikaria:</label>
          <select
            onChange={handleVicariateChange}
            value={selectedVicariate}
            style={{ visibility: 'visible' }}
          >
            <option style={{ visibility: 'visible' }}>-- Safidio ny Vikaria --</option>
            {vicariates.map((v, i) => (
              <option key={i} value={v.name} style={{ visibility: 'visible' }}>
                {v.name}
              </option>
            ))}
          </select>
        </>
      )}

      {/* Step 4: District */}
      {selectedVicariate && (
        <>
          <label style={{ visibility: 'visible' }}>Distrika:</label>
          <select
            onChange={handleDistrictChange}
            value={selectedDistrict}
            style={{ visibility: 'visible' }}
          >
            <option style={{ visibility: 'visible' }}>-- Safidio ny Distrika --</option>
            {districts.map((dt, i) => (
              <option key={i} value={dt.name} style={{ visibility: 'visible' }}>
                {dt.name}
              </option>
            ))}
          </select>
        </>
      )}

      {/* Step 5: Parish */}
      {selectedDistrict && (
        <>
          <label style={{ visibility: 'visible' }}>Paroasy_Fiangonana:</label>
          <select
            onChange={handleParishChange}
            value={selectedParish}
            style={{ visibility: 'visible' }}
          >
            <option style={{ visibility: 'visible' }}>-- Safidio ny Paroasy na Fiangonana --</option>
            {parishes.map((p, i) => (
              <option key={i} value={p.name} style={{ visibility: 'visible' }}>
                {p.name}
              </option>
            ))}
          </select>
        </>
      )}
    </section>
  );
}
export default LandingPage;
// This component allows users to select a territory step by step
// and passes the selected parish information back to the parent component.
// It handles the state and rendering of each selection step, ensuring
// that only valid options are shown based on previous selections.
// The console logs provide detailed feedback during the selection process,
// which can help with debugging and understanding the flow of data.
// The component is designed to be user-friendly, guiding users through the
// selection process with clear labels and options.
// The final selected parish is passed to the parent component via the onTerritorySelect callback.
// This allows the parent to handle the selected territory as needed,
// such as navigating to a detailed view or updating the application state.
// Note: Ensure that the mockData structure matches the expected format
// for this component to function correctly. The console logs will help
// identify any issues with the data structure or selection flow.