import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import AppointmentTable from './AppointmentTable/AppointmentTable';

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = res.json();
      return data;
    }
  });

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
          {bookings.map((book, i) => (
            <AppointmentTable
              key={i}
              book={book}
              index={i}
              isLoading={isLoading}></AppointmentTable>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
