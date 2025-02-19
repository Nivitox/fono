import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebaseConfig";
import LoadingDots from "./LoadingDots"; // Importa el loader animado

const AuthWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingDots />
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthWrapper;
