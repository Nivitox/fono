import React from 'react';

const Icon_Informe = ({ stroke = 'currentColor', fill = 'none', strokeWidth = 2 }) => (
    <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 21 21" 
        fill={fill} 
        xmlns="http://www.w3.org/2000/svg"
    >
        <g 
            fill="none" 
            fillRule="evenodd" 
            stroke={stroke} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={strokeWidth} 
            transform="translate(4 3)"
        >
      <path d="M3.5 1.5c-.441-.0002-1.039-.0044-1.998-.005-.513-.0012-.936.3838-.995.881l-.007.119v10.998c.001.552.448 1 1 1l10 .006c.513.001.936-.384.994-.882l.006-.117v-11c0-.552-.448-1-1-1-.87-.0004-1.565.0002-2 0" />
      <path d="M4.5.5h4c.552 0 1 .448 1 1s-.448 1-1 1h-4c-.552 0-1-.448-1-1s.448-1 1-1z" />
      <path d="M2.5 5.5h5" />
      <path d="M2.5 7.5h7" />
      <path d="M2.5 9.5h3" />
      <path d="M2.5 11.5h6" />
        </g>
    </svg>
);

export default Icon_Informe;