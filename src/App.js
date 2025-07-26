import React from "react";
import Header from "./components/Header";
import "./styles/Header.css";
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

      <section id="home">
        <Hero />
      </section>

      {/* Uncomment if you're using About */}
      {/* <section id="about">
        <About />
      </section> */}

      <section id="edu">
        <Education />
      </section>

      <section id="exp">
        <Experience />
      </section>

      <section id="project">
        <Projects />
      </section>

      <section id="certificates">
        <Certification />
      </section>

      {/* Uncomment if you're using Connect */}
      {/* <section id="connect">
        <Connect />
      </section> */}

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;


// import React from "react";
// import Header from "./components/Header";
// import "./styles/Header.css"; // Ensure CSS is applied
// import Hero from "./components/Hero";
// import Connect from "./components/Connect";
// import Footer from "./components/Footer";
// import Projects from "./components/Projects";
// import Certification from "./components/Certification";
// import Experience from "./components/Experience";
// import About from "./components/About";
// import Education from "./components/Education";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Hero />
//       {/* <About /> */}
//       <Education />
//       <Experience />
//       <Projects />
//       <Certification />
//       {/* <Connect /> */}
//       <Footer />
//     </div>
//   );
// }

// export default App;
