import { useState, useEffect } from "react";
import "./LoadingDots.css"; // Importa el CSS

const LoadingDots = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-text">Cargando{dots}</div>
    </div>
  );
};

export default LoadingDots;
