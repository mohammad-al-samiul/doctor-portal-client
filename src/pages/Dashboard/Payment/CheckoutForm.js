/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import './CheckoutForm.css';

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessiong] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const { price, patientName, email, _id } = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('https://doctors-portal-server-chi-seven.vercel.app/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ price })
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || processing) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (error) {
      console.log(error);
      setCardError(error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setCardError('');
    }
    setSuccess('');
    setProcessiong(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: patientName,
          email
        }
      }
    });
    console.log(paymentIntent);

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }

    if (paymentIntent.status === 'succeeded') {
      console.log('card', card);
      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id
      };

      fetch(`https://doctors-portal-server-chi-seven.vercel.app/payments`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            toast.success('Payment Completed');
            setSuccess('Congrats ! your payment completed');
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setProcessiong(false);
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
                  color: '#aab7c4'
                }
              },
              invalid: {
                color: '#9e2146'
              }
            }
          }}
        />
        <button
          className="my-6 text-sm  bg-secondary  text-white font-bold py-2 px-4 rounded disabled:opacity-25"
          type="submit"
          disabled={!stripe || !clientSecret || transactionId}>
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p>
            Your transactionId : <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
