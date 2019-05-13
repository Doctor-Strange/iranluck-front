import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import one from "../../../Assets/Learn/CreatePerfectMoney/1.jpg";
import two from "../../../Assets/Learn/CreatePerfectMoney/2.jpg";
import three from "../../../Assets/Learn/CreatePerfectMoney/3.jpg";
import four from "../../../Assets/Learn/CreatePerfectMoney/4.jpg";
import five from "../../../Assets/Learn/CreatePerfectMoney/5.jpg";
import six from "../../../Assets/Learn/CreatePerfectMoney/6.jpg";
import seven from "../../../Assets/Learn/CreatePerfectMoney/7.jpg";
import eight from "../../../Assets/Learn/CreatePerfectMoney/8.jpg";
import classes from "./CreatePerfectMoney.css";

const CreatePerfectMoney = props => {
  return (
    <div>
      <div className={classes.Title}>
        <h2>- گام اول</h2>
        <h3>ایجاد حساب کاربری Perfect Money</h3>
      </div>
      <div className={classes.father}>
        <p>
          به وبسایت اصلی شرکت پرفکت مانی به آدرس
          <a href="https://perfectmoney.is" target="_blank" rel="noopener">
            www.perfectmoney.is
          </a>
          مراجعه میکنید
        </p>
        <p className={classes.Alert}>
          توجه در زمان استفاده از وب سایت پرفکت مانی از فیلتر شکن و یا VPN
          استفاده نکنید.
        </p>
        <p>سپس بر روی دکمه ثبت نام کلیک کنید</p>
        <img src={one} alt="perfect Money" />
        <p>به صفحه ورود اطلاعات هدایت خواهید شد</p>
        <p className={classes.Alert}>
          فیلد های ستاره دار را با اطلاعات واقعی خود پر کنید
        </p>
        <p>سپس عبارت امنیتی را در فیلد مربوط به آن وارد کنید</p>
        <p>سپس تیک گزینه پذیرفتن شرایط و قوانین را بزنید</p>
        <p>و در انتها بر روی دکمه Register کلیک کنید</p>
        <img src={two} alt="perfect Money" />
        <p>سپس به صفحه خوش امد گویی به پرفکت مانی هدایت خواهید شد </p>
        <p className={classes.Alert}>
          در صورتی که ثبت نام شما موفق نباشد در این صفحه اخطار مربوطه به شما
          نمایش داده خواهد شد
        </p>
        <img src={three} alt="perfect Money" />
        <p>
          حال به ایمیلی که در زمان ثبت نام وارد کرده اید میروید و صندوق ایمیل را
          چک میکنید
        </p>
        <img src={four} alt="perfect Money" />
        <p>سپس شماره عضویت خود را در ایمیل ارسالی پیدا کرده و کپی کنید</p>
        <img src={five} alt="perfect Money" />
        <p>مجددا به وبسایت پرفکت مانی بازگشته و بر روی دکمه Login کلیک کنید</p>
        <img src={six} alt="perfect Money" />
        <p>سپس شماره ای را که کپی کرده بودید در کادر اول قرار دهید</p>
        <p>
          رمز عبوری که در مرحله ثبت نام وارد کرده بودید را در کادر دوم وارد کنید
        </p>
        <p>کد امنیتی را در کادر سوم وارد کنید</p>
        <p>و بر روی دکمه Authorize کلیک کنید</p>
        <img src={seven} alt="perfect Money" />
        <p>
          در صورتی که اطلاعات خود را به درستی وارد کرده باشید به صفحه اصلی حساب
          کاربری پرفکن مانی خود هدایت خواهید شد
        </p>
        <p>شما میتوانید از لیست زبان ها فارسی را انتخاب کنید</p>
        <img src={eight} alt="perfect Money" />
        <div className={classes.Steps}>
          <div>
            <h3>گام اول </h3>
            <NavLink className={classes.uareHere} onClick={GotoTop} to="/Learn">
              شما اینجا هستید
            </NavLink>
          </div>
          <div>
            <h3>گام دوم </h3>
            <NavLink onClick={GotoTop} to="/Learn/CreateWallet">
              ساخت کیف پول ارز دیجیتال
            </NavLink>
          </div>
          <div>
            <h3>گام سوم </h3>
            <NavLink onClick={GotoTop} to="">
              ساخت کیف پول ارز دیجیتال
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const GotoTop = () => {
  window.scrollTo(0, 0);
};

export default withRouter(CreatePerfectMoney);
