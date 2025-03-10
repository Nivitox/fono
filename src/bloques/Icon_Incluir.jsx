import React from 'react';

const Icon_Incluir = ({ stroke = 'currentColor', fill = 'none', strokeWidth = 2 }) => (
  <svg 
    width="100%" 
    height="100%" 
    viewBox="0 0 24 24" 
    fill={fill} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M12 13V7M9 10H15M19 21V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8V21L12 17L19 21Z" 
      stroke={stroke} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

export default Icon_Incluir;
