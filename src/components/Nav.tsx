import { GitHub, LinkedIn } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import classes from "./Nav.module.scss";

export const Nav: React.FC = () => {
  return (
    <ul className={classes.navList}>
      <motion.li
        whileHover={{ scale: 1.2, originX: 0 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/projects">Projects</Link>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.2, originX: 0 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/contact">Contact Me</Link>
      </motion.li>
      <li>Socials</li>
      <li className={classes.socials}>
        <motion.a
          href="http://github.com/conalli"
          target="_blank"
          whileHover={{ scale: 1.2, originX: 0 }}
          whileTap={{ scale: 0.9 }}
        >
          <GitHub fontSize="large" />
        </motion.a>
        <motion.a
          href="http://www.linkedin.com/in/conalli"
          target="_blank"
          whileHover={{ scale: 1.2, originX: 0 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedIn fontSize="large" />
        </motion.a>
      </li>
    </ul>
  );
};
