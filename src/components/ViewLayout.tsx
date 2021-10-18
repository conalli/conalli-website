import { RefObject } from "react";
import { scrollHandler } from "../utils/scrollHandler";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import classes from "./ViewLayout.module.scss";

export type ShowButton = {
  label: string;
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
    // TODO: Change styling for no top or bottom components
    <div className={classes.layoutContainer}>
      {top && (
        <div className={classes.top}>
          <KeyboardArrowUpIcon className={classes.topArrow} fontSize="large" />
        </div>
      )}
      <div className={classes.content}>{children}</div>
      {bottom && (
        <div className={classes.bottom}>
          <KeyboardArrowDownIcon
            className={classes.bottomArrow}
            fontSize="large"
          />
        </div>
      )}
    </div>
  );
};
