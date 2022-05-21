import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Title from '../Title/Title';

const MyAppointments = () => {
  const [user] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(
        `https://gentle-plains-18586.herokuapp.com/booking?patientEmail=${user.email}`,
        {
          method: 'GET',
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            localStorage.removeItem('accessToken');
            signOut(auth);
            navigate('/');
          }
          return res.json();
        })
        .then((data) => {
          setAppointments(data);
        });
    }
  }, [user, navigate]);
  return (
    <div>
      <Title title="My Appointments" />
      <div className="overflow-x-auto mx-auto my-3 w-11/12">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {appointments.map((a, i) => (
              <tr key={a._id}>
                <th>{i + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
                <td>
                  {a.price && !a.paid ? (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-outline btn-accent hover:text-white">
                        Pay Now
                      </button>
                    </Link>
                  ) : (
                    <p className="bg-green-500 px-3 py-2 w-1/2 rounded-md text-white text-center">
                      Paid
                    </p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
