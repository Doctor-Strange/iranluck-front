import React from "react";
import one from "../../../Assets/Learn/BuyPerfectMoney/1.jpg";
import two from "../../../Assets/Learn/BuyPerfectMoney/2.jpg";
import three from "../../../Assets/Learn/BuyPerfectMoney/3.jpg";
import four from "../../../Assets/Learn/BuyPerfectMoney/4.jpg";
import five from "../../../Assets/Learn/BuyPerfectMoney/5.jpg";
import six from "../../../Assets/Learn/BuyPerfectMoney/6.jpg";
import seven from "../../../Assets/Learn/BuyPerfectMoney/7.jpg";
import eight from "../../../Assets/Learn/BuyPerfectMoney/8.jpg";
import classes from "./BuyPerfectMoney.css";

const BuyPerfectMoney = props => {
  return (
    <div>
      <div className={classes.Title}>
        <h2>- گام سوم</h2>
        <h3>خرید پرفکت مانی</h3>
      </div>
      <div className={classes.father}>
        <p>
          نمونه خرید در سایت Excoino انجام خواهد شد اما روند خرید بین بیشتر سایت
          ها مشترک است.
        </p>
        <p>به قسمت داشبورد در حساب کاربری خود رفته</p>
        <a href="https://www.excoino.net/login" rel="noopener noreferrer">
          حساب کاربری
        </a>
        <p>از لیست باز شده Perfect Money را انتخاب کنید</p>
        <p>تعداد مورد نظر خود را وارد کرده و بر روی دکمه سفارش کلیک کنید</p>
        <img src={one} alt="perfect Money" />
        <p>صفحه زیر برای شما نمایش داده خواهد شد</p>
        <img src={two} alt="perfect Money" />
        <p>
          در پنجره دیگری به حساب کاربری پرفکت مانی خود رفته و در بخش حساب های من
          آدرس کیف پول دلار خود را کپی کنید
        </p>
        <img src={three} alt="perfect Money" />
        <p>آدرس را در کادر مورد نظر وارد کرده</p>
        <p>پس از ان تیک قوانین را زده</p>
        <p>سپس تیک " من ربات نیستم " را بزنید</p>
        <p>در انتها بر روی دکمه سفارش کلیک کنید</p>
        <img src={four} alt="perfect Money" />
        <p>اطلاعات نمایش داده شده را بررسی کرده و سپس تایید کنید</p>
        <img src={five} alt="perfect Money" />
        <p>بعد از انجام پرداخت به صفحه زیر هدایت خواهید شد</p>
        <p>
          برای تایید پرداخت به شماره همراهی که در سایت ثبت کرده اید پیامکی ارسال
          خواهد شد عدد داخل پیامک را در کادر زیر وارد کنید
        </p>
        <img src={six} alt="perfect Money" />
        <p>پس از تایید پیامک سفارش شما ثبت خواهد شد</p>
        <img src={seven} alt="perfect Money" />
        <p>بعد از گذشت 3 الی 10 دقیقه حساب پرفکت مانی شما شارژ میگردد</p>
        <img src={eight} alt="perfect Money" />
      </div>
    </div>
  );
};

export default BuyPerfectMoney;
