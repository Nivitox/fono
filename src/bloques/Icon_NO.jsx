import React from 'react';

const Icon_NO = ({ stroke = 'white', fill = 'red', strokeWidth = 2 }) => (
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
            <circle cx="8.5" cy="8.5" r="8"/>
            <g transform="matrix(0 1 -1 0 17 0)">
                <path d="M5.5 11.5l6-6"/>
                <path d="M5.5 5.5l6 6"/>
            </g>
        </g>
    </svg>
);

export default Icon_NO;
