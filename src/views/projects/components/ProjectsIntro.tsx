import myNiwaLogo from "../../../assets/myniwa.svg";
import bookshelfLogo from "../../../assets/bookshelflogo.png";
import classes from "./projectStyles.module.scss";
import { multi } from "../../../utils/multiClass";
import {
  awayDaysTechStack,
  bookshelfTechStack,
  myNiwaTechStack,
  TechStackList,
} from "../utils/projectTechStacks";

export const ProjectsIntro: React.FC = () => {
  return (
    <div className={classes.detailsContainer}>
      <h1 className={classes.detailsTitle}>Projects</h1>
      <p className={classes.detailsText}>
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

type ProjectsIntroVizProps = {
  clickHandler: (nextProject: number) => void;
  setShowTech: (value: React.SetStateAction<TechStackList>) => void;
};

export const ProjectsIntroViz: React.FC<ProjectsIntroVizProps> = ({
  clickHandler,
  setShowTech,
}) => {
  return (
    <div className={multi(classes.vizContainer, classes.projectsIntroViz)}>
      <ul className={classes.projectsIntroList}>
        <li>
          <button
            onClick={() => {
              setShowTech(myNiwaTechStack);
              clickHandler(1);
            }}
          >
            <img src={myNiwaLogo} />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setShowTech(bookshelfTechStack);
              clickHandler(2);
            }}
          >
            <img src={bookshelfLogo} />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setShowTech(awayDaysTechStack);
              clickHandler(3);
            }}
          >
            <h1>Away Days API</h1>
          </button>
        </li>
      </ul>
    </div>
  );
};
