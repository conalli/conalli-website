import { motion } from "framer-motion";

export const TransitionTwo: React.FC<{
  up: boolean;
  transitionBackground: string;
}> = ({ up, transitionBackground }) => {
  const transitionTwoUp = {
    exit: {
      y: "350vh",
      transition: {
        duration: 1,
      },
    },
  };

  const transitionTwoDown = {
    exit: {
      y: "-350vh",
      transition: {
        duration: 1,
      },
    },
  };

  return up ? (
    <motion.div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: transitionBackground,
        position: "absolute",
        top: "-200vh",
        left: 0,
      }}
      variants={transitionTwoUp}
      exit="exit"
    />
  ) : (
    <motion.div
      style={{
        height: "100vh",
        width: "100vw",
        background: transitionBackground,
        position: "absolute",
        top: "200vh",
        left: 0,
      }}
      variants={transitionTwoDown}
      exit="exit"
    />
  );
};
