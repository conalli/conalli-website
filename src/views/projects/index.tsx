import { useRef, WheelEventHandler } from "react";
import { Project1 } from "./components/project1";
import { Project2 } from "./components/project2";
import { Project3 } from "./components/project3";
import { Project4 } from "./components/project4";
import classes from "./projects.module.css";
export const Projects = () => {
  return (
    <div className={classes.projectsContainer}>
      <div className={classes.projects}>
        <h1>Projects</h1>
      </div>
      <div className={classes.project1}>
        <Project1 />
      </div>
      <div className={classes.project2}>
        <Project2 />
      </div>
      <div className={classes.project3}>
        <Project3 />
      </div>
      <div className={classes.project4}>
        <Project4 />
      </div>
    </div>
  );
};
