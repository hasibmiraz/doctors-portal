import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const activeLinkDesign =
    'btn bg-secondary text-white my-2 mx-0 md:my-0 md:mx-2 border-none';
  const [user] = useAuthState(auth);

  const menuItem = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? activeLinkDesign : '')}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? activeLinkDesign : '')}
          to="/appointment"
        >
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? activeLinkDesign : '')}
          to="/reviews"
        >
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? activeLinkDesign : '')}
          to="/contact"
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? activeLinkDesign : '')}
          to="/about"
        >
          About
        </NavLink>
      </li>
      {!user && (
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeLinkDesign : '')}
            to="/login"
          >
            Login
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeLinkDesign : '')}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <Link
          className="text-center"
          onClick={user ? () => signOut(auth) : ''}
          to={user ? '/' : '/register'}
        >
          {user ? 'Sign Out' : 'Get started'}
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Doctors Portal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItem}</ul>
        </div>
        <div className="navbar-end">
          <label
            htmlFor="dasboard-sidebar"
            tabIndex="1"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
