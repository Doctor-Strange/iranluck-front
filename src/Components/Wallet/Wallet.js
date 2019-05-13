import React from "react";
import classes from "./Wallet.css";
import { withRouter, NavLink } from "react-router-dom";
import withDrawal from "../../Assets/user/withDrawal.jpg";
import Charge from "../../Assets/user/Charge.jpg";
import DashboardInfo from "../../Components/DashboardInfo/DashboardInfo";

const Wallet = props => {
  return (
    <div className={classes.panelControl}>
      <h3>کیف پول </h3>
      <div className={classes.topPart}>
        <div>
          <NavLink to="/account/Charge">
            <img src={Charge} alt="آیکون" />
            <p>شارژ کیف پول</p>
          </NavLink>
        </div>
        <div>
          <NavLink to="/account/WithDrawal">
            <img src={withDrawal} alt="آیکون" />
            <p>برداشت</p>
          </NavLink>
        </div>
      </div>
      <DashboardInfo />
      <div className={classes.teach}>
        <NavLink to="/Learn">+ آموزش ساخت حساب پرفکت مانی</NavLink>
        <NavLink to="/Learn/CreateWallet">+ آموزش ساخت کیف پول دیجیتال</NavLink>
        <NavLink to="/Learn/BuyPerfectMoney">+ آموزش خرید پرفکت مانی</NavLink>
        <NavLink to="/Learn/Walletaddress">+ تغییر / ثبت آدرس کیف پول</NavLink>
        <NavLink to="">+ آموزش شارژ حساب</NavLink>
        <NavLink to="/Learn/WithDrawal">+ آموزش تسویه حساب</NavLink>
      </div>
    </div>
  );
};

export default withRouter(Wallet);
