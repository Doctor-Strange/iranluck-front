import React from "react";
import classes from "./EventPage.css";
import global from "../../global.css";

const EventPage = props => {
  const url = props.history.location.search.slice(1);
  return (
    <div className={classes.father}>
      <div className={global.Responsive}>
        <h2>Confirm your email address</h2>
        <p>
          For confirming your email address go to
          <strong> {url} </strong> and <strong>click</strong> on
          <strong> " Confirm " </strong>
        </p>
        {/* <h3>توجه !!</h3>
        <p>
          <strong className={classes.Alert}>
            - در صورتی که پیام ارسال شده از طرف ایران لاک در صندوق اصلی ایمیل
            شما قرار ندارد بخش هرز نامه ها ( spam ) را بررسی نمایید.
          </strong>
        </p> */}
      </div>
    </div>
  );
};
export default EventPage;
