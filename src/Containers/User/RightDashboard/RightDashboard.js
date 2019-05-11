import React from "react";
import { withRouter, NavLink } from "react-router-dom";

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
          <NavLink to="/account">داشبورد</NavLink>
        </li>
        <li>
          <NavLink to="/account/Wallet">کیف پول</NavLink>
        </li>
        <li>
          <NavLink to="/account/EditProfile">ویرایش اطلاعات</NavLink>
        </li>
        <li>
          <NavLink to="">گزارش گیری</NavLink>
        </li>
        <li>
          <NavLink to="/account/Ticket/">تیکت ها</NavLink>
        </li>
      </ul>
      <p />
    </div>
  );
};

export default withRouter(RightDashboard);
