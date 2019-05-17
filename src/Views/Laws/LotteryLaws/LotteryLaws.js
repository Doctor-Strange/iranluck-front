import React from "react";

import instagram from "../../../Assets/instagramicon.png";
import telegramIcon from "../../../Assets/telegramIcon.png";
import classes from "./LotteryLaws.css";

const LotteryLaws = props => {
  return (
    <div>
      <div className={classes.Title}>
        <h2> قوانین قرعه کشی</h2>
      </div>
      <div className={classes.father}>
        <p>
          - قرعه کشی در وبسایت ایران لاک به منظور افزایش شانس برد بیشتر برای
          شرکت کنندگان به صورت هفتگی در ساعات مقرری که در شبکه های اجتماعی ایران
          لاک اعلام میگردد برگذار میشود.
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
        <p>
          - نیم ساعت قبل از زمان قرعه کشی امکان خریداری بلیط و یا شرکت در مسابقه
          میسر نخواهد بود.
        </p>
        <p>
          - تمام بلیط های قرعه کشی دارای امتیاز یکسان هستند. به این معنی که اگر
          فردی یک بلیط داشته باشد و فرد دیگر 10 بلیط. شانس برنده شدن برای هر دو
          فرد به صورت یکسان است، اما در این قرعه کشی احتمال برد نفر دوم به دلیل
          داشتن بلیط های بیشتر ده برابر نفر اول است.
        </p>
        <p>
          - پس از خرید بلیط ها امکان لغو شرکت در مسابقه و یا کاهش تعداد بلیط ها
          وجود نخواهد داشت، اما تا قبل از قرعه کشی میتوانید تعداد بلیط های خود
          را افزایش دهید.
        </p>
        <p>
          - بلیط های برنده در همان روز و بلافاصله بعد از قرعه کشی به صورت خودکار
          اعلام خواهد شد .
        </p>
        <p>
          - آدرس کیف پول نفر اول در شبکه های اجتماعی ایران لاک معرفی خواهد شد .
        </p>
        <div className={classes.Title}>
          <h2>جوایز معرفی به دوستان</h2>
        </div>
        <p>
          - در صورتی که وب سایت ایران لاک را به دوستان خود معرفی کنید و آنها در
          ایران لاک ثبت نام کنند ، شما یک سکه رایگان هدیه خواهید گرفت.
        </p>
        <p>
          - در صورتی که شخصی که شما معرفی کرده اید در قرعه کشی شرکت کند و برنده
          جایزه شود. شما هم نصف جایزه برنده شده را هدیه خواهید گرفت.
        </p>
      </div>
    </div>
  );
};

export default LotteryLaws;
