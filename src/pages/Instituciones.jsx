// src/pages/Instituciones.jsx
import React from 'react';
import './Instituciones.css';  // Importa los estilos
import Icon_Banco from '../bloques/Icon_Banco';  // Asegúrate de importar el ícono

const Instituciones = () => {
  return (
    <div className="general-container">
      <div className="content-wrapper">
        <h1>Bienvenido a Instituciones</h1>
        <p>Selecciona una opción del menú lateral.</p>
      </div>

      {/* Icono decorativo en la parte inferior derecha */}
      <div className="icon-container">
        <Icon_Banco />
      </div>
    </div>
  );
};

export default Instituciones;
