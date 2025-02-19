// Header.jsx
import React, { useState } from "react";
import Boton from "../bloques/Boton";
import Nombre from "./Input_Nombre";
import Fecha from "./Input_Fecha";
import Rut from "./Input_Rut";

const Header = ({
  className = "",
  name = "",
  value = "",
  onChange = () => {},
  onClick = () => {},
}) => {
  const [isActive, setIsActive] = useState(true);

  const toggleEstado = () => {
    setIsActive(!isActive);
    onClick();
  };

  const renderDynamicContent = () => {
    if (className.includes("primer-nombre")) {
      return {
        label: "Primer nombre:",
        customInput: (
          <Nombre
            name={name}
            value={value}
            onChange={onChange}
            className="primer-nombre"
          />
        ),
      };
    } else if (className.includes("otro-nombre")) {
      return {
        label: "Otro(s) nombre(s):",
        customInput: (
          <Nombre
            name={name}
            value={value}
            onChange={onChange}
            className="otro-nombre"
          />
        ),
      };
    } else if (className.includes("primer-apellido")) {
      return {
        label: "Primer apellido:",
        customInput: (
          <Nombre
            name={name}
            value={value}
            onChange={onChange}
            className="primer-apellido"
          />
        ),
      };
    } else if (className.includes("segundo-apellido")) {
      return {
        label: "Segundo apellido:",
        customInput: (
          <Nombre
            name={name}
            value={value}
            onChange={onChange}
            className="segundo-apellido"
          />
        ),
      };
    } else if (className.includes("rut")) {
      return {
        label: "RUT o número de documento:",
        customInput: (
          <Rut name={name} value={value} onChange={onChange} className="rut" />
        ),
      };
    } else if (className.includes("fecha-nacimiento")) {
      return {
        label: "Fecha de nacimiento:",
        customInput: (
          <Fecha
            type="date"
            name={name}
            value={value}
            onChange={onChange}
            className="fecha-nacimiento"
          />
        ),
      };
    }

    return {
      label: "Error: clase inválida",
      customInput: (
        <div>
          <input type="text" placeholder='className="..." ' />
          <span style={{ color: "red" }}>
            {"'primer-nombre'\n'otro-nombre'\n'primer-apellido'\n'segundo-apellido'\n'rut'\n'fecha-nacimiento'"}
          </span>
        </div>
      ),
    };
  };

  const { label, customInput } = renderDynamicContent();

  return (
    <div className="header-container">
      <div className="header-content">
        <span className="header-title">
          <strong>{label}</strong>
        </span>
        <aside className="header-buttons">
          <Boton className="boton mostrar" onClick={toggleEstado}></Boton>
          <Boton className="boton editar" onClick={toggleEstado}></Boton>
          <Boton className="boton permitir" onClick={toggleEstado}></Boton>
          <Boton className="boton limpiar" onClick={toggleEstado}></Boton>
          <Boton className="boton incluir" onClick={toggleEstado}></Boton>
        </aside>
      </div>

      <div className="header-input">{customInput}</div>
    </div>
  );
};

export default Header;
