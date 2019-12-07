import React from "react";
import classes from "./WhyUs.css";
import global from "../../../global.css";

import wallet from "../../../Assets/wallet.png";
import withdrawal from "../../../Assets/withdraw.png";
import creditcard from "../../../Assets/creditcard.png";
import GiveBitcoin from "../../../Assets/GiveBitcoin.png";

const WhyUs = props => {
  return (
    <div className={[global.Responsive, classes.father].join(" ")}>
      <div>
        <div className={global.Drop} />
      </div>
      <h2>Why you can trust Iran Luck?</h2>
      <h3>
        All lottery tickets and winner numbers are chosen by Google random
        algorithm.
      </h3>
      <div className={classes.padding}>
        <div className={classes.reason}>
          <div className={classes.firstDIV}>
            <img src={withdrawal} alt="آیکون های بخش چرا ایران لاک" />
          </div>
          <div className={classes.secondDIV}>
            <h4>WIthdraw</h4>
            <p>You can take all your deposit in less than a minute.</p>
          </div>
        </div>
        <div className={classes.reason}>
          <div className={classes.firstDIV}>
            <img src={GiveBitcoin} alt="آیکون های بخش چرا ایران لاک" />
          </div>
          <div className={classes.secondDIV}>
            <h4>Digital Currency</h4>
            <p>Payments by digital currency</p>
          </div>
        </div>
        <div className={classes.reason}>
          <div className={classes.firstDIV}>
            <img src={wallet} alt="آیکون های بخش چرا ایران لاک" />
          </div>
          <div className={classes.secondDIV}>
            <h4>Safe Wallet</h4>
            <p>encrypted wallet for deposit</p>
          </div>
        </div>
        <div className={classes.reason}>
          <div className={classes.firstDIV}>
            <img src={creditcard} alt="آیکون های بخش چرا ایران لاک" />
          </div>
          <div className={classes.secondDIV}>
            <h4>Exchange</h4>
            <p>
              It's easy to Exchange Perfect Money to any currency you want
              around the world
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
