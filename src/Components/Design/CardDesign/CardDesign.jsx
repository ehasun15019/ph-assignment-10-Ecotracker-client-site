import React from "react";
import { Link } from "react-router";

const CardDesign = ({ _id,imageUrl, title, category, participants }) => {
  return (
    <div className="card bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-[20rem] md:w-[22rem] rounded-2xl overflow-hidden">
      <figure className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-30 md:h-56  object-cover transform transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {category}
        </span>
      </figure>

      <div className="card-body p-5 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 line-clamp-1">
          {title}
        </h2>

        <p className="text-gray-500 text-sm mb-3">
          Participants:{" "}
          <span className="font-semibold text-gray-700">{participants}</span>
        </p>

        <div className="card-actions justify-end mt-4">
          <Link to={`/challenges/${_id}`} className="btn bg-gradient-to-r from-green-400 to-lime-500 border-none text-white font-semibold hover:from-green-500 hover:to-lime-600 transition-all duration-300 text-sm sm:text-base">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDesign;
