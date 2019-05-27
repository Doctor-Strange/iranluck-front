import React from "react";
import classes from "./WithDrawal.css";

import instagram from "../../../Assets/instagramicon.png";
import telegramIcon from "../../../Assets/telegramIcon.png";

const WithDrawal = props => {
  return (
    <div>
      <div className={classes.Title}>
        <h2>برداشت، شارژ و سکه شانس</h2>
      </div>
      <div className={classes.father}>
        <p>
          - بعد از اتمام قرعه کشی حساب کاربری کارت های برنده شارژ خواهد شد و
          اجازه برداشت وجه بلافاصله از حساب کاربری خود را خواهند داشت.
        </p>
        <p>- حداکثر میزان قابل برداشت در روز 300 عدد پرفکت مانی است.</p>
        <p>
          - برای برداشت و یا شارژ حساب ایران لاک کارمزدی از کاربران دریافت
          نخواهد کرد.
        </p>
        <p>
          - اطلاعاتی مانند رمز عبور و نام کاربری کیف پرفکت مانی یا حساب کاربری
          ایران لاک خود را در احتیار دیگران قرار ندهید.
        </p>
        <section className={classes.Socialiranluck}>
          <p>ایران لاک را در شبکه های اجتماعی دنبال کنید</p>
          <a
            href="https://www.instagram.com/iranluck"
            className={classes.instaBTN}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="آیکون اینستاگرام" />
            ما را دنبال کنید
          </a>
          <a
            href="https://t.me/IranLuck"
            className={classes.telegramBTN}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegramIcon} alt="آیکون تلگرام" />
            ما را دنبال کنید
          </a>
        </section>
        <div className={classes.Title}>
          <h2>سکه های شانس</h2>
        </div>
        <p>- هر سکه شانس معادل یک بلیط است.</p>
        <p>
          - در صورت خرید 10 بلیط در هر مسابقه یک سکه شانس به شما هدیه داده خواهد
          شد .
        </p>
        <p>
          در صورتی که در حساب کاربری خود چند سکه شانس داشته باشید، در هر بار
          خرید بلیط، به صورت خودکار یک سکه شانس وارد قرعه کشی خواهد شد
        </p>
        <p>
          - سکه های شانس به تنهایی امکان شرکت در مسابقه را ندارند و حداقل باید
          یک بلیط واقعی در قرعه کشی وجود داشته باشد. به این معنی که اگر 10 سکه
          شانس دارید حتما حساب کاربری شما باید حداقل یک عدد پرفکت مانی داشته
          باشد. تا بتوانید در زمان شرکت دادن آن یک عدد پرفکت مانی در قرعه کشی از
          1 سکه شانس خود، همراه آن استفاده کنید.
        </p>
        <p>- سکه شانس امکان نقد شدن و تسویه ندارد.</p>
      </div>
    </div>
  );
};

export default WithDrawal;
