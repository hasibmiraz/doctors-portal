import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Title = ({ title }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title} - Doctors Portal</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    </HelmetProvider>
  );
};

export default Title;
