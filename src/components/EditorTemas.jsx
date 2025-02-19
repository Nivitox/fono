// src/components/EditorTemas.jsx

import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const EditorTemas = () => {
  const {
    customThemes,
    setCustomThemes,
    setCustomTheme,
    getCurrentColors,
    theme,
    customTheme,
  } = useContext(ThemeContext);

  const [customColors, setCustomColors] = useState({});
  const [originalColors, setOriginalColors] = useState({});
  const [themeName, setThemeName] = useState('');

  useEffect(() => {
    const colors = getCurrentColors();

    // Asegúrate de que todas las variables se incluyan, tanto las antiguas como las nuevas
    const updatedColors = {
      '--enfasis0': colors['--enfasis0'] || '#6d2b8b',
      '--enfasis1': colors['--enfasis1'] || '#7b369a',
      '--enfasis2': colors['--enfasis2'] || '#8e44ad',
      '--enfasis3': colors['--enfasis3'] || '#934db2',
      '--enfasis4': colors['--enfasis4'] || '#9b59b6',
      '--enfasis5': colors['--enfasis5'] || '#a56abc',  // Este estaba pendiente
      '--enfasis6': colors['--enfasis6'] || '#b37fc4',  // Este estaba pendiente
      '--enfasis7': colors['--enfasis7'] || '#c08fcc',  // Este estaba pendiente
      '--enfasis8': colors['--enfasis8'] || '#d3a5dd',  // Este estaba pendiente
      '--enfasis9': colors['--enfasis9'] || '#e2c1e9',  // Este estaba pendiente
      '--enfasis10': colors['--enfasis10'] || '#f1dbf3',  // Este estaba pendiente
      
      '--text-color1': colors['--text-color1'] || '#2c3e50',
      '--text-color2': colors['--text-color2'] || '#34495e',
      '--text-color3': colors['--text-color3'] || '#ecf0f1',
      '--text-color4': colors['--text-color4'] || '#ecf0f1',
      
      '--background-color0': colors['--background-color0'] || '#ffffff',  // Este estaba pendiente
      '--background-color1': colors['--background-color1'] || '#f5f5f5',
      '--background-color2': colors['--background-color2'] || '#e4e4e4',
      '--background-color3': colors['--background-color3'] || '#cccccc',
      '--background-color4': colors['--background-color4'] || '#b7b7b7',
      '--background-color5': colors['--background-color5'] || '#9e9e9e',  // Este estaba pendiente
      '--background-color6': colors['--background-color6'] || '#888888',  // Este estaba pendiente
      '--background-color7': colors['--background-color7'] || '#6f6f6f',  // Este estaba pendiente
      '--background-color8': colors['--background-color8'] || '#555555',  // Este estaba pendiente
      '--background-color9': colors['--background-color9'] || '#3c3c3c',  // Este estaba pendiente
      '--background-color10': colors['--background-color10'] || '#222222',  // Este estaba pendiente
      
      '--titulo1': colors['--titulo1'] || '#6c3483',
      '--titulo2': colors['--titulo2'] || '#8e44ad',
      '--danger1': colors['--danger1'] || '#e74c3c',
      '--danger2': colors['--danger2'] || '#c0392b',
    };

    setCustomColors(updatedColors);
    setOriginalColors(updatedColors);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const colors = getCurrentColors();
      const updatedColors = {
        '--enfasis0': colors['--enfasis0'] || '#6d2b8b',
        '--enfasis1': colors['--enfasis1'] || '#7b369a',
        '--enfasis2': colors['--enfasis2'] || '#8e44ad',
        '--enfasis3': colors['--enfasis3'] || '#934db2',
        '--enfasis4': colors['--enfasis4'] || '#9b59b6',
        '--enfasis5': colors['--enfasis5'] || '#a56abc',  // Este estaba pendiente
        '--enfasis6': colors['--enfasis6'] || '#b37fc4',  // Este estaba pendiente
        '--enfasis7': colors['--enfasis7'] || '#c08fcc',  // Este estaba pendiente
        '--enfasis8': colors['--enfasis8'] || '#d3a5dd',  // Este estaba pendiente
        '--enfasis9': colors['--enfasis9'] || '#e2c1e9',  // Este estaba pendiente
        '--enfasis10': colors['--enfasis10'] || '#f1dbf3',  // Este estaba pendiente
        
        '--text-color1': colors['--text-color1'] || '#2c3e50',
        '--text-color2': colors['--text-color2'] || '#34495e',
        '--text-color3': colors['--text-color3'] || '#ecf0f1',
        '--text-color4': colors['--text-color4'] || '#ecf0f1',
        
        '--background-color0': colors['--background-color0'] || '#ffffff',  // Este estaba pendiente
        '--background-color1': colors['--background-color1'] || '#f5f5f5',
        '--background-color2': colors['--background-color2'] || '#e4e4e4',
        '--background-color3': colors['--background-color3'] || '#cccccc',
        '--background-color4': colors['--background-color4'] || '#b7b7b7',
        '--background-color5': colors['--background-color5'] || '#9e9e9e',  // Este estaba pendiente
        '--background-color6': colors['--background-color6'] || '#888888',  // Este estaba pendiente
        '--background-color7': colors['--background-color7'] || '#6f6f6f',  // Este estaba pendiente
        '--background-color8': colors['--background-color8'] || '#555555',  // Este estaba pendiente
        '--background-color9': colors['--background-color9'] || '#3c3c3c',  // Este estaba pendiente
        '--background-color10': colors['--background-color10'] || '#222222',  // Este estaba pendiente
        
        '--titulo1': colors['--titulo1'] || '#6c3483',
        '--titulo2': colors['--titulo2'] || '#8e44ad',
        '--danger1': colors['--danger1'] || '#e74c3c',
        '--danger2': colors['--danger2'] || '#c0392b',
      };

      setCustomColors(updatedColors);
    }, 50);
    return () => clearTimeout(timer);
  }, [theme, customTheme]);

  const handleColorChange = (variable, color) => {
    setCustomColors((prevColors) => ({
      ...prevColors,
      [variable]: color,
    }));
    document.documentElement.style.setProperty(variable, color);
  };

  const saveCustomTheme = () => {
    if (!customColors || Object.keys(customColors).length === 0) {
      alert('No hay colores para guardar.');
      return;
    }

    const inputName = prompt('Ingresa un nombre para el tema:');
    if (!inputName) return;

    const newTheme = { name: inputName, colors: customColors };
    const savedThemes = JSON.parse(localStorage.getItem('customThemes')) || [];
    const updatedThemes = [...savedThemes.filter((t) => t.name !== inputName), newTheme];

    localStorage.setItem('customThemes', JSON.stringify(updatedThemes));
    setCustomThemes(updatedThemes);
    setCustomTheme(customColors);

    alert(`Tema "${inputName}" guardado y aplicado.`);
    setThemeName('');
  };

  const deleteCustomTheme = () => {
    if (!customTheme) return;
    const savedThemes = JSON.parse(localStorage.getItem('customThemes')) || [];
    const currentThemeEntry = savedThemes.find(
      (t) => JSON.stringify(t.colors) === JSON.stringify(customTheme)
    );
    if (!currentThemeEntry) return;
    const updatedThemes = savedThemes.filter((t) => t.name !== currentThemeEntry.name);
    localStorage.setItem('customThemes', JSON.stringify(updatedThemes));
    setCustomThemes(updatedThemes);
    setCustomTheme(null);
    alert(`Tema "${currentThemeEntry.name}" eliminado. Se volverá al tema Light.`);
  };

  return (
    <div className="editor-temas">
      <h2>Editor de Temas</h2>
      <table className="theme-table">
        <thead>
          <tr>
            <th>Variable CSS</th>
            <th>Color Anterior</th>
            <th>Código Original</th>
            <th>Selector de Color</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(customColors).map(([variable, color]) => (
            <tr key={variable}>
              <td>{variable}</td>
              <td>
                <div
                  className="color-preview"
                  style={{
                    backgroundColor: originalColors[variable] || color,
                    width: '30px',
                    height: '30px',
                    border: '1px solid #ccc',
                  }}
                ></div>
              </td>
              <td>{originalColors[variable] || color}</td>
              <td>
                <div
                  className="color-preview"
                  style={{
                    backgroundColor: color,
                    width: '30px',
                    height: '30px',
                    border: '1px solid #ccc',
                  }}
                ></div>
              </td>
              <td>{color}</td>
              <td>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => handleColorChange(variable, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-success" onClick={saveCustomTheme}>
        Guardar Tema Personalizado
      </button>
      {customTheme && (
        <button className="btn btn-danger" onClick={deleteCustomTheme} style={{ marginLeft: '10px' }}>
          Eliminar Tema Personalizado
        </button>
      )}
    </div>
  );
};

export default EditorTemas;
