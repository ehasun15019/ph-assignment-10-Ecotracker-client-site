import React from "react";
import { assets } from "../../assets/assets";

const HomeHero = () => {
  return (
    <div className="carousel w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px]">
      {/* ---------- Slide 1 ---------- */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={assets.hero1}
          alt="Hero Image 1"
          className="w-full h-full object-cover object-center"
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Optional content (center text, button, etc.) */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            Welcome to EcoTrack 🌿
          </h2>
          <p className="max-w-xl text-sm md:text-base">
            Track your challenges and make eco-friendly progress every day.
          </p>
        </div>

        {/* Arrows */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* ---------- Slide 2 ---------- */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={assets.hero2}
          alt="Hero Image 2"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            Join Eco Challenges ♻️
          </h2>
          <p className="max-w-xl text-sm md:text-base">
            Participate in fun challenges to build a greener tomorrow.
          </p>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* ---------- Slide 3 ---------- */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={assets.hero3}
          alt="Hero Image 3"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            Track Your Activities 🌱
          </h2>
          <p className="max-w-xl text-sm md:text-base">
            Measure your eco progress and inspire others to take action.
          </p>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
