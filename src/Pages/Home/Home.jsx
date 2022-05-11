import React from 'react';
import Footer from '../Footer/Footer';
import Title from '../Title/Title';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Description from './Description';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div>
      <Title title="Home" />
      <Banner />
      <Info />
      <Services />
      <Description />
      <MakeAppointment />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
