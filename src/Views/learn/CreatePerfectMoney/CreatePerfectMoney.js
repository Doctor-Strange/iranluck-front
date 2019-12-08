import React from "react";
import one from "../../../Assets/Learn/CreatePerfectMoney/1.jpg";
import two from "../../../Assets/Learn/CreatePerfectMoney/2.jpg";
import three from "../../../Assets/Learn/CreatePerfectMoney/3.jpg";
import four from "../../../Assets/Learn/CreatePerfectMoney/4.jpg";
import five from "../../../Assets/Learn/CreatePerfectMoney/5.jpg";
import six from "../../../Assets/Learn/CreatePerfectMoney/6.jpg";
import seven from "../../../Assets/Learn/CreatePerfectMoney/7.jpg";
import classes from "./CreatePerfectMoney.css";

const CreatePerfectMoney = props => {
  return (
    <div>
      <div className={classes.Title}>
        <h2>- First Step</h2>
        <h3> Create Perfect Money Account</h3>
      </div>
      <div className={classes.father}>
        <p>
          Go to  
          <a
            href="https://perfectmoney.is"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.perfectmoney.is
          </a>
        </p>
        <p>Click on Signup</p>
        <img src={one} alt="perfect Money" />
        {/* <p>به صفحه ورود اطلاعات هدایت خواهید شد</p> */}
        <p className={classes.Alert}>
        Fill sign up form
        </p>
        {/* <p>Enter Security number</p> */}
        {/* <p>سپس تیک گزینه پذیرفتن شرایط و قوانین را بزنید</p> */}
        {/* <p>و در انتها بر روی دکمه Register کلیک کنید</p> */}
        <img src={two} alt="perfect Money" />
        {/* <p>سپس به صفحه خوش امد گویی به پرفکت مانی هدایت خواهید شد </p> */}
        {/* <p className={classes.Alert}>
          در صورتی که ثبت نام شما موفق نباشد در این صفحه اخطار مربوطه به شما
          نمایش داده خواهد شد
        </p> */}
        <img src={three} alt="perfect Money" />
        <p>
          Go to your Email and Check you Inbox
        </p>
        <img src={four} alt="perfect Money" />
        {/* <p>سپس شماره عضویت خود را در ایمیل ارسالی پیدا کرده و کپی کنید</p> */}
        <img src={five} alt="perfect Money" />
        {/* <p>مجددا به وبسایت پرفکت مانی بازگشته و بر روی دکمه Login کلیک کنید</p> */}
        <img src={six} alt="perfect Money" />
        {/* <p>سپس شماره ای را که کپی کرده بودید در کادر اول قرار دهید</p> */}
        {/* <p>
          رمز عبوری که در مرحله ثبت نام وارد کرده بودید را در کادر دوم وارد کنید
        </p> */}
        {/* <p>کد امنیتی را در کادر سوم وارد کنید</p> */}
        {/* <p>و بر روی دکمه Authorize کلیک کنید</p> */} 
        <img src={seven} alt="perfect Money" />
        {/* <p>
          در صورتی که اطلاعات خود را به درستی وارد کرده باشید به صفحه اصلی حساب
          کاربری پرفکن مانی خود هدایت خواهید شد
        </p> */}
        {/* <p>شما میتوانید از لیست زبان ها فارسی را انتخاب کنید</p> */}
      </div>
    </div>
  );
};

export default CreatePerfectMoney;
