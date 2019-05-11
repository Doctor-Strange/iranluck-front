import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import classes from "./ControlBar.css";
import global from "../../../global.css";
import gear from "../../../Assets/user/gear.png";
import bell from "../../../Assets/user/bell.png";
import moreMenu from "../../../Assets/user/moreMenu.png";
import envelope from "../../../Assets/user/envelope.png";

class ControlBar extends Component {
  render() {
    return (
      <div className={classes.father}>
        <div className={classes.Responsive}>
          <div className={classes.p1} onClick={this.props.onMenuToggle}>
            <img src={moreMenu} alt="left arrow" />
          </div>
          <div className={classes.p2}>
            <div className={classes.notification}>
              <img src={bell} alt="آیکون اطلاع رسانی" />
              <span>1</span>
            </div>
            <div className={classes.Message}>
              <img src={envelope} alt="آیکون پیام رسانی" />
              <span>1</span>
            </div>
            <div className={classes.Gear}>
              <NavLink to="/account/information">
                <img src={gear} alt="آیکون تنظیمات" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ControlBar);
