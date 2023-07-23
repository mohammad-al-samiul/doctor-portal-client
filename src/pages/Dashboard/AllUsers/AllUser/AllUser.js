/* eslint-disable react/prop-types */
import React from 'react';
import { toast } from 'react-hot-toast';
import './AllUser.css';
const AllUser = ({ index, user, refetch }) => {
  const { name, email, _id } = user;
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

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/user/${id}`, {
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

  return (
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
        <button onClick={() => handleDelete(_id)} className="button-delete-design">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AllUser;
