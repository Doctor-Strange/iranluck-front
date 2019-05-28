import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import classes from "./WithDrawal.css";
import Spinner from "../../../../UI/Spiner/Spinner";
import { RedirectToConfirm, alertMessenger } from "../../../../Store/Action";
import GoogleCaptcha from "../../../../UI/GoogleCaptcha";
var CryptoJS = require("crypto-js");

class WithDrawal extends Component {
  state = {
    loading: false,
    Amount: null,
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
    this.setState({
      SendBtnStatus: false
    });
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

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.Amount) {
      this.props.RedirectToConfirm();
      this.setState({
        loading: true
      });
      const Data = {
        Amount: this.state.Amount,
        EmailAddress: this.state.EmailAddress,
        MoneyAddress: this.state.MoneyAddress
      };
      //===>
      // this.props.walletAddressRequest(Data);
    }
  };

  componentWillReceiveProps = props => {
    if (props.redirect && !props.fail) {
      this.props.history.push(`/EventPage/?${this.state.EmailAddress}`);
    } else {
      this.setState({
        loading: false
      });
    }
  };

  onInputChange = e => {
    e.persist();
    this.setState({
      Amount: e.target.value
    });
  };

  render() {
    return (
      <div className={classes.panelControl}>
        <h3>برداشت </h3>
        <div className={classes.withdrawal}>
          <div className={classes.InputFather}>
            <input
              onChange={this.onInputChange}
              type="number"
              step="1"
              placeholder="تعداد سکه"
              min="1"
              max="300"
            />
            <span>حداکثر تعداد سکه قابل برداشت در هر روز 300 عدد می باشد</span>
          </div>
          <p>
            عدد سکه پرفکت مانی از حساب کاربری ({this.state.EmailAddress}) ایران
            لاک به آدرس کیف پول
          </p>
          <div className={classes.pandSpan}>
            <p>{this.state.walletAddress}</p>
            <span>تایید شده</span>
          </div>
          <p>انتقال داده شود.</p>
          <form onSubmit={this.onFormSubmit}>
            <GoogleCaptcha
              onChange={this.onChange}
              onErrored={this.onError}
              onExpired={this.onError}
            />
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
        <div className={classes.teach}>
          <NavLink to="/Learn/Walletaddress">+ تغییر آدرس کیف پول</NavLink>
          <NavLink to="/Learn/WithDrawal">+ آموزش تسویه حساب</NavLink>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wallet: state.WALLET.wallet,
    redirect: state.AUTH.redirect,
    fail: state.AUTH.fail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    RedirectToConfirm: data => dispatch(RedirectToConfirm(data)),
    alertMessenger: data => dispatch(alertMessenger(data))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithDrawal)
);
