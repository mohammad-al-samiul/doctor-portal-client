import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../../Components/Button/Spinner/Spinner';
import AllUser from './AllUser/AllUser';

const AllUsers = () => {
  const {
    data: users = [],
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users');
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
              <AllUser key={i} user={user} refetch={refetch} index={i}></AllUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
