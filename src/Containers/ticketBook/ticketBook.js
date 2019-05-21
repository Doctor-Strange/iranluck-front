import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./ticketBook.css";
import Spinner from "../../UI/Spiner/Spinner";
import { RedirectToConfirm } from "../../Store/Action";

class TicketBook extends Component {
  state = {
    loading: false,
    MoneyAddress: null,
    EmailAddress: null
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.RedirectToConfirm();
    // const Data = {
    //   EmailAddress: this.state.Email,
    //   MoneyAddress: this.state.MoneyAddress
    // };
    // this.props.walletAddressRequest(Data);
  };

  componentWillReceiveProps = props => {};

  onInputChange = e => {
    e.persist();
    this.setState({
      MoneyAddress: e.target.value
    });
  };

  render() {
    let Dis = localStorage["user"] || sessionStorage["user"] ? false : true;
    return (
      <div className={classes.Container}>
        <h3>
          تعداد بلیط <span>( با خرید هر 10 بلیط، 1 بلیط رایگان بگیرید ) </span>:
        </h3>
        <form className={classes.Form}>
          <input
            type="number"
            disabled={Dis}
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
    fail: state.AUTH.fail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    RedirectToConfirm: data => dispatch(RedirectToConfirm(data))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TicketBook)
);
