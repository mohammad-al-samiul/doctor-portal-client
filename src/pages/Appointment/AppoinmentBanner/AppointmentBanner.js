/* eslint-disable react/prop-types */
import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../Assets/images/chair.png';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col lg:flex-row-reverse lg:px-10 ms-10">
        <img className="w-1/2" src={chair} />
        <div className="me-10">
          <DayPicker mode="single" selected={selectedDate} onSelect={setSelectedDate} />
          <p>You picked {format(selectedDate, 'PP')} </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
