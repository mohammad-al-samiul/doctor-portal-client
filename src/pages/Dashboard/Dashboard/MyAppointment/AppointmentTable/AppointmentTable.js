/* eslint-disable react/prop-types */
import React from 'react';
import Spinner from '../../../../../Components/Button/Spinner/Spinner';

const AppointmentTable = ({ index, book, isLoading }) => {
  console.log(book);
  const { patientName, treatmentName, appointmentDate, slot } = book;
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <tbody>
      {/* row 2 */}
      <tr className="hover">
        <th>{index + 1}</th>
        <td>{patientName}</td>
        <td>{treatmentName}</td>
        <td> {appointmentDate}</td>
        <td> {slot}</td>
      </tr>
    </tbody>
  );
};

export default AppointmentTable;
