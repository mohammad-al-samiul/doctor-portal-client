import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Spinner from '../../../Components/Button/Spinner/Spinner';
import AllUser from './AllUser/AllUser';
import DeleteUserModal from './DeleteUserModal';

const AllUsers = () => {
  const [deletingUser, setDeletingUser] = useState(null);

  const closeModal = () => {
    setDeletingUser(null);
  };

  const handleDeleteUser = (id) => {
    fetch(`https://doctors-portal-b93i.onrender.com/user/${id}`, {
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

  const {
    data: users = [],
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('https://doctors-portal-b93i.onrender.com/users');
      const data = res.json();
      return data;
    }
  });
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">All Users</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <AllUser
                setDeletingUser={setDeletingUser}
                key={i}
                user={user}
                refetch={refetch}
                index={i}></AllUser>
            ))}
          </tbody>
        </table>
        {deletingUser && (
          <DeleteUserModal
            title={`Are you sure want to delete?`}
            message={`if you delete ${deletingUser.name}.It can be undone`}
            closeModal={closeModal}
            handleDeleteUser={handleDeleteUser}
            deletingUser={deletingUser}></DeleteUserModal>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
