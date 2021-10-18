import { useHistory } from "react-router";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import classes from "./ViewLayout.module.scss";

export type ShowButton = {
  linkTo: string;
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
  const history = useHistory();
  const contentHeight = top && bottom ? "90%" : "95%";

  return (
    <div className={classes.layoutContainer}>
      {top && (
        <div className={classes.top}>
          <button
            className={classes.scrollDown}
            onClick={() => history.push(`/${top.linkTo}`)}
          >
            Scroll Up
          </button>
          <KeyboardArrowUpIcon className={classes.topArrow} fontSize="large" />
        </div>
      )}
      <div className={classes.content} style={{ height: contentHeight }}>
        {children}
      </div>
      {bottom && (
        <div className={classes.bottom}>
          <button
            className={classes.scrollDown}
            onClick={() => history.push(`/${bottom.linkTo}`)}
          >
            Scroll Down
          </button>
          <KeyboardArrowDownIcon
            className={classes.bottomArrow}
            fontSize="large"
          />
        </div>
      )}
    </div>
  );
};
