import React, { Component } from "react";

import Hoc from "../../Hoc/Hoc";
import classes from "./userAccount.css";
import SignIn from "./signIn/signIn";
import SignUp from "./signUp/signUp";
import Arrow from "../../Assets/arrow.svg";
import ChangePassForm from "./ChangePassForm/ChangePassForm";

class UserBox extends Component {
  state = {
    loginBox: true,
    ChangePass: false
  };

  changeView = () => {
    this.setState(pre => {
      return {
        loginBox: !pre.loginBox
      };
    });
  };

  OnChangePassClick = () => {
    this.setState(pre => {
      return {
        ChangePass: !pre.ChangePass
      };
    });
  };

  render() {
    return (
      <div className={classes.boxcontainer}>
        {this.state.ChangePass ? (
          <ChangePassForm OnDrawelClick={this.props.OnDrawelClick} />
        ) : (
          <Hoc>
            <SignUp
              OnDrawelClick={this.props.OnDrawelClick}
              Show={this.state.loginBox}
            />
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
            <SignIn
              OnChangePassClick={this.OnChangePassClick}
              OnDrawelClick={this.props.OnDrawelClick}
              Show={this.state.loginBox}
            />
          </Hoc>
        )}
      </div>
    );
  }
}

export default UserBox;
