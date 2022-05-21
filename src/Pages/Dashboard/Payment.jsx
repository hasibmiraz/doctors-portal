import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../Shared/Spinner';
import Title from '../Title/Title';

const Payment = () => {
  const { appointmentId } = useParams();
  const url = `https://gentle-plains-18586.herokuapp.com/booking/${appointmentId}`;
  const { data: appointment, isLoading } = useQuery(
    ['booking', appointmentId],
    () =>
      fetch(url, {
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
      <Title title="Payment" />
      <div className="hero h-[80vh]">
        <div className="hero-content w-11/12 flex-col lg:flex-row-reverse">
          <div class="card w-11/12 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 className="text-2xl font-bold">
                Hello {appointment.patientName}
              </h2>
              <h2 class="card-title">
                Pay for:{' '}
                <span className="text-secondary">{appointment.treatment}</span>
              </h2>
              <p>
                We will see you on{' '}
                <span className="text-red-500 font-semibold">
                  {appointment.date}
                </span>{' '}
                at {appointment.slot}
              </p>
              <p>
                Please pay{' '}
                <span className="text-primary font-semibold">
                  ${appointment.price}
                </span>{' '}
                to confirm your schedule
              </p>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
