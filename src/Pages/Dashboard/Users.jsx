import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import Title from '../Title/Title';
import UserRow from './UserRow';

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery('users', () =>
    fetch('https://gentle-plains-18586.herokuapp.com/user', {
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
            {users &&
              users.map((user, i) => (
                <UserRow
                  key={user._id}
                  user={user}
                  index={i}
                  refetch={refetch}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
