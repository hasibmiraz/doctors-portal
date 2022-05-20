import React from 'react';
import { toast } from 'react-toastify';

const DeleteDoctorModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
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
          toast(`Doctor: ${deletingDoctor.name} is deleted successfully`);
          setDeletingDoctor(null);
          refetch();
        }
      });
  };
  return (
    <>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete?
          </h3>
          <p className="py-4">
            Press the button below to delete credetials of{' '}
            <span className="text-red-600 font-semibold">
              {deletingDoctor.name}
            </span>
            .
          </p>
          <div className="modal-action">
            <label for="delete-confirm-modal" className="btn">
              Cancel
            </label>
            <label
              htmlFor="delete-confirm-modal"
              onClick={() => handleDelete(deletingDoctor.email)}
              className="btn btn-outline btn-error"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteDoctorModal;
