import React from 'react';

const Icon_Reporte = ({ stroke = 'none', fill = 'currentColor', width = 24, height = 24 }) => (
  <svg 
    className="w-6 h-6 text-gray-800 dark:text-white" 
    aria-hidden="true" 
    xmlns="http://www.w3.org/2000/svg" 
    width={width} 
    height={height} 
    fill={fill} 
    viewBox="0 0 24 24"
  >
    <path 
      fillRule="evenodd" 
      d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" 
      clipRule="evenodd"
    />
  </svg>
);

export default Icon_Reporte;
