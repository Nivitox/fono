// src/context/SidebarContext.js
import React, { createContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    const isConfirmed = window.confirm('¿Estás seguro de que deseas cerrar sesión?');
    if (isConfirmed) {
      signOut(auth)
        .then(() => {
          console.log('Sesión cerrada exitosamente');
          navigate('/login');
        })
        .catch((error) => {
          console.error('Error al cerrar sesión:', error);
          alert('Hubo un error al cerrar sesión. Por favor, intenta nuevamente.');
        });
    }
  };

  return (
    <SidebarContext.Provider value={{ navigate, location, handleLogout }}>
      {children}
    </SidebarContext.Provider>
  );
};
