import React from 'react';
import Banner from './Banner';
import Description from './Description';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <Description />
      <MakeAppointment />
      <Testimonials />
    </div>
  );
};

export default Home;
