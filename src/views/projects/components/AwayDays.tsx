import classes from "./projectDetails.module.scss";

export const AwayDaysDetails: React.FC = () => {
  return (
    <div className={classes.projectContainer}>
      <h1 className={classes.projectTitle}>Away Days API</h1>
      <p className={classes.projectText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
        maxime omnis! Eaque perspiciatis architecto ea deserunt magnam expedita,
        fugit explicabo quibusdam reiciendis temporibus amet praesentium.
      </p>
    </div>
  );
};

export const AwayDaysViz: React.FC = () => {
  return (
    <div>
      <h1>Away Days API Viz</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
        maxime omnis! Eaque perspiciatis architecto ea deserunt magnam expedita,
        fugit explicabo quibusdam reiciendis temporibus amet praesentium.
      </p>
    </div>
  );
};
