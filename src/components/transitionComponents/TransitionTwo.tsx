import { motion } from "framer-motion";

export const TransitionTwo: React.FC<{
  up: boolean;
  transitionBackground: string | undefined;
}> = ({ up, transitionBackground }) => {
  const transitionTwoUp = {
    exit: {
      y: "350vh",
      transition: {
        duration: 0.7,
      },
    },
  };

  const transitionTwoDown = {
    exit: {
      y: "-350vh",
      transition: {
        duration: 0.7,
      },
    },
  };

  return up ? (
    <motion.div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: transitionBackground ?? "rgba(253, 74, 74, 0.8)",
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
        background: transitionBackground ?? "black",
        position: "absolute",
        top: "200vh",
        left: 0,
      }}
      variants={transitionTwoDown}
      exit="exit"
    />
  );
};
