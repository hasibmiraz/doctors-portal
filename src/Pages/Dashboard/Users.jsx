import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import Title from '../Title/Title';

const Users = () => {
  const { data: users, isLoading } = useQuery('users', () =>
    fetch('http://localhost:5000/user', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Title title="Users" />
      <div className="overflow-x-auto mx-auto my-3 w-11/12">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Email</th>
              <th>Action</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.email}</td>
                <td>
                  <button class="btn btn-sm text-white">Make Admin</button>
                </td>
                <td>
                  <button class="btn btn-square btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
