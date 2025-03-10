import React from 'react';

const Icon_Borrar = ({ stroke = 'currentColor', fill = 'none', strokeWidth = 2 }) => (

    <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 24 24" 
        fill={fill} 
        xmlns="http://www.w3.org/2000/svg"
    >
<g
      fillRule="evenodd"
      stroke={stroke}
      strokeWidth= {strokeWidth} 
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="matrix(0 -1 1 0 2.5 15.5)"
    >
      <path d="m0 5.82842712v7.17157288c0 1.1045695.8954305 2 2 2h6c1.1045695 0 2-.8954305 2-2v-7.17157288c0-.53043297-.21071368-1.0391408-.58578644-1.41421356l-3.70710678-3.70710678c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0l-3.70710678 3.70710678c-.37507276.37507276-.58578644.88378059-.58578644 1.41421356z"/>
      <g transform="matrix(0 1 -1 0 14 4)">
        <path d="m3 11 4-4"/>
        <path d="m3 7 4 4"/>
      </g>
    </g>
    </svg>

);

export default Icon_Borrar;