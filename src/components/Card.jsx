import React from 'react';

export default function Card({ title, value, icon = null }) {
  return (
    <div className="card">
      {icon && <i className={`fas ${icon}`}></i>}
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}