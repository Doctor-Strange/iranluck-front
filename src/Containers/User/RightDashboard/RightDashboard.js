import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";

import classes from "./RightDashboard.css";
import userIcon from "../../../Assets/user/userIcon.png";
var CryptoJS = require("crypto-js");

class RightDashboard extends Component {
  state = {
    userName: null
  };
  onItemClick = () => {
    this.props.OnItemClick();
  };


  componentDidMount = () => {
    // if  Auth is false and User Object is exist do the Automatic login

    if (!this.props.AuthorizeStatus && localStorage["user"]) {
      // get user information from Storage
      const key = "IranLuckHashCode";
      let storage = localStorage.getItem("user");
      let decrypted = CryptoJS.AES.decrypt(storage, key);
      const Data = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
      this.setState({
        userName: Data.Email.substring(0, Data.Email.indexOf("@"))
      });
    }
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
        <h3 className={classes.Gap}>منو اصلی</h3>
        <ul className={classes.menu}>
          <li
            onClick={this.onItemClick}
            className={url === "/account" ? classes.Active : null}
          >
            <NavLink to="/account">داشبورد</NavLink>
          </li>
          <li className={url === "/account/Wallet" ? classes.Active : null}>
            <NavLink onClick={this.onItemClick} to="/account/Wallet">
              کیف پول
            </NavLink>
          </li>
          <li
            className={url === "/account/EditProfile" ? classes.Active : null}
          >
            <NavLink onClick={this.onItemClick} to="/account/EditProfile">
              ویرایش اطلاعات
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

export default withRouter(RightDashboard);
