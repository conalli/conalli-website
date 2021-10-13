import { Home } from "./views/home";
import { Projects } from "./views/projects";
import { Contact } from "./views/contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
