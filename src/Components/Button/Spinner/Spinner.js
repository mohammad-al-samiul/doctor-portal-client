import React from 'react';
import './Spinner.css';
const Spinner = () => {
  return (
    <div className="flex-box">
      <div className="w-12 h-12 rounded-full animate-spin border-4 border-dashed border-secondary border-t-transparent"></div>
    </div>
  );
};

export default Spinner;
