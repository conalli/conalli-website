import classes from "./home.module.scss";
import { Circle } from "./components/Circle";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Home: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const day = new Date();
  const dayMap: { [key: number]: string } = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  return (
    <motion.div className={classes.homeContainer}>
      <h1 className={classes.title}>Hi, I'm Conall;</h1>
      <h3 className={classes.subTitle}>
        A software engineer based in Tokyo, Japan.
      </h3>
      <p className={classes.textBody}>
        It's good to see you this fine {dayMap[day.getDay()]}.
      </p>
      <h1 className={classes.japaneseTitle}>こんにちは、コナルです。</h1>
      <h3 className={classes.japaneseSubtitle}>東京で活動しているエンジニア</h3>
      {/* TODO: try float left of circle <div><p float> */}
      <div className={classes.circleContainer} ref={circleRef}>
        <Circle circleRef={circleRef} />
      </div>
    </motion.div>
  );
};
