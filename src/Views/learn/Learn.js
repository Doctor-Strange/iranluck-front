import React from "react";

import { Switch, Route, withRouter, NavLink } from "react-router-dom";
import CreatePerfectMoney from "./CreatePerfectMoney/CreatePerfectMoney";
import global from "../../global.css";
import classes from "./Learn.css";
import CreateWallet from "./CreateWallet/CreateWallet";
import BuyPerfectMoney from "./BuyPerfectMoney/BuyPerfectMoney";
import Walletaddress from "./Walletaddress/Walletaddress";
import WithDrawal from "./WithDrawal/WithDrawal";
import PerfectGatewayPayment from "./PerfectGatewayPayment/PerfectGatewayPayment";

const GotoTop = () => {
  window.scrollTo(0, 0);
};

const Learn = props => {
  const url = props.history.location.pathname;
  return (
    <div className={global.Responsive}>
      <div>
        <div className={classes.Steps}>
          <div className={classes.wi}>
            <div>
              <h3>گام اول </h3>
              <NavLink
                className={url === "/Learn" ? classes.Active : null}
                onClick={GotoTop}
                to="/Learn"
              >
                - ساخت حساب پرفکت مانی
              </NavLink>
            </div>
            <div>
              <h3>گام دوم </h3>
              <NavLink
                className={
                  url === "/Learn/CreateWallet" ? classes.Active : null
                }
                onClick={GotoTop}
                to="/Learn/CreateWallet"
              >
                - ساخت کیف پول ارز دیجیتال
              </NavLink>
              <NavLink
                className={
                  url === "/Learn/CreateWallet/excoino" ? classes.Active : null
                }
                onClick={GotoTop}
                to="/Learn/CreateWallet/excoino"
              >
                - ساخت کیف پول در excoino
              </NavLink>
              <NavLink
                className={
                  url === "/Learn/CreateWallet/pay98" ? classes.Active : null
                }
                onClick={GotoTop}
                to="/Learn/CreateWallet/pay98"
              >
                - ساخت کیف پول در Pay98
              </NavLink>
            </div>
            <div>
              <h3>گام سوم </h3>
              <NavLink
                className={
                  url === "/Learn/BuyPerfectMoney" ? classes.Active : null
                }
                onClick={GotoTop}
                to="/Learn/BuyPerfectMoney"
              >
                - خرید پرفکت مانی
              </NavLink>
            </div>
            <div>
              <h3>گام چهارم </h3>
              <NavLink
                className={url === "/Learn/ChargeAccount" ? classes.Active : null}
                onClick={GotoTop}
                to="/Learn/ChargeAccount"
              >
                آموزش شارژحساب
              </NavLink>
            </div>
            <div>
              <h3>گام پنجم</h3>
              <NavLink
                className={
                  url === "/Learn/Walletaddress" ? classes.Active : null
                }
                onClick={GotoTop}
                to="/Learn/Walletaddress"
              >
                - ثبت / تغییر آدرس کیف پول
              </NavLink>
            </div>
            <div>
              <h3>گام آخر</h3>
              <NavLink
                className={url === "/Learn/WithDrawal" ? classes.Active : null}
                onClick={GotoTop}
                to="/Learn/WithDrawal"
              >
                - برداشت وجه
              </NavLink>
            </div>
          </div>
        </div>
        <div className={classes.ViewPart}>
          <Switch>
            <Route path="/Learn/CreateWallet" component={CreateWallet} />
            <Route path="/Learn/BuyPerfectMoney" component={BuyPerfectMoney} />
            <Route path="/Learn/Walletaddress" component={Walletaddress} />
            <Route path="/Learn/WithDrawal" component={WithDrawal} />
            <Route
              path="/Learn/ChargeAccount"
              component={PerfectGatewayPayment}
            />
            <Route path="/Learn" component={CreatePerfectMoney} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Learn);
