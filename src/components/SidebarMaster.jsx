// src/components/SidebarMaster.jsx

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import './SidebarMaster.css';
import ThemeSwitcher from './ThemeSwitcher';

import Icon_FDer from '../bloques/Icon_FDer';
import Icon_FIzq from '../bloques/Icon_FIzq';
import Icon_Home from '../bloques/Icon_Home';
import Icon_Maleta from '../bloques/Icon_Maleta';
import Icon_Institucion from '../bloques/Icon_Institucion';
import Icon_Paciente from '../bloques/Icon_Paciente';
import Icon_Intervencion from '../bloques/Icon_Intervencion';
import Icon_Informe from '../bloques/Icon_Informe';
import Icon_User from '../bloques/Icon_User';
import Icon_Configuracion from '../bloques/Icon_Configuracion';
import Icon_Salir from '../bloques/Icon_Salir';
// Iconos para el toggle del sidebar en landscape
import Icon_Derecha from '../bloques/Icon_Derecha';
import Icon_Izquierda from '../bloques/Icon_Izquierda';

const SidebarMaster = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Detecta la orientación de la pantalla
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
  // Estado para el cambio de secciones en modo portrait
  const [showFirstIcons, setShowFirstIcons] = useState(true);
  // Estado para contraer/expandir en modo landscape
  const [collapsed, setCollapsed] = useState(false);

  // Función para alternar entre las dos partes del menú (portrait)
  const toggleIcons = () => {
    setShowFirstIcons(!showFirstIcons);
  };

  // Función de cierre de sesión
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

  // Actualiza la orientación cada vez que se redimensiona la ventana
  useEffect(() => {
    const handleResize = () => {
      const portrait = window.innerHeight > window.innerWidth;
      setIsPortrait(portrait);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Renderizado condicional según la orientación
  if (isPortrait) {
    // Modo portrait: barra inferior
    return (
      <div className="bottom-bar-d mastercolor">
        <div className="bottom-bar-left-d">
          <Link
            to="/Home"
            className={`menu-link-d inicio ${location.pathname === '/Home' ? 'active-link-d' : ''}`}
            aria-label="Inicio"
            title="Inicio"
            onClick={() => setShowFirstIcons(true)}
          >
            <Icon_Home />
          </Link>
        </div>
        <div className="separator-d"></div>
        <div className="button-tape-d">
          <div className="icon-tape-container-d">
            <div className="icon-tape-d">
              {showFirstIcons ? (
                <div className="parte-1-d">
                  <Link
                    to="/Pacientes"
                    className={`menu-link-d ${location.pathname === '/Pacientes' ? 'active-link-d' : ''}`}
                    aria-label="Pacientes"
                    title="Pacientes"
                  >
                    <Icon_Paciente />
                    <span className="icon-label">Pacientes</span>
                  </Link>
                  <Link
                    to="/Intervenciones"
                    className={`menu-link-d ${location.pathname === '/Intervenciones' ? 'active-link-d' : ''}`}
                    aria-label="Intervenciones"
                    title="Intervenciones"
                  >
                    <Icon_Intervencion />
                    <span className="icon-label">Intervenciones</span>
                  </Link>
                  <Link
                    to="/Informes"
                    className={`menu-link-d ${location.pathname === '/Informes' ? 'active-link-d' : ''}`}
                    aria-label="Informes"
                    title="Informes"
                  >
                    <Icon_Informe />
                    <span className="icon-label">Informes</span>
                  </Link>
                  <Link
                    to="/Profesional"
                    className={`menu-link-d ${location.pathname === '/Profesional' ? 'active-link-d' : ''}`}
                    aria-label="Profesional"
                    title="Profesional"
                  >
                    <Icon_Maleta />
                    <span className="icon-label">Profesional</span>
                  </Link>
                </div>
              ) : (
                <div className="parte-2-d">
                  <Link
                    to="/Instituciones"
                    className={`menu-link-d ${location.pathname === '/Instituciones' ? 'active-link-d' : ''}`}
                    aria-label="Instituciones"
                    title="Instituciones"
                  >
                    <Icon_Institucion />
                    <span className="icon-label">Instituciones</span>
                  </Link>
                  <Link
                    to="/Usuarios"
                    className={`menu-link-d ${location.pathname === '/Usuarios' ? 'active-link-d' : ''}`}
                    aria-label="Usuarios"
                    title="Usuarios"
                  >
                    <Icon_User />
                    <span className="icon-label">Usuarios</span>
                  </Link>
                  <Link
                    to="/Configuracion"
                    className={`menu-link-d ${location.pathname === '/Configuracion' ? 'active-link-d' : ''}`}
                    aria-label="Configuración"
                    title="Configuración"
                  >
                    <Icon_Configuracion />
                    <span className="icon-label">Ajustes</span>
                  </Link>
                  <button
                    className="menu-link-d logout-d"
                    onClick={handleLogout}
                    aria-label="Cerrar Sesión"
                    title="Cerrar Sesión"
                  >
                    <Icon_Salir />
                    <span className="icon-label">Cerrar Sesión</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="separator-d"></div>
        <div className="bottom-bar-right-d">
          {showFirstIcons ? (
            <button
              className="menu-link-d"
              onClick={toggleIcons}
              aria-label="Siguiente"
              title="Siguiente"
            >
              <Icon_FDer />
            </button>
          ) : (
            <button
              className="menu-link-d"
              onClick={toggleIcons}
              aria-label="Anterior"
              title="Anterior"
            >
              <Icon_FIzq />
            </button>
          )}
        </div>
      </div>
    );
  } else {
    // Modo landscape: sidebar lateral
    return (
      <div className={`sidebar mastercolor ${collapsed ? 'collapsed-sidebar' : ''}`}>
        {/* Parte superior del Sidebar */}
        <ul className="sidebar-list flex-column mb-auto">
          <li className="sidebar-item">
            <Link
              to="/Home"
              className={`sidebar-link inicio ${location.pathname === '/Home' ? 'active-link' : ''}`}
              aria-label="Inicio"
              title="Inicio"
            >
              <Icon_Home /> {collapsed ? '' : 'Inicio'}
            </Link>
          </li>
          <div className="separador"></div>
          <li className="sidebar-item">
            <Link
              to="/Pacientes"
              className={`sidebar-link ${location.pathname === '/Pacientes' ? 'active-link' : ''}`}
              aria-label="Pacientes"
              title="Pacientes"
            >
              <Icon_Paciente /> {collapsed ? '' : 'Paciente'}
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/Intervenciones"
              className={`sidebar-link ${location.pathname === '/Intervenciones' ? 'active-link' : ''}`}
              aria-label="Intervenciones"
              title="Intervenciones"
            >
              <Icon_Intervencion /> {collapsed ? '' : 'Intervenciones'}
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/Informes"
              className={`sidebar-link ${location.pathname === '/Informes' ? 'active-link' : ''}`}
              aria-label="Informes"
              title="Informes"
            >
              <Icon_Informe /> {collapsed ? '' : 'Informes'}
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/Profesional"
              className={`sidebar-link ${location.pathname === '/Profesional' ? 'active-link' : ''}`}
              aria-label="Profesional"
              title="Profesional"
            >
              <Icon_Maleta /> {collapsed ? '' : 'Profesional'}
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/Instituciones"
              className={`sidebar-link ${location.pathname === '/Instituciones' ? 'active-link' : ''}`}
              aria-label="Instituciones"
              title="Instituciones"
            >
              <Icon_Institucion /> {collapsed ? '' : 'Instituciones'}
            </Link>
          </li>
        </ul>

        {/* Parte inferior del Sidebar */}
        <ul className="sidebar-list flex-column mt-auto">
          <li>
            <ThemeSwitcher/>
          </li>
          
          <li className="sidebar-item">
          </li>
          <li className="sidebar-item">
            <Link
              to="/Usuarios"
              className={`sidebar-link ${location.pathname === '/Usuarios' ? 'active-link' : ''}`}
              aria-label="Usuarios"
              title="Usuarios"
            >
              <Icon_User /> {collapsed ? '' : 'Usuarios'}
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/Configuracion"
              className={`sidebar-link ${location.pathname === '/Configuracion' ? 'active-link' : ''}`}
              aria-label="Configuración"
              title="Ajustes"
            >
              <Icon_Configuracion /> {collapsed ? '' : 'Ajustes'}
            </Link>
          </li>
          <li className="sidebar-item">
            <button
              className="sidebar-link logout w-100 text-start"
              onClick={handleLogout}
              aria-label="Cerrar Sesión"
              title="Cerrar Sesión"
            >
              <Icon_Salir /> {collapsed ? '' : 'Cerrar Sesión'}
            </button>
          </li>
          <div className="separador"></div>
          <li className="sidebar-item">
            <Link
              to="#"
              className="sidebar-link"
              onClick={() => setCollapsed(!collapsed)}
              aria-label="Contraer/Expandir Sidebar"
            >
              {collapsed ? <Icon_Derecha /> : (<><Icon_Izquierda /> Contraer</>)}
            </Link>
          </li>
        </ul>
      </div>
    );
  }
};

export default SidebarMaster;
