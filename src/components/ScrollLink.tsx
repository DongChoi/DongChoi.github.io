"use client";

import React from "react";
import { Link } from "react-scroll";

interface ScrollLinkProps {
  to: string;
  children: React.ReactNode;
}

const ScrollLink = ({ to, children }: ScrollLinkProps) => {
  return (
    <Link to={to} smooth={true} duration={500} className="cursor-pointer">
      {children}
    </Link>
  );
};

export default ScrollLink;
