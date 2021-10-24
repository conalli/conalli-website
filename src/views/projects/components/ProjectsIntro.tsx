import classes from "./projectDetails.module.scss";

export const ProjectsIntro: React.FC = () => {
  return (
    <div className={classes.projectContainer}>
      <h1 className={classes.projectTitle}>Projects</h1>
      <p className={classes.projectText}>
        Feel free to take a look through a selection of my projects. While each
        project has been built utilising a number of different technologies, my
        main tech stack consists of:
      </p>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>CSS/SASS</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Postgres</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
};
