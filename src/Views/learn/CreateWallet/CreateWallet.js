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
      <p className={classes.P}>شما میتوانید به اختیار خود در یکی از وبسایت های زیر کیف پول خود را ایجاد کنید</p>
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
    </div>
  );
};

export default withRouter(CreateWallet);
