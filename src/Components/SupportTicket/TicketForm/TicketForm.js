import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import classes from "./TicketForm.css";

class TicketForm extends Component {
  render() {
    return (
      <div className={classes.panelControl}>
        <h3>تیکت جدید</h3>
        <form>
          <input type="text" placeholder="عنوان" required />
          <textarea placeholder="متن پیام" rows="3" required />
          <p> من ربات نیستم</p>
          <button type="submit">ارسال</button>
        </form>
      </div>
    );
  }
}

export default withRouter(TicketForm);
