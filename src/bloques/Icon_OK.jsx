import React from 'react';

const Icon_OK = ({ stroke = 'white', fill = "var(--enfasis1)", strokeWidth = 2 }) => (
    <svg 
        width="21" 
        height="21" 
        viewBox="0 0 21 21" 
        fill={fill} 
        xmlns="http://www.w3.org/2000/svg"
    >
        <g 
            fill={fill}
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            transform="translate(2 2)"
        >
            <circle cx="8.5" cy="8.5" r="8" fill={fill}/>
            <path d="M5.5 9.5l2 2 5-5" fill='none' stroke={stroke}/>
        </g>
    </svg>
);

export default Icon_OK;
