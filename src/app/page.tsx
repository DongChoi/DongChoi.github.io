import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  //project stuff
  return (
    <div className="relative h-screen bg-black">
      <div className="relative items-center ">
        <About />
        <Projects />
      </div>
    </div>
  );
}
