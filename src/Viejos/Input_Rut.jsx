import React, { useState } from 'react';
import './Color.css';
import { validateRUT, formatRUT } from '../bloques/Fun_Rut'; // Importa las funciones

const Rut = ({ formData = {}, setFormData = () => {} }) => {
    const [rut, setRUT] = useState(formData.rut || '');
    const [isValid, setIsValid] = useState(false);

    const handleRUTChange = (e) => {
        let value = e.target.value;
        value = formatRUT(value); // Formatea el RUT
        setRUT(value);
        setFormData({ ...formData, rut: value });

        const rutNumber = value.replace(/[.-]/g, '').slice(0, -1);
        if (!validateRUT(value) || parseInt(rutNumber) <= 100000) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    };

    return (
        <div className="rut-container">
            <div className="rut-input-container">
                <input
                    type="text"
                    id="rut"
                    name="rut"
                    value={rut}
                    onChange={handleRUTChange}
                    placeholder="Ingrese RUT o número de documento..."
                    className={isValid ? 'input-valid' : 'input-invalid'}
                />
                {isValid ? (
                    <span className="valid-ticket">✅</span>
                ) : (
                    rut && <span className="invalid-ticket">⛔</span>
                )}
            </div>
        </div>
    );
};

export default Rut;
