import React from "react";
import "../styles/Certification.css";

const certifications = [
  {
    name: "Software Engineer Intern",
    issuer: "HackerRank",
    image: require("../assets/certificate/sde.jpg"),
    link: "https://www.hackerrank.com/certificates/6bc30123faad",
  },
  {
    name: "Frontend Developer (React)",
    issuer: "HackerRank",
    image: require("../assets/certificate/frontendHR.jpg"),
    link: "https://example.com/certificate/react",
  },

  {
    name: "Java",
    issuer: "HackerRank",
    image: require("../assets/certificate/javaHR.png"),
    link: "https://www.hackerrank.com/certificates/942bd7fdc885",
  },
  {
    name: "JavaScript",
    issuer: "HackerRank",
    image: require("../assets/certificate/jshr.png"),
    link: "https://www.hackerrank.com/certificates/4bd3daf210c2",
  },

  {
    name: "Introduction to JAVA",
    issuer: "CODING NINJAS",
    image: require("../assets/certificate/javaCC.png"),
    link: "https://certificate.codingninjas.com/view/a291326d61548240",
  },
  {
    name: "Data Structures in JAVA",
    issuer: "CODING NINJAS",
    image: require("../assets/certificate/DSAcc.png"),
    link: "https://certificate.codingninjas.com/view/12b114a50862c020",
  },
  {
    name: "Frontend | Full Stack Web Development",
    issuer: "CODING NINJAS",
    image: require("../assets/certificate/frontendcc.jpg"),
    link: "https://certificate.codingninjas.com/view/b8e5fe3d08835c4b",
  },
  {
    name: "Back End | Full Stack Web Development in Node.js",
    issuer: "CODING NINJAS",
    image: require("../assets/certificate/backendcc.png"),
    link: "https://certificate.codingninjas.com/view/fe730e0036461d43",
  },
  {
    name: "Database Management System (DBMS)",
    issuer: "CODING NINJAS",
    image: require("../assets/certificate/DBMScc.png"),
    link: "https://certificate.codingninjas.com/view/0a2a74d8863acbae",
  },

  {
    name: "Python Programming",
    issuer: "CODING NINJAS",
    image: require("../assets/certificate/pythonudemy.jpg"),
    link: "https://www.udemy.com/certificate/UC-debe782e-e3a1-4722-8f2a-f3501e111a1a/",
  },
  {
    name: "Career Camp | React",
    issuer: "CODING NINJAS",
    image: require("../assets/certificate/reactcn.png"),
    link: "https://certificate.codingninjas.com/view/c32a4a2662f40abb",
  },
  {
    name: "Operating System",
    issuer: "CODING NINJAS",
    image: require("../assets/certificate/OScc.png"),
    link: "https://certificate.codingninjas.com/view/12ef5dce6bcc33d5",
  },

  {
    name: "Artificial Intelligence (AI)",
    issuer: "COURSERA - DeepLearning.AI",
    image: require("../assets/certificate/aicoursera.jpeg"),
    link: "https://www.coursera.org/account/accomplishments/verify/GCHPJ6MZH46S",
  },

  {
    name: "CSS (Basic)",
    issuer: "HackerRank",
    image: require("../assets/certificate/csshr.jpg"),
    link: "https://www.hackerrank.com/certificates/179283964151",
  },

  {
    name: "Problem Solving (Basic)",
    issuer: "HackerRank",
    image: require("../assets/certificate/problemhr.png"),
    link: "https://www.hackerrank.com/certificates/ca97324821f1",
  },

  {
    name: "Frontend Developer (React)",
    issuer: "HackerRank",
    image: require("../assets/certificate/reacthr.png"),
    link: "https://www.hackerrank.com/certificates/04784b75ec0e",
  },
  {
    name: "Tata Imagination Challenge 2022",
    issuer: "Unstop - Tata",
    image: require("../assets/certificate/tata.jpg"),
    link: "https://unstop.com/certificate-preview/5b68af65-6ced-4fef-a891-cd5c6db0cc29",
  },
  {
    name: "Data Science & Machine Learning",
    issuer: "Udemy",
    image: require("../assets/certificate/dsudemy.jpg"),
    link: "https://www.udemy.com/certificate/UC-777d2cf7-c067-4b4a-b42b-7ccaef9b3a53/",
  },
  {
    name: "Programming with C and C++",
    issuer: "Internshala",
    image: require("../assets/certificate/cppis.png"),
    link: "https://drive.google.com/file/d/16ImhoiAwfWDYP0OyByjso7swcm5GA5PL/view",
  },
];

const Certification = () => {
  return (
    <section className="certification">
      <h2 className="certification-title">CERTIFICATIONS</h2>
      <div className="certification-container">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-image">
              <img src={cert.image} alt={cert.name} />
            </div>
            <div className="cert-content">
              <h3>{cert.name}</h3>
              <p className="issuer">{cert.issuer}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <button className="cert-button">View Certification</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
