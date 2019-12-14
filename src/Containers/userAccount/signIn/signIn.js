import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classes from "./signIn.css";
import { GoogleLogin } from "react-google-login";
import {
  RedirectToConfirm,
  log_in_Req,
  FailProgress
} from "../../../Store/Action";
import googleIcon from "../../../Assets/googleIcon.png";
import Spinner from "../../../UI/Spiner/Spinner";
import GoogleCaptcha from "../../../UI/GoogleCaptcha";
var CryptoJS = require("crypto-js");

class SignIn extends Component {
  state = {
    Email: null,
    Password: null,
    Type: "Site",
    loading: false,
    SendBtnStatus: false,
    Save: true
  };

  onInput = (event, Field) => {
    event.persist();
    this.setState({
      [Field]: event.target.value
    });
  };

  onSubmitForm = event => {
    this.props.FailProgress();
    event.preventDefault();
    const Data = {
      Email: this.state.Email.trim(),
      Password: this.state.Password.trim(),
      Type: "Site"
    };
    this.props.log_in_Req(Data, this.state.Save ? "Local" : "session");
    this.setState({
      loading: true
    });
  };

  componentWillReceiveProps = props => {
    if (props.AuthorizeStatus && !props.fail) {
      this.props.history.push("/account");
      this.props.OnDrawelClick();
      props.RedirectToConfirm();
    } else {
      this.setState({
        loading: false
      });
    }
  };

  responseGoogle = value => {
    this.props.FailProgress();
    if (value.googleId) {
      const Data = {
        Email: value.profileObj.email.trim(),
        Password: value.profileObj.googleId.trim(),
        Type: "Gmail"
      };
      this.props.log_in_Req(Data, this.state.Save ? "Local" : "session");
      this.setState({
        loading: true
      });
    } else {
      this.setState({
        loading: false
      });
    }
  };

  onCheckBox = e => {
    e.persist();
    this.setState({
      Save: e.target.checked
    });
  };

  saveOnStorage = data => {
    const message = JSON.stringify(data);
    const key = "IranLuckHashCode";
    let encrypted = CryptoJS.AES.encrypt(message, key);
    localStorage.setItem("user", encrypted.toString());
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
  render() {
    return (
      <div
        className={[
          classes.continer,
          this.props.Show ? classes.fadein : classes.Move
        ].join(" ")}
      >
        <div className={classes.box}>
          <h2>Login</h2>
          <form onSubmit={this.onSubmitForm}>
            <input
              maxLength="70"
              minLength="5"
              onChange={e => this.onInput(e, "Email")}
              type="Text"
              placeholder="Email"
            />
            <input
              maxLength="15"
              minLength="8"
              onChange={e => this.onInput(e, "Password")}
              type="password"
              placeholder="Password"
            />
            <span
              onClick={this.props.OnChangePassClick}
              className={classes.forgetPass}
            >
              Forget my password
            </span>
            <label className={classes.checkbox_container}>
            Remember me
              <input
                type="checkbox"
                checked={this.state.Save}
                onChange={this.onCheckBox}
              />
              <span className={classes.checkbox_checkmark} />
            </label>
            <div className={classes.CaptchaFather}>
            <GoogleCaptcha
              onChange={this.onChange}
              onErrored={this.onError}
              onExpired={this.onError}
            />
            </div>
            {this.state.loading ? (
              <button
                disabled={true}
                className={classes.ButtonForm}
                type="submit"
              >
                <Spinner />
              </button>
            ) : (
              <button
                disabled={!this.state.SendBtnStatus}
                className={classes.ButtonForm}
                type="submit"
              >
                Login{" "}
              </button>
            )}
            <GoogleLogin
              clientId="4438804419-95jjn9rpups56nfhm9v2iden25ksvner.apps.googleusercontent.com"
              render={renderProps => (
                <div
                  onClick={renderProps.onClick}
                  className={classes.googleLogin}
                >
                  <p>Login with Google</p>
                  <img alt="google" src={googleIcon} />
                </div>
              )}
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    AuthorizeStatus: state.AUTH.AuthorizeStatus,
    fail: state.AUTH.fail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    log_in_Req: (data, type) => dispatch(log_in_Req(data, type)),
    RedirectToConfirm: data => dispatch(RedirectToConfirm(data)),
    FailProgress: () => dispatch(FailProgress())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignIn)
);
