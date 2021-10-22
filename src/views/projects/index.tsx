import { useState } from "react";
import { Nav } from "../../components/Nav";
import { ViewLayout } from "../../components/ViewLayout";
import { multi } from "../../utils/multiClass";
import { Project1 } from "./components/project1";
import { Project2 } from "./components/project2";
import { Project3 } from "./components/project3";
import * as TechStack from "../../assets/techStack";
import classes from "./projects.module.scss";

export const Projects: React.FC = () => {
  const [projectPage, setProjectPage] = useState<number>(0);
  const clickHandler = (nextProject: number) => {
    setProjectPage(nextProject);
  };
  return (
    <ViewLayout
      top={{
        linkTo: "",
        transitionBackground: {
          one: "rgba(253, 74, 74, 0.8)",
          two: "grey",
        },
        color: "rgba(253, 74, 74, 0.8)",
      }}
      bottom={{
        linkTo: "contact",
        transitionBackground: {
          one: "rgba(253, 74, 74, 0.8)",
          two: "whitesmoke",
        },
        color: "black",
      }}
    >
      <div className={classes.projectsContainer}>
        {projectPage == 0 && (
          <div className={multi(classes.mainContent, classes.projects)}>
            <h1>Projects</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
              voluptates. Quasi accusamus sed a, at nulla dolorem distinctio.
              Quasi assumenda laboriosam incidunt! Incidunt harum reprehenderit
              explicabo iusto. Suscipit minus dolore doloremque rerum ab
              repudiandae, corrupti hic molestias veniam et in aspernatur cum
              tenetur quam quis aliquam autem voluptates? Vitae, explicabo.
            </p>
          </div>
        )}
        {projectPage == 1 && (
          <div className={multi(classes.mainContent, classes.project1)}>
            <Project1 />
          </div>
        )}
        {projectPage == 2 && (
          <div className={multi(classes.mainContent, classes.project2)}>
            <Project2 />
          </div>
        )}
        {projectPage == 3 && (
          <div className={multi(classes.mainContent, classes.project3)}>
            <Project3 />
          </div>
        )}
        <div className={classes.projectViz}>Project Viz</div>
        <div className={classes.techStack}>
          <ul>
            <li>
              <TechStack.CSSSVG />
            </li>
            <li>
              <TechStack.ExpressSVG />
            </li>
            <li>
              <TechStack.FlaskSVG />
            </li>
            <li>
              <TechStack.GoSVG />
            </li>
            <li>
              <TechStack.GQLSVG />
            </li>
            <li>
              <TechStack.JSSVG />
            </li>
            <li>
              <TechStack.MatieralSVG />
            </li>
            <li>
              <TechStack.MongoSVG />
            </li>
            <li>
              <TechStack.PSQLSVG />
            </li>
            <li>
              <TechStack.PythonSVG />
            </li>
            <li>
              <TechStack.ReactSVG />
            </li>
            <li>
              <TechStack.RustSVG />
            </li>
            <li>
              <TechStack.TSSVG />
            </li>
          </ul>
        </div>
        <div className={classes.projectNav}>
          <button onClick={() => clickHandler(0)}>Projects</button>
          <button onClick={() => clickHandler(1)}>My Niwa</button>
          <button onClick={() => clickHandler(2)}>Bookshelf</button>
          <button onClick={() => clickHandler(3)}>Away Days</button>
        </div>
        <div className={classes.pageNav}>
          <Nav />
        </div>
      </div>
    </ViewLayout>
  );
};
