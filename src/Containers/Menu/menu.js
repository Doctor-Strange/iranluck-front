import React, { Component } from "react";
import MenuItems from "./MenuItems/menuItems";
import classes from "./menu.css";
import logo from "../../Assets/WhiteLOGO.png";
import global from "../../global.css";

class Menu extends Component {
  render() {
    return (
      <div className={[classes.container, this.props.menuToggle ? classes.shwoMenu : classes.hideMenu].join(" ")}>
        <div className={global.Responsive}>
          <div className={classes.firstPart}>
            <a href="/">
              <img src={logo} className={classes.logo} alt="لوگو" />
            </a>
            <div className={classes.menulist}>
              <ul>
                <li>شارژ / تسویه</li>
                <li>قوانین</li>
              </ul>
            </div>
          </div>
          <div className={classes.secondPart}>
            <MenuItems OnDrawelClick={this.props.OnDrawelClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
