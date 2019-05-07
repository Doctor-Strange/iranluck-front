import React from "react";
import classes from "./Footer.css";
import global from "../../global.css";
import logo from "../../Assets/WhiteLOGO.png";
import instagram from "../../Assets/instagramicon.png";
import telegramIcon from "../../Assets/telegramIcon.png";
import gototop from "../../Assets/gototop.png";

const Footer = props => {
  return (
    <footer>
      <div className={global.Responsive}>
        <div className={classes.ToTop}>
          <a href="#TOP">
            <img src={gototop} alt="go to Top" />
          </a>
        </div>
        <div>
          <div className={classes.shaperContainer}>
            <div className={classes.rectangel1} />
            <div className={classes.rectangel2} />
            <div className={classes.rectangel3} />
          </div>
        </div>
        <div className={classes.branding}>
          <img src={logo} aly="لوگو ایران لاک" />
          <h2>ایران لاک</h2>
        </div>
        <div className={classes.sortSection}>
          <section className={classes.aboutirnLuck}>
            <h3>ایران لاک</h3>
            <p>
              ایران لاک اولین و بزرگترین عرضه کننده بلیط های لاتاری در ایران
              است. هدف ما ایجاد فضای امن و عادلانه برای شرکت کنندگان در قرعه کشی
              است.
            </p>
            <p>
              <strong>شماهم شانس برنده شدن را تجربه خواهید کرد.</strong>
            </p>
            <a target="-_blank" rel="noopener" href="https://t.me/irnsupport">
              پشتیبانی تلگرام: <strong>IRNsupport@</strong>
            </a>
          </section>
          <section className={classes.linkirnLuck}>
            <h3>دسترسی سریع</h3>
            <ul>
              <li>
                <a href="">سوالات متداول</a>
              </li>
              <li>
                <a href="">آموزش ساخت کیف پول</a>
              </li>
              <li>
                <a href="">آموزش شارژحساب</a>
              </li>
              <li>
                <a href="">آموزش برداشت وجه</a>
              </li>
              <li>
                <a href="">حساب کاربری</a>
              </li>
              <li>
                <a href="">کیف پول</a>
              </li>
            </ul>
          </section>
          <section className={classes.Socialiranluck}>
            <h3>شبکه های اجتماعی</h3>
            <p>ما را در شبکه های اجتماعی دنبال کنید</p>
            <a
              href="https://www.instagram.com/iranluck"
              className={classes.instaBTN}
              target="_blank"
              rel="noopener"
            >
              <img src={instagram} alt="آیکون اینستاگرام" />
              ما را دنبال کنید
            </a>
            <a
              href="https://t.me/IranLuck"
              className={classes.telegramBTN}
              target="_blank"
              rel="noopener"
            >
              <img src={telegramIcon} alt="آیکون تلگرام" />
              ما را دنبال کنید
            </a>
          </section>
        </div>
        <div className={classes.signature}>
          <img src={logo} alt="لوگو ایران لاک" />
          <p>Copyright © 2018 IranLuck.Com All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;