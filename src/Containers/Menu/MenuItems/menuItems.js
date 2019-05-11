import React, { Component } from "react";
import classes from "./menuItems.css";
import { withRouter, NavLink } from "react-router-dom";

class MenuItems extends Component {
  onItemClick = () => {
    this.props.OnItemClick();
  };

  render() {
    return (
      <ul className={classes.menulist}>
        <li onClick={this.onItemClick}>
          <NavLink to="/account/Wallet">موجودی کیف پول</NavLink>
        </li>
        <li onClick={this.onItemClick}>
          <NavLink to="/account/Charge">شارژ</NavLink>
        </li>
        <li onClick={this.onItemClick}>
          <NavLink to="/account/WithDrawal">برداشت</NavLink>
        </li>
        <li onClick={this.props.OnDrawelClick} className={classes.LogBtn}>
          ورود / ثبت نام
        </li>
      </ul>
    );
  }
}

export default withRouter(MenuItems);
