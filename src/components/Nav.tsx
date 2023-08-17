import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="w-screen z-10 flex justify-between py-2 bg-cyan-500/10 backdrop-blur-[2px] fixed  text-2xl text-slate-300">
      <div className="relative  opacity-95 ml-5 bg-opacity-95">Works</div>
      <div className="relative opacity-95 bg-opacity-95">
        <Link href="https://www.google.com" className="font-semibold">
          Andrew
        </Link>{" "}
        <span className="font-medium">Choi</span>
      </div>
      <div className="relative opacity-95 mr-5 bg-opacity-95">About</div>
    </div>
  );
};

export default Nav;
