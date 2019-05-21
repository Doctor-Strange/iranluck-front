import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import classes from "./WithDrawal.css";
import ReCAPTCHA from "react-google-recaptcha";
var CryptoJS = require("crypto-js");

class WithDrawal extends Component {
  state = {
    EmailAddress: null,
    walletAddress: null,
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
  componentDidMount = () => {
    if (localStorage["user"]) {
      if (!this.props.wallet.WalletAddress) {
        return this.props.history.push("/account");
      }
      //get user information from Storage
      const key = "IranLuckHashCode";
      let storage = localStorage.getItem("user");
      let decrypted = CryptoJS.AES.decrypt(storage, key);
      const Data = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
      this.setState({
        EmailAddress: Data.Email,
        walletAddress: this.props.wallet.WalletAddress
      });
    }
    if (sessionStorage["user"]) {
      //get user information from Storage
      if (!this.props.wallet.WalletAddress) {
        return this.props.history.push("/account");
      }
      const key = "IranLuckHashCode";
      let storage = sessionStorage.getItem("user");
      let decrypted = CryptoJS.AES.decrypt(storage, key);
      const Data = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
      this.setState({
        EmailAddress: Data.Email,
        walletAddress: this.props.wallet.WalletAddress
      });
    }
  };
  render() {
    return (
      <div className={classes.panelControl}>
        <h3>برداشت </h3>
        <div className={classes.withdrawal}>
          <div className={classes.InputFather}>
            <input
              type="number"
              step="1"
              placeholder="تعداد سکه"
              min="1"
              max="300"
            />
            <span>حداکثر تعداد سکه قابل برداشت در هر روز 300 عدد می باشد</span>
          </div>
          <p>
            عدد سکه پرفکت مانی از حساب کاربری {this.state.EmailAddress} به آدرس
            کیف پول
          </p>
          <div className={classes.pandSpan}>
            <p>{this.state.walletAddress}</p>
            <span>تایید شده</span>
          </div>
          <p>انتقال داده شود.</p>
          <form>
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
        <div className={classes.teach}>
          <NavLink to="">+ تغییر آدرس کیف پول</NavLink>
          <NavLink to="">+ آموزش تسویه حساب</NavLink>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wallet: state.WALLET.wallet
  };
};

export default withRouter(connect(mapStateToProps)(WithDrawal));
