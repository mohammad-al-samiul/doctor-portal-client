/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Appoinment from '../../../Assets/images/appointment.png';
import Doctor from '../../../Assets/images/doctor-small.png';
import Button from '../../../Components/Button/Button';

const MakeAppointment = () => {
  return (
    <div style={{ backgroundImage: `url(${Appoinment})` }} className="mt-32 bg-cover bg-no-repeat ">
      <div className="hero text-white ">
        <div className=" hero-content flex-col lg:flex-row p-0 m-0">
          <img src={Doctor} className="-mt-24 hidden lg:block rounded-lg" />
          <div className="lg:w-1/2 px-10 items-center pt-5">
            <h4 className="text-secondary font-bold">Appointment</h4>
            <h1 className="lg:text-4xl text-2xl font-bold">Make an Appointment Today</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsumis that it has a
              more-or-less normal distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop publishing packages and web
              page.
            </p>
            <Button>Get Started</Button>
            <div className="pb-8">{''}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
