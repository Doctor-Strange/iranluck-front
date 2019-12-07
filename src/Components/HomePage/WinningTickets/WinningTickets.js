import React from "react";
import { NavLink } from "react-router-dom";
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
        <h2>WINNERS</h2>
        <h3>You have a chance to win a prize in every lottery.</h3>
        <TicketPrice
          Bullets={[true, true, true, true, true, true]}
          img={true}
        />
        <div className={classes.boxTicket}>
          <TicketPrice
            Bullets={[true, true, true, true, true, false]}
            img={false}
          >
            25 Perfect Moneys
          </TicketPrice>
          <TicketPrice
            Bullets={[true, true, true, true, false, false]}
            img={false}
          >
            <p className={classes.secondP}>250</p> Perfect Moneys
          </TicketPrice>
        </div>
        <div className={classes.boxTicket}>
          <TicketPrice
            Bullets={[true, true, true, false, false, false]}
            img={false}
          >
            <p className={classes.secondP}>25</p> Perfect Moneys
          </TicketPrice>
          <TicketPrice
            Bullets={[true, true, false, false, false, false]}
            img={false}
          >
            One <p className={classes.secondP}>LUCKY COIN</p>
          </TicketPrice>
        </div>
        <NavLink onClick={GotoTop} className={classes.laws} to="/Laws/Winners">
          laws
        </NavLink>
      </div>
    </div>
  );
};

const GotoTop = () => {
  window.scrollTo(0, 0);
};

export default WinningTickets;
