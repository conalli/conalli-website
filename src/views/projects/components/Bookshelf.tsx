import classes from "./projectDetails.module.scss";

export const BookshelfDetails: React.FC = () => {
  return (
    <div className={classes.projectContainer}>
      <h1 className={classes.projectTitle}>Bookshelf</h1>
      <p className={classes.projectText}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quae
        accusantium alias officia sint doloremque magni numquam voluptatem
        eveniet officiis quaerat, accusamus culpa aliquam eaque.
      </p>
    </div>
  );
};

export const BookshelfViz: React.FC = () => {
  return (
    <div>
      <h1>Bookshelf</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quae
        accusantium alias officia sint doloremque magni numquam voluptatem
        eveniet officiis quaerat, accusamus culpa aliquam eaque.
      </p>
    </div>
  );
};
