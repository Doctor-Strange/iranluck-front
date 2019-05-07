import React, { Component } from "react";
import classes from "./signUp.css";

import googleIcon from "../../../Assets/googleIcon.png";

class SignUp extends Component {
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
          <form>
            <input type="Text" placeholder="ایمیل" />
            <input type="password" placeholder="رمز عبور" />
            <input type="password" placeholder="تکرار رمز عبور" />
            <button className={classes.ButtonForm} type="submit">
              ورود
            </button>
            <div className={classes.googleLogin}>
              <p>ثبت نام با گوگل</p>
              <img alt="google" src={googleIcon} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SignUp;
