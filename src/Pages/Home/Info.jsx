import React from 'react';
import InfoCard from './InfoCard';

import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
  const cardInfos = [
    {
      id: 1,
      bgClass: 'bg-gradient-to-r from-secondary to-primary',
      cardTitle: 'Opening Hours',
      cardDesc: 'Lorem Ipsum is simply dummy text of the price.',
      img: clock,
    },
    {
      id: 2,
      bgClass: 'bg-accent',
      cardTitle: 'Visit Our Location',
      cardDesc: 'Brooklyn, NY 10036, United States',
      img: marker,
    },
    {
      id: 3,
      bgClass: 'bg-gradient-to-r from-secondary to-primary',
      cardTitle: 'Contact Us',
      cardDesc: '+000 123 456789',
      img: phone,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-6">
      {cardInfos.map((cardInfo) => (
        <InfoCard key={cardInfo.id} cardInfo={cardInfo} />
      ))}
    </div>
  );
};

export default Info;
