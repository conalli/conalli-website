import { Home } from "./views/home";
import { Projects } from "./views/projects";
import { Contact } from "./views/contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="home">
        <Home />
      </div>
      <div className="projects">
        <Projects />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
