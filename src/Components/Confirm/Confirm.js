import React from "react";
import classes from "./Confirm.css";
import global from "../../global.css";
import Spinner from "../../UI/Spiner/Spinner";

const Confirm = props => {
  return (
    <div className={classes.father}>
      <div className={global.Responsive}>
        <h2>ایمیل شما با موفقیت تایید شد</h2>
        <p>در حال دریافت اطلاعات حساب کاربری</p>
        <Spinner />
      </div>
    </div>
  );
};
export default Confirm;
