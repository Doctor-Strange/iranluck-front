import React from "react";
import classes from "./KnowUs.css";
import global from "../../../global.css";
import { NavLink } from "react-router-dom";

const GotoTop = () => {
  window.scrollTo(0, 0);
};

const KnowUs = props => {
  return (
    <div className={[global.Responsive, classes.father].join(" ")}>
      <div>
        <h2>ایران لاک را بیشتر بشناسید</h2>
        <p>
          تیم ایران لاک برای بالا بردن هرچه بیشتر امنیت کاربران در زمان پرداخت و
          خرید بلیت لاتاری، شیوه ای را ارائه کرده است، که طی آن هیچ هویتی از فرد
          شرکت کننده احراز نخواهد شد . به همین خاطر به تمامی خریداران اکیدا
          توصیه می شود که مطابق آموزش ارائه شده مراحل را طی کرده تا پرداختی امن
          داشته باشند. شما می توانید آموزش نحوه ثبت نام و پرداخت را از لینک زیر
          و یا در کانال اینستاگرام و تلگرام ما مشاهده کنید
        </p>
        <NavLink
          onClick={GotoTop}
          className={classes.button}
          to="/Learn/WithDrawal"
        >
          آموزش برداشت وجه
        </NavLink>
      </div>
    </div>
  );
};

export default KnowUs;
