import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import one from "../../../Assets/Learn/PerfectGatewayPayment/1.jpg";
import two from "../../../Assets/Learn/PerfectGatewayPayment/2.jpg";
import three from "../../../Assets/Learn/PerfectGatewayPayment/3.jpg";
import four from "../../../Assets/Learn/PerfectGatewayPayment/4.jpg";
import five from "../../../Assets/Learn/PerfectGatewayPayment/5.jpg";
import six from "../../../Assets/Learn/PerfectGatewayPayment/6.jpg";
import seven from "../../../Assets/Learn/PerfectGatewayPayment/7.jpg";
import eight from "../../../Assets/Learn/PerfectGatewayPayment/8.jpg";
import nine from "../../../Assets/Learn/PerfectGatewayPayment/9.jpg";
import classes from "./PerfectGatewayPayment.css";

const PerfectGatewayPayment = props => {
  return (
    <div>
      <div className={classes.Title}>
        <h2>- Third Step</h2>
        <h3>Charge your Iran Luck account</h3>
      </div>
      <div className={classes.father}>
        <p>
          Go to your wallet and click on
          <NavLink onClick={GotoTop} to="/account/Charge">
            Deposit
          </NavLink>
        </p>
        <p>
          Enter the amount of Perfect Money Which you want to Deposit in your
          Iran Luck account.
        </p>
        {/* <p className={classes.Alert}>
          توجه در زمان استفاده از وب سایت پرفکت مانی از تحریم شکن و... استفاده
          نکنید.
        </p> */}
        <p className={classes.Alert}>
          you can just transfer 1000 Perfect Money In each day.
        </p>
        <img src={one} alt="perfect Money" />
        <p>
          After submitting the form you will redirect to Perfect Money gateway.
        </p>
        <p className={classes.Alert}>
          THE URL ADDRESS IN YOUR BROWSER MUST START WHIT
          "https://perfectmoney.is"
        </p>
        <img src={two} alt="perfect Money" />

        <p>Enter your username and password</p>
        <img src={three} alt="perfect Money" />
        {/* <p>
          در صورتی که برای اولین بار از این درگاه استفاده کنید. صفحه زیر برای
          شما نمایش داده خواهد شد
        </p> */}
        <img src={four} alt="perfect Money" />
        {/* <p>
          ایمیل تایید به آدرس ایمیل شما ارسال خواهد شد، که در آن کد اعتبار سنجی
          وجود دارد
        </p> */}
        {/* <p>به ایمیل خود رفته، کد را کپی کنید</p> */}
        <img src={five} alt="perfect Money" />
        {/* <p>و در کادر مربوطه وارد کرده و بر روی دکمه تایید کلیک کنید</p> */}
        <img src={six} alt="perfect Money" />
        {/* <p className={classes.Alert}>
          در صورتی که مجموع پرداختی بیشتر از موجودی حساب شما باشد خطای قرمز رنگی
          نمایش داده خواهد شد
        </p> */}
        {/* <p>بعد از بررسی اطلاعات بر روی دکمه تایید کلیک کنید</p> */}
        <p>Check the payment info and Click on "Confirm payment"</p>
        <img src={seven} alt="perfect Money" />
        {/* <p>بر روی دکمه تایید کلیک کنید</p> */}
        <img src={eight} alt="perfect Money" />
        <p>
          After confirming your payment you will redirected to your Iran Luck
          account and after a couple of ( 3 - 10) minutes your account will be
          charged and you can buy lottery tickets as many as you want.
        </p>
        <img src={nine} alt="perfect Money" />
      </div>
    </div>
  );
};

const GotoTop = () => {
  window.scrollTo(0, 0);
};

export default withRouter(PerfectGatewayPayment);
