import { useEffect, useState } from "react";

export const useViewportDimensions = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateViewportDimensions = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    updateViewportDimensions();

    window.addEventListener("resize", updateViewportDimensions);
    return () => window.removeEventListener("resize", updateViewportDimensions);
  }, [window.innerHeight, window.innerWidth]);

  return { viewportWidth, viewportHeight };
};
