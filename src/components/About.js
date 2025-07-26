import React from "react";
import "../styles/About.css";
import avatar1 from "../assets/about/linkedinn.PNG";
import avatar2 from "../assets/about/github.PNG";
import avatar3 from "../assets/about/xtwitter.PNG";
import avatar4 from "../assets/about/ig.PNG";
import avatar5 from "../assets/about/leetcode.PNG";
import avatar6 from "../assets/about/hakerrank.PNG";
import heroImage from "../assets/about/rajat3.png";

const About = () => {
  return (
    <section className="about">
      <div className="about-left">
        <h1 className="about-title">Rajat  <span className="footer-title-highlight">Nagar...𓂃🖊</span></h1>
        <h1 className="about-title1">「Full Stack Developer」 </h1>
        <p className="about-subtitle">
          Highly experienced Software Engineer proficient in Java Programming
          Language and Full Stack Development. Possessing a solid background in
          Computer Science & Engineering, with a Bachelor of Technology (B.Tech)
          degree. Demonstrated expertise in a wide range of technologies,
          including Java, DSA, MongoDB, Express.js, React.js, Node.js,
          JavaScript, and SQL.
        </p>

        <div className="about-buttons">
          <a
            href="https://drive.google.com/file/d/1BhJqJvHEfq1DNkYS2i4JirStflkMTxIu/view?usp=sharing "
            target="_blank"
            rel="noopener noreferrer"
            className="about-button"
          >
            Download Resume
          </a>
          {/* <a
            href="https://www.linkedin.com/in/your-linkedin-id"
            target="_blank"
            rel="noopener noreferrer"
            className="about-button"
          >
            LinkedIn Profile
          </a> */}
        </div>

        <div className="about-stats">
          <div className="learners">
            <h4>Follow me on</h4>
          </div>
          <div className="avatars">
            <a
              href="https://www.linkedin.com/in/rajat-nagar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={avatar1} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/rajat705"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={avatar2} alt="GitHub" />
            </a>
            <a
              href="https://leetcode.com/u/rajatnagar7893/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={avatar5} alt="LeetCode" />
            </a>
            <a
              href="https://www.hackerrank.com/profile/rajatnagar7893"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={avatar6} alt="HackerRank" />
            </a>
            <a
              href="https://x.com/rajatnagarr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={avatar3} alt="Twitter" />
            </a>
            <a
              href="https://instagram.com/_rajatnagar_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={avatar4} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* <div className="about-right">
        <img src={heroImage} alt="hero" />
      </div> */}
    </section>
  );
};

export default About;
