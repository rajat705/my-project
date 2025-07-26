// src/components/Connect.js
import React from "react";
import '../styles/Connect.css';


// Import logos
import javaLogo from "../assets/skillTags/java.png";
import htmlLogo from "../assets/skillTags/html.png";
import cssLogo from "../assets/skillTags/css.png";
import jsLogo from "../assets/skillTags/javascript.png";
import reactLogo from "../assets/skillTags/react.png";
import gitLogo from "../assets/skillTags/git.png";
import mongoLogo from "../assets/skillTags/mongodb.png";
import mysqlLogo from "../assets/skillTags/mysql.png";
import nodeLogo from "../assets/skillTags/nodejs.png";
import expressLogo from "../assets/skillTags/expressjs.png";

const Connect = () => {
  return (
    <div className="connect-section">
      <h3 className="connect-heading">Tech Stack</h3>
      <div className="logo-container">
        <img src={javaLogo} alt="Java" />
        <img src={htmlLogo} alt="HTML" />
        <img src={cssLogo} alt="CSS" />
        <img src={jsLogo} alt="JavaScript" />
        <img src={reactLogo} alt="React" />
        <img src={gitLogo} alt="Git" />
        <img src={mongoLogo} alt="MongoDB" />
        <img src={mysqlLogo} alt="MySQL" />
        <img src={nodeLogo} alt="NodeJS" />
        <img src={expressLogo} alt="ExpressJS" />
      </div>
    </div>
  );
};

export default Connect;
