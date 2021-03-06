import React from 'react';
import Title from '../Title/Title';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center ">
      <Title title="Loading..." />
      <div className="w-40 h-40 border-t-4 border-b-4 border-primary rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
