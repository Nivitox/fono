// src/pages/Profesional.jsx
import React from 'react';
import Input_X from '../assets/Input_X';

const Profesional = () => {
   return (
    <div className="d-flex general-container">
      <div className="flex-grow-1 p-4" style={{ color: 'var(--text-color1)' }}>
        <h1 style={{ color: 'var(--text-color1)' }}>Bienvenido a Profesional</h1>
        <div style={{ color: 'var(--text-color1)' }}>
          <p>Selecciona una opción del menú lateral.</p>
        </div>

        {/* Ejemplo de uso de InputX */}
        <Input_X type="correo" label="Correo Electrónico Personalizado"/>
        <Input_X type="nombre" />
        <Input_X type="telefono" label="Teléfono principal:"/> {/* Sin props, muestra el comportamiento predeterminado */}
        <Input_X type="rut"/>
        <Input_X type="fecha" level={3}/>
        <Input_X/>
      </div>
    </div>
  );
};

export default Profesional;
