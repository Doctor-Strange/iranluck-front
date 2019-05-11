import React, { Component } from "react";
import classes from "./signIn.css";
import axios from "axios";

import googleIcon from "../../../Assets/googleIcon.png";

class SignIn extends Component {
  componentDidMount = () => {
    axios({
      method: "post",
      url: "https://info.iranluck.com/api/Customer/Login",
      headers: {
        "Content-Type": "application/json",
        DeviceId: "Asus",
        DeviceName: "Nowrouzi PC",
        OS: "Windows 8"
      },
      data: {
        Email: "azita.nowrouzi@gmail.com",
        Password: "121012101210",
        Type: "Site"
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div
        className={[
          classes.continer,
          this.props.Show ? classes.fadein : classes.Move
        ].join(" ")}
      >
        <div className={classes.box}>
          <h2>ورود</h2>
          <form>
            <input type="Text" placeholder="ایمیل" />
            <input type="password" placeholder="رمز عبور" />
            <a href="#dsfs" className={classes.forgetPass}>
              رمز خود را فراموش کرده اید؟
            </a>
            <label className={classes.checkbox_container}>
              من را به یاد بسپار
              <input type="checkbox" />
              <span className={classes.checkbox_checkmark} />
            </label>
            <button className={classes.ButtonForm} type="submit">
              ورود
            </button>
            <div className={classes.googleLogin}>
              <p>ورود با گوگل</p>
              <img alt="google" src={googleIcon} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SignIn;
