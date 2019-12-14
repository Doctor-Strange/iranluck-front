import React from "react";
import global from "../../../global.css";
import classes from "./HomePageHeader.css";

const HomePageHeader = props => {
  return (
    <div className={classes.background}>
      <div className={[global.Responsive, classes.bannerPart].join(" ")}>
        <div className={classes.padding}>
          <h1>Iran Luck</h1>
          <h2>The biggest online lottery powered by cryptocurrencies.</h2>
          <h3>
            Weekly Jackpot winner prize
            <br />
            <strong>1000 Perfect Money</strong>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeader;
