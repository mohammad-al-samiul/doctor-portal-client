/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Spinner from '../../../Components/Button/Spinner/Spinner';
import ConfirmationModal from '../../../Components/ConfirmationModal/ConfirmationModal';

const ManageDoctor = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const {
    data: doctors,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      try {
        const res = await fetch('http://localhost:5000/doctors', {
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error.message);
      }
    }
  });

  //http://localhost:5000/doctors
  if (isLoading) {
    return <Spinner />;
  }

  const handleDeleteDoctor = (doctor) => {
    console.log(doctor._id);
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Doctor ${doctor.name} deleted successfully`);
        }
      });
  };
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
                    className="button-delete-design">
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
          handleDeleteDoctor={handleDeleteDoctor}
          deletingDoctor={deletingDoctor}></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctor;
