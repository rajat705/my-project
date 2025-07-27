import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Footer.css";
import avatar1 from "../assets/about/linkedinn.PNG";
import avatar2 from "../assets/about/github.PNG";
import avatar3 from "../assets/about/xtwitter.PNG";
import avatar4 from "../assets/about/ig.PNG";
import avatar5 from "../assets/about/leetcode.PNG";
import avatar6 from "../assets/about/hakerrank.PNG";

const Footer = () => {
  const [clock, setClock] = useState({
    day: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const day = days[now.getDay()];
      const date = now.toLocaleDateString();

      const hours = now.getHours() % 12 || 12;
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "PM" : "AM";

      const time = `${hours}:${minutes}:${seconds} ${ampm}`;
      setClock({ day, date, time });
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__contact">
          <h3>Contact me</h3>
          <p>
            <FontAwesomeIcon icon={faPhone} />{" "}
            {/* <a href="tel:+917878772922" className="footer__link"> */}
              +91 - 7878XX2922
            {/* </a> */}
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a href="mailto:rajatnagar7893@gmail.com" className="footer__link">
              rajatnagar7893@gmail.com
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Gurugram, Haryana, IN
          </p>

          <div className="footer__avatars">
            <a href="https://www.linkedin.com/in/rajat-nagar" target="_blank" rel="noopener noreferrer">
              <img src={avatar1} alt="LinkedIn" />
            </a>
            <a href="https://github.com/rajat705" target="_blank" rel="noopener noreferrer">
              <img src={avatar2} alt="GitHub" />
            </a>
            <a href="https://x.com/rajatnagarr" target="_blank" rel="noopener noreferrer">
              <img src={avatar3} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/_rajatnagar_" target="_blank" rel="noopener noreferrer">
              <img src={avatar4} alt="Instagram" />
            </a>
            <a href="https://leetcode.com/u/rajatnagar7893" target="_blank" rel="noopener noreferrer">
              <img src={avatar5} alt="LeetCode" />
            </a>
            <a href="https://www.hackerrank.com/rajatnagar7893" target="_blank" rel="noopener noreferrer">
              <img src={avatar6} alt="HackerRank" />
            </a>
          </div>
        </div>

        <div className="footer__form">
          <h3>Send Feedback</h3>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="4" placeholder="Your Feedback" />
          <button type="submit">Send</button>
        </div>
      </div>

      <div className="footer__clock">
        {clock.time} || {clock.day}, {clock.date}
      </div>

      <hr className="footer__divider" />

      <div className="footer__bottom">
        <div className="footer__copyright">
          &copy; {new Date().getFullYear()}. Developed by Rajat Nagar <span>&#10084;&#65039;</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
