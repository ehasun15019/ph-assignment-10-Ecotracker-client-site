import React from "react";

const Title = ({ text1,  }) => {
  return (
    <div className="relative flex flex-col items-center mt-10 sm:mt-14 mb-10">
      {/* Background text */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-black/10 uppercase select-none">
        {text1}
        <div className="mt-2 h-[3px] w-24 bg-black/10 rounded-full mx-auto"></div>
      </h1>

      {/* Foreground main title with underline */}
      {/* <h1 className="relative text-3xl md:text-5xl font-extrabold text-black z-10 text-center">
        {text2}
        <div className="mt-2 h-[3px] w-24 bg-black rounded-full mx-auto"></div>
      </h1> */}
    </div>
  );
};

export default Title;
