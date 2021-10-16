import { Linkedin } from "./components/spanComponents/LinkedinSpan";
import { Location } from "./components/spanComponents/LocationSpan";
import { Github } from "./components/spanComponents/GithubSpan";
import { Food } from "./components/spanComponents/FoodSpan";
import { Sleep } from "./components/spanComponents/SleepSpan";
import classes from "./home.module.scss";

export const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <div className={classes.circleContainer}>
        <div className={classes.circle}>
          <div className={classes.circleText}>
            <Linkedin />
            <Location />
            <Github />
            <Food />
            <Sleep />
            <Linkedin />
            <Location />
            <Github />
            <Food />
            <Sleep />
            <Linkedin />
            <Location />
            <Github />
            <Food />
            <Sleep />
            <Linkedin />
            <Location />
            <Github />
            <Food />
            <Sleep />
            <Linkedin />
            <Location />
          </div>
        </div>
      </div>
    </div>
  );
};
