// src/assets/Input_X.jsx
import React, { useState, useContext, useEffect, useRef } from 'react';
import Boton from '../bloques/Boton';
import './Input_X.css';
import { validateRUT, formatRUT } from '../bloques/Fun_Rut';
import { countryCodes } from './CountryCodes';
import { UserContext } from '../context/UserContext';
import Icon_OK from '../bloques/Icon_OK';
import Icon_NO from '../bloques/Icon_NO';

// Variable global para almacenar el valor de clave
let claveGlobal = '';

const Input_X = ({
  type = '',
  value = '',
  label: customLabel,
  level = 5,
  required = true,
  options = [], // Permite tanto array de strings como array de objetos
  onChange, // Nueva prop para manejar cambios
  placeholder: customPlaceholder,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isValid, setIsValid] = useState(true);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+56');
  const { isMasterUser } = useContext(UserContext);
  const inputRef = useRef(null);  // Referencia al input

  useEffect(() => {
    console.log('Estado de isMasterUser actualizado:', isMasterUser);
  }, [isMasterUser]);

  useEffect(() => {
    if (onChange) {
      onChange({ target: { value: inputValue } });
    }
  }, [inputValue, onChange]);

  const validations = {
    nombre: (value) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value),
    correo: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    telefono: (value) => {
      const country = countryCodes.find((c) => c.code === selectedCountryCode);
      const maxDigits = country ? country.digits : 9;
      return /^\d+$/.test(value) && value.length === maxDigits;
    },
    rut: (value) => validateRUT(value),
    fecha: (value) => /^\d{4}-\d{2}-\d{2}$/.test(value),
    lista: (value) => true, // No requiere validación específica
    clave: (value) => value.length > 3,
    reclave: (value) => value === claveGlobal, // Validar contra la variable global
  };

  const handleInputChange = (e) => {
    let newValue = e.target.value;
    if (type === 'rut') {
      newValue = formatRUT(newValue);
    }
    setInputValue(newValue);

    // Actualizar la variable global si el tipo es "clave"
    if (type === 'clave') {
      claveGlobal = newValue; // Actualiza la variable global
    }

    if (type && validations[type]) {
      setIsValid(validations[type](newValue));
    }
  };

  const handleCountryCodeChange = (e) => {
    setSelectedCountryCode(e.target.value);
    setInputValue('');
    setIsValid(false);
  };

  const defaultButtons = [
    { className: 'mostrar', onClick: () => console.log('Mostrar') },
    { className: 'editar', onClick: () => console.log('Editar') },
    { className: 'permitir', onClick: () => console.log('Permitir') },
    { className: 'limpiar', onClick: () => {
        setInputValue('');
        inputRef.current.focus(); // Foco en el input
      } 
    },
    { className: 'incluir', onClick: () => console.log('Incluir') },
  ];

  const defaultOptions = [
    { value: 'opcion1', label: 'Opción 1' },
    { value: 'opcion2', label: 'Opción 2' },
    { value: 'opcion3', label: 'Opción 3' },
  ];

  // Función para transformar las opciones
  const transformOptions = (rawOptions) => {
    if (!Array.isArray(rawOptions)) return [];
    return rawOptions.map((option) => ({
      value: typeof option === 'string'
        ? option.toLowerCase().replace(/\s+/g, '-') // Si es string, formatea el valor
        : option.value, // Si ya es un objeto, usa el valor existente
      label: typeof option === 'string' ? option : option.label, // Usa el texto original o el label
    }));
  };

  // Combinar opciones predeterminadas con las personalizadas
  const processedOptions = transformOptions(options.length > 0 ? options : defaultOptions);

  const filterButtons = () => {
    switch (level) {
      case 0:
        return [];
      case 1:
        return defaultButtons.filter((btn) => btn.className === 'limpiar');
      case 2:
        return defaultButtons.filter((btn) =>
          ['limpiar', 'incluir'].includes(btn.className)
        );
      case 3:
        return defaultButtons.filter((btn) =>
          ['permitir', 'limpiar', 'incluir'].includes(btn.className)
        );
      case 4:
        return isMasterUser
          ? defaultButtons.filter((btn) =>
              ['editar', 'permitir', 'limpiar', 'incluir'].includes(btn.className)
            )
          : [];
      case 5:
        return isMasterUser ? defaultButtons : [];
      case 6:
        return defaultButtons.filter((btn) => btn.className === 'incluir');
      default:
        return [];
    }
  };
  

  const renderButtons = () => {
    const filteredButtons = filterButtons();
    return filteredButtons.map((button, index) => (
      <Boton
        key={index}
        className={button.className}
        onClick={() => {
          if (button.onClick) button.onClick();
        }}
      />
    ));
  };

  const defaultPlaceholder = type
    ? `Ingrese su ${type}...`
    : `Variables faltantes: (title para más)\ntype="(nombre, correo, telefono, rut, fecha, lista, clave, reclave)"; \nlabel="(Personalizado)"; \nlevel={"(0-6)"}; \nrequired={false}; \nplaceholder="(Personalizado)" \noptions=["opt1", "opt2", ...] ((solo para lista))`;

  const finalPlaceholder = customPlaceholder || defaultPlaceholder;

  const label = customLabel || (type ? `${type.charAt(0).toUpperCase() + type.slice(1)}` : 'Input INCORRECTO');

  const labelStyle = {
    color: required ? 'var(--enfasis3)' : 'var(--background-color7)'
  };

  const renderListaInput = () => {
    return (
      <select
        value={inputValue}
        onChange={handleInputChange}
        className={`input-field ${isValid ? 'valid' : 'invalid'}`}
      >
        {processedOptions.length === 0 ? (
          <option value="" disabled className="input-field">
            Seleccione una opción...
          </option>
        ) : (
          processedOptions.map((option, index) => (
            <option key={index} value={option.value} className="input-field">
              {option.label}
            </option>
          ))
        )}
      </select>
    );
  };

  const renderTelefonoInput = () => {
    const country = countryCodes.find((c) => c.code === selectedCountryCode);
    const maxDigits = country ? country.digits : 9;
    return (
      <div className="telefono-input-container">
        <select value={selectedCountryCode} onChange={handleCountryCodeChange}>
          {countryCodes.map((country) => (
            <option
              key={country.code}
              value={country.code}
              title={country.country}
              className='input-field'
            >
              {country.flag} {country.code}
            </option>
          ))}
        </select>
        <div className="telefono-input-wrapper">
          <input
            ref={inputRef} // Referencia al input
            type="tel"
            value={inputValue}
            onChange={handleInputChange}
            className={`input-field ${isValid ? 'valid' : 'invalid'}`}
            placeholder={`${maxDigits} dígitos`}
            maxLength={maxDigits}
          />
          {inputValue && (
            <span className={`validation-icon ${isValid ? 'valid' : 'invalid'}`}>
              {isValid ? <Icon_OK fill="#28b3a0" /> : <Icon_NO />}
            </span>
          )}
        </div>
      </div>
    );
  };

  const renderClaveInput = () => {
    return (
      <div className="input-with-icon">
        <input
          ref={inputRef} // Referencia al input
          type="password"
          value={inputValue}
          onChange={handleInputChange}
          className={`input-field ${isValid ? 'valid' : 'invalid'}`}
          placeholder={finalPlaceholder}
        />
        {inputValue && (
          <span className={`validation-icon ${isValid ? 'valid' : 'invalid'}`}>
            {isValid ? <Icon_OK fill="#28b3a0" /> : <Icon_NO />}
          </span>
        )}
      </div>
    );
  };

  const renderReclaveInput = () => {
    return (
      <div className="input-with-icon">
        <input
          ref={inputRef} // Referencia al input
          type="password"
          value={inputValue}
          onChange={handleInputChange}
          className={`input-field ${isValid ? 'valid' : 'invalid'}`}
          placeholder={finalPlaceholder}
        />
        {inputValue && (
          <span className={`validation-icon ${isValid ? 'valid' : 'invalid'}`}>
            {isValid ? <Icon_OK fill="#28b3a0" /> : <Icon_NO />}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="input-container">
      {/* Header con label y botones */}
      <div className="input-header">
        <label className="input-label" style={labelStyle}>{customLabel || 'Input'}</label>
        <div className="botones">{renderButtons()}</div>
      </div>

      {/* Renderizado condicional según el tipo */}
      {type === 'telefono' && renderTelefonoInput()}
      {type === 'lista' && renderListaInput()}
      {type === 'clave' && renderClaveInput()}
      {type === 'reclave' && renderReclaveInput()}

      {/* Input genérico para otros tipos */}
      {['nombre', 'correo', 'rut', 'fecha'].includes(type) && (
        <div className="input-with-icon">
          <input
            ref={inputRef} // Referencia al input
            type={type === 'fecha' ? 'date' : 'text'}
            value={inputValue}
            onChange={handleInputChange}
            className={`input-field ${isValid ? 'valid' : 'invalid'}`}
            placeholder={finalPlaceholder}
            title={finalPlaceholder}
          />
          {/* Ícono de validación */}
          {inputValue && (
            <span className={`validation-icon ${isValid ? 'valid' : 'invalid'}`}>
              {isValid ? <Icon_OK fill="#28b3a0" /> : <Icon_NO />}
            </span>
          )}
        </div>
      )}

      {/* Fallback para tipos no reconocidos */}
      {!['telefono', 'lista', 'clave', 'reclave', 'nombre', 'correo', 'rut', 'fecha'].includes(type) && (
        <div className="input-with-icon">
          <input
            ref={inputRef} // Referencia al input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className={`input-field ${isValid ? 'valid' : 'invalid'}`}
            placeholder={finalPlaceholder}
            title={finalPlaceholder}
          />
        </div>
      )}
    </div>
  );
};

export default Input_X;
