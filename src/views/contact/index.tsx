import emailjs from "emailjs-com";
import {
  FormEvent,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { Nav } from "../../components/Nav";
import { ViewLayout } from "../../components/ViewLayout";
import classes from "./contact.module.scss";
import { init } from "emailjs-com";
import { motion, Variants } from "framer-motion";
import { TransitionProvider } from "../../utils/useTransition";

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null!);
  const [messageText, setMessageText] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    init(import.meta.env.VITE_USER_ID);
  }, []);

  const sendEmail: FormEventHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_USER_ID
      );
    } catch (error) {
      console.error(error);
    }
    setMessageText({
      name: "",
      email: "",
      message: "",
    });
  };

  const initialLeft: Variants = {
    initial: {
      x: "-20vw",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  const initialRight: Variants = {
    initial: {
      x: "20vh",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <TransitionProvider>
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
        <motion.div className={classes.contactContainer}>
          <motion.div
            className={classes.aboutMeContainer}
            variants={initialLeft}
            initial="initial"
            animate="animate"
          >
            <h1>
              About me<span>.</span>
            </h1>
            <section>
              <p>
                I am an engineer originally from the UK, but currently based in
                Tokyo. I came to Japan for many of the same reasons that I am
                interested in technology - to learn new things and challenge
                myself. I like JavaScript, TypeScript, React and Go... not
                necessarily in that order.
              </p>
            </section>
            <Nav parent="contact" />
          </motion.div>
          <motion.div
            className={classes.contactFormContainer}
            variants={initialRight}
            initial="initial"
            animate="animate"
          >
            <h1>
              Contact me<span>.</span>
            </h1>
            <section>
              <p>
                Feel free to send me a message and I will get back to you by
                email ASAP.
              </p>
            </section>
            <section>
              <form
                ref={form}
                className={classes.form}
                autoComplete="off"
                onSubmit={sendEmail}
              >
                <label>
                  Your name.
                  <input
                    className={classes.formField}
                    name="name"
                    type="text"
                    required
                    placeholder="name"
                    value={messageText.name}
                    onChange={(e) =>
                      setMessageText((prev) => {
                        return {
                          ...prev,
                          name: e.target.value,
                        };
                      })
                    }
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
                    value={messageText.email}
                    onChange={(e) =>
                      setMessageText((prev) => {
                        return {
                          ...prev,
                          email: e.target.value,
                        };
                      })
                    }
                  />
                </label>
                <label>
                  Your message.
                  <textarea
                    className={classes.formField}
                    rows={6}
                    required
                    name="message"
                    placeholder="message"
                    value={messageText.message}
                    onChange={(e) =>
                      setMessageText((prev) => {
                        return {
                          ...prev,
                          message: e.target.value,
                        };
                      })
                    }
                  />
                </label>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Send
                </motion.button>
              </form>
            </section>
          </motion.div>
        </motion.div>
      </ViewLayout>
    </TransitionProvider>
  );
};
