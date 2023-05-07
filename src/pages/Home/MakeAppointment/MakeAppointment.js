/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Appoinment from '../../../Assets/images/appointment.png';
import Doctor from '../../../Assets/images/doctor-small.png';
import Button from '../../../Components/Button/Button';

const MakeAppointment = () => {
  return (
    <div className="mt-20">
      <div className="hero min-h-screen text-white">
        <div
          style={{ backgroundImage: `url(${Appoinment})` }}
          className="hero-content flex-col lg:flex-row p-0 m-0">
          <img src={Doctor} className="-mt-24 hidden lg:block max-w-lg rounded-lg " />
          <div className="lg:w-1/2 p-10">
            <h4 className="text-secondary font-bold">Appointment</h4>
            <h1 className="lg:text-5xl text-2xl font-bold">Make an Appointment Today</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsumis that it has a
              more-or-less normal distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop publishing packages and web
              page.
            </p>
            <Button>Get Started</Button>
            <div className="pt-20">{''}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
