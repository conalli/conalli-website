import { useState } from "react";
import { Nav } from "../../components/Nav";
import { ViewLayout } from "../../components/ViewLayout";
import { multi } from "../../utils/multiClass";
import { Project1 } from "./components/project1";
import { Project2 } from "./components/project2";
import { Project3 } from "./components/project3";
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
        <div className={classes.techStack}>Tech Stack</div>
        <div className={classes.projectNav}>
          <button onClick={() => clickHandler(0)}>Projects</button>
          <button onClick={() => clickHandler(1)}>Project1</button>
          <button onClick={() => clickHandler(2)}>Project2</button>
          <button onClick={() => clickHandler(3)}>Project3</button>
        </div>
        <div className={classes.pageNav}>
          <Nav />
        </div>
      </div>
    </ViewLayout>
  );
};
