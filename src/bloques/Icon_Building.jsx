import React from 'react';

const Icon_Building = ({ stroke = 'currentColor', fill = 'none', strokeWidth = 2 }) => (

    <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 24 24" 
        fill={fill} 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M3 21.0001H21M4 18.0001H20M6 18.0001V13.0001M10 18.0001V13.0001M14 18.0001V13.0001M18 18.0001V13.0001M12 7.00695L12.0074 7.00022M21 10.0001L14.126 3.88986C13.3737 3.2212 12.9976 2.88688 12.5732 2.75991C12.1992 2.64806 11.8008 2.64806 11.4268 2.75991C11.0024 2.88688 10.6263 3.2212 9.87404 3.88986L3 10.0001H21Z"
            stroke={stroke} 
            strokeWidth= {strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
    </svg>

);

export default Icon_Building;