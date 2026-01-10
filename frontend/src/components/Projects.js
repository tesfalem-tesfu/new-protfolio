import "./projects.css";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects({ refProp }) {
  return (
    <section ref={refProp} className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle">
        Real-world applications with modern UI
      </p>

      <div className="projects-grid">
        {/* Pharmacy Project */}
        <div className="project-card image pharmacy-bg">
          <div className="project-overlay">
            <h3>Pharmacy Recommendation System</h3>

            <p>
              A full-stack pharmacy platform that helps users search medicines,
              view pharmacy details, and get smart recommendations.
            </p>

            <div className="project-tech">
              <span>Node.js</span>
              <span>PHP</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
            </div>

            <a
              href="https://tesfalempharmacy.kesug.com/"
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              Live Demo <FaExternalLinkAlt />
            </a>
          </div>
        </div>

        {/* School Management Project */}
        <div className="project-card image school-bg">
          <div className="project-overlay">
            <h3>School Management System</h3>

            <p>
              A complete system for managing students, teachers, attendance,
              classes, and academic records.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>MySQL</span>
            </div>

            <span className="coming-soon">Demo Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
