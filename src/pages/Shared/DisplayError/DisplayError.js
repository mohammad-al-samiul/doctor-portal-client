import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const HandleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/login');
        toast.success('Logout Successful');
      })
      .catch((err) => console.log(err.message));
  };
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <section className="flex items-center h-full p-16  dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
              <span className="sr-only"></span>Oops!
            </h2>
            <p className="text-2xl text-gray-600 font-semibold md:text-3xl">
              Sorry, an unexpected error has occurred.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-700">
              Error:
              <strong> {error.statusText || error.message}</strong>
            </p>

            <button
              onClick={HandleLogOut}
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
              Log out
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisplayError;
