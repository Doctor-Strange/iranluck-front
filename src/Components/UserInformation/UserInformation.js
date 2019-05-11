import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import classes from "./UserInformation.css";
import userIcon from "../../Assets/user/userIcon.png";

class UserInformation extends Component {
  render() {
    return (
      <div className={classes.panelControl}>
        <div>
          <img src={userIcon} alt="آیکون کاربری" />
          <p className={classes.title}>ایمیل تایید شده</p>
          <p className={classes.userName}>kalam.shabdare@gmail.com</p>
          <p className={classes.title}>آدرس کیف پول</p>
          <p className={classes.WalletAddress}>
            <span>
              <NavLink to="/account/EditProfile">
               تغییر یا ویرایش
              </NavLink>
            </span>
            KHSSDFJSKD75KJH45KJHKJHA
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(UserInformation);
