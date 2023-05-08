/* eslint-disable react/prop-types */
import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../Assets/images/chair.png';
import './AppointmentBanner.css';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col lg:flex-row-reverse lg:px-10 lg:ms-10">
        <img className="lg:w-1/2" src={chair} />
        <div className="lg:me-10">
          <DayPicker mode="single" selected={selectedDate} onDayClick={setSelectedDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
