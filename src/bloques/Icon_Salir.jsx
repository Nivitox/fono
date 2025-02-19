import React from 'react';

const Icon_Salir = ({ stroke = 'currentColor', fill = 'none', strokeWidth = 2 }) => (
    <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 21 21" 
        fill={fill} 
        xmlns="http://www.w3.org/2000/svg"
    >
        <g 
            fill="none" 
            stroke={stroke} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            transform="translate(4 3)"
        >
            <path 
                d="m10.595 10.5 2.905-3-2.905-3" 
                strokeWidth={strokeWidth}
            />
            <path 
                d="m13.5 7.5h-9" 
                strokeWidth={strokeWidth}
            />
            <path 
                d="m10.5.5-8 .002c-1.104.001-1.999.896-2 2v9.994c0 1.105.895 2 2 2h8.095" 
                strokeWidth={strokeWidth}
            />
        </g>
    </svg>
);

export default Icon_Salir;
