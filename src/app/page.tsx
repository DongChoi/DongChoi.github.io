import About from "@/components/About";
import Projects from "@/components/Projects";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  //project stuff
  return (
    <div className="relative h-screen bg-yellow-700">
      <div className="relative items-center ">
        <About />
        <Projects />
      </div>
    </div>
  );
}
