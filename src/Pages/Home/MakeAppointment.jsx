import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden md:block">
        <img className="mt-[-200px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 pr-0 md:pr-32 space-y-6 mx-7 my-16 md:my-0">
        <h3 className="text-primary text-xl font-bold">Appointment</h3>
        <h2 className="text-4xl font-semibold text-white">
          Make an appointment Today
        </h2>
        <p className="text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
