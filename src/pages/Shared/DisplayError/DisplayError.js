import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useRouteError } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
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
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <h2 onClick={HandleLogOut} className="text-3xl">
        <Button>Log out</Button>
      </h2>
    </div>
  );
};

export default DisplayError;
