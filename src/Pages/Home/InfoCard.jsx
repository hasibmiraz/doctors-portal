import React from 'react';

const InfoCard = ({ img, cardTitle, cardDesc, bgClass }) => {
  return (
    <div
      className={`card lg:card-side shadow-xl mx-auto w-full text-white p-5 md:px-6 md:py-10 ${bgClass}`}
    >
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardDesc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
