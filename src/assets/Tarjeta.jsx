import React from 'react';
import './Tarjeta.css'; // Asegúrate de que este archivo CSS esté correctamente cargado
import ThemeSwitcher from '../components/ThemeSwitcher';

const Tarjeta = ({ 
  taTitle, 
  reTitle = "Datos INCOMPLETOS", 
  buText, 
  campos = [] 
}) => {  

  return (
    <div className="tarjeta">
      {/* Mostrar el título solo si no está vacío */}
      {taTitle !== "" && <h2 className="tarjeta-title">{taTitle || "Formulario de INCOMPLETO"}</h2>}

      {/* Datos Personales */}
      <div className='remarco'>
        <h3>{reTitle}</h3> {/* Título de la sección "remarco" */}

        {/* Si no hay campos, muestra un mensaje personalizado */}
        {campos.length === 0 ? (
          <div>
            <p className="mensaje-personalizado">  
                Título Formulario 🟰 taTitle = "(Personalizado)"
            </p>
            <p className="mensaje-personalizado">  
                Título Sección 🟰 reTitle = "(Personalizado)" 
            </p>
            <p className="mensaje-personalizado">
                Texto Botón 🟰 buText = "(Personalizado)"
            </p>
            <p className='mensaje-personalizado'>
              Campos 🟰 {"campos={[ <Input_X/>, <Input_X/> ]}"}
            </p>
          </div>
        ) : (
          campos.map((campo, index) => (
            <div key={index} className="campo-container">{campo}</div>
          ))
        )}
      </div>

      {/* Mostrar el botón solo si buText NO está vacío */}
      {buText && buText !== "" && <button className="submit-button">{buText}</button>}
    </div>
  );
};

export default Tarjeta;
