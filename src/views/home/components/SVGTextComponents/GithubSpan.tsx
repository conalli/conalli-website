import classes from "../circle.module.scss";
export const Github: React.FC = () => {
  return (
    <tspan className={classes.circleText}>
      while (building){" "}
      <a
        className={classes.circleLink}
        href="http://www.github.com/conalli"
        target="_blank"
      >{`{Conall.code();}`}</a>{" "}
      while (building){" "}
      <a
        className={classes.circleLink}
        href="http://www.github.com/conalli"
        target="_blank"
      >{`{Conall.code();}`}</a>{" "}
    </tspan>
  );
};
