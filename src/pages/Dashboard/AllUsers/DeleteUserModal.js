/* eslint-disable react/prop-types */
import React from 'react';

const DeleteUserModal = ({ title, message, closeModal, handleDeleteUser, deletingUser }) => {
  return (
    <>
      <input type="checkbox" id="user-delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg"> {title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => handleDeleteUser(deletingUser._id)}
              htmlFor="user-delete-modal"
              className="btn btn-outline">
              Ok
            </label>
            <button onClick={closeModal} className="btn btn-outline">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteUserModal;
