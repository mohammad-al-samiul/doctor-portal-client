import React from 'react';
import Cavity from '../../../Assets/images/cavity.png';
import Fluoriode from '../../../Assets/images/fluoride.png';
import Teeth from '../../../Assets/images/whitening.png';
import Service from './Service/Service';
const Services = () => {
  const serviceInfo = [
    {
      id: 1,
      name: 'Fluoride Treatment',
      desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      icon: Fluoriode
    },
    {
      id: 2,
      name: 'Cavity Filling',
      desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      icon: Cavity
    },
    {
      id: 3,
      name: 'Teeth Whitening',
      desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      icon: Teeth
    }
  ];
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {serviceInfo.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
    </div>
  );
};

export default Services;
