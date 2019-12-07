import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ChangeLock from "../../../Assets/ChangeLock.png";
import classes from "./ChangePassForm.css";
import Spinner from "../../../UI/Spiner/Spinner";

import {
  ChangePassRequest,
  FailProgress,
  RedirectToConfirm
} from "../../../Store/Action";
import GoogleCaptcha from "../../../UI/GoogleCaptcha";

class ChangePassForm extends Component {
  state = {
    EmailAddress: null,
    loading: false,
    SendBtnStatus: false
  };

  componentWillReceiveProps = props => {
    // this.props.history.push("/confirm");
    if (props.redirect && !props.fail) {
      this.props.history.push(`/EventPage/?${this.state.EmailAddress}`);
      this.props.OnDrawelClick();
      props.RedirectToConfirm();
    } else {
      this.setState({
        loading: false
      });
    }
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

  onInput = event => {
    event.persist();
    this.setState({
      EmailAddress: event.target.value
    });
  };

  onConfirmClick = e => {
    e.preventDefault();
    this.props.FailProgress();
    this.props.ChangePassRequest(this.state.EmailAddress);
    this.setState({
      loading: true
    });
  };

  render() {
    return (
      <div className={classes.Container}>
        <form onSubmit={this.onConfirmClick}>
          <img src={ChangeLock} alt="آیکون تغییر پسورد" />
          <h2>Change your Iran Luck password</h2>
          <p>Enter your email address:</p>
          <input
            onChange={this.onInput}
            required
            type="email"
            placeholder="Email address"
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
              Confirm
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
    ChangePassRequest: email => dispatch(ChangePassRequest(email)),
    FailProgress: () => dispatch(FailProgress()),
    RedirectToConfirm: () => dispatch(RedirectToConfirm())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChangePassForm)
);
