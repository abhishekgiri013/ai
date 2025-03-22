import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
       <Hero/>
      <About/>
      <Projects/> 
      <Contact/>
    </div>
  );
}
