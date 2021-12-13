import { useHistory } from "react-router";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import classes from "./ViewLayout.module.scss";
import { multi } from "../../utils/multiClass";
import { motion, Variants } from "framer-motion";
import { TransitionOne } from "../transitionComponents/TransitionOne";
import { TransitionTwo } from "../transitionComponents/TransitionTwo";
import { useViewportDimensions } from "../../utils/useViewportDimensions";
import { useTransition } from "../../utils/useTransition";

export type ViewLayoutScroll = {
  linkTo: string;
  transitionBackground: {
    one: string;
    two: string;
  };
  color: string;
};

export type ViewLayoutProps = {
  top?: ViewLayoutScroll;
  bottom?: ViewLayoutScroll;
};

export const ViewLayout: React.FC<ViewLayoutProps> = ({
  top,
  bottom,
  children,
}) => {
  const { isTransitioning, transitionUp, setTransition } = useTransition();
  const { viewportWidth } = useViewportDimensions();
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
        duration: 0.5,
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
        delay: 0.35,
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
          duration: 0.8,
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
          duration: 0.8,
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
            style={{ backgroundColor: top.color }}
            variants={buttonTransition}
            initial={["upInitial", "buttonInitial"]}
            animate="buttonVisible"
            whileHover="upArrowHover"
            onClick={() => {
              setTransition("up", true);
              clickHandler(`/${top.linkTo}`);
            }}
          >
            <motion.button
              className={multi(classes.scrollBtn, classes.scrollUp)}
              onHoverStart={() => {
                setTransition("up");
              }}
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
        <motion.div
          className={classes.content}
          style={{ height: contentHeight }}
          drag={viewportWidth > 700 && "y"}
          dragConstraints={viewportWidth > 700 && { top: 5, bottom: 5 }}
          onDrag={(_e, info) => {
            if (viewportWidth > 700) {
              if (bottom && info.delta.y < -35) {
                setTransition("down");
                clickHandler(`/${bottom.linkTo}`);
              } else if (top && info.delta.y > 35) {
                setTransition("up");
                clickHandler(`/${top.linkTo}`);
              }
            }
          }}
        >
          {children}
        </motion.div>
        {bottom && (
          <motion.div
            className={classes.bottom}
            style={{ backgroundColor: bottom.color }}
            variants={buttonTransition}
            initial={["downInitial", "buttonInitial"]}
            animate="buttonVisible"
            whileHover="downArrowHover"
            onClick={() => {
              setTransition("down", true);
              clickHandler(`/${bottom.linkTo}`);
            }}
          >
            <motion.button
              className={multi(classes.scrollBtn, classes.scrollDown)}
              onHoverStart={() => {
                setTransition("down");
              }}
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
      {isTransitioning && (
        <TransitionOne
          up={transitionUp}
          transitionBackground={
            transitionUp
              ? top?.transitionBackground.one
              : bottom?.transitionBackground.one
          }
        />
      )}
      {isTransitioning && (
        <TransitionTwo
          up={transitionUp}
          transitionBackground={
            transitionUp
              ? top?.transitionBackground.two
              : bottom?.transitionBackground.two
          }
        />
      )}
    </div>
  );
};
