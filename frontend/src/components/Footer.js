import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Tesfalem Markos. All rights reserved.
      </p>
      <p className="footer-tech">
        Built with React • Node.js • Bootstrap
      </p>
    </footer>
  );
}
