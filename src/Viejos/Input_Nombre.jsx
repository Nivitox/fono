import React, { useState } from "react";

const Nombre = ({
  className = "default-class", // Clase CSS predeterminada
  id,                         // El id se genera dinámicamente si no se proporciona
  name = "default-name",      // Nombre del input predeterminado
  value = formData.primerNombre,                      // Valor externo (opcional)
  onChange = handleChange,                   // Manejador externo (opcional)
  

}) => {
  // Estado interno para manejar el valor si no se pasa uno desde afuera
  const [inputValue, setInputValue] = useState(value || "");

  // Placeholder dinámico basado en la clase
  const getPlaceholder = () => {
    switch (className) {
      case "primer-nombre":
        return "Ingrese primer nombre...";
      case "otro-nombre":
        return "Ingrese otro(s) nombre(s)...";
      case "primer-apellido":
        return "Ingrese primer apellido...";
      case "segundo-apellido":
        return "Ingrese segundo apellido...";
      default:
        return "Ingrese un valor...";
    }
  };

  // Generación de ID dinámico basado en la clase
  const getId = () => {
    switch (className) {
      case "primer-nombre":
        return "primer-nombre";
      case "otro-nombre":
        return "otro-nombre";
      case "primer-apellido":
        return "primer-apellido";
      case "segundo-apellido":
        return "segundo-apellido";
      default:
        return "id-default";
    }
  };

  // Manejador del evento `onChange`
  const handleChange = (e) => {
    const newValue = e.target.value;

    // Actualiza el estado interno si no hay manejador externo
    if (!onChange) {
      setInputValue(newValue);
    } else {
      // Si hay un manejador externo, lo usamos
      onChange(e);
    }
  };

  return (
    <div>
      <input
        type="text"
        id={id || getId()}              // Usa el id proporcionado o genera uno dinámicamente
        name={name}                    // Usa el nombre predeterminado o el pasado como prop
        value={value ?? inputValue}    // Usa el valor externo o el interno
        onChange={handleChange}        // Lógica combinada para manejar cambios
        placeholder={getPlaceholder()} // Placeholder dinámico
        className={className}          // Clase CSS
      />
    </div>
  );
};

export default Nombre;
