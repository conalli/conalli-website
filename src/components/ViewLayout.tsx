import { useHistory } from "react-router";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import classes from "./ViewLayout.module.scss";
import { multi } from "../utils/multiClass";
import { motion, Variants } from "framer-motion";
import { TransitionOne } from "./transitionComponents/TransitionOne";
import { TransitionTwo } from "./transitionComponents/TransitionTwo";
import { useState } from "react";

export type ShowButton = {
  linkTo: string;
};

export type ViewLayoutProps = {
  top?: ShowButton;
  bottom?: ShowButton;
  transitionBackground: {
    one: string;
    two: string;
  };
};

export const ViewLayout: React.FC<ViewLayoutProps> = ({
  top,
  bottom,
  transitionBackground,
  children,
}) => {
  const [transitionUp, setTransitionUp] = useState(false);
  const history = useHistory();

  const clickHandler = (url: string): void => {
    history.push(url);
  };

  const contentHeight = top && bottom ? "90%" : "95%";
  const contentTransitionDir = transitionUp ? "150vh" : "-150vh";

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
      y: contentTransitionDir,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div>
      <motion.div
        className={classes.layoutContainer}
        variants={pageTransitionContainer}
        initial="initial"
        animate="visible"
        exit="exit"
      >
        {top && (
          <motion.div
            className={classes.top}
            onHoverStart={() => {
              setTransitionUp(true);
            }}
          >
            <button
              className={multi(classes.scrollBtn)}
              onClick={() => clickHandler(`/${top.linkTo}`)}
            >
              Scroll Up
            </button>
            <KeyboardArrowUpIcon
              className={classes.topArrow}
              fontSize="large"
            />
          </motion.div>
        )}
        <div className={classes.content} style={{ height: contentHeight }}>
          {children}
        </div>
        {bottom && (
          <motion.div className={classes.bottom}>
            <motion.button
              className={multi(classes.scrollBtn, classes.scrollDown)}
              onClick={() => clickHandler(`/${bottom.linkTo}`)}
              onHoverStart={() => {
                setTransitionUp(false);
              }}
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
      <TransitionOne
        up={transitionUp}
        transitionBackground={transitionBackground.one}
      />
      <TransitionTwo
        up={transitionUp}
        transitionBackground={transitionBackground.two}
      />
    </div>
  );
};
