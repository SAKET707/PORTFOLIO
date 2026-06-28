import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
