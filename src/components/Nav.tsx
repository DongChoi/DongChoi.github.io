"use client";
import Link from "next/link";
import React from "react";
import ScrollLink from "./ScrollLink";
const Nav = () => {
  return (
    <div
      className="w-screen z-10 flex justify-between py-2 bg-cyan-500/10
       backdrop-blur-[2px] fixed text-lg md:text-2xl text-purple-500"
    >
      <div className="relative font-medium  opacity-95 ml-5 bg-opacity-95">
        <ScrollLink to="projects-section">Works</ScrollLink>
      </div>
      <div className="relative opacity-95 bg-opacity-95">
        <ScrollLink to={"top"}>
          <span className="font-semibold">Andrew</span>{" "}
          <span className="font-medium">Choi</span>
        </ScrollLink>
      </div>
      <div className="relative font-medium opacity-95 mr-5 bg-opacity-95">
        <ScrollLink to={"contact"}>Contact</ScrollLink>
      </div>
    </div>
  );
};

export default Nav;
