import { useRef } from "react";
import { scrollHandler } from "../../utils/scrollHandler";
import { Project1 } from "./components/project1";
import { Project2 } from "./components/project2";
import { Project3 } from "./components/project3";
import { Project4 } from "./components/project4";
import classes from "./projects.module.css";
export const Projects = () => {
  const projects = useRef<HTMLDivElement>(null);
  const project1 = useRef<HTMLDivElement>(null);
  const project2 = useRef<HTMLDivElement>(null);
  const project3 = useRef<HTMLDivElement>(null);
  const project4 = useRef<HTMLDivElement>(null);
  return (
    <div className={classes.projectsContainer}>
      <div className={classes.projects} ref={projects}>
        <h1>Projects</h1>
        <button onClick={() => scrollHandler(project1)}>Project1</button>
      </div>
      <div className={classes.project1} ref={project1}>
        <button onClick={() => scrollHandler(projects)}>Projects</button>
        <Project1 />
        <button onClick={() => scrollHandler(project2)}>Project2</button>
      </div>
      <div className={classes.project2} ref={project2}>
        <button onClick={() => scrollHandler(project1)}>Project1</button>
        <Project2 />
        <button onClick={() => scrollHandler(project3)}>Project3</button>
      </div>
      <div className={classes.project3} ref={project3}>
        <button onClick={() => scrollHandler(project2)}>Project2</button>
        <Project3 />
        <button onClick={() => scrollHandler(project4)}>Project4</button>
      </div>
      <div className={classes.project4} ref={project4}>
        <button onClick={() => scrollHandler(project3)}>Project3</button>
        <Project4 />
      </div>
    </div>
  );
};
