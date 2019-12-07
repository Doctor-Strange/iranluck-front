import React, { Component } from "react";
import classes from "./Panel.css";
import { withRouter, NavLink } from "react-router-dom";
import GearDashboar from "../../../Assets/GearDashboar.png";
import info from "../../../Assets/ticket.png";
import Userwallet from "../../../Assets/Userwallet.png";
import DashboardInfo from "../../../Components/Dashboard/DashboardInfo/DashboardInfo";

class Panel extends Component {
  render() {
    return (
      <div>
        <div className={classes.Quickaccess}>
          <NavLink to="/account/Wallet" className={classes.walet}>
            <img src={Userwallet} alt="Dashboard Icon" />
            <p>Wallet</p>
          </NavLink>
          <NavLink to="/account/TicketsList" className={classes.info}>
            <img src={info} alt="Dashboard Tickets" />
            <p>My Tickets</p>
          </NavLink>
          <NavLink className={classes.accout} to="/account/EditProfile">
            <img src={GearDashboar} alt="Dashboard Icon" />
            <p>Profile</p>
          </NavLink>
        </div>
        <DashboardInfo />
        <div className={classes.panelControl}>
          <h3>Guides</h3>
          <div className={classes.teach}>
            <NavLink to="/Learn">+ How create Perfect Money Account?</NavLink>
            {/* <NavLink to="/Learn">+ آموزش ساخت حساب پرفکت مانی</NavLink> */}
            {/* <NavLink to="/Learn/CreateWallet">
              + آموزش ساخت کیف پول دیجیتال
            </NavLink> */}
             <NavLink to="/Learn/BuyPerfectMoney">
              + How purchase Perfect Money?
            </NavLink>
            {/* <NavLink to="/Learn/BuyPerfectMoney">
              + آموزش خرید پرفکت مانی
            </NavLink> */}
            {/* <NavLink to="/Learn/ChargeAccount">+ آموزش شارژ حساب</NavLink> */}
            <NavLink to="/Learn/ChargeAccount">
            + How trasfer Perfect Money to my Iran Luck account ?
          </NavLink>
          <NavLink to="/Learn/WithDrawal">+ How can the withdrawal?</NavLink>
            <NavLink to="/Learn/Walletaddress">+ How can change your Perfect Money wallet address in Iran Luck account?</NavLink>
           </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Panel);
