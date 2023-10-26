/* eslint-disable react/prop-types */
import React from 'react';
import { toast } from 'react-hot-toast';
import './AllUser.css';
const AllUser = ({ index, user, refetch, setDeletingUser }) => {
  const { name, email, _id } = user;

  const handleMakeAdmin = (id) => {
    console.log(id);
    fetch(`https://doctors-portal-server-chi-seven.vercel.app/users/admin/${id}`, {
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
    </>
  );
};

export default AllUser;
