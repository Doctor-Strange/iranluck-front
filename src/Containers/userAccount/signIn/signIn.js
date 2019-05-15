import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./signIn.css";
import { GoogleLogin } from "react-google-login";
import { log_in_Req, FailProgress } from "../../../Store/Action";
import googleIcon from "../../../Assets/googleIcon.png";
import Spinner from "../../../UI/Spiner/Spinner";
var CryptoJS = require("crypto-js");

class SignIn extends Component {
  state = {
    Email: null,
    Password: null,
    Type: "Site",
    loading: false,
    Save: false
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
    if (this.state.Save) {
      this.saveOnStorage(Data);
    }
    this.props.log_in_Req(Data);
    this.setState({
      loading: true
    });
  };

  componentWillReceiveProps = props => {
    if (props.AuthorizeStatus && !props.fail) {
      this.props.OnDrawelClick();
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
      if (this.state.Save) {
        this.saveOnStorage(Data);
      }
      this.props.log_in_Req(Data);
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

  render() {
    return (
      <div
        className={[
          classes.continer,
          this.props.Show ? classes.fadein : classes.Move
        ].join(" ")}
      >
        <div className={classes.box}>
          <h2>ورود</h2>
          <form onSubmit={this.onSubmitForm}>
            <input
              onChange={e => this.onInput(e, "Email")}
              type="Text"
              placeholder="ایمیل"
            />
            <input
              onChange={e => this.onInput(e, "Password")}
              type="password"
              placeholder="رمز عبور"
            />
            <a href="#dsfs" className={classes.forgetPass}>
              رمز خود را فراموش کرده اید؟
            </a>
            <label className={classes.checkbox_container}>
              من را به یاد بسپار
              <input type="checkbox" onChange={this.onCheckBox} />
              <span className={classes.checkbox_checkmark} />
            </label>
            {this.state.loading ? (
              <button
                disabled={true}
                className={classes.ButtonForm}
                type="submit"
              >
                <Spinner />
              </button>
            ) : (
              <button className={classes.ButtonForm} type="submit">
                ورود{" "}
              </button>
            )}
            <GoogleLogin
              clientId="4438804419-95jjn9rpups56nfhm9v2iden25ksvner.apps.googleusercontent.com"
              render={renderProps => (
                <div
                  onClick={renderProps.onClick}
                  className={classes.googleLogin}
                >
                  <p>ورود با گوگل</p>
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
    log_in_Req: data => dispatch(log_in_Req(data)),
    FailProgress: () => dispatch(FailProgress())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
