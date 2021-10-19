import classes from "./home.module.scss";
import { Circle } from "./components/Circle";
import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { ViewLayout } from "../../components/ViewLayout";
import { Nav } from "../../components/Nav";

export const Home: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);

  const transitionTitle: Variants = {
    initial: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
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
        delay: 0.6,
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
        delay: 1,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <ViewLayout
      bottom={{ linkTo: "projects" }}
      transitionBackground={{
        one: "rgba(253, 74, 74, 0.8)",
        two: "black",
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
          A software engineer based in Tokyo, Japan.
        </motion.h3>
        <motion.h1
          className={classes.japaneseTitle}
          variants={transitionSubtitle}
          initial="initial"
          animate="visible"
          exit="exit"
        >
          こんにちは、コナルです。
        </motion.h1>
        <motion.h3
          className={classes.japaneseSubtitle}
          variants={transitionSubtitle}
          initial="initial"
          animate="visible"
          exit="exit"
        >
          東京で活動しているエンジニア
        </motion.h3>
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
          ref={circleRef}
          variants={transitionCircle}
          initial="initial"
          animate="visible"
          exit="exit"
        >
          <Circle circleRef={circleRef} />
        </motion.div>
      </motion.div>
    </ViewLayout>
  );
};
