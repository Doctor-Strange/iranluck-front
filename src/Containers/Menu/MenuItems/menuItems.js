import React, { Component } from "react";
import classes from "./menuItems.css";
import Hoc from "../../../Hoc/Hoc";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { AuthRedux, getWalletInformation } from "../../../Store/Action";
var CryptoJS = require("crypto-js");

class MenuItems extends Component {
  State = {
    perfectmoney: "...",
    lukyCoin: "..."
  };

  onItemClick = () => {
    this.props.OnItemClick();
  };

  LOGOUT = () => {
    sessionStorage.removeItem("user");
    localStorage.removeItem("user");
    localStorage.removeItem("cacheInfo");
    this.props.AuthRedux();
  };

  componentDidMount = () => {
    // if  Auth is false and User Object is exist do the Automatic login
    if (!this.props.AuthorizeStatus && localStorage["user"]) {
      this.props.getWalletInformation();
    }
  };

  componentWillReceiveProps = () => {
    if (localStorage["cacheInfo"]) {
      //get user information from Storage
      const key = "IranLuckHashCode";
      let storage = localStorage.getItem("cacheInfo");
      let decrypted = CryptoJS.AES.decrypt(storage, key);
      const Data = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
      this.setState({
        perfectmoney: Data.TotalAmount,
        lukyCoin: Data.CoinCount
      });
      // return Data;
    }
  };

  render() {
    const { AuthorizeStatus } = this.props;
    const Items = AuthorizeStatus ? (
      <Hoc>
        <li onClick={this.onItemClick}>
          <NavLink to="/account/Wallet">{this.state.perfectmoney} سکه</NavLink>
        </li>
        <li onClick={this.onItemClick}>
          <NavLink to="/account/Charge">شارژ</NavLink>
        </li>
        <li onClick={this.onItemClick}>
          <NavLink to="/account/WithDrawal">برداشت</NavLink>
        </li>
        <li onClick={this.LOGOUT} className={classes.LogBtn}>
          خروج
        </li>
      </Hoc>
    ) : (
      <li onClick={this.props.OnDrawelClick} className={classes.LogBtn}>
        ورود / ثبت نام
      </li>
    );
    return <ul className={classes.menulist}>{Items}</ul>;
  }
}

const mapStateToProps = state => {
  return {
    AuthorizeStatus: state.AUTH.AuthorizeStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AuthRedux: () => dispatch(AuthRedux()),
    getWalletInformation: data => dispatch(getWalletInformation(data))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MenuItems)
);
