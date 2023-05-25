import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Spinner from '../../../../Components/Button/Spinner/Spinner';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import AppointmentTable from './AppointmentTable/AppointmentTable';

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = res.json();
      return data;
    }
  });
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="mb-4 font-bold">My Appointments</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          {bookings &&
            bookings.map((book, i) => (
              <AppointmentTable key={i} book={book} index={i}></AppointmentTable>
            ))}
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
