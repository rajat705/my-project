import React from "react";
import Header from "./components/Header";
import "./styles/Header.css"; // Ensure CSS is applied
import Hero from "./components/Hero";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Certification from "./components/Certification";
import Experience from "./components/Experience";
import About from "./components/About";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* <About /> */}
      <Education />
      <Experience />
      <Projects />
      <Certification />
      {/* <Connect /> */}
      <Footer />
    </div>
  );
}

export default App;
