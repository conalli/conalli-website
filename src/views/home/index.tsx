import classes from "./home.module.scss";
import { Circle } from "./components/Circle";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ViewLayout } from "../../components/ViewLayout";

export const Home: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  return (
    <ViewLayout bottom={{ linkTo: "projects" }}>
      <motion.div className={classes.homeContainer}>
        <h1 className={classes.title}>Hi, I'm Conall;</h1>
        <h3 className={classes.subTitle}>
          A software engineer based in Tokyo, Japan.
        </h3>
        <h1 className={classes.japaneseTitle}>こんにちは、コナルです。</h1>
        <h3 className={classes.japaneseSubtitle}>
          東京で活動しているエンジニア
        </h3>
        <nav className={classes.nav}>
          <ul>
            <li>Projects</li>
            <li>Contact Me</li>
            <li>Socials</li>
          </ul>
        </nav>
        <div className={classes.circleContainer} ref={circleRef}>
          <Circle circleRef={circleRef} />
        </div>
      </motion.div>
    </ViewLayout>
  );
};
