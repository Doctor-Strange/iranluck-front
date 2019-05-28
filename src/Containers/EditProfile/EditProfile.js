import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./EditProfile.css";
import EditWalletAddress from "../../Components/Dashboard/EditWalletAddress/EditWalletAddress";
import {
  PanelChangePassword,
  FailProgress,
  alertMessenger
} from "../../Store/Action";
import Spinner from "../../UI/Spiner/Spinner";
import GoogleCaptcha from "../../UI/GoogleCaptcha";

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
            <GoogleCaptcha
              onChange={this.onChange}
              onErrored={this.onError}
              onExpired={this.onError}
            />
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
