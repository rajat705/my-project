// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faEnvelope,
//   faMapMarkerAlt,
//   faPhone,
// } from "@fortawesome/free-solid-svg-icons";
// import "../styles/Footer.css";
// import avatar1 from "../assets/about/linkedinn.PNG";
// import avatar2 from "../assets/about/github.PNG";
// import avatar3 from "../assets/about/xtwitter.PNG";
// import avatar4 from "../assets/about/ig.PNG";
// import avatar5 from "../assets/about/leetcode.PNG";
// import avatar6 from "../assets/about/hakerrank.PNG";
// import emailjs from "@emailjs/browser";    // To recieve email

// const Footer = () => {
//   const [clock, setClock] = useState({
//     day: "",
//     date: "",
//     time: "",
//   });

//   // To recieve email
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     feedback: "",
//   });

//   useEffect(() => {
//     const updateClock = () => {
//       const now = new Date();
//       const days = [
//         "Sunday",
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday",
//       ];
//       const day = days[now.getDay()];
//       const date = now.toLocaleDateString();

//       const hours = now.getHours() % 12 || 12;
//       const minutes = now.getMinutes().toString().padStart(2, "0");
//       const seconds = now.getSeconds().toString().padStart(2, "0");
//       const ampm = now.getHours() >= 12 ? "PM" : "AM";

//       const time = `${hours}:${minutes}:${seconds} ${ampm}`;
//       setClock({ day, date, time });
//     };

//     updateClock();
//     const interval = setInterval(updateClock, 1000);
//     return () => clearInterval(interval);
//   }, []);


//     // ✅ Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // ✅ Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "YOUR_SERVICE_ID", // e.g. service_xxx123 / YOUR_SERVICE_ID
//         "YOUR_TEMPLATE_ID", // e.g. template_abc456 / YOUR_TEMPLATE_ID
//         {
//           name: formData.name,
//           email: formData.email,
//           feedback: formData.feedback,
//         },
//         "YOUR_PUBLIC_KEY" // e.g. 7GJHG88-y0v2tL / YOUR_PUBLIC_KEY
//       )
//       .then(() => {
//         alert("🎉Feedback submitted successfully!");
//         setFormData({ name: "", email: "", feedback: "" });
//       })
//       .catch((error) => {
//         console.error("Error sending email:", error);
//         alert("Failed to send feedback. Please try again later.");
//       });
//   };


//   return (
//     <footer className="footer">
//       <div className="footer__top">
//         <div className="footer__contact">
//           <h3>Contact me</h3>
//           <p>
//             <FontAwesomeIcon icon={faPhone} />{" "}
//             {/* <a href="tel:+917878772922" className="footer__link"> */}
//               +91 - 7878XX2922
//             {/* </a> */}
//           </p>
//           <p>
//             <FontAwesomeIcon icon={faEnvelope} />{" "}
//             <a href="mailto:rajatnagar7893@gmail.com" className="footer__link">
//               rajatnagar7893@gmail.com
//             </a>
//           </p>
//           <p>
//             <FontAwesomeIcon icon={faMapMarkerAlt} /> Gurugram, Haryana, IN
//           </p>

//           <div className="footer__avatars">
//             <a href="https://www.linkedin.com/in/rajat-nagar" target="_blank" rel="noopener noreferrer">
//               <img src={avatar1} alt="LinkedIn" />
//             </a>
//             <a href="https://github.com/rajat705" target="_blank" rel="noopener noreferrer">
//               <img src={avatar2} alt="GitHub" />
//             </a>
//             <a href="https://x.com/rajatnagarr" target="_blank" rel="noopener noreferrer">
//               <img src={avatar3} alt="Twitter" />
//             </a>
//             <a href="https://www.instagram.com/_rajatnagar_" target="_blank" rel="noopener noreferrer">
//               <img src={avatar4} alt="Instagram" />
//             </a>
//             <a href="https://leetcode.com/u/rajatnagar7893" target="_blank" rel="noopener noreferrer">
//               <img src={avatar5} alt="LeetCode" />
//             </a>
//             <a href="https://www.hackerrank.com/rajatnagar7893" target="_blank" rel="noopener noreferrer">
//               <img src={avatar6} alt="HackerRank" />
//             </a>
//           </div>
//         </div>

//         <div className="footer__form">
//   <h3>Send Feedback</h3>
//   <form onSubmit={handleFormSubmit}>
//     <input
//       type="text"
//       name="name"
//       placeholder="Your Name"
//       value={formData.name}
//       onChange={handleInputChange}
//       required
//     />
//     <input
//       type="email"
//       name="email"
//       placeholder="Your Email"
//       value={formData.email}
//       onChange={handleInputChange}
//       required
//     />
//     <textarea
//       name="feedback"
//       rows="4"
//       placeholder="Your Feedback"
//       value={formData.feedback}
//       onChange={handleInputChange}
//       required
//     />
//     <button type="submit">Send</button>
//   </form>
// </div>

//       </div>

//       <div className="footer__clock">
//         {clock.time} || {clock.day}, {clock.date}
//       </div>

//       <hr className="footer__divider" />

//       <div className="footer__bottom">
//         <div className="footer__copyright">
//           &copy; {new Date().getFullYear()}. Developed by Rajat Nagar <span>&#10084;&#65039;</span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  // ⏰ Real-time clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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

  // 📝 Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Handle POST submission using fetch
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Feedback submitted successfully!");
        setFormData({ name: "", email: "", feedback: "" });
      } else {
        alert("❌ Failed to submit feedback. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("⚠️ Error occurred while submitting feedback.");
    }
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        {/* Contact Info */}
        <div className="footer__contact">
          <h3>Contact Me</h3>
          <p>
            <FontAwesomeIcon icon={faPhone} />{" "}
            <a href="tel:+917878772922" className="footer__link">
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

          {/* Social Avatars */}
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

        {/* Feedback Form */}
        <div className="footer__form">
          <h3>Send Feedback</h3>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
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
              placeholder="Your Feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      {/* Clock */}
      <div className="footer__clock">
        {clock.time} || {clock.day}, {clock.date}
      </div>

      <hr className="footer__divider" />

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <div className="footer__copyright">
       &copy; {new Date().getFullYear()}. Developed by Rajat Nagar <span>&#10084;&#65039;</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
