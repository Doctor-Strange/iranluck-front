import React from "react";

import classes from "./Loader.css";

const Loader = props => {
  // you can customized Style for this loader. like samples in bellow
  // border: "2px solid transparent"
  // borderTop: "2px solid #ffffff"
  // display: "inline-block"
  // height: "15px"
  // margin: "0 5px"
  // width: "15px"
  // besides those styles, you can add more properties like color or etc
  return <div style={props.styleProps} className={classes.loader} />;
};

export default Loader;
