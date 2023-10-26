/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { format } from 'date-fns';
import React, { useContext } from 'react';

import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { name, slots, price } = treatment;
  const { user } = useContext(AuthContext);
  const date = format(selectedDate, 'PP');

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const treatmentName = name;
    const patientName = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;

    const booking = {
      treatmentName,
      patientName,
      slot,
      appointmentDate: date,
      email,
      phone,
      price
    };

    fetch('https://doctors-portal-server-chi-seven.vercel.app/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Booking Confirmed');

          setTreatment(null);
          refetch();
        } else {
          toast.error(`${data.message}`);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-xl mb-3 font-bold">{name}</h3>

          <form onSubmit={handleBooking} action="">
            <input
              name="date"
              defaultValue={date}
              type="text"
              disabled
              className="input input-bordered w-full mt-3 font-bold"
            />
            <select name="slot" className="select select-bordered w-full mt-3">
              {slots.map((slot, i) => (
                <option key={i} defaultValue={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              readOnly
              defaultValue={user?.displayName}
              placeholder="Full Name"
              className="input input-bordered w-full mt-3"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full mt-3"
            />
            <input
              name="email"
              type="text"
              readOnly
              defaultValue={user?.email}
              placeholder="Email"
              className="input input-bordered w-full mt-3"
            />
            <button className="mt-3 w-full btn  btn-primary text-white">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
