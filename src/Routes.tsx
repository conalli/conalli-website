import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ViewLayout } from "./components/ViewLayout";
import { Contact } from "./views/contact";
import { Home } from "./views/home";
import { Projects } from "./views/projects";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <ViewLayout bottom={{ label: "Projects" }}>
            <Home />
          </ViewLayout>
        </Route>
        <Route path="/projects">
          <ViewLayout top={{ label: "Home" }} bottom={{ label: "Contact" }}>
            <Projects />
          </ViewLayout>
        </Route>
        <Route path="/contact">
          <ViewLayout top={{ label: "Projects" }}>
            <Contact />
          </ViewLayout>
        </Route>
      </Switch>
    </Router>
  );
};
