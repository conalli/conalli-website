import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import { Contact } from "./views/contact";
import { Home } from "./views/home";
import { Projects } from "./views/projects";

export const Routes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
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
  );
};
