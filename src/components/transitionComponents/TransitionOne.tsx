import { motion } from "framer-motion";

export const TransitionOne: React.FC<{
  up: boolean;
  transitionBackground: string | undefined;
}> = ({ up, transitionBackground }) => {
  const transitionOneUp = {
    exit: {
      y: "250vh",
      transition: {
        duration: 0.6,
      },
    },
  };

  const transitionOneDown = {
    exit: {
      y: "-250vh",
      transition: {
        duration: 0.6,
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
        top: "-100vh",
        left: 0,
      }}
      variants={transitionOneUp}
      exit="exit"
    />
  ) : (
    <motion.div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: transitionBackground ?? "black",
        position: "absolute",
        top: "100vh",
        left: 0,
      }}
      variants={transitionOneDown}
      exit="exit"
    />
  );
};
