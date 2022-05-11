import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {
  let selectMessage = <p>Please pick a day.</p>;
  if (date) {
    selectMessage = (
      <p>
        You picked{' '}
        <span className="text-secondary font-bold">{format(date, 'PP')}</span>.
      </p>
    );
  }
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        objectFit: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero h-11/12 py-3 md:py-14">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="w-full md:w-1/2 rounded-lg shadow-2xl"
            alt="Dentist Chair"
          />
          <div className="w-full md:w-1/2">
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
              footer={selectMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
