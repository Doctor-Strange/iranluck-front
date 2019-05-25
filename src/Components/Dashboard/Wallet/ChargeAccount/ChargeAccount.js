import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./ChargeAccount.css";
import ReCAPTCHA from "react-google-recaptcha";
import Spinner from "../../../../UI/Spiner/Spinner";
import {
  InsertPayment,
  FailProgress,
  alertMessenger
} from "../../../../Store/Action";

// import perfect from "../../../../Assets/user/perfectmoneygate.jpg";

class ChargeAccount extends Component {
  state = {
    PaymentAmount: null,
    loading: false,
    SendBtnStatus: false
  };

  onInput = event => {
    event.persist();
    this.setState({
      PaymentAmount: event.target.value
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
    if (this.state.PaymentAmount) {
      this.props.FailProgress();
      this.props.InsertPayment(this.state.PaymentAmount);
      this.setState({
        loading: true
      });
    } else {
      this.props.alertMessenger("مقدار ورودی نمیتواند خالی باشد");
    }
  };

  componentWillReceiveProps = props => {
    if (props.booked && !props.fail) {
      this.bookForm(props.booked);
    } else {
      this.setState({
        loading: false
      });
    }
  };

  bookForm = data => {
    let form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", "https://perfectmoney.is/api/step1.asp");
    form.setAttribute("target", "_self");
    let PAYEE_ACCOUNT = document.createElement("input");
    PAYEE_ACCOUNT.setAttribute("type", "hidden");
    PAYEE_ACCOUNT.setAttribute("name", "PAYEE_ACCOUNT");
    PAYEE_ACCOUNT.setAttribute("value", "U20379441");
    form.appendChild(PAYEE_ACCOUNT);
    let PAYEE_NAME = document.createElement("input");
    PAYEE_NAME.setAttribute("type", "hidden");
    PAYEE_NAME.setAttribute("name", "PAYEE_NAME");
    PAYEE_NAME.setAttribute("value", "Iran Luck");
    form.appendChild(PAYEE_NAME);
    let PAYMENT_AMOUNT = document.createElement("input");
    PAYMENT_AMOUNT.setAttribute("type", "hidden");
    PAYMENT_AMOUNT.setAttribute("name", "PAYMENT_AMOUNT");
    PAYMENT_AMOUNT.setAttribute("value", `${this.state.PaymentAmount}`);
    form.appendChild(PAYMENT_AMOUNT);
    let PAYMENT_UNITS = document.createElement("input");
    PAYMENT_UNITS.setAttribute("type", "hidden");
    PAYMENT_UNITS.setAttribute("name", "PAYMENT_UNITS");
    PAYMENT_UNITS.setAttribute("value", "USD");
    form.appendChild(PAYMENT_UNITS);
    let STATUS_URL = document.createElement("input");
    STATUS_URL.setAttribute("type", "hidden");
    STATUS_URL.setAttribute("name", "STATUS_URL");
    STATUS_URL.setAttribute("value", "http://temp.iranluck.com/");
    form.appendChild(STATUS_URL);
    let PAYMENT_URL = document.createElement("input");
    PAYMENT_URL.setAttribute("type", "hidden");
    PAYMENT_URL.setAttribute("name", "PAYMENT_URL");
    PAYMENT_URL.setAttribute("value", "http://temp.iranluck.com/");
    form.appendChild(PAYMENT_URL);
    let NOPAYMENT_URL = document.createElement("input");
    NOPAYMENT_URL.setAttribute("type", "hidden");
    NOPAYMENT_URL.setAttribute("name", "NOPAYMENT_URL");
    NOPAYMENT_URL.setAttribute("value", "http://temp.iranluck.com/about");
    form.appendChild(NOPAYMENT_URL);
    let BAGGAGE_FIELDS = document.createElement("input");
    BAGGAGE_FIELDS.setAttribute("type", "hidden");
    BAGGAGE_FIELDS.setAttribute("name", "BAGGAGE_FIELDS");
    BAGGAGE_FIELDS.setAttribute("value", "ORDER_NUM CUST_NUM");
    form.appendChild(BAGGAGE_FIELDS);
    let ORDER_NUM = document.createElement("input");
    ORDER_NUM.setAttribute("type", "hidden");
    ORDER_NUM.setAttribute("name", "ORDER_NUM");
    ORDER_NUM.setAttribute("value", data.ID);
    form.appendChild(ORDER_NUM);
    let CUST_NUM = document.createElement("input");
    CUST_NUM.setAttribute("type", "hidden");
    CUST_NUM.setAttribute("name", "CUST_NUM");
    CUST_NUM.setAttribute("value", data.ID);
    form.appendChild(CUST_NUM);
    let PAYMENT_METHOD = document.createElement("button");
    PAYMENT_METHOD.setAttribute("type", "submit");
    PAYMENT_METHOD.setAttribute("name", "PAYMENT_METHOD");
    PAYMENT_METHOD.setAttribute("value", "PerfectMoney account");
    form.appendChild(PAYMENT_METHOD);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  render() {
    return (
      <div className={classes.panelControl}>
        <h3>اتصال به درگاه :</h3>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="number"
            placeholder="تعداد"
            step="1"
            min="1"
            onChange={this.onInput}
            max="1000"
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
            <button disabled={true} type="submit">
              <Spinner />
            </button>
          ) : (
            <button disabled={!this.state.SendBtnStatus} type="submit">
              تایید
            </button>
          )}
        </form>
        {/* <div className={classes.Gates}>
          <img src={perfect} alt="درگاه پرفکت مانی" />
          <p>پرفکت مانی</p>
        </div> */}
        <div className={classes.teach}>
          <NavLink onClick={GotoTop} to="/">
            + آموزش پرداخت از درگاه
          </NavLink>
          <NavLink onClick={GotoTop} to="/Learn">
            + آموزش ساخت کیف پول پرفکت مانی
          </NavLink>
        </div>
      </div>
    );
  }
}

const GotoTop = () => {
  window.scrollTo(0, 0);
};
const mapStateToprops = state => {
  return {
    fail: state.AUTH.fail,
    booked: state.PAYMENT.booked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    InsertPayment: Data => dispatch(InsertPayment(Data)),
    FailProgress: () => dispatch(FailProgress()),
    alertMessenger: data => dispatch(alertMessenger(data))
  };
};

export default withRouter(
  connect(
    mapStateToprops,
    mapDispatchToProps
  )(ChargeAccount)
);
