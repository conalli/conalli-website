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
  const contentHeight = top && bottom ? "90%" : "95%";
  const contentTransitionDir = transitionUp ? "150vh" : "-150vh";

  const history = useHistory();
  const clickHandler = (url: string): void => {
    history.push(url);
  };

  const pageTransitionContainer: Variants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
      },
    },
    exit: {
      y: contentTransitionDir,
      transition: {
        duration: 0.6,
      },
    },
  };

  const buttonTransition: Variants = {
    buttonInitial: {
      opacity: 0,
    },
    buttonVisible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const arrowAnim = {
    upInitial: { y: "1vh" },
    upArrowHover: {
      y: "-1vh",
      transition: {
        y: {
          duration: 1.25,
          repeat: Infinity,
          type: "spring",
          bounce: 0.7,
          repeatDelay: 0.35,
        },
      },
    },
    downInitial: { y: "-1vh" },
    downArrowHover: {
      y: "1vh",
      transition: {
        y: {
          duration: 1.25,
          repeat: Infinity,
          type: "spring",
          bounce: 0.7,
          repeatDelay: 0.35,
        },
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
            variants={buttonTransition}
            initial={["upInitial", "buttonInitial"]}
            animate="buttonVisible"
            whileHover="upArrowHover"
            onClick={() => clickHandler(`/${top.linkTo}`)}
          >
            <motion.button
              className={multi(classes.scrollBtn, classes.scrollUp)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={buttonTransition}
              initial="initial"
              animate="visible"
            >
              scroll up
            </motion.button>
            <KeyboardArrowUpIcon
              className={classes.topArrow}
              fontSize="large"
              component={motion.svg}
              variants={arrowAnim}
            />
          </motion.div>
        )}
        <div className={classes.content} style={{ height: contentHeight }}>
          {children}
        </div>
        {bottom && (
          <motion.div
            className={classes.bottom}
            onHoverStart={() => {
              setTransitionUp(false);
            }}
            variants={buttonTransition}
            initial={["downInitial", "buttonInitial"]}
            animate="buttonVisible"
            whileHover="downArrowHover"
            onClick={() => clickHandler(`/${bottom.linkTo}`)}
          >
            <motion.button
              className={multi(classes.scrollBtn, classes.scrollDown)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={buttonTransition}
              initial="initial"
              animate="visible"
            >
              scroll down
            </motion.button>
            <KeyboardArrowDownIcon
              className={classes.bottomArrow}
              fontSize="large"
              component={motion.svg}
              variants={arrowAnim}
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
