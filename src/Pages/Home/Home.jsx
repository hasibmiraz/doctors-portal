import React from 'react';
import Banner from './Banner';
import Description from './Description';
import Info from './Info';
import Services from './Services';

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <Description />
    </div>
  );
};

export default Home;
