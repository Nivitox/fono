import React, { useState } from "react";
import './Color.css';

const Fecha = () => {
    // Estado interno para manejar la fecha
    const [fecha, setFecha] = useState(() => {
        // Inicializa con la fecha actual en formato YYYY-MM-DD
        const hoy = new Date().toISOString().split("T")[0];
        return hoy;
    });

    const validarFecha = (fecha) => {
        // Validación básica: si no hay fecha o formato incorrecto, usa la actual
        if (!fecha || isNaN(new Date(fecha).getTime())) {
            return new Date().toISOString().split("T")[0];
        }
        return fecha;
    };

    const handleFechaChange = (e) => {
        const fechaIngresada = e.target.value;
        const fechaValida = validarFecha(fechaIngresada);
        setFecha(fechaValida); // Actualiza el estado interno
    };

    return (
        <div>
            <input
                type="date"
                id="birthdate"
                name="birthdate"
                value={fecha} // Usa el estado interno para el valor
                onChange={handleFechaChange}
                placeholder="YYYY-MM-DD"
                className="input-fecha" // Clase CSS opcional
            />
        </div>
    );
};

export default Fecha;
