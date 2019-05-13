import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import classes from "./TicketForm.css";
import ReCAPTCHA from "react-google-recaptcha";

class TicketForm extends Component {
  state = { SendBtnStatus: false };
  onChange = value => {
    this.setState({
      SendBtnStatus: true
    });
  };

  onError = err => {
    // ==> COME BACK and add more code
    console.log("err", err);
  };

  render() {
    return (
      <div className={classes.panelControl}>
        <h3>تیکت جدید</h3>
        <form>
          <input type="text" placeholder="عنوان" required />
          <textarea placeholder="متن پیام" rows="3" required />
          <div className={classes.CaptchaFather}>
            <ReCAPTCHA
              className={classes.Captcha}
              sitekey="6LclC6MUAAAAADxEq1l358aAa0kn_NR-Is_4fbqF"
              onChange={this.onChange}
              onErrored={this.onError}
            />
          </div>
          <button disabled={!this.state.SendBtnStatus} type="submit">
            ارسال
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(TicketForm);
