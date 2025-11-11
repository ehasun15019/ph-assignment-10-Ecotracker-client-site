import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { assets } from "../../assets/assets";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="flex flex-col-reverse text-center items-center w-11/12 mx-auto gap-10 py-10">
        {/* LEFT — TEXT SECTION */}
        <div className="text-center md:text-left space-y-4">
          <p className="text-gray-400 text-sm md:text-base">Error code 404</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-neutral-800">
            OOOOPS!!
          </h1>
          <p className="text-lg sm:text-2xl text-gray-500 leading-relaxed">
            This is not the page you <br className="hidden sm:block" /> are
            looking for.
          </p>

          <a
            href="/"
            className="inline-block mt-4 px-6 py-3 bg-neutral text-white rounded-xl shadow hover:bg-neutral-focus transition-all duration-300"
          >
            Back to Home
          </a>
        </div>

        {/* RIGHT — IMAGE SECTION */}
        <div className="flex justify-center md:justify-end">
          <img
            src={assets.error}
            alt="error"
            className="w-64 sm:w-80 md:w-96 lg:w-[28rem] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Error;
