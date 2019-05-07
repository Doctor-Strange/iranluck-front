import React, { Component } from "react";

import Hoc from "../../Hoc/Hoc";
import classes from "./userAccount.css";
import SignIn from "./signIn/signIn";
import SignUp from "./signUp/signUp";
import Arrow from "../../Assets/arrow.svg";

class UserBox extends Component {
  state = {
    loginBox: true
  };

  changeView = () => {
    this.setState(pre => {
      return {
        loginBox: !pre.loginBox
      };
    });
  };

  render() {
    return (
      <div className={classes.boxcontainer}>
        <SignUp Show={this.state.loginBox} />
        <div
          onClick={this.changeView}
          className={[
            classes.switch,
            this.state.loginBox ? classes.fadein : classes.fadein2
          ].join(" ")}
        >
          {this.state.loginBox ? (
            <Hoc>
              <img className={classes.reverse} src={Arrow} alt="سوییج" />
              <span className={classes.span}>ثبت نام</span>
            </Hoc>
          ) : (
            <Hoc>
              <span className={classes.Reversespan}>ورود</span>
              <img className={classes.normal} src={Arrow} alt="سوییج" />
            </Hoc>
          )}
        </div>
        <SignIn Show={this.state.loginBox} />
      </div>
    );
  }
}

export default UserBox;
