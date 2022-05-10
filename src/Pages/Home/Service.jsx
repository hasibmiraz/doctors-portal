import React from 'react';

const Service = ({ service }) => {
  const { img, title } = service;
  return (
    <div className="card md:w-11/12 w-3/4 bg-base-100 shadow-xl mx-auto cursor-pointer hover:scale-105 duration-200">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl w-28" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>
          Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has
          been the
        </p>
      </div>
    </div>
  );
};

export default Service;
