//src/pages/Usuarios.jsx

import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Importa Firestore
import './Usuarios.css'; // Importamos los estilos
import Tarjeta from '../assets/Tarjeta';


const Usuarios = () => {
  // Estado para manejar las pestañas
  const [activeTab, setActiveTab] = useState('lista');
  // Estado para almacenar los usuarios
  const [usuarios, setUsuarios] = useState([]);

  // Función para cargar usuarios desde Firestore
  const fetchUsuarios = async () => {
    try {
      const usuariosCollection = collection(db, 'usuarios'); // Referencia a la colección "usuarios"
      const querySnapshot = await getDocs(usuariosCollection); // Obtiene los documentos
      const usuariosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsuarios(usuariosData); // Actualiza el estado con los usuarios
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
      alert('Hubo un error al cargar los usuarios. Por favor, intenta nuevamente.');
    }
  };

  // Cargar usuarios al montar el componente
  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <div className="container">
      <h1>Gestión de Usuarios</h1>
      <div className='paleta-colores'>
      </div>
      {/* Sistema de pestañas */}
      <div className="tabs-container">
        <button
          className={`tab-button ${activeTab === 'lista' ? 'active' : ''}`}
          onClick={() => setActiveTab('lista')}
        >
          Lista de Usuarios
        </button>
        <button
          className={`tab-button ${activeTab === 'agregar' ? 'active' : ''}`}
          onClick={() => setActiveTab('agregar')}
        >
          Agregar Nuevo Usuario
        </button>
      </div>
      {/* Contenido dinámico según la pestaña activa */}
      <div className="caja">
        {activeTab === 'lista' && (
          <div>
            <h2>Lista de Usuarios</h2>
            <ul className="user-list">
              {usuarios.length > 0 ? (
                usuarios.map((usuario) => (
                  <li key={usuario.id} className="user-item">
                    <strong>{usuario.nombre}</strong> - {usuario.email}
                  </li>
                ))
              ) : (
                <p>No hay usuarios registrados.</p>
              )}
            </ul>
          </div>
        )}
        {activeTab === 'agregar' && (
          <div>

            <Tarjeta/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Usuarios;