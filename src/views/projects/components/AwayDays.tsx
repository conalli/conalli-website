import classes from "./projectStyles.module.scss";

export const AwayDaysDetails: React.FC = () => {
  return (
    <div className={classes.detailsContainer}>
      <h1 className={classes.detailsTitle}>Away Days API</h1>
      <p className={classes.detailsText}>
        Away Days is an API built to help sports fans when following their team
        away from home.
      </p>
      <p className={classes.detailsText}>
        It was initially built for fans of Japan's J1 soccer league team, giving
        users information about their host city while their team is on the road.
      </p>
      <p className={classes.detailsText}>
        Away Days is built upon a GraphQL server, utilising Apollo, and
        connected to a Postgres database through the Prisma ORM. GraphQL was a
        great choice as it allows users to retrieve the data that they want
        without any overfetching.
      </p>
    </div>
  );
};

export const AwayDaysViz: React.FC = () => {
  return (
    <div className={classes.vizContainer}>
      <h3 className={classes.vizSubtitle}>Repository</h3>
      <ul>
        <li>
          <a href="https://github.com/conalli/awaydays-api">Away Days API</a>
        </li>
      </ul>
    </div>
  );
};
