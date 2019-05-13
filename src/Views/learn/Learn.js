import React from "react";

import { Switch, Route, withRouter, NavLink } from "react-router-dom";
import CreatePerfectMoney from "./CreatePerfectMoney/CreatePerfectMoney";
import global from "../../global.css";
import classes from "./Learn.css";
import CreateWallet from "./CreateWallet/CreateWallet";
import BuyPerfectMoney from "./BuyPerfectMoney/BuyPerfectMoney";
import Walletaddress from "./Walletaddress/Walletaddress";
import WithDrawal from "./WithDrawal/WithDrawal";

const Learn = props => {
  return (
    <div className={global.Responsive}>
      <Switch>
        <Route path="/Learn/CreateWallet" component={CreateWallet} />
        <Route path="/Learn/BuyPerfectMoney" component={BuyPerfectMoney} />
        <Route path="/Learn/Walletaddress" component={Walletaddress} />
        <Route path="/Learn/WithDrawal" component={WithDrawal} />
        <Route path="/Learn" component={CreatePerfectMoney} />
      </Switch>
    </div>
  );
};

export default withRouter(Learn);
