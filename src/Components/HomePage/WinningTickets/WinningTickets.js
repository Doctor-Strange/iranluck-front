import React from "react";

import global from "../../../global.css";
import classes from "./WinningTickets.css";
import TicketPrice from "../TicketPrice/TicketPrice";

const WinningTickets = props => {
  return (
    <div className={classes.father}>
      <div className={global.Responsive}>
        <div className={classes.shaperContainer}>
          <div className={classes.rectangel1} />
          <div className={classes.rectangel2} />
          <div className={classes.rectangel3} />
        </div>
        <div>
          <div className={[global.Drop, classes.custom].join(" ")} />
        </div>
        <h2>بلیط های برنده</h2>
        <h3>حتی با کمترین شانس هم برنده هستید</h3>
        <TicketPrice
          Bullets={[true, true, true, true, true, true]}
          img={true}
        />
        <div className={classes.boxTicket}>
          <TicketPrice
            Bullets={[true, true, true, true, true, false]}
            img={false}
          >
            2.5 میلیون تومان
          </TicketPrice>
          <TicketPrice
            Bullets={[true, true, true, true, false, false]}
            img={false}
          >
            <p className={classes.secondP}>250</p>
            {" "}هزار تومان
          </TicketPrice>
        </div>
        <div className={classes.boxTicket}>
          <TicketPrice
            Bullets={[true, true, true, false, false, false]}
            img={false}
          >
            <p className={classes.secondP}>25</p>
            {" "}هزار تومان
          </TicketPrice>
          <TicketPrice
            Bullets={[true, true, false, false, false, false]}
            img={false}
          >
            یک بلیط{" "}
            <p className={classes.secondP}>رایگان</p>
          </TicketPrice>
        </div>
        <a className = {classes.laws} href = "">قوانین بازی</a>
      </div>
    </div>
  );
};

export default WinningTickets;
