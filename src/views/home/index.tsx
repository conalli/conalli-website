import classes from "./home.module.scss";
import { Circle } from "./components/Circle";
import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ViewLayout } from "../../components/ViewLayout";
import { Nav } from "../../components/Nav";
import { useViewportDimensions } from "../../utils/useViewportDimensions";

export const Home: React.FC = () => {
  const { viewportWidth, viewportHeight } = useViewportDimensions();
  const [showSub, setShowSub] = useState(viewportWidth > 375);

  useEffect(() => {
    setShowSub(() => {
      return viewportWidth > 375 && viewportHeight > 675;
    });
  }, []);

  const transitionTitle: Variants = {
    initial: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const transitionSubtitle: Variants = {
    initial: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const transitionCircle: Variants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <ViewLayout
      bottom={{
        linkTo: "projects",
        transitionBackground: {
          one: "rgba(253, 74, 74, 0.8)",
          two: "black",
        },
        color: "black",
      }}
    >
      <motion.div className={classes.homeContainer}>
        <motion.h1
          className={classes.title}
          variants={transitionTitle}
          initial="initial"
          animate="visible"
          exit="exit"
        >
          Hi, I'm Conall;
        </motion.h1>
        <motion.h3
          className={classes.subTitle}
          variants={transitionTitle}
          initial="initial"
          animate="visible"
          exit="exit"
        >
          A software engineer based in Tokyo.
        </motion.h3>
        <div className={classes.japaneseTitlesContainer}>
          <motion.h1
            className={classes.japaneseTitle}
            variants={transitionSubtitle}
            initial="initial"
            animate="visible"
            exit="exit"
          >
            こんにちは、コナルです。
          </motion.h1>
          {showSub && (
            <motion.h3
              className={classes.japaneseSubtitle}
              variants={transitionSubtitle}
              initial="initial"
              animate="visible"
              exit="exit"
            >
              東京で活動しているエンジニア
            </motion.h3>
          )}
        </div>
        <motion.nav
          className={classes.nav}
          variants={transitionCircle}
          initial="initial"
          animate="visible"
          exit="exit"
        >
          <Nav />
        </motion.nav>
        <motion.div
          className={classes.circleContainer}
          variants={transitionCircle}
          initial="initial"
          animate="visible"
          exit="exit"
        >
          <Circle />
        </motion.div>
      </motion.div>
    </ViewLayout>
  );
};
