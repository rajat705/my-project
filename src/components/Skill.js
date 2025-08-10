// import React from "react";
// import "../styles/Skill.css";

// // Skills data with emojis in category titles
// const skillsData = {
//   "💻 Programming": ["Java", "JavaScript", "TypeScript", "Python"],
//   "🎨 Frontend": [
//     "React.js",
//     "Next.js",
//     "Vue.js",
//     "React Native",
//     "Bootstrap",
//     "Tailwind CSS",
//     "Material UI",
//     "HTML5", "CSS3",
//   ],
//   "⚙️ Backend": ["Node.js", "Express.js", "RESTful API",],
//   "🗃️ Database": ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "GraphQL"],
//   "🛠️ Developer Tools": ["Git", "GitHub", "VS Code", "Eclipse", "Figma"],
//   "📚 Additional Skills": [
//     "DSA",
//     "OOPS",
//     "Linux",
//     "AWS",
//     "GCP",
//   ],
//   "🧠 Soft Skills": ["Communication", "Teamwork", "Leadership", "Problem-solving"],
// };

// const Skill = () => {
//   return (
//     <section className="skills-section" id="skill">
//       <h2 className="skills-title">
//          <span>Skills &#128161;</span>
//       </h2>
//       <div className="skills-container">
//         {Object.entries(skillsData).map(([category, skills]) => (
//           <div className="skills-category" key={category}>
//             <h3>{category}</h3>
//             <div className="skills-list">
//               {skills.map((skill) => (
//                 <div className="skill-item" key={skill}>
//                   <span>{skill}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skill;


import React from "react";
import "../styles/Skill.css";

// Skills data with HTML entity codes in category titles
const skillsData = {
  "&#128187; Programming": ["Java", "JavaScript", "TypeScript", "Python"],
  "&#127912; Frontend": [
    "React.js",
    "Next.js",
    "Vue.js",
    "React Native",
    "Bootstrap",
    "Tailwind CSS",
    "Material UI",
    "HTML5",
    "CSS3",
  ],
  "&#9881;&#65039; Backend": ["Node.js", "Express.js", "RESTful API"],
  "&#128451;&#65039; Database": ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "GraphQL"],
  "&#128736;&#65039; Developer Tools": ["Git", "GitHub", "VS Code", "Eclipse", "Figma"],
  "&#128218; Additional Skills": [
    "DSA",
    "OOPS",
    "Linux",
    "AWS",
    "GCP",
  ],
  "&#129504; Soft Skills": ["Communication", "Teamwork", "Leadership", "Problem-solving"],
};

const Skill = () => {
  return (
    <section className="skills-section" id="skill">
      <h2 className="skills-title">
        <span>Skills &#128161;</span>
      </h2>
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div className="skills-category" key={category}>
            <h3 dangerouslySetInnerHTML={{ __html: category }} />
            <div className="skills-list">
              {skills.map((skill) => (
                <div className="skill-item" key={skill}>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
