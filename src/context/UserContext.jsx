import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  // Estado inicial: leer desde localStorage si existe
  const [isMasterUser, setIsMasterUser] = useState(() => {
    const savedIsMasterUser = localStorage.getItem('isMasterUser');
    return savedIsMasterUser ? JSON.parse(savedIsMasterUser) : false;
  });

  // Función para actualizar el estado del usuario
  const login = (userType) => {
    const isMaster = userType === 'Maestro';
    setIsMasterUser(isMaster); // Actualiza el estado
    localStorage.setItem('isMasterUser', JSON.stringify(isMaster)); // Guarda en localStorage
    console.log('Usuario actualizado:', userType); // Depuración
  };

  // Función para cerrar sesión
  const logout = () => {
    setIsMasterUser(false); // Reinicia el estado
    localStorage.removeItem('isMasterUser'); // Elimina el valor de localStorage
  };

  return (
    <UserContext.Provider value={{ isMasterUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};