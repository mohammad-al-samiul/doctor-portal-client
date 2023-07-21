/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../../Components/Button/Spinner/Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
//console.log(stripePromise);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  if (navigation === 'loading') {
    return <Spinner />;
  }
  console.log(booking);

  const { price, treatmentName, patientName, appointmentDate, slot } = booking;
  return (
    <div>
      <div>
        <h3 className="text-3xl font-bold">Payment for {treatmentName}</h3>
        <p className="mt-4">
          Please pay $<span className="font-bold">{price}</span> for your appointment on{' '}
          <span className="font-bold">{appointmentDate}</span> at{' '}
          <span className="font-bold">{slot}</span>
        </p>
      </div>

      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
