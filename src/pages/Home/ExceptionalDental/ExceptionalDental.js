/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Treatment from '../../../Assets/images/treatment.png';
import Button from '../../../Components/Button/Button';

const ExceptionalDental = () => {
  return (
    <div>
      <div className="hero mt-20">
        <div className="hero-content flex-col lg:flex-row">
          <img className="lg:w-1/2 rounded-lg" src={Treatment} />
          <div className="px-5">
            <h1 className="lg:text-5xl font-bold text-3xl">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsumis that it has a
              more-or-less normal distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop publishing packages and web
              page.
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExceptionalDental;
