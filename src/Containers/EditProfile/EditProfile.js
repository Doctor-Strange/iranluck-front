import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./EditProfile.css";
import EditWalletAddress from "../../Components/Dashboard/EditWalletAddress/EditWalletAddress";
import ReCAPTCHA from "react-google-recaptcha";
import {
  PanelChangePassword,
  FailProgress,
  alertMessenger
} from "../../Store/Action";
import Spinner from "../../UI/Spiner/Spinner";

class EditProfile extends Component {
  state = {
    Password: null,
    NewPassword: null,
    RepeatNewPassword: null,
    loading: false,
    SendBtnStatus: false
  };
  onInput = (event, Field) => {
    event.persist();
    this.setState({
      [Field]: event.target.value
    });
  };

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

  onSubmitForm = event => {
    event.preventDefault();
    if (this.state.NewPassword === this.state.RepeatNewPassword) {
      this.props.FailProgress();
      const Data = {
        Token: this.props.AuthData.Token,
        Password: this.state.Password.trim(),
        NewPassword: this.state.NewPassword.trim()
      };
      this.props.PanelChangePassword(Data);
      this.setState({
        loading: true
      });
    } else {
      this.props.alertMessenger("رمز جدید و تکرار آن یکسان نیست");
    }
  };
  render() {
    return (
      <div>
        <div className={classes.panelControl}>
          <h3>تغییر رمز</h3>
          <form onSubmit={this.onSubmitForm}>
            <input
              maxLength="15"
              minLength="8"
              onChange={e => this.onInput(e, "Password")}
              placeholder="رمز فعلی"
              required
              type="password"
            />
            <input
              maxLength="15"
              minLength="8"
              onChange={e => this.onInput(e, "NewPassword")}
              placeholder="رمز جدید"
              required
              type="password"
            />
            <input
              maxLength="15"
              minLength="8"
              onChange={e => this.onInput(e, "RepeatNewPassword")}
              placeholder="تکرار رمز جدید"
              required
              type="password"
            />
            <div className={classes.CaptchaFather}>
              <ReCAPTCHA
                className={classes.Captcha}
                sitekey="6LclC6MUAAAAADxEq1l358aAa0kn_NR-Is_4fbqF"
                onChange={this.onChange}
                onExpired={this.onError}
                onErrored={this.onError}
              />
            </div>
            {this.state.loading ? (
              <button disabled={true} type="submit">
                <Spinner />
              </button>
            ) : (
              <button disabled={!this.state.SendBtnStatus} type="submit">
                تایید
              </button>
            )}
          </form>
        </div>
        <div className={classes.panelControl}>
          <EditWalletAddress>تغییر آدرس کیف پول</EditWalletAddress>;
        </div>
      </div>
    );
  }
}

const mapStateToprops = state => {
  return {
    fail: state.AUTH.fail,
    AuthData: state.AUTH.AuthData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    FailProgress: () => dispatch(FailProgress()),
    alertMessenger: data => dispatch(alertMessenger(data)),
    PanelChangePassword: Data => dispatch(PanelChangePassword(Data))
  };
};

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(EditProfile);
