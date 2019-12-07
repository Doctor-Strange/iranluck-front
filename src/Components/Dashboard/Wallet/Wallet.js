import React from "react";
import classes from "./Wallet.css";
import { withRouter, NavLink } from "react-router-dom";
import withDrawal from "../../../Assets/user/withDrawal.jpg";
import Charge from "../../../Assets/user/Charge.jpg";
import DashboardInfo from "../DashboardInfo/DashboardInfo";

const Wallet = props => {
  return (
    <div className={classes.panelControl}>
      <h3>My Iran Luck wallet</h3>
      <div className={classes.topPart}>
        <div>
          <NavLink to="/account/Charge">
            <img src={Charge} alt="آیکون" />
            <p>Deposit</p>
          </NavLink>
        </div>
        <div>
          <NavLink to="/account/WithDrawal">
            <img src={withDrawal} alt="آیکون" />
            <p>Withdrawal</p>
          </NavLink>
        </div>
      </div>
      <DashboardInfo />
      <div className={classes.teach}>
        {/* <NavLink to="/Learn">+ آموزش ساخت حساب پرفکت مانی</NavLink> */}
        <NavLink to="/Learn">+ How create Perfect Money Account?</NavLink>
        {/* <NavLink to="/Learn/CreateWallet">+ آموزش ساخت کیف پول دیجیتال</NavLink> */}
        {/* <NavLink to="/Learn/BuyPerfectMoney">+ آموزش خرید پرفکت مانی</NavLink> */}
        <NavLink to="/Learn/BuyPerfectMoney">
              + How purchase Perfect Money ?
            </NavLink>
            <NavLink to="/Learn/Walletaddress">+ How can change your Perfect Money wallet address in Iran Luck account?</NavLink>

        <NavLink to="/Learn/ChargeAccount">+ How to charge my Iran Luck account?</NavLink>
        <NavLink to="/Learn/WithDrawal">+ How can the withdrawal?</NavLink>
        
      </div>
    </div>
  );
};

export default withRouter(Wallet);
