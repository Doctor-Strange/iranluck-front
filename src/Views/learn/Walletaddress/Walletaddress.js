import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import one from "../../../Assets/Learn/Wallet/1.jpg";
import two from "../../../Assets/Learn/Wallet/2.jpg";
import three from "../../../Assets/Learn/Wallet/3.jpg";
import four from "../../../Assets/Learn/Wallet/4.jpg";
import classes from "./Walletaddress.css";

const Walletaddress = props => {
  return (
    <div>
      <div className={classes.Title}>
        <h2>- گام پنجم</h2>
        <h3>تغییر / ثبت آدرس USD کیف پول پرفکت مانی</h3>
      </div>
      <div className={classes.father}>
        <p>
          به حساب کاربری خود در وبسایت اران لاک رفته
          <NavLink onClick={GotoTop} to="/account">
            حساب کاربری
          </NavLink>
          مراجعه کنید
        </p>
        <p>بر روی گزینه ویرایش اطلاعات در منو سمت راست کلیک کنید</p>
        <img src={one} alt="perfect Money" />
        <p>آدرس USD کیف پول پرفکت مانی خود را در فیلد مربوطه وارد کنید</p>
        <img src={two} alt="perfect Money" />
        <p>
          یک ایمیل تایید عملیات به آدرس ایمیلی که در زمان ثبت نام وارد کرده اید
          ارسال خواهد شد
        </p>
        <p>به صندوق پستی خود رفته و بر روی لینک تایید کلیک کنید</p>
        <p className={classes.Alert}>
          در صورتی که ایمیل در صندوق اصلی شما نبود بخش هرزنامه ها ( spam ) را
          بررسی کنید
        </p>
        <img src={three} alt="perfect Money" />
        <p>
          پس از تایید ایمیل به صفحه کاربری خود بازگشته ، مشاهده خواهید کرد که
          ادرس کیف پول شما تایید شده است
        </p>
        <img src={four} alt="perfect Money" />
        <div className={classes.Steps}>
          <div>
            <h3>گام اول </h3>
            <NavLink className={classes.uareHere} onClick={GotoTop} to="/Learn">
              شما اینجا هستید
            </NavLink>
          </div>
          <div>
            <h3>گام دوم </h3>
            <NavLink onClick={GotoTop} to="/Learn/CreateWallet">
              ساخت کیف پول ارز دیجیتال
            </NavLink>
          </div>
          <div>
            <h3>گام سوم </h3>
            <NavLink onClick={GotoTop} to="/Learn/BuyPerfectMoney">
              خرید پرفکت مانی
            </NavLink>
          </div>
          <div>
            <h3>گام چهارم </h3>
            <NavLink onClick={GotoTop} to="/">
              آموزش شارژحساب
            </NavLink>
          </div>
          <div>
            <h3>ثبت / تغییر آدرس کیف پول</h3>
            <NavLink onClick={GotoTop} to="/">
              آموزش شارژحساب
            </NavLink>
          </div>
          <div>
            <h3>ثبت / تغییر آدرس کیف پول</h3>
            <NavLink onClick={GotoTop} to="/">
              برداشت وجه
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const GotoTop = () => {
  window.scrollTo(0, 0);
};

export default withRouter(Walletaddress);
