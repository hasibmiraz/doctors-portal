import React from 'react';

const PrimaryButton = ({ children }) => {
  return (
    <div className="flex justify-center md:justify-start">
      <button className="btn bg-gradient-to-r from-secondary to-primary text-white border-none uppercase font-bold hover:scale-105 duration-200">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
