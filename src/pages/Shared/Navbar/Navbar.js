import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import './Navbar.css';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const HandleToggleClick = () => {
    setOpen(!open);
  };
  const { logOut, user } = useContext(AuthContext);
  console.log(user);
  const HandleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/');
        toast.success('Logout Successful');
      })
      .catch((err) => console.log(err.message));
  };

  const menuList = (
    <React.Fragment>
      <li onClick={HandleToggleClick}>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li onClick={HandleToggleClick}>
        <NavLink to="/about">About</NavLink>
      </li>
      <li onClick={HandleToggleClick}>
        <NavLink to="/appointment">Appointment</NavLink>
      </li>
      <li onClick={HandleToggleClick}>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      {user && user.uid ? (
        <>
          <li onClick={HandleToggleClick}>
            <NavLink to="/reviews">Reviews</NavLink>
          </li>
          <li onClick={HandleToggleClick}>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li onClick={HandleLogOut}>
            <button>Log Out</button>
          </li>
        </>
      ) : (
        <>
          <li onClick={HandleToggleClick}>
            <NavLink to="/login">Log in</NavLink>
          </li>
          <li onClick={HandleToggleClick}>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </React.Fragment>
  );
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div onClick={HandleToggleClick} className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {open ? (
              <>
                <ul
                  tabIndex={1}
                  className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {menuList}
                </ul>
              </>
            ) : (
              <></>
            )}
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Doctors Portal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuList}</ul>
        </div>
        <div className="w-full flex justify-end lg:hidden md:hidden">
          <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
