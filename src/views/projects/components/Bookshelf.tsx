import classes from "./projectStyles.module.scss";

export const BookshelfDetails: React.FC = () => {
  return (
    <div className={classes.detailsContainer}>
      <h1 className={classes.detailsTitle}>Bookshelf</h1>
      <p className={classes.detailsText}>
        Bookshelf is a smart bookmarking application designed to improve
        efficiency in the browser.
      </p>
      <p className={classes.detailsText}>
        Users can save bookmarks and shortcuts in order to reduce wasted time
        when using bookmarks frequently. Bookshelf then utilises the browsers
        in-built custom search engine to redirect to the Bookshelf server
        whenever the bookmark shortcut is used.
      </p>
    </div>
  );
};

export const BookshelfViz: React.FC = () => {
  return (
    <div className={classes.vizContainer}>
      <h3 className={classes.vizSubtitle}>Project Demonstration</h3>
      <iframe
        src="https://www.youtube.com/embed/_ou8IDz20h0?start=1826"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3 className={classes.vizSubtitle}>Try it yourself at:</h3>
      <a href="https://github.com/conalli/bookshelf-server">Bookshelf</a>
      <h3 className={classes.vizSubtitle}>Repositories</h3>
      <ul>
        <li>
          <a href="https://github.com/conalli/bookshelf-cli">CLI</a>
        </li>
        <li>
          <a href="https://github.com/conalli/bookshelf-server">Server</a>
        </li>
      </ul>
    </div>
  );
};
