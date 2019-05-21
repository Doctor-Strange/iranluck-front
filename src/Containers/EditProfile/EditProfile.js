import React, { Component } from "react";
import classes from "./EditProfile.css";
import EditWalletAddress from "../../Components/Dashboard/EditWalletAddress/EditWalletAddress";
import ReCAPTCHA from "react-google-recaptcha";

class EditProfile extends Component {
  state = {
    SendBtnStatus: false
  };
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
      <div>
        <div className={classes.panelControl}>
          <h3>تغییر رمز</h3>
          <form>
            <input placeholder="رمز فعلی" required type="password" />
            <input placeholder="رمز جدید" required type="password" />
            <input placeholder="تکرار رمز جدید" required type="password" />
            <div className={classes.CaptchaFather}>
              <ReCAPTCHA
                className={classes.Captcha}
                sitekey="6LclC6MUAAAAADxEq1l358aAa0kn_NR-Is_4fbqF"
                onChange={this.onChange}
                onErrored={this.onError}
              />
            </div>
            <button disabled={!this.state.SendBtnStatus} type="submit">
              تایید
            </button>
          </form>
        </div>
        <div className={classes.panelControl}>
          <EditWalletAddress>تغییر آدرس کیف پول</EditWalletAddress>;
        </div>
      </div>
    );
  }
}

export default EditProfile;
