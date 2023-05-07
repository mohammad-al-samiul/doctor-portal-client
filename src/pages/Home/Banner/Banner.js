import React from 'react';
import BgImage from '../../../Assets/images/bg.png';
import Chair from '../../../Assets/images/chair.png';
import Button from '../../../Components/Button/Button';
const Banner = () => {
  return (
    <div className="bg-contain bg-no-repeat" style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="hero min-h-screen">
        <div className="hero-content  flex-col lg:flex-row-reverse ">
          <img src={Chair} className="rounded-lg lg:w-1/2 shadow-2xl" />
          <div className="lg:w-1/2">
            <h1 className="lg:text-5xl text-3xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
