import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Spinner from '../Shared/Spinner';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/service')
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h4 className="text-xl text-secondary text-center my-12 md:my-24">
            Available Appointments on {format(date, 'PP')}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {services.map((service) => (
              <Service
                key={service._id}
                service={service}
                setTreatment={setTreatment}
              />
            ))}
          </div>
          {treatment && (
            <BookingModal
              date={date}
              treatment={treatment}
              setTreatment={setTreatment}
            />
          )}
        </>
      )}
    </div>
  );
};

export default AvailableAppointments;
