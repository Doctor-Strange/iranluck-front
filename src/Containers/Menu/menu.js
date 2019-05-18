import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import MenuItems from "./MenuItems/menuItems";
import classes from "./menu.css";
import logo from "../../Assets/WhiteLOGO.png";
import global from "../../global.css";

class Menu extends Component {
  onItemClick = () => {
    this.props.OnItemClick();
  };

  render() {
    return (
      <div
        className={[
          classes.container,
          this.props.menuToggle ? classes.shwoMenu : classes.hideMenu
        ].join(" ")}
      >
        <div className={global.Responsive}>
          <div className={classes.firstPart}>
            <NavLink to="/" onClick={this.onItemClick}>
              <img src={logo} className={classes.logo} alt="لوگو" />
            </NavLink>
            <div className={classes.menulist}>
              <ul>
                <li onClick={this.onItemClick}>
                  <NavLink to="/Learn">آموزش شارژ / تسویه</NavLink>
                </li>
                <li onClick={this.onItemClick}>
                  <NavLink to="/Laws">قوانین</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.secondPart}>
            <MenuItems
              OnDrawelClick={this.props.OnDrawelClick}
              OnItemClick={this.props.OnItemClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);
