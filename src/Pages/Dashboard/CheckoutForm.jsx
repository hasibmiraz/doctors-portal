import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';

const CheckoutForm = ({ appointment }) => {
  const { price, patientName, patientEmail } = appointment;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    setCardError(error?.message || '');
    setSuccess('');

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: patientName,
            email: patientEmail,
          },
        },
      });

    if (intentError) {
      setCardError(intentError.message);
      setSuccess('');
    } else {
      setCardError('');
      setSuccess('Congratulations! Your payment has been completed.');
      setTransactionId(paymentIntent.id);
      toast.success('Congratulations! Your payment has been completed.');
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          className={`btn btn-outline btn-success mt-5 ${loading && 'loading'}`}
          type="submit"
          disabled={!stripe || !clientSecret || loading}
        >
          {loading ? 'Paying...' : 'Pay Now'}
        </button>
      </form>
      {cardError && <p className="text-sm text-red-600">{cardError}</p>}
      {success && (
        <p className="text-sm">
          Your transaction id is:{' '}
          <span className="text-orange-500 font-semibold">{transactionId}</span>
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
