import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import classes from "./TicketForm.css";
import GoogleCaptcha from "../../../UI/GoogleCaptcha";

class TicketForm extends Component {
  state = { SendBtnStatus: false };
  onChange = value => {
    this.setState({
      SendBtnStatus: true
    });
  };

  onError = err => {
    // ==> COME BACK and add more code
    this.setState({
      SendBtnStatus: false
    });
  };

  render() {
    return (
      <div className={classes.panelControl}>
        <h3>تیکت جدید</h3>
        <form>
          <input type="text" placeholder="عنوان" required />
          <textarea placeholder="متن پیام" rows="3" required />
          <GoogleCaptcha
            onChange={this.onChange}
            onErrored={this.onError}
            onExpired={this.onError}
          />
          <button disabled={!this.state.SendBtnStatus} type="submit">
            ارسال
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(TicketForm);
