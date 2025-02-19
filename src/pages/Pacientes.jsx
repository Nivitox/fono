// src/pages/Pacientes.jsx
import React from 'react';
import Tarjeta from '../assets/Tarjeta';
import './Pacientes.css'; // Importa los estilos

const Pacientes = () => {
  return (
    <div className="general-container">
      <div className="content-wrapper">
        <h1>Bienvenido a Pacientes</h1>
        <div>
          <p>Selecciona una opción del menú lateral.</p>
          <Tarjeta />  
        </div>
      </div>
    </div>
  );
};

export default Pacientes;
