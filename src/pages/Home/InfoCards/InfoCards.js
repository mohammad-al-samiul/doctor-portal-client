import React from 'react';
import clock from '../../../Assets/icons/clock.svg';
import marker from '../../../Assets/icons/marker.svg';
import phone from '../../../Assets/icons/phone.svg';
import InfoCard from './InfoCard/InfoCard';

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: 'Opening Hours',
      description: 'Open 9.00 am to 5.00pm everyday',
      icon: clock,
      bgClass: 'bg-gradient-to-r from-secondary to-accent '
    },
    {
      id: 2,
      name: 'Visit our Location',
      description: 'Brooklyn, NY 10036, United States',
      icon: marker,
      bgClass: 'bg-primary'
    },
    {
      id: 3,
      name: 'Contact Us Now',
      description: '+000123456789',
      icon: phone,
      bgClass: 'bg-gradient-to-r from-accent to-secondary'
    }
  ];
  return (
    <div className="lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
