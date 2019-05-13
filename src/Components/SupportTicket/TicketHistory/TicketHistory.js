import React from "react";
import classes from "./TicketHistory.css";

const TicketHistory = peops => {
  return (
    <div className={classes.panelControl}>
      <h3>سوابق تیکت ها</h3>
      <table>
        <tbody>
          <tr>
            <th>شماره تیکت</th>
            <th>موضوع</th>
            <th>تاریخ</th>
            <th>وضعیت</th>
          </tr>
          <tr>
            <th>#23439</th>
            <td>عدم شارژ حساب</td>
            <td>1398-02-12</td>
            <td>
              <span className={classes.Open}>باز</span>
            </td>
          </tr>
          <tr>
            <th>#23439</th>
            <td>عدم شارژ حساب</td>
            <td>1398-02-12</td>
            <td>
              <span className={classes.Inprogress}>درحال بررسی</span>
            </td>
          </tr>
          <tr>
            <th>#23439</th>
            <td>عدم شارژ حساب</td>
            <td>1398-02-12</td>
            <td>
              <span className={classes.Close}>بسته</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TicketHistory;
