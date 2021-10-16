import { Home } from "./views/home";
import { Projects } from "./views/projects";
import { Contact } from "./views/contact";
import "./App.scss";
import { useRef } from "react";
import { ViewLayout } from "./components/ViewLayout";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="app">
      <div className="home" ref={homeRef}>
        <ViewLayout bottom={{ label: "Projects", ref: projectsRef }}>
          <Home />
        </ViewLayout>
      </div>
      <div className="projects" ref={projectsRef}>
        <ViewLayout
          top={{ label: "Home", ref: homeRef }}
          bottom={{ label: "Contact", ref: contactsRef }}
        >
          <Projects />
        </ViewLayout>
      </div>
      <div className="contacts" ref={contactsRef}>
        <ViewLayout top={{ label: "Projects", ref: projectsRef }}>
          <Contact />
        </ViewLayout>
      </div>
    </div>
  );
}

export default App;
