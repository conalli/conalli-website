import { motion } from "framer-motion";

export const TransitionOne: React.FC<{
  up: boolean;
  transitionBackground: string;
}> = ({ up, transitionBackground }) => {
  const transitionOneUp = {
    exit: {
      y: "250vh",
      transition: {
        duration: 1,
      },
    },
  };

  const transitionOneDown = {
    exit: {
      y: "-250vh",
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
        backgroundColor: transitionBackground,
        position: "absolute",
        top: "100vh",
        left: 0,
      }}
      variants={transitionOneDown}
      exit="exit"
    />
  );
};
