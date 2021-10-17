import classes from "./home.module.scss";
import { Circle } from "./components/Circle";
import { useRef } from "react";

export const Home: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  return (
    <div className={classes.homeContainer}>
      <h1 className={classes.title}>Hi, I'm Conall;</h1>
      <h3>A software engineer based in Tokyo, Japan.</h3>
      <h1 className={classes.japaneseTitle}>こんにちは、コナルです。</h1>
      <h3 className={classes.japaneseSubtitle}>東京で活動しているエンジニア</h3>
      {/* TODO: try float left of circle <div><p float> */}
      <div className={classes.circleContainer} ref={circleRef}>
        <Circle circleRef={circleRef} />
      </div>
    </div>
  );
};
