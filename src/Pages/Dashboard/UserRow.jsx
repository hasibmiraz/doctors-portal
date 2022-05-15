import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error(`You're not eligible to perform this action!`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount) {
          toast.success(`${email} is now an admin!`);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td>
        {role === 'admin' ? (
          <p className="text-white bg-green-600 w-1/4 text-center rounded-md px-3 py-2">
            Admin
          </p>
        ) : (
          <button onClick={makeAdmin} className="btn btn-sm text-white">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-square btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
