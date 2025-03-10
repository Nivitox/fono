import React from 'react';

const Icon_Portrait = ({ stroke = 'currentColor', fill = 'none', strokeWidth = 2 }) => (

    <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 24 24" 
        fill={fill} 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M15 15.5C14.7164 14.3589 13.481 13.5 12 13.5C10.519 13.5 9.28364 14.3589 9 15.5M12 9.5H12.01M13 9.5C13 10.0523 12.5523 10.5 12 10.5C11.4477 10.5 11 10.0523 11 9.5C11 8.94772 11.4477 8.5 12 8.5C12.5523 8.5 13 8.94772 13 9.5ZM7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z"
            stroke={stroke} 
            strokeWidth= {strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
    </svg>

);

export default Icon_Portrait;