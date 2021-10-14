import { Home } from "./views/home";
import { Projects } from "./views/projects";
import { Contact } from "./views/contact";
import "./App.css";
import { useRef } from "react";
import { scrollHandler } from "./utils/scrollHandler";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="app">
      <div className="home" ref={homeRef}>
        <button onClick={() => scrollHandler(projectsRef)}></button>
        <Home />
      </div>
      <div className="projects" ref={projectsRef}>
        <button onClick={() => scrollHandler(homeRef)}></button>
        <Projects />
        <button onClick={() => scrollHandler(contactsRef)}></button>
      </div>
      <div className="contacts" ref={contactsRef}>
        <button onClick={() => scrollHandler(projectsRef)}></button>
        <Contact />
      </div>
    </div>
  );
}

export default App;
