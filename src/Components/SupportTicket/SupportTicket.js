import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import classes from "./SupportTicket.css";
import plus from "../../Assets/user/plus.png";
import history from "../../Assets/user/history.png";
import TicketForm from "./TicketForm/TicketForm";
import TicketHistory from "./TicketHistory/TicketHistory";
import BackDraw from "../../UI/BackDraw/BackDraw";
import TicketPopUp from "./TicketPopUp/TicketPopUp";

class SupportTicket extends Component {
  state = { switch: null, ticketNum: null };

  newTicket = (arg = null) => {
    arg
      ? this.setState({
          switch: "new"
        })
      : this.setState({
          switch: "history"
        });
  };

  render() {
    return (
      <div>
        <div className={classes.Quickaccess}>
          <div
            onClick={() => {
              this.newTicket("new");
            }}
            to="/account/Ticket/post"
            className={classes.CreateNew}
          >
            <img src={plus} alt="تیکت جدید" />
            <p>تیکت جدید</p>
          </div>
          <div
            onClick={() => {
              this.newTicket();
            }}
            className={classes.histort}
          >
            <img src={history} alt="تیکت جدید" />
            <p>مشاهده سوابق</p>
          </div>
        </div>
        {this.state.switch ? (
          this.state.switch === "new" ? (
            <TicketForm />
          ) : (
            <TicketHistory />
          )
        ) : (
          <div className={classes.panelControl}>
            <h3>آخرین تیکت</h3>
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
              </tbody>
            </table>
          </div>
        )}
        <div>
          <TicketPopUp Ticketinfo={this.state.ticketNum} />
          <BackDraw />
        </div>
      </div>
    );
  }
}

export default withRouter(SupportTicket);
