import React from "react";
import "../styles/Experience.css";

const experiences = [
  {
    title: "Full Stack Developer (MERN)",
    company: "AccioJob",
    logo: require("../assets/exp/acciojob_logo.jpeg"),
    duration: "Fab 2024 - Present | Noida, UP, India",
    description: `I have learned Full Stack Development using the MERN stack (MongoDB, Express.js, React.js, and Node.js) at AccioJob. During this training, I gained hands-on experience in building real-world web applications, understanding both frontend and backend development, REST APIs, database integration, and deployment practices. The program helped me strengthen my problem-solving skills and write clean, efficient, and scalable code.`,
    skills: ["MongoDB", "Express.js", "ReactJS", "Node.js", "Git", "JavaScript", "HTML", "CSS", "MySQL", "Bootstrap"],
  },
  {
    title: "Product Developer",
    company: "Mark Barber Techno Trading LLP",
    logo: require("../assets/exp/markbarbertechnotradingllp.jpg"),
    link: "https://www.linkedin.com/company/markbarberinvestmentcorp/about/",
    duration: "March 2024 - April 2024 | Jaipur, India",
    description: `Collaborate with the team in developing a web application, contributed innovative ideas and concepts to enhance the project.
Assist in all phases of the web application lifecycle, including design, development, and deployment, ensuring adherence to rigorous quality standards.
Maintain open and effective communication with team members, providing regular progress updates and seeking assistance when necessary.`,
    skills: [
      "JavaScript",
      "ReactJS",
      "MongoDB",
      "NodeJS",
      "Git",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Afame Technologies",
    logo: require("../assets/exp/afame.png"),
    duration: "Jan 2024 - Feb 2024 | Remote, India",
    description: `Throughout my journey, I've honed my skills by working on a variety of projects that showcase my expertise in web development. I've crafted dynamic and visually appealing experiences.
My proficiency extends beyond static pages; I've also developed interactive applications like calculators, leveraging HTML, CSS , and JavaScript to create intuitive user interfaces and enhance functionality.`,
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Git", "Bootstrap"],
  },
  {
    title: "Frontend Developer",
    company: "OctaNet Software Services",
    logo: require("../assets/exp/octanetsolutions.jpeg"),
    link: "https://octanet.in/",
    duration: "Sep 2023 - Nov 2023 | Remote, India",
    description: `Developed and managed the frontend of an e-commerce platform using HTML, CSS, JavaScript, and React.
Worked on various web applications and functionalities such as login/sign up, view a product, add a product to cart, checkout the order, etc.
Tools: HTML, CSS, JavaScript, React and GIT.`,
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
  },
  {
    title: "Web Developer",
    company: "CodeClause",
    logo: require("../assets/exp/codeclause.jpeg"),
    link: "https://internship.codeclause.com/",
    duration: "July 2023 - Aug 2023 | Remote, India",
    description: `Developed and managed the frontend of an e-commerce platform using HTML, CSS, JavaScript, and React.
Worked on various web applications and functionalities such as login/sign up, view a product, add a product to cart, checkout the order, etc.`,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Java Development Intern",
    company: "CodeClause",
    logo: require("../assets/exp/codeclause.jpeg"),
    link: "https://internship.codeclause.com/",
    duration: "Apr 2023 - May 2023 | Remote, India",
    description: `Technology and Programming Language: Java, Data Structures, Algorithms, Object-Oriented Programming (OOPs).`,
    skills: ["Java", "Data Structures", "Algorithms", "OOPs"],
  },
  {
    title: "Teaching Assistant (TA) Java & DSA",
    company: "Coding Ninjas",
    logo: require("../assets/exp/codingninjas.jpeg"),
    link: "https://www.codingninjas.com",
    duration: "Oct 2022 - Feb 2023 | Ajmer, India",
    description: `Resolved over 400 student doubts and provided mentorship to more than 350 students in Java and DSA.
Achieved an average rating of 4.5 from students based on my teaching and mentoring abilities.
Tools: Java, Data Structures, Algorithms, Object Object-Oriented Programming (OOPs).`,
    skills: ["Java", "Data Structures", "Algorithms", "OOPs"],
  },
  {
    title: "Web Developer",
    company: "Ajmer Vidyut Vitran Nigam Ltd.",
    logo: require("../assets/exp/AVVNL.png"),
    link: "https://energy.rajasthan.gov.in/avvnl",
    duration: "July 2022 - Sep 2022 | Ajmer, India",
    description: `Successfully completed a summer training program at Ajmer Vidyut Vitran Nigam Ltd., gaining 80% valuable hands-on experience in the IT department.
Contributed to multiple 3 ongoing projects, including ERP implementation, and the development of the E-Vigilance mobile app.`,
    skills: ["ERP implementation", "Mobile App Development", "Cyber Security"],
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="exp">
      <h2 className="experience-title">EXPERIENCE</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <a href={exp.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  className="company-logo"
                />
              </a>
              <div>
                <h3 className="experience-role">{exp.title}</h3>
                <p className="company-name">{exp.company}</p>
                <p className="duration-location">{exp.duration}</p>
              </div>
            </div>
            <p className="experience-description">{exp.description}</p>
            <div className="experience-skills">
              {exp.skills.map((skill, i) => (
                <span className="skill-badge" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
