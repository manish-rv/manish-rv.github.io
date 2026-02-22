import "../styles/globals.css";
import Cursor      from "./Cursor";
import Particles   from "./Particles";
import Nav         from "./Nav";
import Hero        from "./Hero";
import Marquee     from "./Marquee";
import About       from "./About";
import Experience  from "./Experience";
import Projects    from "./Projects";
import Contact     from "./Contact";

export default function App() {
  return (
    <>
      {/* Global ambient effects */}
      <Cursor />
      <Particles count={40} />

      {/* Layout */}
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
