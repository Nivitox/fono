{/* <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M21 12L14 5V9H3.8C3.51997 9 3.37996 9 3.273 9.0545C3.17892 9.10243 3.10243 9.17892 3.0545 9.273C3 9.37996 3 9.51997 3 9.8V14.2C3 14.48 3 14.62 3.0545 14.727C3.10243 14.8211 3.17892 14.8976 3.273 14.9455C3.37996 15 3.51997 15 3.8 15H14V19L21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
 </svg> */}

 import React from 'react';

const IconFDer = ({ stroke = 'currentColor', fill = 'none', strokeWidth = 2 }) => (
    <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 24 24" 
        fill={fill} 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M21 12L14 5V9H3.8C3.51997 9 3.37996 9 3.273 9.0545C3.17892 9.10243 3.10243 9.17892 3.0545 9.273C3 9.37996 3 9.51997 3 9.8V14.2C3 14.48 3 14.62 3.0545 14.727C3.10243 14.8211 3.17892 14.8976 3.273 14.9455C3.37996 15 3.51997 15 3.8 15H14V19L21 12Z" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
    </svg>
);

export default IconFDer;
