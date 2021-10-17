import React, { RefObject, useEffect, useState } from "react";
import classes from "./circle.module.scss";
import { Food } from "./SVGTextComponents/FoodSpan";
import { Github } from "./SVGTextComponents/GithubSpan";
import { Linkedin } from "./SVGTextComponents/LinkedinSpan";
import { Location } from "./SVGTextComponents/LocationSpan";
import { Sleep } from "./SVGTextComponents/SleepSpan";

export const Circle: React.FC<{ circleRef: RefObject<HTMLDivElement> }> = ({
  circleRef,
}) => {
  const [circleDimensions, setCircleDimensions] = useState(300);
  const [fontSize, setFontSize] = useState(50);

  console.log(circleDimensions);

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
  ];

  useEffect(() => {
    setCircleDimensions((prev) => {
      return circleRef.current
        ? Math.min(
            circleRef.current.offsetWidth,
            circleRef.current.offsetHeight
          )
        : prev;
    });
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      className={classes.circle}
      width={circleDimensions}
      height={circleDimensions}
    >
      {textOrder.map((val, idx) => {
        return (
          <text
            x="50%"
            dy={`${idx * (100 / textOrder.length) + 3}%`}
            fill="red"
            textAnchor="middle"
            key={idx}
          >
            {val}
          </text>
        );
      })}
    </svg>
  );
};
