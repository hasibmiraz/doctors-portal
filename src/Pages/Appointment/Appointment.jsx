import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Title from '../Title/Title';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Title title="Appointment" />
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointments date={date} />
      <Footer />
    </div>
  );
};

export default Appointment;
