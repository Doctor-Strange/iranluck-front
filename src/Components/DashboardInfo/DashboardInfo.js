import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import classes from "./DashboardInfo.css";

class DashboardInfo extends Component {
  render() {
    return (
      <div className={classes.panelControl}>
        <div className={classes.deposit}>
          <p>
            موجودی :<span>1</span>عدد پرفکت مانی
          </p>
          <NavLink to="/account/Charge"> + شارژ کیف پول</NavLink>
        </div>
        <div className={classes.luckyCoin}>
          <p>
            سکه های شانس :<span>0</span>عدد
          </p>
        </div>
        <p>آدرس کیف پول :</p>
        <div className={classes.pandSpan}>
          <p>LKHLF67LKUGGH4HJ12390</p>
          <span>تایید شده</span>
        </div>
      </div>
    );
  }
}

export default withRouter(DashboardInfo);
