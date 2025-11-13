import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { FaBars } from "react-icons/fa6";

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
    <div className="navbar bg-white px-4 sm:px-6 md:px-10 shadow-md sticky top-0 z-50 flex flex-wrap justify-between items-center">
      {/* Left: Logo */}
      <div className="navbar-start w-full md:w-auto flex justify-between items-center">
        <Link
          className="text-[1.3rem] md:text-3xl font-bold flex items-center gap-2"
          to="/"
        >
          <img
            src={assets.logo}
            alt="logo"
            className="w-20 sm:w-24"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Right side (mobile): Avatar + Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* ✅ Mobile User Dropdown */}
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 rounded-full">
                  <img
                    src={user.photoURL || "/default-avatar.png"}
                    alt="user avatar"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border right-0"
              >
                <span className="font-semibold text-center">
                  {user.displayName}
                </span>
                <li className="mt-2">
                  <Link to="/my-activities">My Activities</Link>
                </li>
                <li>
                  <Link to="/created-challenges">Created Challenges</Link>
                </li>
                <li>
                  <button onClick={handleSignOut}>Logout</button>
                </li>
              </ul>
            </div>
          )}

          {/* Menu Icon */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <FaBars className="text-xl" />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 right-0 w-52 p-2 shadow border"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>

      {/* Center (desktop menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-700 font-medium">
          {links}
        </ul>
      </div>

      {/* Right (desktop avatar or login/register) */}
      <div className="navbar-end w-full md:w-auto hidden lg:flex justify-end">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border"
            >
              <span className="font-semibold text-center">
                {user.displayName}
              </span>
              <li className="mt-2">
                <Link to="/my-activities">My Activities</Link>
              </li>
              <li>
                <Link to="/created-challenges">Created Challenges</Link>
              </li>
              <li>
                <button onClick={handleSignOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2 sm:gap-3">
            <Link
              to="/auth/login"
              className="btn btn-sm sm:btn-md border-[#cbf139] border-2 bg-transparent hover:bg-[#cbf139]"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="btn btn-sm sm:btn-md border-[#cbf139] border-2 bg-transparent hover:bg-[#cbf139]"
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
