import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router";
import { IoEye } from "react-icons/io5";
import { ImEyeBlocked } from "react-icons/im";
import useAxios from "../../Hooks/useAxios";

const Register = () => {
  const { createUserFunction, loginFunction, updateProfileFunction } = use(AuthContext);
  const axios = useAxios();

  //   password related variables
  const [passwordError, setPasswordError] = useState("");
  const RegexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+=[{\]};:'",<.>/?\\|`~]).{6,}$/;
  const [showPassword, setShowPassword] = useState(false);

  // redirect 
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.state?.form?.pathname || "/";

  // handle Register
  const handleRegister = (e) => {
    e.preventDefault();

    const target = e.target;
    const name = target.name.value;
    const photo = target.photo.value;
    const email = target.email.value;
    const password = target.password.value;

    if (!RegexPassword.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters and include at least one lowercase letter, one uppercase letter and one special character."
      );
      return;
    } else {
      setPasswordError("");
    }

    createUserFunction(email, password)
      .then((getUser) => {
        const user = getUser.user;
        console.log(user);

        const newUser = {
          name: name,
          email: email,
          image: photo,
        };

        // save to database
        axios
          .post("/users", newUser)
          .then((data) => {
            if (data.data.message === "user already exits") {
              toast.error("User already exists!");
            } else {
              toast.success("User saved successfully!");
            }

            // update firebase profile
            updateProfileFunction(name, photo)
              .then(() => {
                toast.success("Profile updated!");
                target.reset();
                navigate(redirect, {replace: true})
              })
              .catch((err) => {
                toast.error("Profile update failed: " + err.message);
              });
          })
          .catch((err) => {
            toast.error("Database save failed: " + err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // handle Login Register
  const provider = new GoogleAuthProvider();

  const handleLoginWithRegister = () => {
    loginFunction(provider)
      .then((newUser) => {
        const user = newUser.user;
        console.log(user);

        const newUserData = {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        };

        axios.post("/users", newUserData)
          .then((data) => {
            if (data.data.message === "user already exits") {
              toast("Welcome back! You already have an account.", {
              });
            } else {
              toast.success("New Google user saved to database!");
            }
            navigate(redirect, {replace: true})
          })
          .catch((err) => {
            toast.error("Database save failed: " + err.message);
          });

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
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="name"
                required
                name="name"
              />

              {/* photo Url */}
              <label className="label">Photo Url</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Photo Url"
                required
                name="photo"
              />

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

              {passwordError && (
                <p className="text-red-500 text-sm mb-2">{passwordError}</p>
              )}

              <button type="submit" className="btn btn-neutral mt-4">
                Register Now
              </button>
            </fieldset>
          </form>

          {/* Google */}
          <button
            className="btn bg-white text-black border-[#e5e5e5]"
            onClick={handleLoginWithRegister}
          >
            <FcGoogle />
            Sign up with Google
          </button>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link className="text-blue-600" to="/auth/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
