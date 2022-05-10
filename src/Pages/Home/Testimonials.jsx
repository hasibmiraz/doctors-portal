import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Winson Harrey',
      reviewDesc:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      avatar: people1,
      address: 'California',
    },
    {
      id: 2,
      name: 'Jim Carrey',
      reviewDesc:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      avatar: people2,
      address: 'Miami',
    },
    {
      id: 3,
      name: 'Charles Darwin',
      reviewDesc:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      avatar: people3,
      address: 'Ohio',
    },
  ];
  return (
    <section className="my-20">
      <div className="px-7 md:px-14 flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-3xl">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-24 md:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-6">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
