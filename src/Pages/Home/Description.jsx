import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Description = () => {
  return (
    <div className="hero min-h-11/12 mt-14 md:mt-36 md:mb-48">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          alt=""
          className="max-w-sm rounded-lg shadow-2xl mb-4 md:mb-0"
        />
        <div className="w-11/12 md:w-1/2 ml-3 md:ml-24">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-justify">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6 text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Description;
