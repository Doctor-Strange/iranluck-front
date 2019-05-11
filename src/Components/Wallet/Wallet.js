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
        <NavLink to="">+ آموزش پرداخت از درگاه</NavLink>
        <NavLink to="">+ آموزش ساخت کیف پول پرفکت مانی</NavLink>
        <NavLink to="">+ آموزش تسویه حساب</NavLink>
        <NavLink to="">+ تغییر آدرس کیف پول</NavLink>
      </div>
    </div>
  );
};

export default withRouter(Wallet);
