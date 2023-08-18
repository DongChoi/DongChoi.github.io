import Image from "next/image";
import React from "react";

const LandingMessage = () => {
  return (
    <div className="sticky z-100 top-0 left-0 h-screen w-screen">
      <div className="flex-col text-center absolute mt-40  z-10 w-full font-bold text-8xl">
        <p className="mb-10">Exploring</p>
        <p className="mb-10">New</p>
        <p className="bg-white w-fit m-auto px-5 py-3  font-bold text-teal-600 mix-blend-screen">
          Technologies
        </p>
      </div>

      <Image
        className="top-0 left-0"
        src="/layout/intro.jpg"
        fill={true}
        alt="background intro"
      />
    </div>
  );
};

export default LandingMessage;
