// src/bloques/Boton.jsx

import React, { useState } from 'react';
import './Boton.css';
import Icon_Bloquear from '../bloques/Icon_Bloquear';
import Icon_Editar from './Icon_Editar';
import Icon_Excluir from './Icon_Excluir';
import Icon_Incluir from './Icon_Incluir';
import Icon_Mostrar from './Icon_Mostrar';
import Icon_Nut from './Icon_Nut';
import Icon_Close from './Icon_Close';
import Icon_CloseB from './Icon_CloseB';
import Icon_Ocultar from './Icon_Ocultar';
import Icon_Settings from './Icon_Settings';

const Boton = ({ className = '', onClick = () => {}, children }) => {
  const [isActive, setIsActive] = useState(true);

  const toggleEstado = () => {
    const nuevoEstado = !isActive;
    setIsActive(nuevoEstado);

    // Mostrar en consola el nombre del icono actual
    const { iconName } = getIconAndText();
    console.log(`Icono actual: ${iconName}`);
    console.log(`isActive: ${nuevoEstado}`);

    onClick();

    // Si el botón es de tipo "limpiar", volver al estado base después de 1 segundo
    if (className.includes('limpiar')) {
      setTimeout(() => {
        setIsActive(true);
      }, 1000);
    }
  };

  const getIconAndText = () => {
    if (className.includes('mostrar')) {
      return {
        icon: isActive ? <Icon_Mostrar /> : <Icon_Ocultar />,
        iconName: isActive ? 'Icon_Mostrar' : 'Icon_Ocultar',
        text: isActive ? 'Mostrando este campo al usuario' : 'Ocultando este campo al usuario',
      };
    } else if (className.includes('editar')) {
      return {
        icon: isActive ? <Icon_Editar /> : <Icon_Bloquear />,
        iconName: isActive ? 'Icon_Editar' : 'Icon_Bloquear',
        text: isActive ? 'Permitiendo la edición al usuario' : 'Bloqueando la edición al usuario',
      };
    } else if (className.includes('permitir')) {
      return {
        icon: isActive ? <Icon_Settings /> : <Icon_Nut />,
        iconName: isActive ? 'Icon_Settings' : 'Icon_Nut',
        text: isActive ? 'Activar opción de incluir en el informe' : 'Desactivar opción de incluir en el informe',
      };
    } else if (className.includes('limpiar')) {
      return {
        icon: isActive ? <Icon_Close /> : <Icon_CloseB />,
        iconName: isActive ? 'Icon_Close' : 'Icon_CloseB',
        text: 'Limpiar campo',
      };
    } else if (className.includes('incluir')) {
      return {
        icon: isActive ? <Icon_Incluir /> : <Icon_Excluir />,
        iconName: isActive ? 'Icon_Incluir' : 'Icon_Excluir',
        text: isActive ? 'Incluyendo en el informe' : 'Excluyendo del informe',
      };
    }
    return {
      icon: null,
      iconName: 'N/A',
      text: 'Elegir entre las clases: mostrar, editar, permitir, limpiar e incluir',
    };
  };

  const { icon, text } = getIconAndText();

  return (
    <button
      className={`basic-button ${className} ${isActive ? '' : 'inactive'}`}
      onClick={toggleEstado}
      aria-pressed={isActive}
      title={text} // Muestra el texto como tooltip
      tabIndex={-1}
    >
      {icon && !children && icon}
      {!icon && text}
      {children}
    </button>
  );
};

export default Boton;
