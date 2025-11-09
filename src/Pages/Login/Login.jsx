import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImEyeBlocked } from "react-icons/im";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorHandling, setErrorHandling] = useState("");
  const { loginWithEmailPassword, loginFunction } = use(AuthContext);

  // Handle Login with email, password
  const handleLogin = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;

    loginWithEmailPassword(email, password)
      .then((getUser) => {
        const users = getUser.user;
        console.log(users);
        toast.success("Login successfully");
        target.reset();
      })
      .catch((error) => {
        const errors = error.message;
        setErrorHandling(errors);
        toast.error(error.message);
      });
  };

  //   Handle Login popup
  // handle Login Register
  const provider = new GoogleAuthProvider();

  const handleLoginWithRegister = () => {
    loginFunction(provider)
      .then((newUser) => {
        const user = newUser.user;
        console.log(user);
        toast.success("You are sign up with email successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center py-6">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin}>
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

              {/* password */}
              <label className="label mt-2">Password</label>
              <div className="border border-gray-600 mb-4 rounded flex items-center justify-between ">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="a!962822##"
                  className="input focus:outline-none bg-transparent border-0 w-full py-3"
                  required
                />
                <div
                  className="cursor-pointer pe-3 text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <IoEye /> : <ImEyeBlocked />}
                </div>
              </div>

              <div>
                <Link to="/auth/forgot-password" className="underline">Forgot Password</Link>
              </div>

              {errorHandling && <p className="text-red-600">{errorHandling}</p>}

              <button type="submit" className="btn btn-neutral mt-4">
                Login Now
              </button>
            </fieldset>
          </form>

          {/* Google */}
          <button
            className="btn bg-white text-black border-[#e5e5e5]"
            onClick={handleLoginWithRegister}
          >
            <FcGoogle />
            Login with Google
          </button>

          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link className="text-blue-600" to="/auth/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
