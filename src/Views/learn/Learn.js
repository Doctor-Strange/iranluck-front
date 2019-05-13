import React from "react";

import { Switch, Route, withRouter, NavLink } from "react-router-dom";
import CreatePerfectMoney from "./CreatePerfectMoney/CreatePerfectMoney";
import global from "../../global.css";
import classes from "./Learn.css";
import CreateWallet from "./CreateWallet/CreateWallet";

const Learn = props => {
  return (
    <div className={global.Responsive}>
      <Switch>
        <Route path="/Learn/CreateWallet" component={CreateWallet} />
        <Route path="/Learn" component={CreatePerfectMoney} />
      </Switch>
    </div>
  );
};

export default withRouter(Learn);
