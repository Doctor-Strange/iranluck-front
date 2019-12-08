import React from "react";

import instagram from "../../../Assets/instagramicon.png";
import telegramIcon from "../../../Assets/telegramIcon.png";
import classes from "./LotteryLaws.css";

const LotteryLaws = props => {
  return (
    <div>
      <div className={classes.Title}>
        <h2>Lottery Laws</h2>
      </div>
      <div className={classes.father}>
        <p>
          - Each person must have only one account. If you don't follow this
          role, your Iran Luck account will be permanently blocked.
        </p>
        <section className={classes.Socialiranluck}>
          <p>Follow Iran Luck in social media</p>
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
        <p>- You can't buy ticket 30 minutes before the lottery.</p>
        <p>- You don't have any refund after purchase a ticket.</p>
        <p>
          - You can see your winner tickets numbers through your
          account after the Draw, also we send you an Email.
        </p>
        <div className={classes.Title}>
          <h2>If you share Iran Luck with your Friend</h2>
        </div>
        <p>- if they only register in Iran luck you get a lucky Coin</p>
        <p>- If they win, you will get half of their prizes.</p>
      </div>
    </div>
  );
};

export default LotteryLaws;
