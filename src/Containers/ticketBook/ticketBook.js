import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./ticketBook.css";
import Spinner from "../../UI/Spiner/Spinner";
import {
  RedirectToConfirm,
  alertMessenger,
  GetTicket,
  OpenlogInModal
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
    if (
      wallet.CoinCount > 0 &&
      Number(this.state.amount) <= Number(wallet.TotalAmount)
    ) {
      this.props.alertMessenger("You received a free ticket");
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
      return this.props.alertMessenger("Not correct");
    }
    if (wallet.CoinCount > 0 && this.state.amount > wallet.TotalAmount + 1) {
      return this.props.alertMessenger(
        "In each week you can use only one of your lucky coin"
      );
    }
    if (wallet.TotalAmount === 0) {
      return this.props.alertMessenger("Please charge your account first");
    }
    if (this.state.amount > wallet.TotalAmount + wallet.CoinCount)
      return this.props.alertMessenger(
        "The number you typed is more than your account deposit"
      );
    return null;
  };

  componentWillReceiveProps = props => {
    if (props.redirect && !props.fail) {
      sessionStorage.removeItem("cacheInfo");
      this.props.history.push("/account/TicketsList");
      this.props.RedirectToConfirm();
    } else {
      this.setState({
        loading: false
      });
    }
  };

  onInputChange = e => {
    e.persist();
    this.setState({
      amount: e.target.value
    });
  };

  logInControl = Dis => {
    if (Dis) {
      this.props.OpenlogInModal(true);
    }
  };

  render() {
    let Dis =
      (localStorage["user"] || sessionStorage["user"]) && this.props.wallet
        ? false
        : true;
    return (
      <div className={classes.Container} onClick={() => this.logInControl(Dis)}>
        <h3>
          How many tickets do you want?{" "}
          <span> Purchase 10 tickets and received a free ticket </span>
        </h3>
        <form className={classes.Form} onSubmit={this.onFormSubmit}>
          <input
            type="number"
            required
            disabled={Dis}
            onChange={this.onInputChange}
            placeholder={Dis ? "login" : "How many?"}
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
              Purchase
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
    GetTicket: data => dispatch(GetTicket(data)),
    OpenlogInModal: data => dispatch(OpenlogInModal(data))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TicketBook)
);
