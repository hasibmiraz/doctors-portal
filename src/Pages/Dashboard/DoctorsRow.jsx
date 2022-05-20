import React from 'react';

const DoctorsRow = ({ doctor, index }) => {
  const { name, specialty, image, email } = doctor;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Doctor" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{specialty}</td>
      <td>
        <button class="btn btn-outline btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default DoctorsRow;
