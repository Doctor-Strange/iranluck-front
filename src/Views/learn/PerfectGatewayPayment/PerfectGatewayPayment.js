import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import one from "../../../Assets/Learn/PerfectGatewayPayment/1.jpg";
import two from "../../../Assets/Learn/PerfectGatewayPayment/2.jpg";
import three from "../../../Assets/Learn/PerfectGatewayPayment/3.jpg";
import four from "../../../Assets/Learn/PerfectGatewayPayment/4.jpg";
import five from "../../../Assets/Learn/PerfectGatewayPayment/5.jpg";
import six from "../../../Assets/Learn/PerfectGatewayPayment/6.jpg";
import seven from "../../../Assets/Learn/PerfectGatewayPayment/7.jpg";
import classes from "./PerfectGatewayPayment.css";

const PerfectGatewayPayment = props => {
  return (
    <div>
      <div className={classes.Title}>
        <h2>- گام چهارم</h2>
        <h3>شارژ حساب کاربری ایران لاک</h3>
      </div>
      <div className={classes.father}>
        <p>
          به صفحه شارژ کیف پول در حساب کاربری خود مراجعه کنید
          <NavLink onClick={GotoTop} to="/account/Charge">
            شارژ حساب
          </NavLink>
          مراجعه میکنید
        </p>
        <p>در بخش اول تعداد سکه مورد نظر خود را وارد کنید</p>
        <p>گزینه من ربات نیستم را فعال کنید</p>
        <p>و بر روی دکمه تایید کلیک کنید</p>
        <p className={classes.Alert}>
          توجه در زمان استفاده از وب سایت پرفکت مانی از تحریم شکن و... استفاده
          نکنید.
        </p>
        <p className={classes.Alert}>
          در هر بار شارژ بیشتر از 1000 سکه امکان پرداخت نخواهید داشت
        </p>
        <img src={one} alt="perfect Money" />
        <p>سپس به درگاه پرفکت مانی هدایت خواهید شد</p>
        <p className={classes.Alert}>https://perfectmoney.is</p>
        <p>بر روی دکمه پرداخت کلیک کنید</p>
        <img src={two} alt="perfect Money" />

        <p>نام کاربری حساب پرفکت مانی خود را وارد کنید</p>
        <p>رمز عبور حساب پرفکت مانی خود را وارد کنید</p>
        <p>سپس عبارت امنیتی را در فیلد مربوط به آن وارد کنید</p>
        <p>بر روی دکمه تایید کلیک کنید</p>
        <img src={three} alt="perfect Money" />
        <p>
          در صورتی که برای اولین بار از این درگاه استفاده کنید ایمیل تایید برای
          شما ارسال خواهد شد، که در آن کد اعتبار سنجی وجود دارد
        </p>
        <p>
          به ایمیل خود رفته، کد را کپی کنید و در کادر مربوطه وارد کرده و بر روی
          دکمه تایید کلیک کنید
        </p>
        <img src={four} alt="perfect Money" />

        <p className={classes.Alert}>
          در صورتی که مجموع پرداختی بیشتر از موجودی حساب شما باشد خطای قرمز رنگی
          نمایش داده خواهد شد
        </p>
        <p>بعد از بررسی اطلاعات بر روی دکمه تایید کلیک کنید</p>
        <img src={five} alt="perfect Money" />
        <p>بر روی دکمه تایید کلیک کنید</p>
        <img src={six} alt="perfect Money" />
        <p>
          سپس به وبسایت ایران لاک هدایت خواهید شد و بعد از چند ثانیه حساب شما به
          صورت خودکار شارژ میگردد
        </p>
        <img src={seven} alt="perfect Money" />
      </div>
    </div>
  );
};

const GotoTop = () => {
  window.scrollTo(0, 0);
};

export default withRouter(PerfectGatewayPayment);
