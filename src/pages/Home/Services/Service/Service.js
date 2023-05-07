/* eslint-disable react/prop-types */
import React from 'react';

const Service = ({ service }) => {
  const { name, icon, desc } = service;
  return (
    <div>
      <div className="card shadow-xl bg-neutral text-black">
        <div className="card-body items-center text-center">
          <img src={icon} alt="" />
          <h2 className="card-title">{name}</h2>
          <p> {desc} </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
