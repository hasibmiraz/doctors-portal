import React from 'react';

const Review = ({ review }) => {
  const { name, avatar, reviewDesc, address } = review;
  return (
    <div className="card w-11/12 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <p>{reviewDesc}</p>
        <div className="flex items-center mt-9">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={avatar} alt="" />
            </div>
          </div>
          <div className="ml-4">
            <h2>{name}</h2>
            <h2>{address}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
