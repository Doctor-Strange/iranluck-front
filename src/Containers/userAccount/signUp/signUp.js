import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classes from "./signUp.css";
import { GoogleLogin } from "react-google-login";
import { sign_Up_Req, FailProgress } from "../../../Store/Action";
import Spinner from "../../../UI/Spiner/Spinner";
import googleIcon from "../../../Assets/googleIcon.png";

class SignUp extends Component {
  state = {
    Email: null,
    Password: null,
    RepeatPassword: null,
    ParentRefNumber: "",
    loading: false
  };

  onInput = (event, Field) => {
    event.persist();
    this.setState({
      [Field]: event.target.value
    });
  };

  onSubmitForm = event => {
    event.preventDefault();
    this.props.FailProgress();
    const Data = {
      Email: this.state.Email.trim(),
      Password: this.state.Password.trim(),
      ParentRefNumber: this.state.ParentRefNumber
    };
    this.props.sign_Up_Req(Data);
    this.setState({
      loading: true
    });
  };

  componentWillReceiveProps = props => {
    if (props.redirect && !props.fail) {
      this.props.OnDrawelClick();
      this.props.history.push("/EventPage");
    } else {
      this.setState({
        loading: false
      });
    }
  };

  responseGoogle = value => {
    this.props.FailProgress();
    if (value.googleId) {
      const Data = {
        Email: value.profileObj.email.trim(),
        Password: value.profileObj.googleId.trim(),
        ParentRefNumber: this.state.ParentRefNumber
      };
      this.props.sign_Up_Req(Data);
      this.setState({
        loading: true
      });
    } else {
      this.setState({
        loading: false
      });
    }
  };

  componentDidMount = () => {
    if (this.props.history.location.search.length > 0) {
      const ParentRefNumber = this.props.history.location.search.slice(1);
      this.setState({
        ParentRefNumber: ParentRefNumber.trim()
      });
    }
  };

  render() {
    return (
      <div
        className={[
          classes.continer,
          !this.props.Show ? classes.fadein : classes.Move
        ].join(" ")}
      >
        <div className={classes.box}>
          <h2>ثبت نام</h2>
          <form onSubmit={this.onSubmitForm}>
            <input
              onChange={e => this.onInput(e, "Email")}
              type="Text"
              placeholder="ایمیل"
            />
            <input
              onChange={e => this.onInput(e, "Password")}
              type="password"
              placeholder="رمز عبور"
            />
            <input
              onChange={e => this.onInput(e, "RepeatPassword")}
              type="password"
              placeholder="تکرار رمز عبور"
            />
            <input onChange={this.onInput} type="hidden" />
            {/* <button className={classes.ButtonForm} type="submit">
              ورود
            </button> */}
            {this.state.loading ? (
              <button
                disabled={true}
                className={classes.ButtonForm}
                type="submit"
              >
                <Spinner />
              </button>
            ) : (
              <button className={classes.ButtonForm} type="submit">
                ورود{" "}
              </button>
            )}
            <GoogleLogin
              clientId="4438804419-95jjn9rpups56nfhm9v2iden25ksvner.apps.googleusercontent.com"
              render={renderProps => (
                <div
                  onClick={renderProps.onClick}
                  className={classes.googleLogin}
                >
                  <p>ورود با گوگل</p>
                  <img alt="google" src={googleIcon} />
                </div>
              )}
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            {/* <div className={classes.googleLogin}>
              <p>ثبت نام با گوگل</p>
              <img alt="google" src={googleIcon} />
            </div> */}
          </form>
        </div>
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
    sign_Up_Req: data => dispatch(sign_Up_Req(data)),
    FailProgress: () => dispatch(FailProgress())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUp)
);
