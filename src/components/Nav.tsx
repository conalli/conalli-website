import { GitHub, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import classes from "./Nav.module.scss";

export const Nav: React.FC = () => {
  return (
    <ul className={classes.navList}>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact Me</Link>
      </li>
      <li>Socials</li>
      <li className={classes.socials}>
        <a href="http://github.com/conalli" target="_blank">
          <GitHub fontSize="large" />
        </a>
        <a href="http://www.linkedin.com/in/conalli" target="_blank">
          <LinkedIn fontSize="large" />
        </a>
      </li>
    </ul>
  );
};
