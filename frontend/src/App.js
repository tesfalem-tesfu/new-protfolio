import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [active, setActive] = useState("home");

  // Ref for Projects section (still works for scroll if needed)
  const projectsRef = useRef(null);

  const renderContent = () => {
    switch (active) {
      case "home":
        return <Hero />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects refProp={projectsRef} />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar setActive={setActive} />

      {/* ONLY the active section - no Profile or SocialLinks */}
      <main style={{ paddingTop: "90px", minHeight: "100vh" }}>
        {renderContent()}
      </main>

      <Footer />
    </>
  );
}

export default App;