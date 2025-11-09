import React from "react";
import "./Counter.css";
import { GiChestnutLeaf } from "react-icons/gi";
import { MdOutlineGroups3 } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";

const Counter = () => {
  return (
    <div className="w-11/12 mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 w-full">
        <div className="card-body flex flex-col items-center text-center space-y-3">
          <div className="card-title text-4xl">
            <GiChestnutLeaf style={{ color: "#cbf139" }} />
          </div>
          <h2 className="font-bold text-3xl">0</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Active Challenges
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 w-full">
        <div className="card-body flex flex-col items-center text-center space-y-3">
          <div className="card-title text-4xl">
            <MdOutlineGroups3 style={{ color: "#cbf139" }} />
          </div>
          <h2 className="font-bold text-3xl">0</h2>
          <p className="text-gray-600 text-sm sm:text-base">Our Participants</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 w-full">
        <div className="card-body flex flex-col items-center text-center space-y-3">
          <div className="card-title text-4xl">
            <FaArrowTrendUp style={{ color: "#cbf139" }} />
          </div>
          <h2 className="font-bold text-3xl">0 kg</h2>
          <p className="text-gray-600 text-sm sm:text-base">CO₂ Saved</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
