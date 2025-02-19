import React, { useState } from 'react';
import './Color.css';

const Correo = ({ 
    formData = { primaryEmail: '' }, 
    setFormData = () => {}, 
    setErrors = () => {}, 
    errors = {}, 
    label = 'Correo Electrónico' 
}) => {
    const [email, setEmail] = useState(formData.primaryEmail || '');
    const [emailError, setEmailError] = useState('');
    const [isValid, setIsValid] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setFormData({ ...formData, primaryEmail: value });
        if (!validateEmail(value)) {
            setIsValid(false);
            setEmailError('El correo electrónico no es válido.');
        } else {
            setIsValid(true);
            setEmailError('');
        }
    };

    return (
        <div className="correo-container">
            <label htmlFor="primary-email">{label}</label>
            <div className="correo-input-container">
                <input 
                    type="email" 
                    id="primary-email" 
                    name="primaryEmail" 
                    value={email} 
                    onChange={handleEmailChange}
                    placeholder="Ingrese el correo electrónico principal..."  // Corregido aquí
                />
                {isValid && <span className="valid-ticket">✅</span>}
                {!isValid && email && <span className="invalid-ticket">⛔</span>}
            </div>
            {emailError && <span className="error">{emailError}</span>}
        </div>
    );
};

export default Correo;