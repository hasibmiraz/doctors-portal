import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import Title from '../Title/Title';
import DoctorsRow from './DoctorsRow';

const ManageDoctors = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery('doctors', () =>
    fetch('https://gentle-plains-18586.herokuapp.com/doctor', {
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
      <Title title="Manage Doctors" />
      <div className="overflow-x-auto mx-auto my-3 w-11/12">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Email</th>
                <th>Specialty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {doctors.map((doctor, index) => (
                <DoctorsRow
                  key={doctor._id}
                  doctor={doctor}
                  index={index}
                  refetch={refetch}
                />
              ))}
            </tbody>
            {/* <!-- foot --> */}
            <tfoot>
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Email</th>
                <th>Specialty</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctors;
