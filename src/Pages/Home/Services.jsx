import React from 'react';
import Service from './Service';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
  const serviceInfo = [
    {
      id: 1,
      title: 'Fluoride Treatment',
      img: cavity,
    },
    {
      id: 2,
      title: 'Cavity Filling',
      img: fluoride,
    },
    {
      id: 3,
      title: 'Teeth Whitening',
      img: whitening,
    },
  ];
  return (
    <div>
      <div className="my-28 text-center">
        <h3 className="font-bold text-primary text-xl">Our Services</h3>
        <h2 className="text-4xl my-2 text-accent">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-3 md:mx-10">
        {serviceInfo.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
