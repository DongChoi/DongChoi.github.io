import Link from "next/link";
import React from "react";
import ScrollLink from "./ScrollLink";
const Nav = () => {
  return (
    <div className="w-screen z-10 flex justify-between py-2 bg-cyan-500/10 backdrop-blur-[2px] fixed  text-2xl text-amber-700">
      <div className="relative  opacity-95 ml-5 bg-opacity-95">
        <Link href="#projects-section">Works</Link>
      </div>
      <div className=" relative opacity-95 bg-opacity-95">
        <Link href="#top" className="font-semibold">
          Andrew <span className="font-medium">Choi</span>
        </Link>
      </div>
      <div className="relative opacity-95 mr-5 bg-opacity-95">Contact</div>
    </div>
  );
};

export default Nav;
