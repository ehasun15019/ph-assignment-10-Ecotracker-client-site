import React from "react";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div className="w-11/12 mx-auto rounded-3xl bg-green-500 py-10 md:py-16">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 px-6 md:px-9">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h3 className="text-2xl md:text-[3.6rem] font-semibold text-white">
            EcoTracker
          </h3>

          <p className="mt-4 text-gray-100 md:text-gray-200 text-base md:text-lg">
            EcoTracker is a vibrant community for eco-conscious individuals
            committed to making a real impact. Here, you can discover and join
            sustainability challenges, share practical tips for greener living,
            explore local eco-friendly events, and track your personal
            environmental footprint.
          </p>

          <p className="mt-4 text-gray-100 md:text-gray-200 text-base md:text-lg">
            Our mission is to empower people to take measurable, meaningful
            steps toward a sustainable future — together. With community-driven
            progress at its core, Ecotracker makes it easy and fun to turn
            eco-conscious intentions into impactful actions.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={assets.about}
            alt="about image"
            className="w-full max-w-[800px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
