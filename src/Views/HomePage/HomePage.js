import React, { Component } from "react";

import Hoc from "../../Hoc/Hoc";
import classes from "./HomePage.css";
import global from "../../global.css";
import HomePageHeader from "../../Components/HomePageHeader/HomePageHeader";
import CountDown from "../../Components/CountDown/CountDown";
import TicketBook from "../../Containers/ticketBook/ticketBook";
import SendToFriends from "../../Components/SendToFriends/SendToFriends";

class HomePage extends Component {
  render() {
    return (
      <Hoc>
        <HomePageHeader />
        <div className={classes.GrandFather}>
          <div className={classes.TicketContainer}>
            <CountDown />
            <TicketBook />
          </div>
        </div>
        <SendToFriends />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <div>
            <div>
              <div className={classes.rectangel1} />
              <div className={classes.rectangel2} />
              <div className={classes.rectangel3} />
            </div>
            <div>
              <div className={classes.Drop} />
            </div>
            <h3 />
          </div>
        </div>
        <br />
      </Hoc>
      // <WinningTickets/>
      // <WhyUs/>
      // <KnowUs/>
    );
  }
}

export default HomePage;
