import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import classes from "./Dashboard.css";
import ControlBar from "../../Containers/User/ControlBar/ControlBar";
import RightDashboard from "../../Containers/User/RightDashboard/RightDashboard";
import BackDraw from "../../UI/BackDraw/BackDraw";

class Dashboard extends Component {
  state = {
    RightmenuToggle: false
  };

  onMenuToggle = () => {
    this.setState(prev => {
      return {
        RightmenuToggle: !prev.RightmenuToggle
      };
    });
  };

  render() {
    return (
      <div className={classes.flexFather}>
        <div
          className={[
            classes.partRight,
            this.state.RightmenuToggle ? classes.shwoMenu : classes.hideMenu
          ].join(" ")}
        >
          <RightDashboard />
        </div>
        {this.state.RightmenuToggle ? (
          <BackDraw
            DrawelClose={!this.state.RightmenuToggle}
            OnDrawelClick={this.onMenuToggle}
          />
        ) : null}
        <div className={classes.partLeft}>
          <ControlBar onMenuToggle={this.onMenuToggle} />
          <div>
            {/* <Switch> */}
            {/* <Route path="/account/dashboard" component={Panel} /> */}
            {/* </Switch> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
