import classes from "./projectStyles.module.scss";

export const MyNiwaDetails: React.FC = () => {
  return (
    <div className={classes.detailsContainer}>
      <h1 className={classes.detailsTitle}>My Niwa</h1>
      <p className={classes.detailsText}>
        My Niwa is an application designed to help people to start and maintain
        new habits.
      </p>
      <p className={classes.detailsText}>
        By creating a "Niwa" - a personal garden - and tending to it every day -
        maintaining their habits - the user will start to grow alongside their
        flowers.
      </p>
      <p className={classes.detailsText}>
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
    <div className={classes.vizContainer}>
      <h3 className={classes.vizSubtitle}>Project Demonstration</h3>
      <iframe
        src="https://www.youtube.com/embed/_ou8IDz20h0?start=3240"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3 className={classes.vizSubtitle}>Try it yourself at:</h3>
      <a href="https://myniwa.netlify.app">My Niwa</a>
      <h3 className={classes.vizSubtitle}>Repositories</h3>
      <ul>
        <li>
          <a href="https://github.com/ice-cream-the-fat-cat/my-niwa-frontend">
            Frontend
          </a>
        </li>
        <li>
          <a href="https://github.com/ice-cream-the-fat-cat/my-niwa-backend">
            Backend
          </a>
        </li>
      </ul>
    </div>
  );
};
