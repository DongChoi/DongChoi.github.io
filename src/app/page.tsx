import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  //project stuff
  return (
    <div id="top" className="relative h-screen bg-black">
      <div className="relative items-center ">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
