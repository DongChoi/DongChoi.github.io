import Image from "next/image";
import React from "react";
import "src/util/textStroke.css";
const LandingMessage = () => {
  return (
    <div className="sticky bg-amber-100 z-100 top-0 left-0 h-screen w-screen">
      <div className="flex-col  relative -top-30  z-10 w-full font-bold text-8xl">
        <p className="stroke-1">Exploring</p>
        <br />
        <p className="">New Technologies</p>
        <div className="outline-title  text-white pb-2 text-5xl font-bold text-center mb-12 mt-8">
          Values &amp; Process
        </div>
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
