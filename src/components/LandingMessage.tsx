import Image from "next/image";
import React from "react";

const LandingMessage = () => {
  return (
    <div className="sticky z-100top-0 left-0 ">
      <div className="relative flex justify-center items-center z-10 h-screen w-screen">
        <Image
          className="left-0"
          src="/layout/pexels-simon-berger-1323550.jpg"
          // width={1000}
          // height={1000}
          alt="background intro"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute font-bold text-4xl lg:inset-y-28  text-center lg:text-8xl">
          <p className="mb-10 text-rose-500 opacity-60 px-5 pb-3">Exploring</p>
          <p className="mb-10 text-sky-500 opacity-60 px-5 py-3">New</p>
          <p className="bg-white  p-3 font-bold text-black mix-blend-screen ">
            Technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingMessage;
