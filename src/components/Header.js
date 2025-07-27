import React, { useState } from "react";
import "../styles/Header.css";
import rajatImage from "../assets/Rajat.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__header">
        {/* Logo */}
        <div className="navbar__logo">
          <div className="nav__image">
            <img src={rajatImage} alt="Profile" />
          </div>
        </div>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          tabIndex={0}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className={`navbar__menu ${menuOpen ? "open" : ""}`}>
        <a href="#home" className="active" onClick={handleLinkClick}>Home</a>
                <a href="#edu" onClick={handleLinkClick}>Education</a>
        <a href="#exp" onClick={handleLinkClick}>Experience</a>
        <a href="#skill" onClick={handleLinkClick}>Skills</a>
        <a href="#project" onClick={handleLinkClick}>Projects</a>
        <a href="#certificates" onClick={handleLinkClick}>Certification</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
