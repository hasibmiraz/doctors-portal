import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
  // const [services, setServices] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, 'PP');

  const {
    isLoading,
    data: services,
    refetch,
  } = useQuery(['available', formattedDate], () =>
    fetch(
      `https://gentle-plains-18586.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );
  if (isLoading) return <Spinner />;

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`https://gentle-plains-18586.herokuapp.com/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data);
  //       setLoading(false);
  //     });
  // }, [formattedDate]);
  return (
    <div>
      {isLoading ? (
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
              refetch={refetch}
            />
          )}
        </>
      )}
    </div>
  );
};

export default AvailableAppointments;
