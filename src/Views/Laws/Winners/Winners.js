import React from "react";

import instagram from "../../../Assets/instagramicon.png";
import telegramIcon from "../../../Assets/telegramIcon.png";
import classes from "./Winners.css";

const Winners = props => {
  return (
    <div>
      <div className={classes.Title}>
        <h2> بلیط های برنده</h2>
      </div>
      <div className={classes.father}>
        <h3>- بلیط JackPot </h3>
        <p>
          بلیطی که تمام شماره های آن (6 شماره یکسان) با نتیجه قرعه کشی یکسان
          باشد بلیط JackPot است.
        </p>
        <p className={classes.Alert}>
          در هر قرعه کشی فقط یک بلیط JackPot وجود دارد.
        </p>
        <p className={classes.green}>
          جایزه Jackpot به صورت هفتگی در شبکه های اجتماعی ایران لاک اعلام میگردد
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
        <h3>- بلیط های برنده سطح پنج </h3>
        <p>5 شماره یکسان در بلیط وجود داشته باشد</p>
        <p className={classes.green}>برنده 2.5 میلیون تومان</p>
        <h3>- بلیط های برنده سطح چهار </h3>
        <p>4 شماره یکسان در بلیط وجود داشته باشد</p>
        <p className={classes.green}>برنده 250 هزار تومان</p>

        <h3>- بلیط های برنده سطح سه </h3>
        <p>3 شماره یکسان در بلیط وجود داشته باشد</p>
        <p className={classes.green}>برنده 25 هزار تومان</p>

        <h3>- بلیط های برنده سطح دو </h3>
        <p>2 شماره یکسان در بلیط وجود داشته باشد</p>
        <p className={classes.green}>یک سکه شانس</p>

        <p className={classes.Alert}>توجه</p>
        <p className={classes.Alert}>
          شماره های برنده در هر مکان از بلیط (ابتدا – وسط - انتها ) میتواند
          باشد، اما حتما باید پشت سر هم و به ترتیب قرار گیرد.
        </p>
      </div>
    </div>
  );
};

export default Winners;
