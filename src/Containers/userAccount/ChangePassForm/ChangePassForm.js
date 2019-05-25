import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ChangeLock from "../../../Assets/ChangeLock.png";
import classes from "./ChangePassForm.css";
import { ChangePassRequest, FailProgress } from "../../../Store/Action";
import Spinner from "../../../UI/Spiner/Spinner";
import ReCAPTCHA from "react-google-recaptcha";

class ChangePassForm extends Component {
  state = {
    EmailAddress: null,
    loading: false,
    SendBtnStatus: false
  };

  componentWillReceiveProps = props => {
    if (props.redirect && !props.fail) {
      this.props.OnDrawelClick();
      this.props.history.push(`/EventPage/?${this.state.EmailAddress}`);
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
    this.props.FailProgress();
    e.preventDefault();
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
          <h2>تغییر پسورد حساب کاربری</h2>
          <p> :ایمیل خود را وارد نمایید</p>
          <input
            onChange={this.onInput}
            required
            type="email"
            placeholder="ایمیل"
          />
          <div className={classes.CaptchaFather}>
            <ReCAPTCHA
              className={classes.Captcha}
              sitekey="6LclC6MUAAAAADxEq1l358aAa0kn_NR-Is_4fbqF"
              onChange={this.onChange}
              onExpired={this.onError}
              onErrored={this.onError}
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
    FailProgress: () => dispatch(FailProgress())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChangePassForm)
);
