import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const HandleToggleClick = () => {
    setOpen(!open);
  };
  const menuList = (
    <React.Fragment>
      <li onClick={HandleToggleClick}>
        <Link to="/home">Home</Link>
      </li>
      <li onClick={HandleToggleClick}>
        <Link to="/about">About</Link>
      </li>
      <li onClick={HandleToggleClick}>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li onClick={HandleToggleClick}>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li onClick={HandleToggleClick}>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li onClick={HandleToggleClick}>
        <Link to="/login">Log in</Link>
      </li>
      <li onClick={HandleToggleClick}>
        <Link to="/register">Register</Link>
      </li>
      <li onClick={HandleToggleClick}>
        <button>Log Out</button>
      </li>
    </React.Fragment>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
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
                  tabIndex={0}
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
      </div>
    </div>
  );
};

export default Navbar;
