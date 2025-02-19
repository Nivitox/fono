// src/context/ThemeContext.jsx

import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem('currentTheme') || 'light';
  const [theme, setTheme] = useState(savedTheme);
  
  const savedCustomThemes = JSON.parse(localStorage.getItem('customThemes')) || [];
  const [customThemes, setCustomThemes] = useState(savedCustomThemes);
  
  const [customTheme, setCustomTheme] = useState(null);

  useEffect(() => {
    localStorage.setItem('currentTheme', theme);
    applyTheme();
  }, [theme, customTheme]);

  const applyTheme = () => {
    const root = document.documentElement;
    if (customTheme) {
      Object.entries(customTheme).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
    } else {
      root.removeAttribute('style');
      root.setAttribute('data-theme', theme);
    }
  };

  const toggleTheme = (newTheme) => {
    setCustomTheme(null);
    setTheme(newTheme);
  };

  const getCurrentColors = () => {
    const root = document.documentElement;
    const colors = {};
    [
      '--enfasis0', '--enfasis1', '--enfasis2', '--enfasis3', '--enfasis4', '--enfasis5', '--enfasis6', '--enfasis7', '--enfasis8', '--enfasis9',  '--enfasis10',
      '--text-color1', '--text-color2', '--text-color3', '--text-color4', 
      '--background-color0', '--background-color1', '--background-color2', '--background-color3', '--background-color4', '--background-color5', '--background-color6', '--background-color7', '--background-color8', '--background-color9', '--background-color10', 
      '--titulo1', '--titulo2', 
      '--danger1', '--danger2'  
    ].forEach((variable) => {
      colors[variable] = getComputedStyle(root).getPropertyValue(variable).trim();
    });
    return colors;
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme, // Exponemos setTheme para actualizar el valor
        toggleTheme,
        customThemes,
        setCustomThemes,
        customTheme,
        setCustomTheme,
        getCurrentColors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
