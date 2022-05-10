import React from 'react';

const InfoCard = ({ cardInfo }) => {
  const { img, cardTitle, cardDesc, bgClass } = cardInfo;
  return (
    <div
      className={`card lg:card-side shadow-xl mx-auto w-11/12 cursor-pointer hover:scale-105 duration-200 text-white p-5 md:px-6 ${bgClass}`}
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
