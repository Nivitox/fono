// src/pages/Login.jsx
import React, { useState, useContext, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebaseConfig'; // Importa auth y db
import { doc, getDoc } from 'firebase/firestore'; // Importa funciones de Firestore
import './Login.css'; // Importa los estilos
import { UserContext } from '../context/UserContext'; // Importa el contexto



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [icon, setIcon] = useState('🔒'); // Estado para el ícono

  useEffect(() => {
    const icons = ['🔒', '🔑', '🔓']; // Orden de los íconos
    let currentIndex = 0;

    const interval = setInterval(() => {
      setIcon(icons[currentIndex]);
      currentIndex = (currentIndex + 1) % icons.length; // Ciclar a través de los íconos
    }, 3000); // Cambiar cada 3 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  // Acceder al contexto global del usuario
  const { login } = useContext(UserContext);

  // Manejar el inicio de sesión
  const handleLogin = async () => {
    try {
      // Autenticar al usuario con Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log('UID del usuario autenticado:', user.uid); // Depuración

      // Consulta manual para probar Firestore
      const testFirestoreQuery = async (uid) => {
        const userDocRef = doc(db, 'usuarios', uid); // Referencia al documento del usuario
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          console.log('Datos del usuario:', userDocSnapshot.data());
        } else {
          console.log('Documento no encontrado para el UID:', uid);
        }
      };

      // Llamar a la función de prueba
      await testFirestoreQuery(user.uid);

      // Obtener el rol del usuario desde Firestore
      const userDocRef = doc(db, 'usuarios', user.uid); // Referencia al documento del usuario
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data(); // Datos del usuario
        const userType = userData.rol || 'Estandar'; // Obtiene el rol del usuario (por defecto: Estandar)

        // Actualizar el estado global del usuario
        login(userType);

        // Redirigir al usuario a la página principal
        navigate('/Home');
      } else {
        alert('Usuario no encontrado en la base de datos.');
      }
    } catch (error) {
      alert('Error al iniciar sesión: ' + error.message);
    }
  };

  return (
    <>
      <div className="titulo">
        <h1><strong>Kunigo Digital</strong></h1>
      </div>
  
      <div className="login-container">
      <div className="esquema">
          <h1>{icon}</h1> {/* Muestra el ícono dinámicamente */}
        </div>
        <h2 className="subtitle">Iniciar sesión</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button className="login-button" onClick={handleLogin}>
          <strong>Iniciar sesión</strong>
        </button>

      </div>
    </>
  );
};

export default Login;