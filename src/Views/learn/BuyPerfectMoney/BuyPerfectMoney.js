import React from "react";
import one from "../../../Assets/Learn/BuyPerfectMoney/1.jpg";
import two from "../../../Assets/Learn/BuyPerfectMoney/2.jpg";
import classes from "./BuyPerfectMoney.css";

const BuyPerfectMoney = props => {
  return (
    <div>
      <div className={classes.Title}>
        <h2>- Second Step</h2>
        <h3>Deposit Perfect Money</h3>
      </div>
      <div className={classes.father}>
        {/* <p>
          نمونه خرید در سایت Excoino انجام خواهد شد اما روند خرید بین بیشتر سایت
          ها مشترک است.
        </p> */}
        <p>Go to you Perfect Money account and Click on Deposit</p>
        <a
            href="https://perfectmoney.is"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.perfectmoney.is
          </a>
        {/* <a href="https://www.excoino.net/login" rel="noopener noreferrer">
          حساب کاربری
        </a> */}
        {/* <p>از لیست باز شده Perfect Money را انتخاب کنید</p>
        <p>تعداد مورد نظر خود را وارد کرده و بر روی دکمه سفارش کلیک کنید</p> */}
        <img src={one} alt="perfect Money" />
        <p>Select the way of deposit</p>
        <img src={two} alt="perfect Money" />
      </div>
    </div>
  );
};

export default BuyPerfectMoney;
