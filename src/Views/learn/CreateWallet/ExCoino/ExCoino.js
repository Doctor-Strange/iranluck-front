import React from "react";
import one from "../../../../Assets/Learn/CreateWallet/excoino/1.jpg";
import two from "../../../../Assets/Learn/CreateWallet/excoino/2.jpg";
import three from "../../../../Assets/Learn/CreateWallet/excoino/3.jpg";
import four from "../../../../Assets/Learn/CreateWallet/excoino/4.jpg";
import five from "../../../../Assets/Learn/CreateWallet/excoino/5.jpg";
import six from "../../../../Assets/Learn/CreateWallet/excoino/6.jpg";
import classes from "./ExCoino.css";

const ExCoino = props => {
  return (
    <div>
      <div className={classes.father}>
        <p>
          به وبسایت اصلی شرکت excoino به آدرس
          <a href="https://www.excoino.net" target="_blank" rel="noopener noreferrer">
            https://www.excoino.net
          </a>
          مراجعه میکنید
        </p>
        <p className={classes.Alert}>
          این وبسایت مورد تایید شرکت پرفکت مانی برای پرداخت و برداشت وجه در
          ایران است
        </p>
        <a
          href="https://perfectmoney.is/partners.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          لیست مراکز مورد تایید
        </a>
        <p>سپس بر روی دکمه ثبت نام کلیک کنید</p>
        <img src={one} alt="perfect Money" />
        <p>به صفحه ورود اطلاعات هدایت خواهید شد</p>
        <p>بعد از وارد کردن اطلاعات تیک گزینه من ربات نیستم را بزنید</p>
        <p>و در انتها بر روی دکمه ثبت نام کلیک کنید</p>
        <p className={classes.Alert}>
          در صورتی که اطلاعات شما واقعی نباشد در زمان احراز هویت در سایت excoino
          رد خواهید شد
        </p>
        <img src={two} alt="perfect Money" />
        <p>
          حال به ایمیلی که در زمان ثبت نام وارد کرده اید میروید و صندوق ایمیل را
          چک میکنید
        </p>
        <p>بر روی لینک تایید ایمیل کلیک کنید</p>
        <img src={three} alt="perfect Money" />
        <p>
          بعد از تایید ایمیل به صفحه ورود آمده و نام کاربری و رمز عبور خود را
          وارد کنید
        </p>
        <img src={four} alt="perfect Money" />
        <p>
          بعد از ورود به حساب کاربری خود برای امکان خرید و برداشت وجه نیاز به
          احراز هویت دارید
        </p>
        <p>بر روی دکمه احراز هویت کلیک کنید</p>
        <img src={five} alt="perfect Money" />
        <p>در صفحه احراز هویت اطلاعات واقعی خود را وارد کنید </p>
        <p>طبق راهنمای سمت چپ تصویر اطلاعات خود را ارسال کنید</p>
        <p>شماره شبا بانکی معتبر خود را وارد کرده و تایید کنید</p>
        <p>
          شماره ثابت معتبر وارد کرده و بعد از تماس تلفنی هویت خود را تایید کنید
        </p>
        <p>اگر حساب شما تایید شود در بالای صفحه وضعیت احراز سبز خواهد شد</p>
        <img src={six} alt="perfect Money" />
        <p className={classes.Alert}>
          طی 24 ساعت با شماره ثابت وارد شده تماس گرفته میشود و هویت شما تایید
          میگردد
        </p>
        <p className={classes.Alert}>
          بعد از احراز هویت شما امکان خرید و فروش را پیدا خواهید کرد
        </p>
      </div>
    </div>
  );
};

export default ExCoino;
