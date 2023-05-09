/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './AppointmentCard.css';
const AppointmentCard = ({ card, setTreatment }) => {
  const { name, slots } = card;

  return (
    <div className="card w-96 shadow-2xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
        <p>
          {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available
        </p>

        {slots.length === 0 ? (
          <>
            <button className="btn-disabled btn"> Book Appointment</button>
          </>
        ) : (
          <>
            <label
              onClick={() => setTreatment(card)}
              htmlFor="booking-modal"
              className=" btn button text-white">
              Book Appointment
            </label>
          </>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;
