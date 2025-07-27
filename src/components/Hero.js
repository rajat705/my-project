import React from "react";
import "../styles/Hero.css";
import profileImage from "../assets/profile.png"; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__image">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="hero__content">
        <p className="hero__about-label">ABOUT</p>
        <h1 className="hero__name">RAJAT NAGAR...𓂃🖊</h1>
        <span className="hero__tagline">Full Stack Developer</span>
        <p className="hero__description">
          I’m a passionate <b> Full Stack Developer </b> with hands-on
          experience building responsive, user-centric web applications using
          React.js, Next.js, Tailwind CSS, and JavaScript/TypeScript. I
          specialize in translating UI/UX designs into functional interfaces,
          optimizing performance, and delivering seamless user experiences.
        </p>
        <p className="hero__description">
          I’m always eager to explore new technologies like Node.js, MongoDB,
          and blockchain, and love building meaningful products that solve
          real-world problems. Whether it’s developing complex UI components,
          integrating REST APIs, or managing application state, I bring a
          detail-oriented and problem-solving mindset to every project.
        </p>

        <div className="hero__socials">
          <span>Find Rajat on:</span>
          <a
            href="https://www.linkedin.com/in/rajat-nagar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/rajat705"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://leetcode.com/u/rajatnagar7893"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-code"></i>
          </a>
          <a
            href="https://www.hackerrank.com/rajatnagar7893"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-hackerrank"></i>
          </a>
          <a
            href="https://www.instagram.com/_rajatnagar_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://x.com/rajatnagarr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
