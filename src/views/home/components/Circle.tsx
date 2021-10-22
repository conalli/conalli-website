import React, { RefObject, useEffect, useState } from "react";
import { useViewportDimensions } from "../../../utils/useViewportDimensions";
import classes from "./circle.module.scss";
import { Food } from "./SVGTextComponents/FoodSpan";
import { Github } from "./SVGTextComponents/GithubSpan";
import { Linkedin } from "./SVGTextComponents/LinkedinSpan";
import { Location } from "./SVGTextComponents/LocationSpan";
import { Sleep } from "./SVGTextComponents/SleepSpan";

export const Circle: React.FC = () => {
  const { viewportWidth, viewportHeight } = useViewportDimensions();
  const [circleDimensions, setCircleDimensions] = useState(
    viewportHeight / 1.4
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
      const isLandscape = viewportWidth > viewportHeight;
      return isLandscape ? viewportHeight / 1.4 : viewportWidth / 1.4;
    });
  }, [window.innerWidth, window.innerHeight]);

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
            style={{
              fontSize:
                viewportWidth > viewportHeight
                  ? (circleDimensions / 100) * 0.8
                  : circleDimensions / 100,
            }}
          >
            {tSpan}
          </text>
        );
      })}
    </svg>
  );
};
