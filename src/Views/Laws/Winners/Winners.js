import React from "react";

import instagram from "../../../Assets/instagramicon.png";
import telegramIcon from "../../../Assets/telegramIcon.png";
import classes from "./Winners.css";

const Winners = props => {
  return (
    <div>
      <div className={classes.Title}>
        <h2>Winner tickets</h2>
      </div>
      <div className={classes.father}>
        <h3>- JackPot </h3>
        <p>
         - All the numbers are the same as jackpot Tickets.
        </p>
        <p className={classes.green}>
          - Jackpot number will show each week in our Instagram Page.
        </p>
        <section className={classes.Socialiranluck}>
          <p>Follow us in Social Media</p>
          <a
            href="https://www.instagram.com/iranluck"
            className={classes.instaBTN}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="آیکون اینستاگرام" />
            Follow us
          </a>
          <a
            href="https://t.me/IranLuck"
            className={classes.telegramBTN}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegramIcon} alt="آیکون تلگرام" />
            Follow us
          </a>
        </section>
        <h3>- 250 Perfect Money </h3>
        <p>- Your ticket Has 5 same number as Jackpot. ( Order is not important )</p>
        <h3>- 25 Perfect Money </h3>
        <p>- Your ticket Has 4 same number as Jackpot. ( Order is not important )</p>
        <h3>- 2 Perfect Money </h3>
        <p>- Your ticket Has 3 same number as Jackpot. ( Order is not important )</p>
        <h3>- Lucky Coin </h3>
        <p>- Your ticket Has 2 same number as Jackpot. ( Order is not important )</p>
      </div>
    </div>
  );
};

export default Winners;
