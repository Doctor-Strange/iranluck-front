import React from "react";
import classes from "./PrivacyPolicy.css";

import instagram from "../../../Assets/instagramicon.png";
import telegramIcon from "../../../Assets/telegramIcon.png";

const PrivacyPolicy = props => {
  return (
    <div>
      <div className={classes.Title}>
        <h2>حریم خصوصی</h2>
      </div>
      <div className={classes.father}>
        <p>
          به منظور حفاظت از هویت کاربران، در زمان ثبت نام، نیاز به احراز هویت
          نخواهد بود.
        </p>
        <p>
          نام فرد برنده در هر دوره به دلخواه ایشان و در صورت ارتباط با پشتیبانی
          ایران لاک نمایش داده خواهد شد
        </p>
        <p>
          به منظور جلوگیری از بلاک شدن حساب های پرفکت مانی، حداکثر سقف قابل
          برداشت در روز 300 عدد می باشد.
        </p>
        <p className={classes.Alert}>
          در زمان ثبت کیف پول دیجیتال ، وب های مربوطه از شما اطلاعات احراز هویت
          دریافت خواهند نمود. این اطلاعات ارتباطی با وب سایت ایران لاک نداشته و
          در اختیار ما قرار نمیگیرد.
        </p>
        <p>
          در زمان شارژ کیف پول دیجیتال خود و یا تسویه حساب در وب سایتی که کیف
          پول خود را در ان ثبت کرده اید از شما برای انجام تراکنش ها کارمزدی کم
          خواهد شد . این کارمزد مربوط به ایران لاک نیست.
        </p>
        <p>
          برای افزایش امنیت کاربران تمام عملیات های اصلی در وبسایت به وسیله
          ایمیل باید تایید گردد، در صورت عدم تایید، عملیات انجام نخواهد شد.
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
      </div>
    </div>
  );
};

export default PrivacyPolicy;
