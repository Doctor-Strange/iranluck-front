import React from "react";
import classes from "./EventPage.css";
import global from "../../global.css";

const EventPage = props => {
  return (
    <div className={classes.father}>
      <div className={global.Responsive}>
        <h2>تایید ایمیل</h2>
        <p>
          - برای
          <strong> تایید عملیات </strong>
          به ایمیل خود مراجعه کرده و بر روی لینک
          <strong> " تایید ایمیل " </strong>
          کلیک کنید
        </p>
        <h3>توجه !!</h3>
        <p>
          <strong className={classes.Alert}>
            - در صورتی که پیام ارسال شده از طرف ایران لاک در صندوق اصلی ایمیل
            شما قرار ندارد بخش هرز نامه ها ( spam ) را بررسی نمایید.
          </strong>
        </p>
      </div>
    </div>
  );
};
export default EventPage;
