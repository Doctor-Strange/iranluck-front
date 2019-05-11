import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import classes from "./SupportTicket.css";
import plus from "../../Assets/user/plus.png";
import history from "../../Assets/user/history.png";
import TicketForm from "./TicketForm/TicketForm";

class SupportTicket extends Component {
  render() {
    return (
      <div>
        <div className={classes.Quickaccess}>
          <NavLink to="/account/Ticket/post" className={classes.CreateNew}>
            <img src={plus} alt="تیکت جدید" />
            <p>تیکت جدید</p>
          </NavLink>
          <NavLink to="/account/Ticket/History" className={classes.histort}>
            <img src={history} alt="تیکت جدید" />
            <p>مشاهده سوابق</p>
          </NavLink>
        </div>
        <TicketForm />
        <div className={classes.panelControl}>
          <h3>آخرین تیکت</h3>
          <table>
            <tbody>
              <th>
                <td>موضوع</td>
                <td>تاریخ</td>
                <td>واحد</td>
                <td>وضعیت</td>
              </th>
              <tr>
                <td>عدم شارژ حساب</td>
                <td>1398-02-12</td>
                <td>فنی</td>
                <td>باز</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withRouter(SupportTicket);
