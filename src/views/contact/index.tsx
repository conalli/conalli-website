import { Nav } from "../../components/Nav";
import { ViewLayout } from "../../components/ViewLayout";
import classes from "./contact.module.scss";

export const Contact: React.FC = () => {
  return (
    <ViewLayout
      top={{
        linkTo: "projects",
        transitionBackground: { one: "red", two: "green" },
        color: "black",
      }}
    >
      <div className={classes.contactContainer}>
        <div className={classes.aboutMeContainer}>
          <h1>About me.</h1>
          <p>
            I am an engineer originally from the UK, but currently based in
            Tokyo, Japan. I like JavaScript, TypeScript, React and Go... not
            necessarily in that order.
          </p>
          <Nav />
        </div>
        <div className={classes.contactFormContainer}></div>
      </div>
    </ViewLayout>
  );
};
