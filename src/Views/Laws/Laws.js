import React from "react";

import { Switch, Route, withRouter, NavLink } from "react-router-dom";
import LotteryLaws from "./LotteryLaws/LotteryLaws";
import global from "../../global.css";
import classes from "./Laws.css";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import Winners from "./Winners/Winners";
import WithDrawal from "./WithDrawal/WithDrawal";

const GotoTop = () => {
  window.scrollTo(0, 0);
};

const Laws = props => {
  const url = props.history.location.pathname;
  return (
    <div className={global.Responsive}>
      <div>
        <div className={classes.Steps}>
          <div className={classes.wi}>
            <div>
              <NavLink
                className={url === "/Laws" ? classes.Active : null}
                onClick={GotoTop}
                to="/Laws"
              >
                Lottery roles
              </NavLink>
            </div>
            <div>
              <NavLink
                className={url === "/Laws/Winners" ? classes.Active : null}
                onClick={GotoTop}
                to="/Laws/Winners"
              >
                Winning tickets
              </NavLink>
            </div>
            <div>
              <NavLink
                className={url === "/Laws/WithDrawal" ? classes.Active : null}
                onClick={GotoTop}
                to="/Laws/WithDrawal"
              >
                Lucky Coins
              </NavLink>
            </div>
            <div>
              <NavLink
                className={
                  url === "/Laws/PrivacyPolicy" ? classes.Active : null
                }
                onClick={GotoTop}
                to="/Laws/PrivacyPolicy"
              >
                Privacy Policies
              </NavLink>
            </div>
          </div>
        </div>
        <div className={classes.ViewPart}>
          <Switch>
            <Route path="/Laws/PrivacyPolicy" component={PrivacyPolicy} />
            <Route path="/Laws/Winners" component={Winners} />
            <Route path="/Laws/WithDrawal" component={WithDrawal} />
            <Route path="/Laws" component={LotteryLaws} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Laws);
