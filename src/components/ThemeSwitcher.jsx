// src/components/ThemeSwitcher.jsx

import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const {
    theme,
    toggleTheme,
    customThemes,
    setCustomThemes,
    setCustomTheme,
    setTheme, // Importamos setTheme
  } = useContext(ThemeContext);

  const deleteCustomTheme = (themeName) => {
    const updatedThemes = customThemes.filter((t) => t.name !== themeName);
    setCustomThemes(updatedThemes);
    localStorage.setItem('customThemes', JSON.stringify(updatedThemes));
    // Si el tema eliminado es el actual, volvemos al tema Light por defecto
    if (theme === themeName) {
      toggleTheme('light');
    }
    alert(`Tema "${themeName}" eliminado con éxito.`);
  };

  const handleThemeChange = (e) => {
    const selected = e.target.value;
    if (['arandano-claro', 'arandano-oscuro', 
      'menta-claro', 'menta-oscuro', 
      'ciruela-claro', 'ciruela-oscuro', 
      'naranjo-claro', 'naranjo-oscuro',
      'limon-claro', 'limon-oscuro',
      'alto-contraste-claro', 'alto-contraste-oscuro',
      'granada-claro', 'granada-oscuro'
    ].includes(selected)) {
      setCustomTheme(null);
      toggleTheme(selected);
    } else {
      const custom = customThemes.find((t) => t.name === selected);
      if (custom) {
        setCustomTheme(custom.colors);
        setTheme(selected); // Actualiza theme con el nombre del tema personalizado
      }
    }
  };

  return (
    <div className="theme-switcher">
      <label htmlFor="theme-selector">Seleccionar Tema:</label>
      <select id="theme-selector" value={theme} onChange={handleThemeChange}>
        <option value="arandano-claro">Arándano Claro</option>
        <option value="menta-claro">Menta Claro</option>
        <option value="ciruela-claro">Ciruelo Claro</option>
        <option value="naranjo-claro">Naranjo Claro</option>
        <option value="limon-claro">Limón Claro</option>
        <option value="granada-claro">Granada Claro</option>
        <option disabled> ──────────</option>
        <option value="arandano-oscuro">Arándano Oscuro</option>
        <option value="menta-oscuro">Menta Oscuro</option>
        <option value="ciruela-oscuro">Ciruelo Oscuro</option>
        <option value="naranjo-oscuro">Naranjo Oscuro</option>
        <option value="limon-oscuro">Limón Oscuro</option>
        <option value="granada-oscuro">Granada Oscuro</option>
        <option disabled> ──────────</option>
        <option value="alto-contraste-claro">Alto Contraste Claro</option>
        <option value="alto-contraste-oscuro">Alto Contraste Oscuro</option>
        {customThemes.map((t) => (
          <option key={t.name} value={t.name}>
            {t.name}
          </option>
        ))}
      </select>

      <div className="custom-themes-list">
        {customThemes.map((t) => (
          <div key={t.name} className="custom-theme-item">
            {/* <span>{t.name}</span>
            <button className="btn btn-danger" onClick={() => deleteCustomTheme(t.name)}>
              Eliminar
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
