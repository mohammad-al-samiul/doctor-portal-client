/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Spinner from '../../../Components/Button/Spinner/Spinner';
import ConfirmationModal from '../../../Components/ConfirmationModal/ConfirmationModal';

const ManageDoctor = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const handleDeleteDoctor = (data) => {
    console.log(data);
  };

  const { data: doctors = [], isLoading } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/doctors`);
      const data = await res.json();
      return data;
    }
  });
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avator</th>
              <th>Name</th>
              <th>Email</th>
              <th> Specialty </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={i} className="hover">
                <td>{i + 1}</td>
                <td>
                  <img
                    className="avatar 
                      w-12 rounded-full ring ring-secondary  ring-offset-base-100 ring-offset-2"
                    src={doctor.photo}
                    alt=""
                  />
                </td>
                <td> {doctor.name} </td>
                <td> {doctor.email} </td>
                <td> {doctor.specialty} </td>
                <td>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-outline btn-sm">
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure want to delete?`}
          message={`if you delete ${deletingDoctor.name}.It can be undone`}
          closeModal={closeModal}
          actionDelete={handleDeleteDoctor}
          deletingDoctor={deletingDoctor}></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctor;
