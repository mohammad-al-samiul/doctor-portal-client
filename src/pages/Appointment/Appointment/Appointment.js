import React, { useState } from 'react';
import AppointmentBanner from '../AppoinmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <AvailableAppointment selectedDate={selectedDate} />
    </div>
  );
};

export default Appointment;
