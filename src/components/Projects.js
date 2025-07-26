import React from "react";
import "../styles/Projects.css";
import heroImage0 from "../assets/project/admission.png";
import heroImage1 from "../assets/project/weather.png";
import heroImage2 from "../assets/project/interviu.png";
import heroImage3 from "../assets/project/bee.png";
import heroImage4 from "../assets/project/whiteboard.jpeg";
import heroImage5 from "../assets/project/ahead.png";
import heroImage6 from "../assets/project/rf.png";

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="projects-heading">𐔌՞. PROJECTS .՞𐦯</h2>
      <div className="projects-container">
        {/* Project 0 - Online College Admission Management*/}
        <div className="projects-card">
          <div className="projects-image">
            <img src={heroImage0} alt="Admission Management" />
          </div>

          <div className="projects-content">
            <h1>
              <span className="highlight-yellow">
                Online College Admission Management
              </span>
              <br />
              <span className="highlight-white">
                Streamlines registration, enhances user experience, and
                simplifies the entire admission process!{" "}
              </span>
            </h1>
            <div className="projects-features">
              <div className="feature-item">
                📝 Skills: JS, React, MongoDB, Node.js, RESTful API
              </div>
            </div>
            <div className="projects-buttons">
              <a
                href="https://admissionmanagement.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="join-button">Click me 🚀</button>
              </a>
              <a
                href="https://github.com/rajat705/admissionmanagement"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="join-button">GitHub Link 🐙</button>
              </a>
            </div>
          </div>
        </div>

        {/* Project 1 - Weather Web Application */}
        <div className="projects-card">
          <div className="projects-image">
            <img src={heroImage1} alt="Weather App Screenshot" />
          </div>

          <div className="projects-content">
            <h1>
              <span className="highlight-yellow">Weather Web Application</span>
              <br />
              <span className="highlight-white">
                Sleek and responsive Weather Web App — delivers real-time
                forecasts with a clean, user-friendly interface!
              </span>
            </h1>
            {/* <p className="projects-description">
              <li>
                Developed a Weather Dashboard for real-time global weather data, featuring
                geolocation-based weather, city search, and 24x7 hourly forecasts.
              </li>
              <li>
                Provides real-time weather info for 500+ cities using React, APIs.
              </li>
              <li>Tools: HTML, CSS, JavaScript, React, API etc.</li>
            </p> */}
            <div className="projects-features">
              <div className="feature-item">
                📝 Skills: HTML, CSS, JavaScript, React, API, Git
              </div>
            </div>
            <div className="projects-buttons">
              <a
                href="https://weather-app-rajat-nagar.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="join-button">Click me 🚀</button>
              </a>
              <a
                href="https://github.com/rajatgithubrepo/weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="join-button">GitHub Link 🐙</button>
              </a>
            </div>
          </div>
        </div>
        {/* Project 2 - interviue.io */}
        <div className="projects-card">
          <div className="projects-image">
            <img src={heroImage2} alt="Weather App Screenshot" />
          </div>

          <div className="projects-content">
            <h1>
              <span className="highlight-yellow">interviue.io</span>
              <br />
              <span className="highlight-white">
                Smooth UI, real-time coding, and audio-video integration make it
                feel just like the real platform!
              </span>
            </h1>
            <div className="projects-features">
              <div className="feature-item">
                📝 Skills: HTML, CSS, JavaScript, React, Git, Vercel
              </div>
            </div>
            <div className="projects-buttons">
              <a
                href="https://intervue-io-raj.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="join-button">Click me 🚀</button>
              </a>
              <a
                href="https://github.com/rajat705/intervue-io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="join-button">GitHub Link 🐙</button>
              </a>
            </div>
          </div>
        </div>
        {/* Project 3 - Bee Online */}
        <div className="projects-card">
          <div className="projects-image">
            <img src={heroImage3} alt="Weather App Screenshot" />
          </div>

          <div className="projects-content">
            <h1>
              <span className="highlight-yellow">Online Class Info</span>
              <br />
              <span className="highlight-white">
                Well-crafted App — smooth navigation, interactive features, and
                ideal for virtual learning experiences!
              </span>
            </h1>
            <div className="projects-features">
              <div className="feature-item">
                📝 Skills: JavaScript, React, API
              </div>
            </div>
            <div className="projects-buttons">
              <a
                href="https://bee-online-blond.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="join-button">Click me 🚀</button>
              </a>
              <a
                href="https://github.com/rajat705/Bee_Online"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="join-button">GitHub Link 🐙</button>
              </a>
            </div>
          </div>
        </div>
        {/* Project 4 - Real time whiteboard Dashboard */}
        <div className="projects-card">
          <div className="projects-image">
            <img src={heroImage4} alt="Weather App Screenshot" />
          </div>

          <div className="projects-content">
            <h1>
              <span className="highlight-yellow">
                Real time whiteboard Dashboard
              </span>
              <br />
              <span className="highlight-white">
                Real-time Whiteboard — seamless collaboration, instant updates,
                and a smooth interactive experience!
              </span>
            </h1>
            <div className="projects-features">
              <div className="feature-item">
                📝 Skills: HTML, CSS, JavaScript, React, API
              </div>
            </div>
            <div className="projects-buttons">
              <a
                href="https://real-time-whiteboard-phi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="join-button">Click me 🚀</button>
              </a>
              <a
                href="https://github.com/rajat705/Real-Time_Whiteboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="join-button">GitHub Link 🐙</button>
              </a>
            </div>
          </div>
        </div>
        {/* Project 5 - Ahead Project */}
        <div className="projects-card">
          <div className="projects-image">
            <img src={heroImage5} alt="ahead-project" />
          </div>

          <div className="projects-content">
            <h1>
              <span className="highlight-yellow">Ahead</span>
              <br />
              <span className="highlight-white">
                Impressive Ahead clone app — clean design, smooth UX, and smart
                tools for personal growth and habit tracking!
              </span>
            </h1>
            <div className="projects-features">
              <div className="feature-item">
                📝 Skills: TypeScript, React, API
              </div>
            </div>
            <div className="projects-buttons">
              <a
                href="https://ahead-project-rajatnagar.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="join-button">Click me 🚀</button>
              </a>
              <a
                href="https://github.com/rajat705/ahead-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="join-button">GitHub Link 🐙</button>
              </a>
            </div>
          </div>
        </div>
        {/* Project 6 - Reciepe Finer */}
        <div className="projects-card">
          <div className="projects-image">
            <img src={heroImage6} alt="Recipe Finder" />
          </div>

          <div className="projects-content">
            <h1>
              <span className="highlight-yellow">Recipe Finder</span>
              <br />
              <span className="highlight-white">
                Neat Recipe Finder clone — easy search, clean layout, and great
                for discovering new dishes quickly!
              </span>
            </h1>
            <div className="projects-features">
              <div className="feature-item">
                📝 Skills: HTML, CSS, JavaScript
              </div>
            </div>
            <div className="projects-buttons">
              <a
                href="https://recipe-finder-nu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="join-button">Click me 🚀</button>
              </a>
              <a
                href="https://github.com/rajat705/recipe-finder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="join-button">GitHub Link 🐙</button>
              </a>
            </div>
          </div>
        </div>
        {/* Project 7 */}
        <div className="projects-card">
          <div className="projects-image">
            <img src={heroImage2} alt="Weather App Screenshot" />
          </div>

          <div className="projects-content">
            <h1>
              <span className="highlight-yellow">Weather Web Application</span>
              <br />
              <span className="highlight-white">
                A Weather web app based on ReactJS
              </span>
            </h1>
            <div className="projects-features">
              <div className="feature-item">
                📝 Skills: HTML, CSS, JavaScript, React, API
              </div>
            </div>
            <div className="projects-buttons">
              <a
                href="https://weather-app-rajat-nagar.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="join-button">Click me 🚀</button>
              </a>
              <a
                href="https://github.com/rajatgithubrepo/weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="join-button">GitHub Link 🐙</button>
              </a>
            </div>
          </div>
        </div>

        {/* Copy and paste the projects */}
      </div>
    </div>
  );
};

export default Projects;
