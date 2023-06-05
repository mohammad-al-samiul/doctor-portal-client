/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentTable = ({ index, book }) => {
  //console.log(book);
  const { patientName, treatmentName, appointmentDate, slot } = book;

  return (
    <tbody>
      {/* row 2 */}
      <tr className="hover">
        <th>{index + 1}</th>
        <td>{patientName}</td>
        <td>{treatmentName}</td>
        <td> {appointmentDate}</td>
        <td> {slot}</td>
        <td>
          {book.price && !book.paid && (
            <Link to={`/dashboard/payment/${book._id}`}>
              <button className="button-admin-design ">Pay</button>
            </Link>
          )}
          {book.price && book.paid && <button className="btn btn-success  text-white">Paid</button>}
        </td>
      </tr>
    </tbody>
  );
};

export default AppointmentTable;
