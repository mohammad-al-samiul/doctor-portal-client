/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import DeleteUserModal from '../DeleteUserModal';
import './AllUser.css';
const AllUser = ({ index, user, refetch }) => {
  const { name, email, _id } = user;

  const [deletingUser, setDeletingUser] = useState(null);

  const closeModal = () => {
    setDeletingUser(null);
  };

  const handleDeleteUser = (deletingUser) => {
    fetch(`http://localhost:5000/user/${deletingUser._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success('Deleted Successfully');
          refetch();
        }
      });
  };

  const handleMakeAdmin = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success('Make admin Successfully');
          refetch();
        }
      });
  };

  return (
    <>
      <tr className="">
        <th> {index + 1}</th>
        <td> {name}</td>
        <td> {email} </td>
        <td>
          {user?.role === 'admin' ? (
            <>
              <button className="button-admin-design">Admin</button>
            </>
          ) : (
            <>
              <button onClick={() => handleMakeAdmin(_id)} className="button-admin-design">
                Make Admin
              </button>
            </>
          )}
        </td>
        <td>
          <label
            onClick={() => {
              setDeletingUser(user);
            }}
            htmlFor="user-delete-modal"
            className="button-delete-design">
            Delete
          </label>
        </td>
      </tr>
      {deletingUser && (
        <DeleteUserModal
          title={`Are you sure want to delete?`}
          message={`if you delete ${deletingUser.name}.It can be undone`}
          closeModal={closeModal}
          handleDeleteUser={handleDeleteUser}
          deletingUser={deletingUser}></DeleteUserModal>
      )}
    </>
  );
};

export default AllUser;
