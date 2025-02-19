// src/pages/Usuarios.jsx
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Importa Firestore
import './Usuarios.css'; // Importamos los estilos
import Tarjeta from '../assets/Tarjeta';
import Input_X from '../assets/Input_X'

const Usuarios = () => {
  // Estado para manejar las pestañas
  const [activeTab, setActiveTab] = useState('lista');
  // Estado para almacenar los usuarios
  const [usuarios, setUsuarios] = useState([]);
  // Estado para el usuario seleccionado en el select
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState('');

  // Función para obtener usuarios desde Firestore
  const fetchUsuarios = async () => {
    try {
      console.log("Obteniendo datos de Firestore...");
      const usuariosCollection = collection(db, 'usuarios'); // Referencia a la colección "usuarios"
      const querySnapshot = await getDocs(usuariosCollection); // Obtiene los documentos
  
      if (querySnapshot.empty) {
        console.warn("No hay usuarios registrados en Firestore.");
        setUsuarios([]); // Evita que quede en un estado indefinido
        return;
      }
  
      const usuariosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      console.log("Usuarios obtenidos:", usuariosData);
      setUsuarios(usuariosData); // Actualiza el estado
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
      alert("Hubo un error al cargar los usuarios.");
    }
  };

  // Cargar usuarios al montar el componente
  useEffect(() => {
    fetchUsuarios();
  }, []);

  // Depuración en la consola cuando se actualicen los usuarios
  useEffect(() => {
    console.log("Estado actualizado de usuarios:", usuarios);
  }, [usuarios]);

  // Manejador para el cambio en el select
  const handleSelectChange = (e) => {
    setUsuarioSeleccionado(e.target.value);
  };

  // Función de ejemplo para seleccionar usuario (puedes modificarla)
  const seleccionarUsuario = (usuario) => {
    alert(`Editar usuario: ${usuario.primerNombre} ${usuario.primerApellido}`);
  };

  // Función de ejemplo para eliminar usuario (puedes modificarla)
  const eliminarUsuario = (id) => {
    alert(`Eliminar usuario con ID: ${id}`);
  };

  return (
    <div className="container">
      <h1>Gestión de Usuarios</h1>
      <div className='paleta-colores'></div>

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
            <h2 className='letrasGrandes'>Lista de Usuarios</h2>
            
            {/* Select para escoger un usuario */}
            <div className="select-container">
              <label htmlFor="usuario-select">Selecciona un usuario:</label>
              <select
                id="usuario-select"
                value={usuarioSeleccionado}
                onChange={handleSelectChange}
              >
                <option value="">-- Selecciona un usuario --</option>
                {usuarios.map((usuario) => (
                  <option key={usuario.id} value={usuario.id}>
                    {usuario.primerNombre} {usuario.primerApellido} - {usuario.correoElectronico}
                  </option>
                ))}
              </select>
            </div>

            {/* Tabla de usuarios */}
            <table className="tabla-usuarios">
              <thead>
                <tr>
                  <th>Primer Nombre</th>
                  <th>Primer Apellido</th>
                  <th>Correo Electrónico</th>
                  <th>Rol</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.length > 0 ? (
                  usuarios.map((usuario) => (
                    <tr key={usuario.id} className="fila-usuario">
                      <td>{usuario.primerNombre || "Sin nombre"}</td>
                      <td>{usuario.primerApellido || "Sin apellido"}</td>
                      <td>{usuario.correoElectronico || "Sin correo"}</td>
                      <td className={usuario.rol === "Maestro" ? "rol-maestro" : "rol-estandar"}>
                        {usuario.rol || "Sin rol"}
                      </td>
                      <td className={usuario.estado === "Activo" ? "estado-activo" : "estado-inactivo"}>
                        {usuario.estado || "Desconocido"}
                      </td>
                      <td>
                        <button
                          className="boton-editar"
                          onClick={() => seleccionarUsuario(usuario)}
                        >
                          Editar
                        </button>
                        <button
                          className="boton-eliminar"
                          onClick={() => eliminarUsuario(usuario.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">No hay usuarios registrados.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'agregar' && (
          <div>
            <Tarjeta
            taTitle='Datos del Personales'
            reTitle=''
            // buText='Enviar a la punta del cerro'
            campos={[
              <Input_X
              type='nombre'
              label='Primer Nombre:'
              level={5}
              placeholder='Ingrese su primer nombre...'
              />,

              <Input_X
              type='nombre'
              label='Segundo Nombre:'
              level={5}
              placeholder='Ingrese sus otros nombres...'
              required={false}
              />,

              <Input_X
              type='nombre'
              label='Primer Apellido:'
              level={5}
              placeholder='Ingrese su primer apellido...'
              />,

              <Input_X
              type='nombre'
              label='Segundo Apellido:'
              level={5}
              placeholder='Ingrese su segundo apellido...'
              required={false}
              />,

              <Input_X
              type='rut'
              label='RUT o Documento:'
              level={5}
              placeholder='Ingrese su número de documento...'
              />,

              <Input_X
              type='fecha'
              label='Fecha de Nacimiento:'
              level={5}
              placeholder='Ingrese su fecha de nacimiento...'
              required={false}
              />,

            ]}
            />

            <Tarjeta
              taTitle='Datos de Contacto'
              reTitle=''
              // buText='Enviar a la punta del cerro'
              campos={[
                <Input_X
                type='correo'
                label='Correo Eletrónico Principal:'
                level={5}
                placeholder='Ingrese su correo electrónico principal...'
                />,

                <Input_X
                type='correo'
                label='Correo Eletrónico Alternativo:'
                level={5}
                placeholder='Ingrese su correo electrónico secundario...'
                required={false}
                />,

                <Input_X
                type='telefono'
                label='Teléfono Principal:'
                level={5}
                placeholder='Ingrese su número telefónico principal...'
                />,

                <Input_X
                type='telefono'
                label='Teléfono Alternativo:'
                level={5}
                placeholder='Ingrese su número telefónico secundario...'
                required={false}
                />,
          
            ]}
            />
            
            <Tarjeta
              taTitle='Datos Profesionales'
              reTitle=''
              // buText='Enviar a la punta del cerro'
              campos={[
                <Input_X
                type='nombre'
                label='Título obtenido:'
                level={5}
                placeholder='Ingrese su titulo académico...'
                required={false}
                />,

                <Input_X
                type='nombre'
                label='Número de Registro:'
                level={5}
                placeholder='Ingrese el número de registro de su título...'
                required={false}
                />,

                <Input_X
                type='nombre'
                label='Institución de Registro:'
                level={5}
                placeholder='Ingrese la institución que otorga el registro...'
                required={false}
                />,
              ]}
            />

          </div>
        )}
      </div>
    </div>
  );
};

export default Usuarios;
