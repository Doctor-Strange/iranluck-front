import React from "react";
import classes from "./BackDraw.css";

const BackDraw = props => {
  return (
    <div
      className={props.DrawelClose ? classes.hidden : classes.backDraw}
      onClick={props.OnDrawelClick}
    />
  );
};

export default BackDraw;
