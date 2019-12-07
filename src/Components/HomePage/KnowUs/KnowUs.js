import React from "react";
import classes from "./KnowUs.css";
import global from "../../../global.css";
import { NavLink } from "react-router-dom";

const GotoTop = () => {
  window.scrollTo(0, 0);
};

const KnowUs = props => {
  return (
    <div className={[global.Responsive, classes.father].join(" ")}>
      <div>
        <h2>ایران لاک را بیشتر بشناسید</h2>
        <p>
          iran Luck is an online lottery based on Perfect Money Digital currency.
        </p>
        <NavLink
          onClick={GotoTop}
          className={classes.button}
          to="/Learn/WithDrawal"
        >
          Withdrawal
        </NavLink>
      </div>
    </div>
  );
};

export default KnowUs;
