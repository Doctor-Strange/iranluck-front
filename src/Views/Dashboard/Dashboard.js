import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import classes from "./Dashboard.css";
import Hoc from "../../Hoc/Hoc";
import ControlBar from "../../Containers/User/ControlBar/ControlBar";
import RightDashboard from "../../Containers/User/RightDashboard/RightDashboard";
import BackDraw from "../../UI/BackDraw/BackDraw";
import Panel from "../../Containers/User/Panel/Panel";
import telegramIcon from "../../Assets/telegramIcon.png";
import WithDrawal from "../../Components/Dashboard/Wallet/WithDrawal/WithDrawal";
import Wallet from "../../Components/Dashboard/Wallet/Wallet";
import EditProfile from "../../Containers/EditProfile/EditProfile";
import UserInformation from "../../Components/Dashboard/UserInformation/UserInformation";
import ChargeAccount from "../../Components/Dashboard/Wallet/ChargeAccount/ChargeAccount";
// import SupportTicket from "../../Components/SupportTicket/SupportTicket";

class Dashboard extends Component {
  state = {
    RightmenuToggle: false
  };

  onMenuToggle = (arg = true) => {
    arg
      ? this.setState(pre => {
          return {
            RightmenuToggle: !pre.RightmenuToggle
          };
        })
      : this.setState({
          RightmenuToggle: false
        });
  };

  render() {
    return (
      <Hoc>
        <div className={classes.flexFather}>
          <div
            className={[
              classes.partRight,
              this.state.RightmenuToggle ? classes.shwoMenu : classes.hideMenu
            ].join(" ")}
          >
            <RightDashboard OnItemClick={() => this.onMenuToggle(false)} />
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
              <Switch>
                <Route path="/account/Charge" component={ChargeAccount} />
                <Route path="/account/WithDrawal" component={WithDrawal} />
                <Route path="/account/Wallet" component={Wallet} />
                <Route path="/account/EditProfile" component={EditProfile} />
                {/* <Route path="/account/Ticket" component={SupportTicket} /> */}
                <Route
                  path="/account/information"
                  component={UserInformation}
                />
                <Route path="/account" component={Panel} />
              </Switch>
            </div>
          </div>
        </div>
        <div className={classes.support}>
          <a
            target="-_blank"
            rel="noopener"
            href="https://t.me/iranlucksupport"
          >
            <img src={telegramIcon} alt="telegram Support" />
            <strong>پشتیبانی تلگرام: iranlucksupport@</strong>
          </a>
        </div>
      </Hoc>
    );
  }
}

export default withRouter(Dashboard);
