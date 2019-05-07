import React from "react";

import classes from "./TicketPrice.css";
import Jackpot from "../../../Assets/Jackpot.png";

const TicketPrice = props => {
  const array = props.Bullets.map((i, index) => {
    if (i) return <span key={index} className={classes.Green} />;
    return <span className={classes.Red} key={index} />;
  });
  const img = props.img;
  return (
    <div className={classes.ticketFather}>
      <div
        className={
          img ? [classes.circle, classes.backControl].join(" ") : classes.circle
        }
      >
        {img ? (
          <img className={classes.Jackpot} src={Jackpot} alt="Jackpot" />
        ) : (
          <p className={classes.firstP}>{props.children}</p>
        )}
      </div>
      <div className={classes.rectangle}>{array}</div>
    </div>
  );
};

export default TicketPrice;
