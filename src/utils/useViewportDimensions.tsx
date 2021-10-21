import { useEffect, useRef } from "react";

export const useViewportDimensions = () => {
  const viewportWidth = useRef(0);
  const viewportHeight = useRef(0);

  useEffect(() => {
    const updateViewportDimensions = () => {
      viewportWidth.current = window.innerWidth;
      viewportHeight.current = window.innerHeight;
      console.log(viewportWidth.current, viewportHeight.current);
    };

    updateViewportDimensions();

    window.addEventListener("resize", updateViewportDimensions);
  }, []);

  return { viewportWidth, viewportHeight };
};
