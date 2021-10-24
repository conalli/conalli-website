import classes from "./projectDetails.module.scss";

export const MyNiwaDetails: React.FC = () => {
  return (
    <div className={classes.projectContainer}>
      <h1 className={classes.projectTitle}>My Niwa</h1>
      <p className={classes.projectText}>
        My Niwa is an application designed to help people to start and maintain
        new habits.
      </p>
      <p className={classes.projectText}>
        By creating a "Niwa" - a personal garden - and tending to it every day -
        maintaining their habits - the user will start to grow alongside their
        flowers.
      </p>
      <p className={classes.projectText}>
        Built in a small group of five developers. My main role was on the
        frontend team, tasked with designing and building out the UI using
        React, Material UI and CSS modules, using Framer Motion for interactions
        and animations and Recoil for state management.
      </p>
    </div>
  );
};

export const MyNiwaViz: React.FC = () => {
  return (
    <div>
      <h1>MyNiwa</h1>
      <iframe src="https://myniwa.netlify.com" height="650" width="380" />
    </div>
  );
};
