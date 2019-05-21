import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classes from "./ChangePassword.css";
import { ChangePassSubmit, FailProgress } from "../../Store/Action";
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
    if (this.state.Password === this.state.RepeatPass) {
      this.props.FailProgress();
      e.preventDefault();
      const data = {
        EncodedCoded: this.state.EncodedCoded,
        Password: this.state.Password.trim()
      };
      this.props.ChangePassSubmit(data);
      this.setState({
        loading: true
      });
    }
  };

  componentDidMount = () => {
    const code = this.props.history.location.search.slice(1);
    this.setState({
      EncodedCoded: code
    });
  };

  render() {
    return (
      <div className={global.Responsive}>
        <div className={classes.Container}>
          <h2>تغییر پسورد حساب کاربری</h2>
          <form onSubmit={this.onConfirmClick}>
            <p>رمز جدید خود را وارد کنید</p>
            <input
              onChange={e => this.onInput(e, "Password")}
              required
              type="password"
              placeholder="رمز"
            />
            <p>تکرار رمز</p>
            <input
              onChange={e => this.onInput(e, "RepeatPass")}
              required
              type="password"
              placeholder="تکرار رمز"
            />
            {this.state.loading ? (
              <button disabled={true} type="submit">
                <Spinner />
              </button>
            ) : (
              <button type="submit">تایید</button>
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
    FailProgress: () => dispatch(FailProgress())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChangePassword)
);