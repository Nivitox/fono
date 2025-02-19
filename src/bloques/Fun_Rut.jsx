// Fun_Rut.jsx
export const validateRUT = (rut) => {
    rut = rut.replace(/[.-]/g, ''); // Elimina puntos y guiones
    const rutNumber = rut.slice(0, -1);
    const verifier = rut.slice(-1).toUpperCase();
    if (rutNumber.length < 6) return false; // RUTs válidos deben tener al menos 6 dígitos

    let sum = 0;
    let multiplier = 2;
    for (let i = rutNumber.length - 1; i >= 0; i--) {
        sum += parseInt(rutNumber[i]) * multiplier;
        multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }
    const remainder = sum % 11;
    const calculatedVerifier =
        remainder === 1 ? 'K' : remainder === 0 ? '0' : (11 - remainder).toString();
    return calculatedVerifier === verifier;
};

export const formatRUT = (value) => {
    value = value.replace(/[^0-9kK]/g, '').toUpperCase(); // Solo números y K
    if (value.length > 1) {
        value =
            value.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, '.') +
            '-' +
            value.slice(-1);
    }
    return value;
};
