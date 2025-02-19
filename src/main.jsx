// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Color.css';
import './index.css';
import './firebaseConfig';
import { ThemeProvider } from './context/ThemeContext'; // Importa el ThemeProvider
import { UserProvider } from './context/UserContext'; // Importa el contexto

document.documentElement.setAttribute("data-theme", "menta-claro");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> {/* Envuelve la aplicación con ThemeProvider */}
      <UserProvider> {/* Envuelve la aplicación con UserProvider */}
        <Router>
          <App />
        </Router>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);