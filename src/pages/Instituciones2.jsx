// src/pages/Instituciones.jsx
import React from 'react';
import './Instituciones.css'

const Instituciones = () => {
  return (
    <div className="d-flex">
      <div className="flex-grow-1 p-4" style={{ color: 'var(--text-color1)' }}>
        <h1 style={{ color: 'var(--text-color1)' }}>Bienvenido a Instituciones</h1>
        <p style={{ color: 'var(--text-color1)' }}>
          Selecciona una opción del menú lateral.
        </p>

      </div>
    </div>
  );
};

export default Instituciones;