import { useState } from "react";
import { Nav } from "../../components/Nav";
import { ViewLayout } from "../../components/ViewLayout";
import { multi } from "../../utils/multiClass";
import { ProjectsIntro, ProjectsIntroViz } from "./components/ProjectsIntro";
import { MyNiwaDetails, MyNiwaViz } from "./components/MyNiwa";
import { BookshelfDetails, BookshelfViz } from "./components/Bookshelf";
import { AwayDaysDetails, AwayDaysViz } from "./components/AwayDays";
import * as TechStack from "../../assets/techStack";
import {
  TechStackList,
  mainTechStack,
  myNiwaTechStack,
  bookshelfTechStack,
  awayDaysTechStack,
} from "./utils/projectTechStacks";
import classes from "./projects.module.scss";

export const Projects: React.FC = () => {
  const [projectPage, setProjectPage] = useState<number>(0);
  const [showTech, setShowTech] = useState<TechStackList>(mainTechStack);
  const showSVG = { opacity: 1, filter: "none" };
  const hideSVG = { opacity: 0.25, filter: "grayscale(100%)" };
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
      <div className={classes.allProjectsContainer}>
        {projectPage == 0 && (
          <div className={multi(classes.mainContent, classes.projects)}>
            <ProjectsIntro />
          </div>
        )}
        {projectPage == 1 && (
          <div className={multi(classes.mainContent, classes.myNiwaMain)}>
            <MyNiwaDetails />
          </div>
        )}
        {projectPage == 2 && (
          <div className={multi(classes.mainContent, classes.bookshelfMain)}>
            <BookshelfDetails />
          </div>
        )}
        {projectPage == 3 && (
          <div className={multi(classes.mainContent, classes.awayDaysMain)}>
            <AwayDaysDetails />
          </div>
        )}
        <div className={classes.projectViz}>
          {projectPage == 0 && (
            <div className={classes.projectsIntroViz}>
              <ProjectsIntroViz
                clickHandler={clickHandler}
                setShowTech={setShowTech}
              />
            </div>
          )}
          {projectPage == 1 && (
            <div className={multi(classes.project1)}>
              <MyNiwaViz />
            </div>
          )}
          {projectPage == 2 && (
            <div className={multi(classes.project2)}>
              <BookshelfViz />
            </div>
          )}
          {projectPage == 3 && (
            <div className={multi(classes.project3)}>
              <AwayDaysViz />
            </div>
          )}
        </div>
        <div className={classes.techStack}>
          <ul>
            <li style={showTech.css ? showSVG : hideSVG}>
              <TechStack.CSSSVG />
            </li>
            <li style={showTech.express ? showSVG : hideSVG}>
              <TechStack.ExpressSVG />
            </li>
            <li style={showTech.flask ? showSVG : hideSVG}>
              <TechStack.FlaskSVG />
            </li>
            <li style={showTech.go ? showSVG : hideSVG}>
              <TechStack.GoSVG />
            </li>
            <li style={showTech.gql ? showSVG : hideSVG}>
              <TechStack.GQLSVG />
            </li>
            <li style={showTech.js ? showSVG : hideSVG}>
              <TechStack.JSSVG />
            </li>
            <li style={showTech.material ? showSVG : hideSVG}>
              <TechStack.MatieralSVG />
            </li>
            <li style={showTech.mongo ? showSVG : hideSVG}>
              <TechStack.MongoSVG />
            </li>
            <li style={showTech.psql ? showSVG : hideSVG}>
              <TechStack.PSQLSVG />
            </li>
            <li style={showTech.python ? showSVG : hideSVG}>
              <TechStack.PythonSVG />
            </li>
            <li style={showTech.react ? showSVG : hideSVG}>
              <TechStack.ReactSVG />
            </li>
            <li style={showTech.rust ? showSVG : hideSVG}>
              <TechStack.RustSVG />
            </li>
            <li style={showTech.ts ? showSVG : hideSVG}>
              <TechStack.TSSVG />
            </li>
          </ul>
        </div>
        <div className={classes.projectNav}>
          <button
            onClick={() => {
              setShowTech(mainTechStack);
              clickHandler(0);
            }}
          >
            Projects
          </button>
          <button
            onClick={() => {
              setShowTech(myNiwaTechStack);
              clickHandler(1);
            }}
          >
            My Niwa
          </button>
          <button
            onClick={() => {
              setShowTech(bookshelfTechStack);
              clickHandler(2);
            }}
          >
            Bookshelf
          </button>
          <button
            onClick={() => {
              setShowTech(awayDaysTechStack);
              clickHandler(3);
            }}
          >
            Away Days
          </button>
        </div>
        <div className={classes.pageNav}>
          <Nav />
        </div>
      </div>
    </ViewLayout>
  );
};
