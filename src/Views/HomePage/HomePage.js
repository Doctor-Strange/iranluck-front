import React, { Component } from "react";

import Hoc from "../../Hoc/Hoc";
import classes from "./HomePage.css";
import global from "../../global.css";
import HomePageHeader from "../../Components/HomePage/HomePageHeader/HomePageHeader";
import CountDown from "../../Components/CountDown/CountDown";
import TicketBook from "../../Containers/ticketBook/ticketBook";
import SendToFriends from "../../Components/HomePage/SendToFriends/SendToFriends";
import WinningTickets from "../../Components/HomePage/WinningTickets/WinningTickets";
import WhyUs from "../../Components/HomePage/WhyUs/WhyUs";
import KnowUs from "../../Components/HomePage/KnowUs/KnowUs";

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
        <WinningTickets />
        <WhyUs />
        <KnowUs/>
        {/* <div>
          <div>
            <div>
              <div className={classes.rectangel1} />
              <div className={classes.rectangel2} />
              <div className={classes.rectangel3} />
            </div>
            <div>
              <div className={global.Drop} />
            </div>
            <h3 />
          </div>
        </div> */}
      </Hoc>
    );
  }
}

export default HomePage;
