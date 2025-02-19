import React from 'react';

const Icon_Patient = ({ stroke = 'none', fill = 'currentColor', width = 24, height = 24 }) => (
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
      d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" 
      clipRule="evenodd"
    />
  </svg>
);

export default Icon_Patient;
