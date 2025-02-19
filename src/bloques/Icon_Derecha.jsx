import React from 'react';

const Icon_Derecha = ({ stroke = 'currentColor', fill = 'none', strokeWidth = 2 }) => (
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
            transform="translate(3 3)"
        >
            <path 
                d="m5.5 9.5 4-4 4 4" 
                transform="matrix(0 1 -1 0 17 -2)" 
            />
            <path 
                d="m11.5 7.5h-11" 
            />
            <path 
                d="m14.5.5v14" 
            />
        </g>
    </svg>
);

export default Icon_Derecha;