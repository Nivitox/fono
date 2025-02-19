// src/context/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const ProtectedRoute = ({ requiredRole, children }) => {
  const { userType } = useContext(UserContext);

  // Si el usuario no tiene el rol requerido, redirige al login
  if (userType !== requiredRole) {
    return <Navigate to="/login" replace />;
  }

  // Si el usuario tiene el rol correcto, muestra el contenido
  return children;
};

export default ProtectedRoute;