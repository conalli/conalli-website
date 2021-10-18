import { useHistory } from "react-router";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import classes from "./ViewLayout.module.scss";
import { multi } from "../utils/multiClass";
import { motion, Variants } from "framer-motion";

export type ShowButton = {
  linkTo: string;
};

export type ViewLayoutProps = {
  top?: ShowButton;
  bottom?: ShowButton;
};

export const ViewLayout: React.FC<ViewLayoutProps> = ({
  top,
  bottom,
  children,
}) => {
  const history = useHistory();
  const contentHeight = top && bottom ? "90%" : "95%";

  const pageTransitionContainer: Variants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className={classes.layoutContainer}
      variants={pageTransitionContainer}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      {top && (
        <div className={classes.top}>
          <button
            className={multi(classes.scrollBtn)}
            onClick={() => history.push(`/${top.linkTo}`)}
          >
            Scroll Up
          </button>
          <KeyboardArrowUpIcon className={classes.topArrow} fontSize="large" />
        </div>
      )}
      <div className={classes.content} style={{ height: contentHeight }}>
        {children}
      </div>
      {bottom && (
        <motion.div className={classes.bottom}>
          <motion.button
            className={multi(classes.scrollBtn, classes.scrollDown)}
            onClick={() => history.push(`/${bottom.linkTo}`)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            scroll down
          </motion.button>
          <KeyboardArrowDownIcon
            className={classes.bottomArrow}
            fontSize="large"
          />
        </motion.div>
      )}
    </motion.div>
  );
};
