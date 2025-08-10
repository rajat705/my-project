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

import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Footer = () => {
  const [clock, setClock] = useState({ day: "", date: "", time: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.feedback) {
      alert("⚠️ All fields are required!");
      return;
    }

    try {
      await addDoc(collection(db, "feedbacks"), {
        name: formData.name,
        email: formData.email,
        feedback: formData.feedback,
        timestamp: serverTimestamp(),
      });

      alert("✅ Feedback submitted successfully!");
      setFormData({ name: "", email: "", feedback: "" });
    } catch (error) {
      console.error("❌ Firebase error:", error);
      alert("❌ Failed to send feedback. Please try again later.");
    }
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__contact">
          <h3>Contact Me &#128241;</h3>
          <p>
            <FontAwesomeIcon icon={faPhone} />{" "}
            <a href="tel:+917878XX2922" className="footer__link">
              +91 - 7878XX2922
            </a>
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
              href="https://x.com/rajatnagarr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={avatar3} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com/_rajatnagar_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={avatar4} alt="Instagram" />
            </a>
            <a
              href="https://leetcode.com/u/rajatnagar7893"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={avatar5} alt="LeetCode" />
            </a>
            <a
              href="https://www.hackerrank.com/rajatnagar7893"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={avatar6} alt="HackerRank" />
            </a>
          </div>
        </div>

        <div className="footer__form">
          <h3>Send Feedback &#128077;</h3>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {/* <input
              type="number"
              name="number"
              placeholder="Your Mobile Number"
              value={formData.number}
              onChange={handleInputChange}
              required
            /> */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <textarea
              name="feedback"
              rows="4"
              placeholder="Your Feedback...!&#128525;"
              value={formData.feedback}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Send &#128640;</button>
          </form>
        </div>
      </div>

      <div className="footer__clock">
        {clock.time} &#128338; {clock.day}, {clock.date}
      </div>

      <hr className="footer__divider" />

      <div className="footer__bottom">
        <div className="footer__copyright">
          &copy; 2024. {/* {new Date().getFullYear()}.  */} Developed by Rajat Nagar{" "}
          <span>&#10084;&#65039;</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
