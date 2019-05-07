import React, { Component } from "react";
import classes from "./menuItems.css";

class MenuItems extends Component {
  render() {
    return (
      <ul className={classes.menulist}>
        <li>موجودی کیف پول</li>
        <li>شارژ</li>
        <li>برداشت</li>
        <li onClick={this.props.OnDrawelClick}>ورود / ثبت نام</li>
      </ul>
    );
  }
}

export default MenuItems;
