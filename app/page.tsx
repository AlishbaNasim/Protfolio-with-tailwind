import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "../app/About/page";
import Skills from "./Skills/page";
import Project from "../app/Project/page"
import Contact from "../app/Contact/page";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
       <Footer/>
    </div>
  );
}
