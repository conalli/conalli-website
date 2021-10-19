import { TextField } from "@mui/material";
import { Nav } from "../../components/Nav";
import { ViewLayout } from "../../components/ViewLayout";
import classes from "./contact.module.scss";

export const Contact: React.FC = () => {
  return (
    <ViewLayout
      top={{
        linkTo: "projects",
        transitionBackground: {
          one: "repeating-linear-gradient(90deg, white, white 5%, rgba(253, 74, 74, 0.8), rgba(253, 74, 74, 0.8) 10%)",
          two: "grey",
        },
        color: "black",
      }}
    >
      <div className={classes.contactContainer}>
        <div className={classes.aboutMeContainer}>
          <h1>
            About me<span>.</span>
          </h1>
          <section>
            <p>
              I am an engineer originally from the UK, but currently based in
              Tokyo, Japan. I like JavaScript, TypeScript, React and Go... not
              necessarily in that order.
            </p>
          </section>
          <Nav />
        </div>
        <div className={classes.contactFormContainer}>
          <h1>
            Contact me<span>.</span>
          </h1>
          <section>
            <p>Feel free to message me and I will get back to you ASAP.</p>
          </section>
          <section>
            <form className={classes.form} autoComplete="off">
              <label>
                Your name.
                <input
                  className={classes.formField}
                  name="name"
                  type="text"
                  required
                  placeholder="name"
                />
              </label>
              <label>
                Your email.
                <input
                  className={classes.formField}
                  name="name"
                  type="email"
                  required
                  placeholder="email"
                />
              </label>
              <label>
                Your message.
                <textarea
                  className={classes.formField}
                  rows={6}
                  required
                  placeholder="message"
                />
              </label>
            </form>
          </section>
        </div>
      </div>
    </ViewLayout>
  );
};
