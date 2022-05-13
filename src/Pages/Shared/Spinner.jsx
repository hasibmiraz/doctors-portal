import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-40 h-40 border-t-4 border-b-4 border-primary rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
