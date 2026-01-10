import "./animations.css";
import "./skills.css";
import {
  FaNodeJs,
  FaPhp,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaPython,
  FaPlug
} from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
    { name: "PHP", icon: <FaPhp color="#777bb4" /> },
    { name: "JavaScript", icon: <FaJsSquare color="#f7df1e" /> },
    { name: "Python", icon: <FaPython color="#3776ab" /> },
    { name: "API Development", icon: <FaPlug color="#4f46e5" /> },
    { name: "HTML", icon: <FaHtml5 color="#e34f26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572b6" /> },
    { name: "Bootstrap", icon: <FaBootstrap color="#7952b3" /> },
    { name: "GitHub", icon: <FaGithub color="#000" /> }
  ];

  return (
    <section className="skills-section fade-in">
      <div className="container">
        <h2 className="skills-title">Skills</h2>

        <div className="row justify-content-center">
          {skills.map(skill => (
            <div key={skill.name} className="col-md-3 col-sm-6 mb-4">
              <div className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <p className="skill-name">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
