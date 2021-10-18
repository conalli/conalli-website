import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Contact } from "./views/contact";
import { Home } from "./views/home";
import { Projects } from "./views/projects";

export const Routes = () => {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </Router>
  );
};
