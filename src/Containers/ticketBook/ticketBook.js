import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./ticketBook.css";
import Spinner from "../../UI/Spiner/Spinner";
import {
  RedirectToConfirm,
  alertMessenger,
  GetTicket
} from "../../Store/Action";

class TicketBook extends Component {
  state = {
    loading: false,
    amount: null
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { wallet } = this.props;
    let valid = this.validate(wallet);
    if (valid) return;
    const data = {
      Email: this.props.AuthData.Email,
      Token: this.props.AuthData.Token
    };
    console.log(this.state.amount === wallet.TotalAmount);
    if (
      wallet.CoinCount > 0 &&
      Number(this.state.amount) <= Number(wallet.TotalAmount)
    ) {
      this.props.alertMessenger("یک بلیط رایگان به شما تعلق گرفت");
      data.Count = Number(this.state.amount) + 1;
    } else {
      data.Count = this.state.amount;
    }
    this.setState({
      loading: true
    });
    this.props.GetTicket(data);
  };

  validate = wallet => {
    if (this.state.amount.length === 0 || this.state.amount <= 0) {
      return this.props.alertMessenger("عدد ورودی صحیح نیست");
    }
    if (wallet.CoinCount > 0 && this.state.amount > wallet.TotalAmount + 1) {
      return this.props.alertMessenger(
        "در هر بار خرید فقط میتوانید یک عدد سکه شانس را استفاده کنید"
      );
    }
    if (this.state.amount > wallet.TotalAmount + wallet.CoinCount)
      return this.props.alertMessenger(
        "عدد وارد شده از مجموع سکه های شانس و موجودی اصلی کیف پول بیشتر است"
      );
    return null;
  };

  componentWillReceiveProps = props => {
    if (props.redirect && !props.fail) {
      this.props.history.push("/account/TicketsList");
      this.props.RedirectToConfirm();
    }
  };

  onInputChange = e => {
    e.persist();
    this.setState({
      amount: e.target.value
    });
  };

  render() {
    let Dis =
      (localStorage["user"] || sessionStorage["user"]) && this.props.wallet
        ? false
        : true;
    return (
      <div className={classes.Container}>
        <h3>
          تعداد بلیط <span>( با خرید هر 10 بلیط، 1 بلیط رایگان بگیرید ) </span>:
        </h3>
        <form className={classes.Form} onSubmit={this.onFormSubmit}>
          <input
            type="number"
            required
            disabled={Dis}
            onChange={this.onInputChange}
            placeholder={Dis ? "ابتدا وارد شوید" : "تعداد"}
            step="1"
            min="1"
            max="1000"
          />

          {this.state.loading ? (
            <button disabled={true} type="submit">
              <Spinner />
            </button>
          ) : (
            <button disabled={Dis} type="submit">
              خرید
            </button>
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    redirect: state.AUTH.redirect,
    fail: state.AUTH.fail,
    AuthData: state.AUTH.AuthData,
    wallet: state.WALLET.wallet
  };
};

const mapDispatchToProps = dispatch => {
  return {
    RedirectToConfirm: data => dispatch(RedirectToConfirm(data)),
    alertMessenger: sms => dispatch(alertMessenger(sms)),
    GetTicket: data => dispatch(GetTicket(data))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TicketBook)
);
