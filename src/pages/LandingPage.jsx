import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mockData from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { hasPermission } from '../src-admin-console/utils/permissionUtils';

export default function LandingPage({ onTerritorySelect }) {
  const navigate = useNavigate();
  const { currentUser, login } = useAuth();

  // Territory selection state
  const [archdioceses, setArchdioceses] = useState(mockData.territories.archdioceses);
  const [selectedArchdiocese, setSelectedArchdiocese] = useState('');
  const [selectedArchdioceseId, setSelectedArchdioceseId] = useState('');

  const [dioceses, setDioceses] = useState([]);
  const [selectedDiocese, setSelectedDiocese] = useState('');
  const [selectedDioceseId, setSelectedDioceseId] = useState('');

  const [vicariates, setVicariates] = useState([]);
  const [selectedVicariate, setSelectedVicariate] = useState('');
  const [selectedVicariateId, setSelectedVicariateId] = useState('');

  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedDistrictId, setSelectedDistrictId] = useState('');

  const [parishes, setParishes] = useState([]);
  const [selectedParish, setSelectedParish] = useState('');
  const [selectedParishId, setSelectedParishId] = useState('');
  
  // Track full hierarchy for final return
  const [territoryChain, setTerritoryChain] = useState(null);

  // Sign-in form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(!!currentUser);

  // Auto-select parish if user already exists
  useEffect(() => {
    if (currentUser && currentUser.parish) {
      setSelectedParish(currentUser.name);
      setSelectedParishId(currentUser.parish);
      navigate(`/app/${currentUser.parish}`);
    }
  }, [currentUser, navigate]);

  // Initialize on mount Populate ArchDioceses
  useEffect(() => {
    console.log("✅ LandingPage mounted");
    if (mockData.territories?.archdioceses?.length > 0) {
      setArchdioceses(mockData.territories.archdioceses);
    }
  }, []);

  // Step 1: Archdiocese selection
  const handleArchdioceseChange = (e) => {
    const archName = e.target.value;
    console.log("🔴 Archdiocese selected:", archName);

    const arch = archdioceses.find(a => a.name === archName);
    if (!arch) return;

    setSelectedArchdiocese(archName);
    setSelectedArchdioceseId(arch.id);

    // Reset lower levels
    setDioceses(arch.dioceses || []);
    setSelectedDiocese('');
    setSelectedDioceseId('');
    setVicariates([]);
    setSelectedVicariate('');
    setSelectedVicariateId('');
    setDistricts([]);
    setSelectedDistrict('');
    setSelectedDistrictId('');
    setParishes([]);
    setSelectedParish('');
    setSelectedParishId('');
  };

  // Step 2: Diocese selection
  const handleDioceseChange = (e) => {
    const dioceseName = e.target.value;
    console.log("🔵 Diocese selected:", dioceseName);

    const diocese = dioceses.find(d => d.name === dioceseName);
    if (!diocese) return;

    setSelectedDiocese(dioceseName);
    setSelectedDioceseId(diocese.id);

    // Reset lower levels
    setVicariates(diocese.vicariates || []);
    setSelectedVicariate('');
    setSelectedVicariateId('');
    setDistricts([]);
    setSelectedDistrict('');
    setSelectedDistrictId('');
    setParishes([]);
    setSelectedParish('');
    setSelectedParishId('');
  };

  // Step 3: Vicariate selection
  const handleVicariateChange = (e) => {
    const vicariateName = e.target.value;
    console.log("🟢 Vicariate selected:", vicariateName);

    const vicariate = vicariates.find(v => v.name === vicariateName);
    if (!vicariate) return;

    setSelectedVicariate(vicariateName);
    setSelectedVicariateId(vicariate.id);

    // Reset lower levels
    setDistricts(vicariate.districts || []);
    setSelectedDistrict('');
    setSelectedDistrictId('');
    setParishes([]);
    setSelectedParish('');
    setSelectedParishId('');
  };

  // Step 4: District selection
  const handleDistrictChange = (e) => {
    const districtName = e.target.value;
    console.log("🟠 District selected:", districtName);

    const dist = districts.find(dt => dt.name === districtName);
    if (!dist || !Array.isArray(dist.parishes)) {
      console.warn("⚠️ No valid parishes found for this District");
      setParishes([]);
    } else {
      setParishes(dist.parishes);
    }

    setSelectedDistrict(districtName);
    setSelectedDistrictId(dist?.id || '');
    setSelectedParish('');
    setSelectedParishId('');
  };

  // Step 5: Parish selection – final step
  const handleParishChange = (e) => {
    const name = e.target.value;
    console.log("🟡 Parish selected:", name);

    const parish = parishes.find(p => p.name === name);
    if (!parish) {
      console.error("❌ No valid parish found in mockData for:", name);
      return;
    }

    const finalTerritory = {
      archdiocese: selectedArchdiocese,
      archdioceseId: selectedArchdioceseId,

      diocese: selectedDiocese,
      dioceseId: selectedDioceseId,

      vicariate: selectedVicariate,
      vicariateId: selectedVicariateId,

      district: selectedDistrict,
      districtId: selectedDistrictId,

      parish: parish.name,
      parishId: parish.id
    };

    console.log("🎉 Final territory chain selected:", finalTerritory);
    onTerritorySelect(finalTerritory); // Pass full chain back

    setSelectedParish(name);
    setSelectedParishId(parish.id);
  };
  // Handle Inline Sign-In 
  const handleSignIn = (e) => { 
    e.preventDefault(); 
    const user = mockData.users.find(u => u.email === email && u.password === password); 
    if (user) { login(user); setIsLoggedIn(true); 
      if (hasPermission(user, 'admin_parish')) { 
        navigate(`/app/admin_console/${user.parish}`); } 
        else if (user.role === mockData.ROLES.apv || user.role === mockData.ROLES.family) { 
          navigate(`/app/${user.parish}`); } 
          else { 
            navigate(`/app/${selectedParishId || 'PAR001'}`); 
          } 
        } else { 
          setError("Invalid email or password"); }
        };

        // Handle Selecting Parish and Navigate
        const handleContinue = () => {
          if (!selectedParishId) {
            alert("⚠️ Safidio ny Paroasy aloha");
            return;
          }
      
          if (isLoggedIn) {
            navigate(`/app/${selectedParishId}`);
          } else {
            navigate(`/app/${selectedParishId}`);
          }
        };       
  return (
    <section className="landing-page" style={{ display: 'block', visibility: 'visible' }}>
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ visibility: 'visible' }}>Tonga Soa</h1>
        <img
          src="../../public/assets/images/Flag_Of_Vatican_City.png"
          alt="Vatican Logo"
          style={{
            width: '100px',
            height: '100px',
            margin: '10px auto',
            display: 'block'
          }}
        />
        <h2 style={{ visibility: 'visible' }}>Fifidianana Fiangonana anaty Rafitra Katolika</h2>
        <h3 style={{ visibility: 'visible' }}>Safidio ny Paroasy na Fiangonana</h3>
      </header>
      
      {/* Sign In Section (Top Right) */}
      {!isLoggedIn && (
        <div className="sign-in-form" style={{
          position: 'absolute',
          top: '20px',
          right: '20px'
        }}>
          <form onSubmit={handleSignIn} style={{ textAlign: 'right' }}>
            <label>Email:</label><br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />

            <label>Password:</label><br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />

            <button type="submit">Hiditra</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </div>
      )}

      {/* Archdiocese Selection */}
      <div className="step">
        <label htmlFor="archdiocese">Archidiocese:</label>
        <select
          id="archdiocese"
          value={selectedArchdiocese}
          onChange={handleArchdioceseChange}
          style={{ visibility: 'visible' }}
        >
          <option>-- Safidio ny Archidiocese --</option>
          {archdioceses.map((arch, index) => (
            <option key={`arch-${index}`} value={arch.name}>
              {arch.name}
            </option>
          ))}
        </select>
      </div>

      {/* Diocese Selection */}
      {dioceses.length > 0 && (
        <div className="step">
          <label>Diocèse:</label>
          <select
            value={selectedDiocese}
            onChange={handleDioceseChange}
            style={{ visibility: 'visible' }}
          >
            <option>-- Safidio ny Diocèse --</option>
            {dioceses.map((d, index) => (
              <option key={`diocese-${index}`} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Vicariate Selection */}
      {vicariates.length > 0 && (
        <div className="step">
          <label>Vikaria:</label>
          <select
            value={selectedVicariate}
            onChange={handleVicariateChange}
            style={{ visibility: 'visible' }}
          >
            <option>-- Safidio ny Vikaria --</option>
            {vicariates.map((v, index) => (
              <option key={`vicariate-${index}`} value={v.name}>
                {v.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* District Selection */}
      {districts.length > 0 && (
        <div className="step">
          <label>Distrika:</label>
          <select
            value={selectedDistrict}
            onChange={handleDistrictChange}
            style={{ visibility: 'visible' }}
          >
            <option>-- Safidio ny Distrika --</option>
            {districts.map((dt, index) => (
              <option key={`district-${index}`} value={dt.name}>
                {dt.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Parish Selection */}
      {parishes.length > 0 && (
        <div className="step">
          <label>Paroasy / Fiangonana:</label>
          <select
            value={selectedParish}
            onChange={handleParishChange}
            style={{ visibility: 'visible' }}
          >
            <option>-- Safidio ny Paroasy / Fiangonana --</option>
            {parishes.map((p, index) => (
              <option key={`parish-${p.id}`} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
      )}

    {/* Continue Button */}
      <button onClick={handleContinue} disabled={!selectedParishId}>
        Avy eo ➡️
      </button>

    </section>
  );
}