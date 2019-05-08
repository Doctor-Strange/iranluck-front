import React from "react";

import classes from "./RightDashboard.css";
import userIcon from "../../../Assets/user/userIcon.png";

const RightDashboard = props => {
  return (
    <div>
      <div className={classes.UserId}>
        <img src={userIcon} alt="آیکون کاربری" />
        <div>
          <h3>KalamBano</h3>
          <p>آخرین بازدید : 98/02/15</p>
        </div>
      </div>
      <h3 className={classes.Gap}>منو اصلی</h3>
      <ul className={classes.menu}>
        <li>
          <a href="">داشبورد</a>
        </li>
        <li>
          <a href="">کیف پول</a>
        </li>
        <li>
          <a href="">ویرایش اطلاعات</a>
        </li>
        <li>
          <a href="">گزارش گیری</a>
        </li>
        <li>
          <a href="">ارسال تیکت</a>
        </li>
      </ul>
      <p />
    </div>
  );
};

export default RightDashboard;
