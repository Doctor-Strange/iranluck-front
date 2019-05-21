import React, { Component } from "react";
import classes from "./UserInformation.css";
import userIcon from "../../../Assets/user/userIcon.png";
var CryptoJS = require("crypto-js");

class UserInformation extends Component {
  state = { Email: null, walletAddress: null };

  componentWillMount = () => {
    if (localStorage["user"]) {
      //get user information from Storage
      const key = "IranLuckHashCode";
      let storage = localStorage.getItem("user");
      let decrypted = CryptoJS.AES.decrypt(storage, key);
      const Data = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
      this.setState({
        Email: Data.Email
      });
    }
    if (sessionStorage["user"]) {
      //get user information from Storage
      const key = "IranLuckHashCode";
      let storage = sessionStorage.getItem("user");
      let decrypted = CryptoJS.AES.decrypt(storage, key);
      const Data = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
      this.setState({
        Email: Data.Email
      });
    }
  };
  render() {
    return (
      <div className={classes.panelControl}>
        <div>
          <img src={userIcon} alt="آیکون کاربری" />
          <p className={classes.title}>ایمیل تایید شده</p>
          <p className={classes.userName}>{this.state.Email}</p>
        </div>
      </div>
    );
  }
}

export default UserInformation;
