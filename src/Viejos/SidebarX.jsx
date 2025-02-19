import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import './SidebarX.css'; // Archivo CSS unificado
import ThemeSwitcher from './ThemeSwitcher';

// Iconos (se importan todos los que se usan en ambos layouts)
import Icon_FDer from '../bloques/Icon_FDer';
import Icon_FIzq from '../bloques/Icon_FIzq';
import Icon_Derecha from '../bloques/Icon_Derecha';
import Icon_Izquierda from '../bloques/Icon_Izquierda';
import Icon_Home from '../bloques/Icon_Home';
import Icon_Maleta from '../bloques/Icon_Maleta';
import Icon_Institucion from '../bloques/Icon_Institucion';
import Icon_Paciente from '../bloques/Icon_Paciente';
import Icon_Intervencion from '../bloques/Icon_Intervencion';
import Icon_Informe from '../bloques/Icon_Informe';
import Icon_User from '../bloques/Icon_User';
import Icon_Configuracion from '../bloques/Icon_Configuracion';
import Icon_Salir from '../bloques/Icon_Salir';

const SidebarX = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Detecta la orientación: si el alto es mayor que el ancho, asumimos portrait.
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  // Estado para el toggle de íconos en el layout inferior (portrait)
  const [showFirstIcons, setShowFirstIcons] = useState(true);

  // Estado para colapsar el sidebar lateral (landscape)
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const portrait = window.innerHeight > window.innerWidth;
      console.log("Orientation:", portrait ? "Portrait" : "Landscape");
      setIsPortrait(portrait);
    };
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsPortrait(window.innerHeight > window.innerWidth);
  }, []);

  // Función común para cerrar sesión
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


  // Función para alternar los íconos en el layout inferior
  const toggleIcons = () => {
    setShowFirstIcons(!showFirstIcons);
  };

  // Renderiza el layout de barra inferior (portrait)
  const renderBottomBar = () => (
    <div className="bottom-bar sidebarx">
      <div className="bottom-bar-left">
        <Link
          to="/Home"
          className={`menu-link fijo ${location.pathname === '/Home' ? 'active-link' : ''}`}
          aria-label="Inicio"
          title="Inicio"
          onClick={() => setShowFirstIcons(true)}
        >
          <Icon_Home />
        </Link>
      </div>
      <div className="separator"></div>
      <div className="button-tape">
        <div className="icon-tape-container">
          <div className="icon-tape">
            {showFirstIcons ? (
              <div className="parte-1">
                <Link
                  to="/Pacientes"
                  className={`menu-link ${location.pathname === '/Pacientes' ? 'active-link' : ''}`}
                  aria-label="Pacientes"
                  title="Pacientes"
                >
                  <Icon_Paciente />
                  <span className="icon-label">Pacientes</span>
                </Link>
                <Link
                  to="/Intervenciones"
                  className={`menu-link ${location.pathname === '/Intervenciones' ? 'active-link' : ''}`}
                  aria-label="Intervenciones"
                  title="Intervenciones"
                >
                  <Icon_Intervencion />
                  <span className="icon-label">Intervenciones</span>
                </Link>
                <Link
                  to="/Informes"
                  className={`menu-link ${location.pathname === '/Informes' ? 'active-link' : ''}`}
                  aria-label="Informes"
                  title="Informes"
                >
                  <Icon_Informe />
                  <span className="icon-label">Informes</span>
                </Link>
                <Link
                  to="/Profesional"
                  className={`menu-link ${location.pathname === '/Profesional' ? 'active-link' : ''}`}
                  aria-label="Profesional"
                  title="Profesional"
                >
                  <Icon_Maleta />
                  <span className="icon-label">Profesional</span>
                </Link>
              </div>
            ) : (
              <div className="parte-2">
                <Link
                  to="/Instituciones"
                  className={`menu-link ${location.pathname === '/Instituciones' ? 'active-link' : ''}`}
                  aria-label="Instituciones"
                  title="Instituciones"
                >
                  <Icon_Institucion />
                  <span className="icon-label">Instituciones</span>
                </Link>
                <Link
                  to="/Usuarios"
                  className={`menu-link ${location.pathname === '/Usuarios' ? 'active-link' : ''}`}
                  aria-label="Usuarios"
                  title="Usuarios"
                >
                  <Icon_User />
                  <span className="icon-label">Usuarios</span>
                </Link>
                <Link
                  to="/Configuracion"
                  className={`menu-link ${location.pathname === '/Configuracion' ? 'active-link' : ''}`}
                  aria-label="Configuración"
                  title="Configuración"
                >
                  <Icon_Configuracion />
                  <span className="icon-label">Ajustes</span>
                </Link>
                <button
                  className="logout menu-link"
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
      <div className="separator"></div>
      <div className="bottom-bar-right fijo">
        {showFirstIcons ? (
          <button
            className="menu-link fijo"
            onClick={toggleIcons}
            aria-label="Siguiente"
            title="Siguiente"
          >
            <Icon_FDer />
          </button>
        ) : (
          <button
            className="menu-link fijo"
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

  // Renderiza el layout de sidebar lateral (landscape)
  const renderLeftSidebar = () => (
    <div className={`sidebar sidebarx ${collapsed ? 'collapsed-sidebar' : ''}`}>
      <ul className="sidebar-list flex-column mb-auto">
        <li className="sidebar-item">
          <Link
            to="/Home"
            className={`sidebar-link ${location.pathname === '/Home' ? 'active-link' : ''}`}
            aria-label="Inicio"
            title="Inicio"
          >
            <Icon_Home /> {!collapsed && 'Inicio'}
          </Link>
        </li>
        <div className="separator"></div>
        <li className="sidebar-item">
          <Link
            to="/Pacientes"
            className={`sidebar-link ${location.pathname === '/Pacientes' ? 'active-link' : ''}`}
            aria-label="Pacientes"
            title="Pacientes"
          >
            <Icon_Paciente /> {!collapsed && 'Pacientes'}
          </Link>
        </li>
        <li className="sidebar-item">
          <Link
            to="/Intervenciones"
            className={`sidebar-link ${location.pathname === '/Intervenciones' ? 'active-link' : ''}`}
            aria-label="Intervenciones"
            title="Intervenciones"
          >
            <Icon_Intervencion /> {!collapsed && 'Intervenciones'}
          </Link>
        </li>
        <li className="sidebar-item">
          <Link
            to="/Informes"
            className={`sidebar-link ${location.pathname === '/Informes' ? 'active-link' : ''}`}
            aria-label="Informes"
            title="Informes"
          >
            <Icon_Informe /> {!collapsed && 'Informes'}
          </Link>
        </li>
        <li className="sidebar-item">
          <Link
            to="/Profesional"
            className={`sidebar-link ${location.pathname === '/Profesional' ? 'active-link' : ''}`}
            aria-label="Profesional"
            title="Profesional"
          >
            <Icon_Maleta /> {!collapsed && 'Profesional'}
          </Link>
        </li>
        <li className="sidebar-item">
          <Link
            to="/Instituciones"
            className={`sidebar-link ${location.pathname === '/Instituciones' ? 'active-link' : ''}`}
            aria-label="Instituciones"
            title="Instituciones"
          >
            <Icon_Institucion /> {!collapsed && 'Instituciones'}
          </Link>
        </li>
      </ul>
      <ul className="sidebar-list flex-column mt-auto">
        <li className="sidebar-item">
          {/* Puedes agregar el ThemeSwitcher aquí si lo requieres */}
          {/* <ThemeSwitcher /> */}
        </li>
        <li className="sidebar-item">
          <Link
            to="/Usuarios"
            className={`sidebar-link ${location.pathname === '/Usuarios' ? 'active-link' : ''}`}
            aria-label="Usuarios"
            title="Usuarios"
          >
            <Icon_User /> {!collapsed && 'Usuarios'}
          </Link>
        </li>
        <li className="sidebar-item">
          <Link
            to="/Configuracion"
            className={`sidebar-link ${location.pathname === '/Configuracion' ? 'active-link' : ''}`}
            aria-label="Configuración"
            title="Ajustes"
          >
            <Icon_Configuracion /> {!collapsed && 'Ajustes'}
          </Link>
        </li>
        <li className="sidebar-item">
          <button
            className="sidebar-link logout"
            onClick={handleLogout}
            aria-label="Cerrar Sesión"
            title="Cerrar Sesión"
          >
            <Icon_Salir /> {!collapsed && 'Cerrar Sesión'}
          </button>
        </li>
        <div className="separator"></div>
        <li className="sidebar-item">
          <Link
            to="#"
            className="sidebar-link"
            onClick={() => setCollapsed(!collapsed)}
            aria-label="Contraer/Expandir Sidebar"
          >
            {collapsed ? <Icon_Derecha /> : <><Icon_Izquierda /> {!collapsed && 'Contraer'}</>}
          </Link>
        </li>
      </ul>
    </div>
  );

  return isPortrait ? renderBottomBar() : renderLeftSidebar();
};

export default SidebarX;
