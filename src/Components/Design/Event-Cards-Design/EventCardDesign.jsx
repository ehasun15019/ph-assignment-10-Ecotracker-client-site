import React from "react";

const EventCardDesign = ({
  title,
  description,
  date,
  location,
  organizer,
  maxParticipants,
  currentParticipants,
}) => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-6">
        <h2 className="text-[1.3rem] font-bold text-gray-800 mb-2">{title}</h2>

        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        <div className="flex flex-col sm:flex-row sm:justify-between mb-4 text-gray-500 text-sm">
          <span>
            <strong>Date:</strong> {date}
          </span>
          <span>
            <strong>Location:</strong> {location}
          </span>
        </div>

        <p className="text-gray-500 text-sm mb-4">
          <strong>Organizer:</strong> {organizer}
        </p>

        <p className="text-gray-500 text-sm mb-4">
          <strong>Participants:</strong> {currentParticipants}/{maxParticipants}
        </p>
      </div>
    </div>
  );
};

export default EventCardDesign;
