import React from 'react';
import '../styles/Certification.css';

const certifications = [
  {
    name: 'Software Engineer Intern',
    issuer: 'HackerRank',
    image: require('../assets/certificate/sde.jpg'),
    link: 'https://example.com/certificate/react',
  },
  {
    name: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    image: require('../assets/certificate/frontendHR.jpg'),
    link: 'https://example.com/certificate/react',
  },
  {
    name: 'CSS (Basic)',
    issuer: 'HackerRank',
    image: require('../assets/certificate/csshr.jpg'),
    link: 'https://example.com/certificate/react',
  },
  {
    name: 'Introduction to JAVA',
    issuer: 'CODING NINJAS',
    image: require('../assets/certificate/javaCC.png'),
    link: 'https://example.com/certificate/react',
  },
  {
    name: 'Data Structures in JAVA',
    issuer: 'CODING NINJAS',
    image: require('../assets/certificate/DSAcc.png'),
    link: 'https://example.com/certificate/react',
  },
  {
    name: 'Frontend | Full Stack Web Development',
    issuer: 'CODING NINJAS',
    image: require('../assets/certificate/frontendcc.jpg'),
    link: 'https://example.com/certificate/react',
  },
  {
    name: 'Back End | Full Stack Web Development in Node.js',
    issuer: 'CODING NINJAS',
    image: require('../assets/certificate/backendcc.png'),
    link: 'https://example.com/certificate/react',
  },
  {
    name: 'Database Management System (DBMS)',
    issuer: 'CODING NINJAS',
    image: require('../assets/certificate/DBMScc.png'),
    link: 'https://example.com/certificate/react',
  },
  {
    name: 'Operating System',
    issuer: 'CODING NINJAS',
    image: require('../assets/certificate/OScc.png'),
    link: 'https://example.com/certificate/react',
  },
];

const Certification = () => {
  return (
    <section className="certification">
      <h2 className="certification-title">𐔌՞. CERTIFICATIONS .՞𐦯 </h2>
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
