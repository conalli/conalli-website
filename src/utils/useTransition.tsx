import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type TransitionContextType = {
  isTransitioning: boolean;
  transitionUp: boolean;
  setTransition: (dir: "up" | "down", transition?: boolean) => void;
};

const TransitionContext = createContext<TransitionContextType>(
  {} as TransitionContextType
);

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [transitionUp, setTransitionUp] = useState(false);
  const [isTransitioning, setisTransitioning] = useState(false);
  const transitionHandler = (dir: "up" | "down", transition = false) => {
    if (dir === "up") {
      if (transition) setisTransitioning(true);
      setTransitionUp(true);
    } else {
      if (transition) setisTransitioning(true);
      setTransitionUp(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(setisTransitioning, 500, false);
    return clearTimeout(timeout);
  }, [transitionUp]);

  return (
    <TransitionContext.Provider
      value={{
        isTransitioning,
        transitionUp,
        setTransition: transitionHandler,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = (): TransitionContextType => {
  return useContext(TransitionContext);
};
