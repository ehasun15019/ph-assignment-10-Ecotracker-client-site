import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutFunction } = use(AuthContext);

  const handleSignOut = () => {
    signOutFunction()
      .then(() => {
        toast.success("Logout successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/all-tips">Tips</NavLink>
      </li>

      <li>
        <NavLink to="/challenges">Challenges</NavLink>
      </li>

      <li>
        <NavLink to="/add-challenges">Add a challenge</NavLink>
      </li>

      <li>
        <NavLink to="/all-events">Events</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="text-[1.3rem] md:text-3xl font-bold" to="/">
          <img
            src={assets.logo}
            alt="logo"
            className="w-24"
            referrerPolicy="no-referrer"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="user avatar"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <span className="font-semibold">{user.displayName}</span>

              <li className="mt-2">
                <Link to="/my-activities">My Activities</Link>
              </li>

              <li className="">
                <Link to="/created-challenges">Created Challenges</Link>
              </li>

              <li>
                <button onClick={handleSignOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link
              to="/auth/login"
              className="btn border-[#cbf139] border-2 bg-transparent hover:bg-[#cbf139]"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="btn border-[#cbf139] border-2 bg-transparent hover:bg-[#cbf139]"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
