import { useRef, useState } from "react";
import { scrollHandler } from "../../utils/scrollHandler";
import { Project1 } from "./components/project1";
import { Project2 } from "./components/project2";
import { Project3 } from "./components/project3";
import { Project4 } from "./components/project4";
import classes from "./projects.module.css";
export const Projects = () => {
  const [projectPage, setProjectPage] = useState<number>(0);
  const clickHandler = (nextProject: number) => {
    setProjectPage(nextProject);
  };
  return (
    <div className={classes.projectsContainer}>
      {projectPage == 0 && (
        <div className={classes.projects}>
          <h1>Projects</h1>
          <button onClick={() => clickHandler(1)}>Project1</button>
        </div>
      )}
      {projectPage == 1 && (
        <div className={classes.project1}>
          <button onClick={() => clickHandler(0)}>Projects</button>
          <Project1 />
          <button onClick={() => clickHandler(2)}>Project2</button>
        </div>
      )}
      {projectPage == 2 && (
        <div className={classes.project2}>
          <button onClick={() => clickHandler(1)}>Project1</button>
          <Project2 />
          <button onClick={() => clickHandler(3)}>Project3</button>
        </div>
      )}
      {projectPage == 3 && (
        <div className={classes.project3}>
          <button onClick={() => clickHandler(2)}>Project2</button>
          <Project3 />
          <button onClick={() => clickHandler(4)}>Project4</button>
        </div>
      )}
      {projectPage == 4 && (
        <div className={classes.project4}>
          <button onClick={() => clickHandler(3)}>Project3</button>
          <Project4 />
        </div>
      )}
    </div>
  );
};
