import React from "react";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="name" />

              {/* Email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />

              {/* password */}
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />

              {/* photo Url */}
              <label className="label">Photo Url</label>
              <input type="text" className="input" placeholder="Photo Url" />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              <button className="btn btn-neutral mt-4">Register Now</button>
            </fieldset>
          </form>

          {/* Google */}
          <button className="btn bg-white text-black border-[#e5e5e5]">
            <FcGoogle />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
