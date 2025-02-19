import React from 'react';

const Icon_User = ({ stroke = 'currentColor', fill = 'none', strokeWidth = 2 }) => (
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
            transform="translate(2 2)"
        >
            <circle cx="8.5" cy="8.5" r="8" strokeWidth={strokeWidth} />
            <path 
                d="m14.5 13.5c-.6615287-2.2735217-3.1995581-3.0251263-6-3.0251263-2.72749327 0-5.27073171.8688092-6 3.0251263" 
                strokeWidth={strokeWidth}
            />
            <path 
                d="m8.5 2.5c1.6568542 0 3 1.34314575 3 3v2c0 1.65685425-1.3431458 3-3 3-1.65685425 0-3-1.34314575-3-3v-2c0-1.65685425 1.34314575-3 3-3z" 
                strokeWidth={strokeWidth}
            />
        </g>
    </svg>
);

export default Icon_User;
