import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import one from "../../../Assets/Learn/withdrawal/1.jpg";
import two from "../../../Assets/Learn/withdrawal/2.jpg";
import three from "../../../Assets/Learn/withdrawal/3.jpg";
import four from "../../../Assets/Learn/withdrawal/4.jpg";
import five from "../../../Assets/Learn/withdrawal/5.jpg";
import classes from "./WithDrawal.css";

const WithDrawal = props => {
  return (
    <div>
      <div className={classes.Title}>
        <h2>- گام آخر</h2>
        <h3>برداشت وجه </h3>
      </div>
      <div className={classes.father}>
        <p>
          به حساب کاربری خود در وبسایت اران لاک رفته
          <NavLink onClick={GotoTop} to="/account">
            حساب کاربری
          </NavLink>
          مراجعه کنید
        </p>
        <p>بر روی گزینه کیف پول در منو سمت راست کلیک کنید</p>
        <p className={classes.Alert}>
          بعد از تایید آدرس کیف پول امکان برداشت وجه از حساب ممکن خواهد بود
        </p>
        <img src={one} alt="perfect Money" />
        <p>بر روی گزینه برداشت کلیک کنید</p>
        <img src={two} alt="perfect Money" />
        <p>تعداد سکه مورد نظر خود را وارد کنید</p>
        <p>دکمه تایید را بزنید</p>
        <img src={three} alt="perfect Money" />
        <p>
          یک ایمیل تایید عملیات به آدرس ایمیلی که در زمان ثبت نام وارد کرده اید
          ارسال خواهد شد
        </p>
        <p>به صندوق پستی خود رفته و بر روی لینک تایید کلیک کنید</p>
        <p className={classes.Alert}>
          در صورتی که ایمیل در صندوق اصلی شما نبود بخش هرزنامه ها ( spam ) را
          بررسی کنید
        </p>
        <img src={four} alt="perfect Money" />
        <p>بعد از گذشت 3 الی 10 دقیقه حساب پرفکت مانی شما شارژ میگردد</p>
        <img src={five} alt="perfect Money" />
      </div>
    </div>
  );
};

const GotoTop = () => {
  window.scrollTo(0, 0);
};

export default withRouter(WithDrawal);
