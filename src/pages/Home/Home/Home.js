import React from 'react';
import Banner from '../Banner/Banner';
import ExceptionalDental from '../ExceptionalDental/ExceptionalDental';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <Services />
      <ExceptionalDental />
      <MakeAppointment />
    </div>
  );
};

export default Home;
