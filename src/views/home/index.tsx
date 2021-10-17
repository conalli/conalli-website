import { Linkedin } from "./components/spanComponents/LinkedinSpan";
import { Location } from "./components/spanComponents/LocationSpan";
import { Github } from "./components/spanComponents/GithubSpan";
import { Food } from "./components/spanComponents/FoodSpan";
import { Sleep } from "./components/spanComponents/SleepSpan";
import classes from "./home.module.scss";

export const Home: React.FC = () => {
  return (
    <div className={classes.homeContainer}>
      <h1 className={classes.title}>Hi, I'm Conall;</h1>
      <h3>A software engineer based in Tokyo, Japan.</h3>
      <h1 className={classes.japaneseTitle}>こんにちは、コナルです。</h1>
      <h3 className={classes.japaneseSubtitle}>
        東京で活動しているエンジニアです。
      </h3>
      {/* TODO: try float left of circle <div><p float> */}
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
