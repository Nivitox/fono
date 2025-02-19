import React from 'react';

const Icon_Maleta = ({ stroke = 'currentColor', fill = 'none', strokeWidth = 2 }) => (
    <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 21 21" 
        fill={fill} 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="m2.49999919 3.5h10.00000001c1.1045695 0 2 .8954305 2 2v5c0 1.1045695-.8954305 2-2 2h-10.00000001c-1.1045695 0-2-.8954305-2-2v-5c0-1.1045695.8954305-2 2-2zm4.00000081-3h2c1.1045695 0 2 .8954305 2 2v1h-6v-1c0-1.1045695.8954305-2 2-2z" 
            fill="none" 
            stroke={stroke} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={strokeWidth} 
            transform="translate(3 4)"
        />
    </svg>
);

export default Icon_Maleta;