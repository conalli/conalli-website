import myNiwaLogo from "../../../assets/myniwa-logo.png";
import bookshelfLogo from "../../../assets/bookshelf-logo-github.png";
import classes from "./projectStyles.module.scss";
import { multi } from "../../../utils/multiClass";
import {
  awayDaysTechStack,
  bookshelfTechStack,
  myNiwaTechStack,
  TechStackList,
} from "../utils/projectTechStacks";
import { motion } from "framer-motion";

export const ProjectsIntro: React.FC = () => {
  return (
    <motion.div
      className={classes.detailsContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className={classes.detailsTitle}>Overview</h1>
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
        <li>Go</li>
        <li>Postgres</li>
        <li>MongoDB</li>
      </ul>
    </motion.div>
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
    <motion.div
      className={multi(classes.vizContainer, classes.projectsIntroViz)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3>Click a project to learn more:</h3>
      <ul className={classes.projectsIntroList}>
        <li>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setShowTech(myNiwaTechStack);
              clickHandler(1);
            }}
          >
            <img src={myNiwaLogo} />
          </motion.button>
        </li>
        <li>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setShowTech(bookshelfTechStack);
              clickHandler(2);
            }}
          >
            <img src={bookshelfLogo} />
          </motion.button>
        </li>
        <li>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setShowTech(awayDaysTechStack);
              clickHandler(3);
            }}
          >
            <h1>Away Days API</h1>
          </motion.button>
        </li>
      </ul>
    </motion.div>
  );
};
