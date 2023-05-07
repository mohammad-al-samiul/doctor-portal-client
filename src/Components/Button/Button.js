/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ children }) => {
  return (
    <div>
      <button className="btn text-white border-none bg-gradient-to-r from-secondary to-accent shadow-2xl">
        {children}
      </button>
    </div>
  );
};

export default Button;
