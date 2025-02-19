import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';
import Configuracion from './pages/Configuracion';
import Login from './pages/Login';
import Informes from './pages/Informes';
import Instituciones from './pages/Instituciones';
import Intervenciones from './pages/Intervenciones';
import Profesional from './pages/Profesional';
import Pacientes from './pages/Pacientes';
import AuthWrapper from './components/AuthWrapper';
import './App.css';
import SidebarMaster from './components/SidebarMaster';
import Icon_Paciente from './bloques/exp/Icon_Paleta'; // Importa el icono

const pageTitles = {
  '/Home': 'Inicio',
  '/Usuarios': 'Usuarios',
  '/Configuracion': 'Ajustes',
  '/Informes': 'Informes',
  '/Instituciones': 'Registro de Colegios',
  '/Intervenciones': 'Intervenciones',
  '/Pacientes': 'Datos de los Pacientes',
  '/Profesional': 'Datos del Profesional',
};

const ProtectedLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const pageTitle = pageTitles[currentPath] || 'Inicio';

  return (
    <div className="app-container">
      {/* Icono de fondo, detrás de todo */}


      <div className="sidebar-container">
        <SidebarMaster />
      </div>

      <div className="main-content">
        <header className="header">
          <h1 className="title">
            <strong>{pageTitle}</strong>
          </h1>
          <div className="subrayado"></div>
        </header>
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/configuracion" element={<Configuracion />} />
            <Route path="/informes" element={<Informes />} />
            <Route path="/instituciones" element={<Instituciones />} />
            <Route path="/intervenciones" element={<Intervenciones />} />
            <Route path="/pacientes" element={<Pacientes />} />
            <Route path="/profesional" element={<Profesional />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
          {/* <div className="background-icon">
            <Icon_Paciente />
          </div> */}
        </div>
      </div>
    </div>
  );
};


const App = () => {
  return (
    <Routes>
      {/* Ruta pública para Login */}
      <Route path="/login" element={<Login />} />
      {/* Rutas protegidas: la autenticación se evalúa en AuthWrapper */}
      <Route element={<AuthWrapper />}>
        <Route path="/*" element={<ProtectedLayout />} />
      </Route>
    </Routes>
  );
};

export default App;