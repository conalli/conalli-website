import { RefObject } from "react";
import { scrollHandler } from "../utils/scrollHandler";
import classes from "./ViewLayout.module.css";

export type ShowButton = {
  label: string;
  ref: RefObject<HTMLElement>;
};

export type ViewLayoutProps = {
  top?: ShowButton;
  bottom?: ShowButton;
};

export const ViewLayout: React.FC<ViewLayoutProps> = ({
  top,
  bottom,
  children,
}) => {
  return (
    <div className={classes.layoutContainer}>
      <div className={classes.top}>
        {top && (
          <button onClick={() => scrollHandler(top.ref)}>{top.label}</button>
        )}
      </div>
      <div className={classes.content}>{children}</div>
      <div className={classes.bottom}>
        {bottom && (
          <button onClick={() => scrollHandler(bottom.ref)}>
            {bottom.label}
          </button>
        )}
      </div>
    </div>
  );
};
