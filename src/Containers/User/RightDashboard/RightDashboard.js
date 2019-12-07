import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";

import classes from "./RightDashboard.css";
import userIcon from "../../../Assets/user/userIcon.png";

class RightDashboard extends Component {
  state = {
    userName: null
  };

  onItemClick = () => {
    this.props.OnItemClick();
  };

  componentDidMount = () => {
    const { Email } = this.props.AuthData;
    this.setState({
      userName: Email.substring(0, Email.indexOf("@"))
    });
  };

  render() {
    const url = this.props.history.location.pathname;
    return (
      <div>
        <div className={classes.UserId}>
          <img src={userIcon} alt="آیکون کاربری" />
          <div>
            <h3>{this.state.userName}</h3>
            {/* ==> */}
            {/* <p>آخرین بازدید : 98/02/15</p> */}
          </div>
        </div>
        <h3 className={classes.Gap}>Menu</h3>
        <ul className={classes.menu}>
          <li
            onClick={this.onItemClick}
            className={url === "/account" ? classes.Active : null}
          >
            <NavLink to="/account">Dashboard</NavLink>
          </li>
          <li
            className={url === "/account/TicketsList" ? classes.Active : null}
          >
            <NavLink onClick={this.onItemClick} to="/account/TicketsList">
              Ticket
            </NavLink>
          </li>
          <li className={url === "/account/Wallet" ? classes.Active : null}>
            <NavLink onClick={this.onItemClick} to="/account/Wallet">
              Wallet
            </NavLink>
          </li>
          <li
            className={url === "/account/EditProfile" ? classes.Active : null}
          >
            <NavLink onClick={this.onItemClick} to="/account/EditProfile">
              Edit Profile
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="">گزارش گیری</NavLink>
          </li>
          <li>
            <NavLink to="/account/Ticket/">تیکت ها</NavLink>
          </li> */}
        </ul>
        <p />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    AuthData: state.AUTH.AuthData
  };
};

export default withRouter(connect(mapStateToProps)(RightDashboard));
