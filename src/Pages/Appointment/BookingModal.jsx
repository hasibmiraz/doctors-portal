import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, 'PP');

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const phone = e.target.phone.value;
    const booking = {
      bookingId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patientEmail: user.email,
      patientName: user.displayName,
      phone,
    };

    fetch('https://gentle-plains-18586.herokuapp.com/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Appointment set on ${formattedDate}, at ${slot}`);
        } else {
          toast.error(
            `You already have an appointment on ${data.booking.date} at ${data.booking.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">
            Set appointment for: <span className="text-secondary">{name}</span>
          </h3>
          <form
            onSubmit={handleBooking}
            className="w-full flex flex-col items-center space-y-6 mt-10"
          >
            <input
              type="text"
              defaultValue={format(date, 'PP')}
              disabled
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              disabled
              value={user?.displayName || ''}
              className="input input-bordered w-full"
            />
            <input
              type="email"
              disabled
              value={user?.email || ''}
              className="input input-bordered w-full"
            />
            <input
              required
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              type="submit"
              className="btn btn-secondary text-white w-full hover:scale-95 duration-200"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
