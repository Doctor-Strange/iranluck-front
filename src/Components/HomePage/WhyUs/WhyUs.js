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
      <h2>چرا ایران لاک؟</h2>
      <h3>
        قرعه کشی آنلاین، بدون نیاز به احراز هویت، پرداخت ایمن از طریق کیف پول
        دیجیتال!
      </h3>
      <div className={classes.padding}>
        <div className={classes.reason}>
          <div className={classes.firstDIV}>
            <img src={withdrawal} alt="آیکون های بخش چرا ایران لاک" />
          </div>
          <div className={classes.secondDIV}>
            <h4>برداشت وجه</h4>
            <p>برداشت وجه در هر زمان بدون نیاز به سقف معین</p>
          </div>
        </div>
        <div className={classes.reason}>
          <div className={classes.firstDIV}>
            <img src={GiveBitcoin} alt="آیکون های بخش چرا ایران لاک" />
          </div>
          <div className={classes.secondDIV}>
            <h4>ارز دیجیتال</h4>
            <p>پرداخت بر اساس ارز های دیجیتال شما</p>
          </div>
        </div>
        <div className={classes.reason}>
          <div className={classes.firstDIV}>
            <img src={wallet} alt="آیکون های بخش چرا ایران لاک" />
          </div>
          <div className={classes.secondDIV}>
            <h4>کیف پول</h4>
            <p>پرداخت ایمن به کیف پول الکترونیک شما</p>
          </div>
        </div>
        <div className={classes.reason}>
          <div className={classes.firstDIV}>
            <img src={creditcard} alt="آیکون های بخش چرا ایران لاک" />
          </div>
          <div className={classes.secondDIV}>
            <h4>تبدیل ارز</h4>
            <p>امکان تبدیل راحت جوایز به ریال</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
