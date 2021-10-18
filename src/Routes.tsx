import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ViewLayout } from "./components/ViewLayout";
import { Contact } from "./views/contact";
import { Home } from "./views/home";
import { Projects } from "./views/projects";

export const Routes = () => {
  return (
    <Router>
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
    </Router>
  );
};
