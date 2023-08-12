import Projects from "@/components/Projects";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  //project stuff
  return (
    <div className="relative h-screen bg-yellow-700">
      <h1 className=" bg-slate-950 text-4xl text-slate-300">Temp nav bar</h1>
      <h1 className="bg-[#007ACC] text-4xl">Projects</h1>
      <div className="flex items-center">
        <Projects />
      </div>
    </div>
  );
}
