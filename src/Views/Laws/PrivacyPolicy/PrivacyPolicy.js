import React from "react";
import classes from "./PrivacyPolicy.css";

import instagram from "../../../Assets/instagramicon.png";
import telegramIcon from "../../../Assets/telegramIcon.png";

const PrivacyPolicy = props => {
  return (
    <div>
      <div className={classes.Title}>
        <h2>Privacy Policies</h2>
      </div>
      <div className={classes.father}>
        <p>
          - We don't know who are you or where are you and your identity
          completely secured.
        </p>
        <p>
          - The winner's name can only be displayed with his or her permission.
        </p>
        <p className={classes.Alert}>
          - Never give your Perfect Money username and password to anyone.
        </p>
        <p className={classes.Alert}>
          - Never give your Iran Lcuk nsername or nassword to anyone.
        </p>
        <p>- For your safety, all confirmations must be through email.</p>
        <section className={classes.Socialiranluck}>
          <p>Follow Iran Luck in Social Media</p>
          <a
            href="https://www.instagram.com/iranluck"
            className={classes.instaBTN}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="آیکون اینستاگرام" />
            Follow Us
          </a>
          <a
            href="https://t.me/IranLuck"
            className={classes.telegramBTN}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegramIcon} alt="آیکون تلگرام" />
            Follow Us
          </a>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
