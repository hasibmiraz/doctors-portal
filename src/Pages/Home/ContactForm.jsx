import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContactForm = () => {
  return (
    <section
      className="h-auto object-cover bg-center mt-36 flex flex-col items-center py-16"
      style={{
        backgroundImage: `url(${appointment})`,
      }}
    >
      <div>
        <h4 className="text-xl text-primary font-bold mb-3">Contact Us</h4>
        <h2 className="text-3xl text-white">Stay connected with us</h2>
      </div>
      <form className="w-full md:w-3/5 flex flex-col items-center mt-10 space-y-3">
        <input
          type="email"
          placeholder="Email address"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <textarea
          className="textarea textarea-info w-full max-w-xs resize-none h-36"
          placeholder="Your message"
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </form>
    </section>
  );
};

export default ContactForm;
