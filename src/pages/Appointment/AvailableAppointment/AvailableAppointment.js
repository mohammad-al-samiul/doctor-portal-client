/* eslint-disable react/prop-types */
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard/AppointmentCard';
const AvailableAppointment = ({ selectedDate }) => {
  const [appointment, setAppointment] = useState([]);

  useEffect(() => {
    fetch('appointmentOptions.json')
      .then((res) => res.json())
      .then((data) => {
        setAppointment(data);
      });
  }, []);

  return (
    <section className="mt-20">
      <h1 className="text-center text-secondary font-bold mb-10">
        Available Appointments on {format(selectedDate, 'PP')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {appointment.map((card, i) => (
          <AppointmentCard key={i} card={card}></AppointmentCard>
        ))}
      </div>
    </section>
  );
};

export default AvailableAppointment;
