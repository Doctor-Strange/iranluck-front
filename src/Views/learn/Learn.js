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
              <h3>The First Step</h3>
              <NavLink
                className={url === "/Learn" ? classes.Active : null}
                onClick={GotoTop}
                to="/Learn"
              >
                - Create Perfect Money Account
              </NavLink>
            </div>
            {/* <div>
              <h3>The Second Step</h3>
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
            </div> */}
            <div>
              <h3>The Second Step</h3>
              <NavLink
                className={
                  url === "/Learn/BuyPerfectMoney" ? classes.Active : null
                }
                onClick={GotoTop}
                to="/Learn/BuyPerfectMoney"
              >
                - Deposit Perfect Money
              </NavLink>
            </div>
            <div>
              <h3>The Third Step</h3>
              <NavLink
                className={
                  url === "/Learn/ChargeAccount" ? classes.Active : null
                }
                onClick={GotoTop}
                to="/Learn/ChargeAccount"
              >
                Charge Iran Luck Account
              </NavLink>
            </div>
            <div>
              <h3>The Forth Step</h3>
              <NavLink
                className={
                  url === "/Learn/Walletaddress" ? classes.Active : null
                }
                onClick={GotoTop}
                to="/Learn/Walletaddress"
              >
                - Set or Change your wallet address
              </NavLink>
            </div>
            <div>
              <h3>Last but not least</h3>
              <NavLink
                className={url === "/Learn/WithDrawal" ? classes.Active : null}
                onClick={GotoTop}
                to="/Learn/WithDrawal"
              >
                - Withdrawal
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
