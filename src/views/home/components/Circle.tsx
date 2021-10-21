import React, { RefObject, useEffect, useState } from "react";
import { useViewportDimensions } from "../../../utils/useViewportDimensions";
import classes from "./circle.module.scss";
import { Food } from "./SVGTextComponents/FoodSpan";
import { Github } from "./SVGTextComponents/GithubSpan";
import { Linkedin } from "./SVGTextComponents/LinkedinSpan";
import { Location } from "./SVGTextComponents/LocationSpan";
import { Sleep } from "./SVGTextComponents/SleepSpan";

export const Circle: React.FC<{ circleRef: RefObject<HTMLDivElement> }> = ({
  circleRef,
}) => {
  const { viewportWidth, viewportHeight } = useViewportDimensions();
  const [circleDimensions, setCircleDimensions] = useState(
    viewportHeight.current / 1.4
  );

  const textOrder = [
    <Linkedin />,
    <Location />,
    <Github />,
    <Food />,
    <Sleep />,
    <Linkedin />,
    <Location />,
    <Github />,
    <Food />,
    <Sleep />,
    <Linkedin />,
    <Location />,
    <Github />,
    <Food />,
    <Sleep />,
    <Linkedin />,
    <Location />,
    <Github />,
    <Food />,
    <Sleep />,
    <Linkedin />,
    <Location />,
    <Github />,
    <Food />,
    <Sleep />,
  ];

  useEffect(() => {
    setCircleDimensions(() => {
      const isLandscape = viewportWidth.current > viewportHeight.current;
      return circleRef.current && isLandscape
        ? viewportHeight.current / 1.4
        : viewportWidth.current / 1.4;
    });
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      className={classes.circle}
      width={circleDimensions}
      height={circleDimensions}
    >
      {textOrder.map((tSpan, idx) => {
        return (
          <text
            x="50%"
            dy={`${idx * 5 + 3}%`}
            fill="red"
            textAnchor="middle"
            key={idx}
          >
            {tSpan}
          </text>
        );
      })}
    </svg>
  );
};
