import classes from "./home.module.scss";
import { Circle } from "./components/Circle";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ViewLayout } from "../../components/ViewLayout";
import { Nav } from "../../components/Nav";
import { useViewportDimensions } from "../../utils/useViewportDimensions";
import { TransitionProvider } from "../../utils/useTransition";

export const Home: React.FC = () => {
  const { viewportWidth, viewportHeight } = useViewportDimensions();
  const [showSub, setShowSub] = useState(viewportWidth > 375);
  const [showAboutMe, setShowAboutMe] = useState(true);
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    setShowSub(() => {
      return viewportWidth > 375 && viewportHeight > 675;
    });
    setInitial(false);
  }, []);

  const aboutMeClick = () => setShowAboutMe(!showAboutMe);

  const transitionTitle: Variants = {
    initial: {
      x: "-20vw",
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
      y: "-20vh",
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
    <TransitionProvider>
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
          <div className={classes.subTitleContainer}>
            <motion.h3
              className={classes.subTitle}
              variants={transitionTitle}
              initial="initial"
              animate="visible"
              exit="exit"
            >
              A software engineer based in Tokyo.
              <br />
            </motion.h3>
            <motion.span
              onClick={aboutMeClick}
              whileHover={{ scale: 1.1, originX: 0 }}
              whileTap={{ scale: 0.9 }}
              variants={transitionTitle}
              initial="initial"
              animate="visible"
              exit="exit"
            >
              About Me:
            </motion.span>
          </div>
          {showAboutMe && (
            <motion.p
              className={classes.aboutMe}
              initial={{ opacity: 0, y: -20 }}
              animate={
                initial
                  ? { opacity: 1, y: 0, transition: { delay: 0.85 } }
                  : { opacity: 1, y: 0 }
              }
            >
              I came to Japan for many of the same reasons that I am interested
              in technology - to learn new things and challenge myself. <br />
              <br />I enjoy collaborating with others and working across the
              stack. Some of my current favourite techs are React, TypeScript
              and Go.
            </motion.p>
          )}
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
            <Nav parent="home" />
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
    </TransitionProvider>
  );
};
