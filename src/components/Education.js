import React from "react";
import "../styles/Education.css";
import logo1 from "../assets/education/ecajmer.jpeg";
import logo2 from "../assets/education/mbvb.jpg";

const Education = () => {
  return (
    <div className="education-section">
      <h1 className="education-heading">𐔌՞. EDUCATION .՞𐦯</h1>

      <div className="education-wrapper">
        {/* Main College Block */}
        <div className="education-card full-card">
          <div className="education-text">
            <div className="edu-header">
              <img src={logo1} alt="GEC Logo" className="edu-logo" />
              <div>
                <h2>GOVERNMENT ENGINEERING COLLEGE (GEC)</h2>
                <p className="location">AJMER, RAJASTHAN, IN</p>
              </div>
            </div>
            <p><span className="label">Degree:</span> Bachelor of Technology (B.Tech)</p>
            <p><span className="label">Stream:</span> Computer Science and Engineering</p>
            <p><span className="label">CGPA:</span> 7.47/10</p>
            <p><span className="label">Year of Graduation:</span> 2019 - 2023</p>
            <p className="label">Relevant Courseworks:</p>
            <ul>
              <li>Java Programming Language</li>
              <li>Data Structures and Algorithms</li>
              <li>Object-Oriented Programming (OOP)</li>
              <li>HTML, CSS, JavaScript</li>
              <li>Database Management System</li>
              <li>Android Studio</li>
              <li>Linux</li>
              <li>Cloud Computing</li>
            </ul>
          </div>
        </div>

        {/* School Column */}
        <div className="school-column">
          <div className="education-card">
            <div className="education-text">
              <div className="edu-header">
                <img src={logo2} alt="School Logo" className="edu-logo" />
                <div>
                  <h2>MB VB SR SEC SCHOOL</h2>
                  <p className="location">KOTA, RAJASTHAN, IN</p>
                </div>
              </div>
              <p><span className="label">Board:</span> Rajasthan Board of Secondary Education (RBSE)</p>
              <p><span className="label">Standard:</span> 12<sup>th</sup></p>
              <p><span className="label">Stream:</span> Science - Maths</p>
            </div>
          </div>

          <div className="education-card">
            <div className="education-text">
              <div className="edu-header">
                <img src={logo2} alt="School Logo" className="edu-logo" />
                <div>
                  <h2>MB VB SR SEC SCHOOL</h2>
                  <p className="location">KOTA, RAJASTHAN, IN</p>
                </div>
              </div>
              <p><span className="label">Board:</span> Rajasthan Board of Secondary Education (RBSE)</p>
              <p><span className="label">Standard:</span> 10<sup>th</sup></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
