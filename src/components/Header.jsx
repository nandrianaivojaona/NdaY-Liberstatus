import { useAuth } from '../context/AuthContext';
import React, { useEffect } from 'react';


export default function Header({ territory }) {
  const { currentUser } = useAuth();
  const formattedName = territory.name.replace(/\s+/g, '');

useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty(
        '--background-image',
        `url('../assets/images/${formattedName}_logo.png')`
    );
    root.style.setProperty('--background-opacity', '0.2');
}, [formattedName]);

return (
    <>
        <header className="parish-header">
            <div className="header-left">
                <span className="welcome-text">Tonga Soa eto</span>
            </div>

            <div className="header-center">
                <div className="parish-logo-container">
                    <img
                        id="selected-parish-logo"
                        src={`../assets/images/${formattedName}_logo.png`}
                        alt={`${territory.name} Logo`}
                        className="parish-logo"
                    />
                    <div className="exec-members-tooltip">
                        <p>Pretra Tompom-Paritra:</p>
                        <p>{territory.priestInCharge || "N/A"}</p>
                        <p>Filan-Kevitra Pastoraly:</p>
                        <ul>
                            {territory.execMembers && territory.execMembers.length > 0 ? (
                                territory.execMembers.map((member, index) => (
                                    <li key={index}>{member}</li>
                                ))
                            ) : (
                                <li>N/A</li>
                            )}
                        </ul>
                    </div>
                </div>
                <p>{territory.name}</p>
                <p>Fokontany: {territory.fokontany || "N/A"}</p>
            </div>

            <div className="header-right">
                <button id="sign-in-toggle">
                    <i className="fas fa-sign-in-alt"></i> {currentUser?.name || "Hiditra"}
                </button>
            </div>
        </header>
    </>
);
}