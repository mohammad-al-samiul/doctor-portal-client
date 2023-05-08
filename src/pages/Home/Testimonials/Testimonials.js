import React from 'react';
import Quote from '../../../Assets/icons/quote.svg';
import People1 from '../../../Assets/images/people1.png';
import People2 from '../../../Assets/images/people2.png';
import People3 from '../../../Assets/images/people3.png';
import Testimonial from './Testimonial/Testimonial';

const Testimonials = () => {
  const testimonialInfo = [
    {
      id: 1,
      desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.',
      name: 'Winson Herry',
      address: 'California',
      image: People1
    },
    {
      id: 2,
      desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.',
      name: 'Winson Herry',
      address: 'California',
      image: People2
    },
    {
      id: 3,
      desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.',
      name: 'Winson Herry',
      address: 'California',
      image: People3
    }
  ];
  return (
    <div
      style={{ backgroundImage: `url(${Quote})` }}
      className="mt-20  bg-right-top bg-no-repeat bg-[length:200px_100px]">
      <div>
        <h4 className="text-secondary font-bold text-lg">Testimonial</h4>
        <p className="text-3xl">What Our Patients Says</p>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {testimonialInfo.map((card) => (
          <Testimonial key={card.id} card={card}></Testimonial>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
