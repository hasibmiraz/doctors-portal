import React from 'react';
import { toast } from 'react-toastify';

const DoctorsRow = ({ doctor, index, refetch }) => {
  const { name, specialty, image, email } = doctor;
  const handleDelete = (email) => {
    fetch(`https://gentle-plains-18586.herokuapp.com/doctor/${email}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          toast(`Doctor: ${name} is deleted successfully`);
          refetch();
        }
      });
  };
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
        <button
          onClick={() => handleDelete(email)}
          className="btn btn-outline btn-error"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DoctorsRow;
