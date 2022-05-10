import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
  return (
    <div style={{ backgroundImage: "url('../../assets/images/bg.png')" }}>
      <div className="hero h-4/5 py-3 md:py-14">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="w-full md:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="btn bg-gradient-to-r from-secondary to-primary text-white border-none uppercase font-bold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
