import React from "react";
import { Link } from "react-router";

const CardDetailsDesign = ({  id, imageUrl, title, category, description, duration, target, participants, impactMetric, createdBy,}) => {

  return (
    <div className="flex flex-col lg:flex-row gap-10 py-12">
      {/* LEFT — IMAGE & DESCRIPTION */}
      <section className="flex-1 relative">
        {/* Image with overlay effect */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-80 md:h-[28rem] object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          <span className="absolute bottom-4 left-4 bg-green-500/80 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
            {category}
          </span>
        </div>

        {/* Description Card with floating effect */}
        <div className="mt-8 bg-white/90 backdrop-blur-md shadow-lg border border-gray-200 rounded-3xl p-8 relative z-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Challenge Description
          </h2>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </section>

      {/* RIGHT — DETAILS PANEL */}
      <section className="flex-1 relative">
        <div className="bg-white/80 backdrop-blur-xl shadow-2xl border border-gray-200 rounded-3xl p-8 lg:p-10 flex flex-col justify-between h-full transition-transform hover:scale-[1.02] duration-500">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4 md:mb-0">
              {title}
            </h2>
            <span className="bg-gradient-to-r from-green-400 to-lime-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
              {category}
            </span>
          </div>

          {/* Stats Grid with card-style hover */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: "Duration", value: duration },
              { label: "Target", value: target },
              { label: "Participants", value: participants },
              { label: "Impact Metric", value: impactMetric },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-gray-50/70 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 shadow hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-gray-500 text-sm">{stat.label}</p>
                <p className="text-lg font-semibold text-gray-800 mt-1">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Created By */}
          <div className="mt-10 border-t border-gray-200 pt-6">
            <p className="text-gray-500 text-sm">Created By</p>
            <p className="text-lg font-semibold text-gray-800">{createdBy}</p>
          </div>

          {/* CTA Button with neumorphism */}
          <div className="mt-8 flex justify-end">
            <Link to={`/challenges/join/${id}`} className="px-6 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-green-400 to-lime-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Join Challenge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardDetailsDesign;
