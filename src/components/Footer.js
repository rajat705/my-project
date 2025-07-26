import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import "../styles/Footer.css";
import avatar1 from "../assets/about/linkedinn.PNG";
import avatar2 from "../assets/about/github.PNG";
import avatar3 from "../assets/about/xtwitter.PNG";
import avatar4 from "../assets/about/ig.PNG";
import avatar5 from "../assets/about/leetcode.PNG";
import avatar6 from "../assets/about/hakerrank.PNG";

const Footer = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { weekday: "long" };
      const currentDay = new Intl.DateTimeFormat("en-US", options).format(now);
      const currentDate = now.toLocaleDateString("en-GB");
      const currentTime = now.toLocaleTimeString("en-GB", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setDay(currentDay);
      setDate(currentDate);
      setTime(currentTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Date & Time */}
        <div className="footer-left">
          <div className="footer-info">
            <div className="footer-title">{day}</div>
            <div className="footer-title">{date}</div>
            <div className="footer-time">{time}</div>
          </div>
        </div>

        {/* Right: Contact */}
        <div className="footer-right">
          <div className="footer-column">
            <h4>Contact Information</h4>
            <p><FontAwesomeIcon icon={faPhone} /> +91 - 7878XX2922</p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:rajatnagar7893@gmail.com" className="footer-email">
                rajatnagar7893@gmail.com
              </a>
            </p>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Gurugram, Haryana, IN</p>
          </div>
        </div>
      </div>

      {/* Centered Avatars */}
      <div className="avatars">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <img src={avatar1} alt="LinkedIn" />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <img src={avatar2} alt="GitHub" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <img src={avatar3} alt="X Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src={avatar4} alt="Instagram" />
        </a>
        <a href="https://leetcode.com" target="_blank" rel="noreferrer">
          <img src={avatar5} alt="LeetCode" />
        </a>
        <a href="https://hackerrank.com" target="_blank" rel="noreferrer">
          <img src={avatar6} alt="HackerRank" />
        </a>
      </div>

      <hr className="footer-divider" />
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()}. Developed by Rajat Nagar<span>&#10084;&#65039;</span>
      </div>
    </footer>
  );
};

export default Footer;
