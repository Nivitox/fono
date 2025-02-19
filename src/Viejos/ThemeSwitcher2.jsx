// src/components/ThemeSwitcher.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="btn btn-primary" onClick={toggleTheme}>
      🎨       ({theme})
    </button>
  );
};

export default ThemeSwitcher;