import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row relative w-screen">
      <div className="md:w-1/2 flex justify-center relative bg-blue-500">
        <Image
          className="md:mx-5 rounded-md"
          src="/profile/profile_pic.jpg"
          width={1000}
          height={1000}
          alt="Profile image failed to load!"
          layout="responsive"
        />
      </div>
      <div className="h-screen md:w-1/2 p-5 flex flex-col justify-center md:h-auto bg-[#111111]">
        <span className="text-2xl font-semibold text-purple-500">About</span>
        {/*animate this so that there are many different titles. 
        Campaign Manager -> Behavior Technician -> Parent Consultant -> Insurance Adjuster ->  Software Engineer */}
        <br />
        <br />
        <p className="text-4xl bg-clip-text text-transparent  bg-gradient-to-r from-blue-400 to-yellow-200 font-semibold">
          Full Stack Developer
        </p>
        <br />

        <p className="text-lg">
          I am Andrew, a Full Stack Developer from California, exploring new
          technologies in the field of web development. My expertise is
          developing next-level websites and web applications including
          frontend, backend and database design.
        </p>
      </div>
    </div>
  );
};

export default About;
