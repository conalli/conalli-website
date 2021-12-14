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
        AwayDays is an API built as a way to give sports fans information about
        their host city while they're on the road.
      </p>
      <p className={classes.detailsText}>
        AwayDays is built upon a GraphQL server, utilising Apollo, and connected
        to a Postgres database through the Prisma ORM. GraphQL was a great
        choice as it allows users to retrieve only the data that they want
        without overfetching, and using it in conjuction with Apollo and Prisma
        was a very smooth experience.
      </p>
      <h4>Main techs used:</h4>
      <ul>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>GraphQL</li>
        <li>Prisma</li>
        <li>Apollo</li>
        <li>Postgres</li>
      </ul>
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
          <a href="https://github.com/conalli/awaydays-api" target="_blank">
            AwayDays API
          </a>
        </li>
        <br />
        <li>
          <h3 className={classes.vizSubtitle}>Useful links:</h3>
        </li>
        <li>
          <a href="https://graphql.org/learn" target="_blank">
            Introduction to GraphQL
          </a>
        </li>
        <li>
          <a
            href="https://www.apollographql.com/docs/apollo-server/"
            target="_blank"
          >
            Apollo Server documentation
          </a>
        </li>
        <li>
          <a href="https://www.prisma.io/docs/getting-started" target="_blank">
            Getting started with Prisma
          </a>
        </li>
        <li>
          <a
            href="https://www.postgresql.org/docs/14/index.html"
            target="_blank"
          >
            Postgres docs
          </a>
        </li>
      </ul>
    </motion.div>
  );
};
