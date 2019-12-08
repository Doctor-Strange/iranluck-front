import React from "react";
import classes from "./WithDrawal.css";

import instagram from "../../../Assets/instagramicon.png";
import telegramIcon from "../../../Assets/telegramIcon.png";

const WithDrawal = props => {
  return (
    <div>
      <div className={classes.Title}>
        <h2>Lucky Coins</h2>
      </div>
      <div className={classes.father}>
        <p>- Each Lucky Coin has value as a ticket</p>
        <p>
          - If you purchase 10 tickets in one buy, you will get a Lucky Coin.
        </p>
        <p>- In each draw, you can use just one of your Lucky Coins.</p>
        <p>- You can't use just your Lucky Coins to be in the weekly draw.</p>
        <p>- You can't withdraw your Lucky Coins.</p>
      </div>
      <section className={classes.Socialiranluck}>
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
  );
};

export default WithDrawal;
