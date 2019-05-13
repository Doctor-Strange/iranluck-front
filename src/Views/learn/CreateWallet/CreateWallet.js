import React from "react";
import { Switch, Route, withRouter, NavLink } from "react-router-dom";
import excoino from "../../../Assets/Learn/CreateWallet/excoino.png";
import pay98 from "../../../Assets/Learn/CreateWallet/pay98.png";
import classes from "./CreateWallet.css";
import ExCoino from "./ExCoino/ExCoino";
import Pay98 from "./Pay98/Pay98";

const CreateWallet = props => {
  return (
    <div>
      <div className={classes.Title}>
        <h2>- گام دوم</h2>
        <h3>ساخت کیف پول ارز دیجیتال</h3>
      </div>
      <div className={classes.Refer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.excoino.net"
        >
          <img src={excoino} alt="excoino" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://pay98.cash">
          <img src={pay98} alt="pay98" />
        </a>
      </div>
      <Switch>
        <Route path="/Learn/CreateWallet/pay98" component={Pay98} />
        <Route path="/Learn/CreateWallet" component={ExCoino} />
      </Switch>
      <div className={classes.relevant}>
        <NavLink onClick={GotoTop} to="/Learn/CreateWallet/excoino">
          آموزش ساخت کیف پول در excoino
        </NavLink>
        <NavLink onClick={GotoTop} to="/Learn/CreateWallet/pay98">
          آموزش ساخت کیف پول در Pay98
        </NavLink>

        <div className={classes.Steps}>
          <div>
            <h3>گام اول </h3>
            <NavLink onClick={GotoTop} to="/Learn">
              ایجاد حساب کاربری Perfect Money
            </NavLink>
          </div>
          <div>
            <h3>گام دوم </h3>
            <NavLink
              className={classes.uareHere}
              onClick={GotoTop}
              to="/Learn/CreateWallet"
            >
              شما اینجا هستید
            </NavLink>
          </div>
          <div>
            <h3>گام سوم </h3>
            <NavLink onClick={GotoTop} to="/Learn/BuyPerfectMoney">
              خرید پرفکت مانی
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const GotoTop = () => {
  window.scrollTo(0, 0);
};

export default withRouter(CreateWallet);
