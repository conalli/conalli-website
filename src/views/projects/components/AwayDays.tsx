import { motion } from "framer-motion";
import classes from "./projectStyles.module.scss";

export const AwayDaysDetails: React.FC = () => {
  return (
    <motion.div
      className={classes.detailsContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className={classes.detailsTitle}>AwayDays API</h1>
      <p className={classes.detailsText}>
        AwayDays is an API built to help sports fans when following their team
        away from home.
      </p>
      <p className={classes.detailsText}>
        It was initially built for fans of Japan's J1 soccer league team, giving
        users information about their host city while their team is on the road.
      </p>
      <p className={classes.detailsText}>
        AwayDays is built upon a GraphQL server, utilising Apollo, and connected
        to a Postgres database through the Prisma ORM. GraphQL was a great
        choice as it allows users to retrieve the data that they want without
        any overfetching.
      </p>
    </motion.div>
  );
};

export const AwayDaysViz: React.FC = () => {
  return (
    <motion.div
      className={classes.vizContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3 className={classes.vizSubtitle}>Repository</h3>
      <ul>
        <li>
          <a href="https://github.com/conalli/awaydays-api">AwayDays API</a>
        </li>
      </ul>
    </motion.div>
  );
};
