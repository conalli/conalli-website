import { Link } from "react-router-dom";
import classes from "../circle.module.scss";
export const Github: React.FC = () => {
  return (
    <tspan className={classes.circleText}>
      while (
      <Link to="/projects" className={classes.circleLink}>
        building
      </Link>
      ){" "}
      <a
        className={classes.circleLink}
        href="http://www.github.com/conalli"
        target="_blank"
      >{`{Conall.code();}`}</a>{" "}
      while (
      <Link to="/projects" className={classes.circleLink}>
        building
      </Link>
      ){" "}
      <a
        className={classes.circleLink}
        href="http://www.github.com/conalli"
        target="_blank"
      >{`{Conall.code();}`}</a>{" "}
    </tspan>
  );
};
