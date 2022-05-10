import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
  return (
    <div style={{ backgroundImage: "url('../../assets/images/bg.png')" }}>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            class="max-w-sm flex-1 rounded-lg shadow-2xl"
            alt=""
          />
          <div className=" flex-1">
            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn bg-gradient-to-r from-secondary to-primary text-white border-none uppercase font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
