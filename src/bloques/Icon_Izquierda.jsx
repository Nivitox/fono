import React from 'react';

const Icon_Izquierda = ({ stroke = 'currentColor', fill = 'none', strokeWidth = 2 }) => (
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
            transform="matrix(0 1 -1 0 17.5 3.5)"
        >
            <path 
                d="m3 7 4 4 4-4" 
            />
            <path 
                d="m7 0v11" 
            />
            <path 
                d="m0 14h14" 
            />
        </g>
    </svg>
);

export default Icon_Izquierda;