import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classes from "./ChangePassword.css";
import {
  ChangePassSubmit,
  FailProgress,
  RedirectToConfirm,
  alertMessenger
} from "../../Store/Action";
import Spinner from "../../UI/Spiner/Spinner";
import global from "../../global.css";

class ChangePassword extends Component {
  state = {
    EncodedCoded: null,
    Password: null,
    RepeatPass: null,
    loading: false
  };

  componentWillReceiveProps = props => {
    if (props.AuthorizeStatus) {
      this.props.history.push("/");
      this.props.RedirectToConfirm();
    } else {
      this.setState({
        loading: false
      });
    }
  };

  onInput = (event, Field) => {
    event.persist();
    this.setState({
      [Field]: event.target.value
    });
  };

  onConfirmClick = e => {
    e.preventDefault();
    this.props.FailProgress();
    if (this.state.Password === this.state.RepeatPass) {
      const data = {
        EncodedCoded: this.state.EncodedCoded,
        Password: this.state.Password.trim()
      };
      this.props.ChangePassSubmit(data);
      this.setState({
        loading: true
      });
    } else {
      this.props.alertMessenger("Passwords are not equal");
    }
  };

  componentDidMount = () => {
   const params = this.props.match.params
    const code = params.code
    this.setState({
      EncodedCoded: code
    });
  };

  render() {
    return (
      <div className={global.Responsive}>
        <div className={classes.Container}>
          <h2>change your account password</h2>
          <form onSubmit={this.onConfirmClick}>
            <p>New password</p>
            <input
              onChange={e => this.onInput(e, "Password")}
              maxLength="15"
              minLength="8"
              required
              type="password"
              placeholder="Password"
            />
            <p>Repeat your password</p>
            <input
              maxLength="15"
              minLength="8"
              onChange={e => this.onInput(e, "RepeatPass")}
              required
              type="password"
              placeholder="Repeat your password"
            />
            {this.state.loading ? (
              <button disabled={true} type="submit">
                <Spinner />
              </button>
            ) : (
              <button type="submit">Ok</button>
            )}
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
    ChangePassSubmit: data => dispatch(ChangePassSubmit(data)),
    FailProgress: () => dispatch(FailProgress()),
    alertMessenger: sms => dispatch(alertMessenger(sms)),
    RedirectToConfirm: data => dispatch(RedirectToConfirm(data))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChangePassword)
);
