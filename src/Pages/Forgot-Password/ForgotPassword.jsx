import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const { sendPasswordLink } = use(AuthContext);

  const handleResetPassword = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    sendPasswordLink(email)
    .then(() => {
        toast.success("Reset Password Link send in your email")
    })
    .catch((err) => {
        toast.error(err.message)
    })
  }

  return (
    <div className="flex justify-center items-center py-6">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleResetPassword}>
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                required
                name="email"
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Send Reset Link
              </button>
            </fieldset>
          </form>

          <Link to="/auth/login" className="text-blue-600 text-center">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
