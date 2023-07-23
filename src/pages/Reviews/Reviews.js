import React from 'react';
import People1 from '../../Assets/images/people1.png';
import People2 from '../../Assets/images/people2.png';
import People3 from '../../Assets/images/people3.png';
import Review from './Review';

const Reviews = () => {
  const reviewInfo = [
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
    },
    {
      id: 4,
      desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.',
      name: 'Winson Herry',
      address: 'California',
      image: People1
    },
    {
      id: 5,
      desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.',
      name: 'Winson Herry',
      address: 'California',
      image: People2
    },
    {
      id: 6,
      desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.',
      name: 'Winson Herry',
      address: 'California',
      image: People3
    },
    {
      id: 7,
      desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.',
      name: 'Winson Herry',
      address: 'California',
      image: People1
    },
    {
      id: 8,
      desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.',
      name: 'Winson Herry',
      address: 'California',
      image: People2
    },
    {
      id: 9,
      desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.',
      name: 'Winson Herry',
      address: 'California',
      image: People3
    }
  ];
  return (
    <div>
      <div className="mt-10">
        <p className="text-center text-3xl font-bold">What Our Patients Says</p>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {reviewInfo.map((review, i) => (
          <Review key={i} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
