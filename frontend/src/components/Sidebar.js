import "./sidebar.css";

export default function Sidebar({ setActive }) {
  return (
    <div className="sidebar">
      <button onClick={() => setActive("home")}>Home</button>
      <button onClick={() => setActive("about")}>About</button>
      <button onClick={() => setActive("skills")}>Skills</button>
      <button onClick={() => setActive("projects")}>Projects</button>
      <button onClick={() => setActive("contact")}>Contact</button>
    </div>
  );
}
