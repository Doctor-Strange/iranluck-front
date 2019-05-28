import React from "react";

import ReCAPTCHA from "react-google-recaptcha";
import classes from "./GoogleCaptcha.css";

const GoogleCaptcha = props => {
  window.recaptchaOptions = {
    lang: "fa",
    useRecaptchaNet: true,
    removeOnUnmount: false
  };
  return (
    <div className={classes.CaptchaFather}>
      <ReCAPTCHA
        className={classes.Captcha}
        sitekey="6LclC6MUAAAAADxEq1l358aAa0kn_NR-Is_4fbqF"
        onChange={props.onChange}
        onErrored={props.onError}
        onExpired={props.onError}
      />
    </div>
  );
};

export default GoogleCaptcha;
