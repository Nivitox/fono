// src/pages/Configuracion.jsx
import React from 'react';
import ThemeSwitcher from '../components/ThemeSwitcher';
import EditorTemas from '../components/EditorTemas';


const Configuracion = () => {
  return (
    <div className="d-flex general-container">
      <div className="flex-grow-1 p-4" style={{ color: 'var(--text-color1)' }}>
        <h1 style={{ color: 'var(--text-color1)' }}>Bienvenido a Configuración</h1>
        <p style={{ color: 'var(--text-color1)' }}>
          Selecciona una opción del menú lateral.
        </p>
        <ThemeSwitcher />
        <EditorTemas/>
      </div>
    </div>
  );
};

export default Configuracion;