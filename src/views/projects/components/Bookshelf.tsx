import { motion } from "framer-motion";
import classes from "./projectStyles.module.scss";

export const BookshelfDetails: React.FC = () => {
  return (
    <motion.div
      className={classes.detailsContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className={classes.detailsTitle}>Bookshelf</h1>
      <p className={classes.detailsText}>
        Bookshelf is a smart bookmarking application designed to improve
        efficiency in the browser.
      </p>
      <p className={classes.detailsText}>
        Users can save bookmarks and their respective shortcuts in order to
        reduce wasted time when frequently using many different bookmarks.
        Bookshelf then utilises the browsers in-built custom search engine to
        redirect to the Bookshelf server whenever the shortcut is used.
      </p>
    </motion.div>
  );
};

export const BookshelfViz: React.FC = () => {
  return (
    <motion.div
      className={classes.vizContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3 className={classes.vizSubtitle}>Project Demonstration</h3>
      <iframe
        src="https://www.youtube.com/embed/_ou8IDz20h0?start=1826"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3 className={classes.vizSubtitle}>Try it yourself at:</h3>
      <a href="https://github.com/conalli/bookshelf-server" target="_blank">
        Bookshelf - (redirects to repo)
      </a>
      <h3 className={classes.vizSubtitle}>Repositories</h3>
      <ul>
        <li>
          <a href="https://github.com/conalli/bookshelf-cli" target="_blank">
            CLI
          </a>
        </li>
        <li>
          <a href="https://github.com/conalli/bookshelf-server" target="_blank">
            Server
          </a>
        </li>
      </ul>
    </motion.div>
  );
};
