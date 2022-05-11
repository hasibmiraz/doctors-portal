import React from 'react';

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div className="card w-11/12 md:w-3/4 text-center bg-base-100 shadow-xl mx-auto">
      <div className="card-body space-y-2">
        <h2 className="text-center text-xl font-semibold text-secondary">
          {name}
        </h2>
        <p className="text-base">
          {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available
        </p>
        <p className="text-base">
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-600 font-semibold">
              No slot available
            </span>
          )}
        </p>
        <div className="card-actions justify-center">
          <button
            disabled={slots.length === 0}
            class="btn bg-gradient-to-r from-secondary to-primary text-white border-none hover:scale-105 duration-200"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
