/* eslint-disable react/prop-types */
import React from 'react';

const Review = ({ review }) => {
  const { desc, image, address, name } = review;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{desc}</p>
          <div className="card-actions justify-start items-center mt-5">
            <div className="avator">
              <div className="rounded-full ring ring-secondary ring-offset-2">
                <img className="w-16" src={image} alt="" />
              </div>
            </div>
            <div className="ms-5">
              <h4 className="font-bold text-xl">{name}</h4>
              <p>{address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
