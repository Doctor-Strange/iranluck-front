import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Hoc from "../../Hoc/Hoc";
import classes from "./HomePage.css";
import HomePageHeader from "../../Components/HomePage/HomePageHeader/HomePageHeader";
import TicketBook from "../../Containers/ticketBook/ticketBook";
import SendToFriends from "../../Components/HomePage/SendToFriends/SendToFriends";
import WinningTickets from "../../Components/HomePage/WinningTickets/WinningTickets";
import WhyUs from "../../Components/HomePage/WhyUs/WhyUs";
import KnowUs from "../../Components/HomePage/KnowUs/KnowUs";
import { AuthRedux } from "../../Store/Action";
import Countdown from "../../Components/HomePage/CountDown/CountDown";
// var CryptoJS = require("crypto-js");

class HomePage extends Component {
  componentDidMount = () => {
    // if  Auth is false and User Object is exist do the Automatic login

    if (!this.props.AuthorizeStatus && localStorage["user"]) {
      //get user information from Storage
      // const key = "IranLuckHashCode";
      // let storage = localStorage.getItem("user");
      // let decrypted = CryptoJS.AES.decrypt(storage, key);
      // const Data = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
      this.props.AuthRedux(true);
    }
  };

  render() {
    return (
      <Hoc>
        <HomePageHeader />
        <div className={classes.GrandFather}>
          <div className={classes.TicketContainer}>
            <Countdown />
            <TicketBook />
          </div>
        </div>
        <SendToFriends />
        <WinningTickets />
        <WhyUs />
        <KnowUs />
      </Hoc>
    );
  }
}

const mapStateToProps = state => {
  return {
    AuthorizeStatus: state.AUTH.AuthorizeStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AuthRedux: data => dispatch(AuthRedux(data))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
);
