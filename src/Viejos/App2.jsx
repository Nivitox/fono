import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SidebarL from './components/SidebarL';
import SidebarD from './components/SidebarD';
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';
import Configuracion from './pages/Configuracion';
import Login from './pages/Login';
import Informes from './pages/informes';
import Instituciones from './pages/Instituciones';
import Intervenciones from './pages/Intervenciones';
import Profesional from './pages/Profesional';
import Pacientes from './pages/Pacientes';
import AuthWrapper from './components/AuthWrapper';
import './App.css';
import SidebarX from './components/SidebarX';

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

  const location = useLocation(); // Obtiene la ruta actual
  const currentPath = location.pathname; // Extrae la ruta
  const pageTitle = pageTitles[currentPath] || 'Inicio'; // Obtiene el título

  return (
    <div className="app-container">
      <div className='sidebar-container'>
        <div className='sidebarL'>
          <SidebarL />
        </div>
        <div className='sidebarD'>
          <SidebarD />
        </div>
      </div>
      <div className="main-content">
        <header className="header">
          <h1 className="title"><strong>{pageTitle}</strong></h1>
          <div className='subrayado'></div>
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

      {/* Rutas protegidas: se evalúa la autenticación en AuthWrapper */}
      <Route element={<AuthWrapper />}>
        {/* Cualquier ruta que no sea /login pasará por AuthWrapper */}
        <Route path="/*" element={<ProtectedLayout />} />
      </Route>
    </Routes>
  );
};

export default App;