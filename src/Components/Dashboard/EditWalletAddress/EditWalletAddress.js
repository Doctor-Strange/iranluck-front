import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classes from "./EditWalletAddress.css";
import { walletAddressRequest, RedirectToConfirm } from "../../../Store/Action";
import Spinner from "../../../UI/Spiner/Spinner";
import ReCAPTCHA from "react-google-recaptcha";
var CryptoJS = require("crypto-js");

class EditWalletAddress extends Component {
  state = {
    loading: false,
    MoneyAddress: null,
    // Token: null,
    EmailAddress: null,
    SendBtnStatus: false
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

  componentDidMount = () => {
    if (localStorage["user"]) {
      //get user information from Storage
      const key = "IranLuckHashCode";
      let storage = localStorage.getItem("user");
      let decrypted = CryptoJS.AES.decrypt(storage, key);
      const Data = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
      this.setState({
        EmailAddress: Data.Email
      });
    }
    if (sessionStorage["user"]) {
      //get user information from Storage
      const key = "IranLuckHashCode";
      let storage = sessionStorage.getItem("user");
      let decrypted = CryptoJS.AES.decrypt(storage, key);
      const Data = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
      this.setState({
        EmailAddress: Data.Email
      });
    }
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.RedirectToConfirm();
    this.setState({
      loading: true
    });
    const Data = {
      Token: this.props.AuthData.Token,
      EmailAddress: this.state.EmailAddress,
      MoneyAddress: this.state.MoneyAddress
    };
    this.props.walletAddressRequest(Data);
  };

  componentWillReceiveProps = props => {
    if (props.redirect && !props.fail) {
      this.props.history.push(`/EventPage/?${this.state.EmailAddress}`);
      props.RedirectToConfirm();
    } else {
      this.setState({
        loading: false
      });
    }
  };

  onInputChange = e => {
    e.persist();
    this.setState({
      MoneyAddress: e.target.value
    });
  };

  render() {
    return (
      <div className={classes.panelControl} id="WalletAddress">
        <div className={classes.passwordPart}>
          <h3>{this.props.children}</h3>
          <form onSubmit={this.onFormSubmit}>
            <input
              onChange={this.onInputChange}
              placeholder="آدرس کیف پول"
              required
              maxLength="25"
              minLength="8"
              type="text"
            />
            <div className={classes.CaptchaFather}>
              <ReCAPTCHA
                className={classes.Captcha}
                sitekey="6LclC6MUAAAAADxEq1l358aAa0kn_NR-Is_4fbqF"
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
                تایید
              </button>
            )}
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    redirect: state.AUTH.redirect,
    fail: state.AUTH.fail,
    AuthData: state.AUTH.AuthData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    walletAddressRequest: data => dispatch(walletAddressRequest(data)),
    RedirectToConfirm: data => dispatch(RedirectToConfirm(data))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditWalletAddress)
);
