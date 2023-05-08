/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../../../../Components/Button/Button';

const AppointmentCard = ({ card }) => {
  const { name, slots } = card;
  // console.log(slots);

  return (
    <div className="card w-96 shadow-2xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
        <p>
          {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available
        </p>
        <Button>Book Appointment</Button>
      </div>
    </div>
  );
};

export default AppointmentCard;
