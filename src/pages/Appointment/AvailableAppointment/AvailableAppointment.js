/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Spinner from '../../../Components/Button/Spinner/Spinner';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentCard from './AppointmentCard/AppointmentCard';

const AvailableAppointment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, 'PP');
  const {
    data: appointment = [],
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['appointmentOptions', date],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-b93i.onrender.com/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    }
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="mt-20">
      <h1 className="text-center text-secondary font-bold mb-10">
        Available Appointments on {format(selectedDate, 'PP')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {appointment.map((card, i) => (
          <AppointmentCard key={i} card={card} setTreatment={setTreatment}></AppointmentCard>
        ))}
      </div>
      <div>
        {treatment && (
          <BookingModal
            setTreatment={setTreatment}
            treatment={treatment}
            selectedDate={selectedDate}
            refetch={refetch}></BookingModal>
        )}
      </div>
    </section>
  );
};

export default AvailableAppointment;
