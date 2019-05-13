import React from "react";
import one from "../../../../Assets/Learn/CreateWallet/Pay98/1.jpg";
import two from "../../../../Assets/Learn/CreateWallet/Pay98/2.jpg";
import three from "../../../../Assets/Learn/CreateWallet/Pay98/3.jpg";
import four from "../../../../Assets/Learn/CreateWallet/Pay98/4.jpg";
import classes from "./Pay98.css";

const Pay98 = props => {
  return (
    <div>
      <div className={classes.father}>
        <p>
          به وبسایت اصلی شرکت Pay98 به آدرس
          <a href="https://pay98.cash" target="_blank" rel="noopener noreferrer">
            https://pay98.cash
          </a>
          مراجعه میکنید
        </p>
        <h3>آموزش ویدیویی</h3>
        <div className={classes.VideoParent}>
          <div className={classes.h_iframe}>
            <span style={{ display: "block", paddingTop: "57%" }} />
            <iframe
              src="https://www.aparat.com/video/video/embed/videohash/fdqN5/vt/frame"
              allowFullScreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            />
          </div>
        </div>
        <h3>آموزش تصویری</h3>
        <p>سپس بر روی دکمه ثبت نام کلیک کنید</p>
        <img src={one} alt="perfect Money" />
        <p>به صفحه ورود اطلاعات هدایت خواهید شد</p>
        <p>بعد از وارد کردن اطلاعات بر روی دکمه ثبت نام کلیک کنید</p>
        <p className={classes.Alert}>
          در زمان ثبت نام ایمیل و رمز عبور خود را فراموش نکنید
        </p>
        <img src={two} alt="perfect Money" />
        <p>
          سپس به پنل کاربری خود هدایت خواهید شد، برای تکمیل اطلاعات خود بر روی
          دکمه پروفایل کلیک کنید
        </p>
        <img src={three} alt="perfect Money" />
        <p>اطلاعات واقعی خود را وارد کنید</p>
        <img src={four} alt="perfect Money" />
        <p>
          شماره ثابت معتبر وارد کرده و بعد از تماس تلفنی هویت خود را تایید کنید
        </p>
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

export default Pay98;
