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
    setCustomColors(colors);
    setOriginalColors(colors);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const colors = getCurrentColors();
      setCustomColors(colors);
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
