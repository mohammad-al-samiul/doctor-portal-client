/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Spinner from '../../../Components/Button/Spinner/Spinner';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentCard from './AppointmentCard/AppointmentCard';

const AvailableAppointment = ({ selectedDate }) => {
  // const [appointment, setAppointment] = useState([]);
  const [treatment, setTreatment] = useState(null);
  // const [loading, setLoading] = useState(false);

  const { data: appointment = [], isLoading } = useQuery({
    queryKey: ['appointmentOptions'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/appointmentOptions');
      const data = await res.json();
      return data;
      // queryFn: () => fetch('http://localhost:5000/appointmentOptions').then((res) => res.json())
    }
  });

  if (isLoading) {
    return <Spinner />;
  }
  // useEffect(() => {
  //   setLoading(true);
  //   fetch('http://localhost:5000/appointmentOptions')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAppointment(data);
  //       setLoading(false);
  //     });
  // }, []);

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
            selectedDate={selectedDate}></BookingModal>
        )}
      </div>
    </section>
  );
};

export default AvailableAppointment;
